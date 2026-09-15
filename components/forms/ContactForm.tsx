"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, MessageCircle, Mail, RotateCcw } from "lucide-react";
import { TextField, TextAreaField } from "./FormFields";
import { Button } from "@/components/ui/Button";
import { staggerItem } from "@/components/ui/Reveal";
import {
  buildEnquiryMessage,
  enquirySubject,
  mailtoUrl,
  openChannel,
  whatsappUrl,
} from "@/lib/enquiry";

type FormState = { name: string; email: string; phone: string; message: string };
const initial: FormState = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [whatsapp, setWhatsapp] = useState("");
  const [emailLink, setEmailLink] = useState("");

  const set = (key: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Required";
    if (!form.phone.trim()) next.phone = "Required";
    else if (!/^[0-9+\s-]{8,15}$/.test(form.phone)) next.phone = "Enter a valid mobile number";
    if (!form.message.trim()) next.message = "Required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = buildEnquiryMessage({
      kind: "contact",
      fields: {
        Name: form.name,
        Phone: form.phone,
        Email: form.email,
        Message: form.message,
      },
    });
    const wa = whatsappUrl(body);
    const mail = mailtoUrl(enquirySubject("contact", form.name), body);
    setWhatsapp(wa);
    setEmailLink(mail);
    setStatus("submitting");
    window.setTimeout(() => {
      openChannel(wa);
      setStatus("success");
    }, 400);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-card border border-hairline-light bg-white px-8 py-12 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-orange-100">
          <CheckCircle2 size={28} className="text-orange-600" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-ink-primary">Ready to send</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
          Thanks, {form.name}. WhatsApp should have opened with your message to our sales team.
          If it didn&apos;t, use a button below.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-btn bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle size={16} />
            Send on WhatsApp
          </a>
          <a
            href={emailLink}
            className="inline-flex items-center gap-2 rounded-btn border border-blue-900/30 px-5 py-3 text-sm font-semibold text-blue-900"
          >
            <Mail size={16} />
            Send by email
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setForm(initial);
            setStatus("idle");
          }}
          className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-orange-600"
        >
          <RotateCcw size={14} />
          Write another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card border border-hairline-light bg-white p-6 sm:p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        <motion.div variants={staggerItem}>
          <TextField label="Your Name" name="name" required value={form.name} onChange={set("name")} error={errors.name} placeholder="Full name" />
        </motion.div>
        <motion.div variants={staggerItem}>
          <TextField label="Mobile Number" name="phone" required value={form.phone} onChange={set("phone")} error={errors.phone} placeholder="+91 XXXXX XXXXX" />
        </motion.div>
        <motion.div variants={staggerItem} className="sm:col-span-2">
          <TextField label="Email" name="email" type="email" value={form.email} onChange={set("email")} error={errors.email} placeholder="you@company.com" />
        </motion.div>
        <motion.div variants={staggerItem} className="sm:col-span-2">
          <TextAreaField label="Message" name="message" required value={form.message} onChange={set("message")} error={errors.message} placeholder="How can we help?" rows={5} />
        </motion.div>
      </motion.div>
      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-hairline-light pt-6">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" /> Opening WhatsApp
            </span>
          ) : (
            "Send on WhatsApp"
          )}
        </Button>
        <span className="text-xs text-ink-muted">
          Your message opens in WhatsApp to our sales number. You can also email us after sending.
        </span>
      </div>
    </form>
  );
}
