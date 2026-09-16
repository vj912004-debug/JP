"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, RotateCcw, MessageCircle, Mail } from "lucide-react";
import { TextField, TextAreaField, SelectField, RadioField } from "./FormFields";
import { FileDropzone } from "./FileDropzone";
import { Button } from "@/components/ui/Button";
import { grades } from "@/data/grades";
import { steelMakes } from "@/data/products";
import {
  buildEnquiryMessage,
  enquirySubject,
  mailtoUrl,
  openChannel,
  whatsappUrl,
} from "@/lib/enquiry";

type Variant = "stock" | "quote";

const gradeOptions = grades.map((g) => g.grade);
const makeOptions = steelMakes.map((m) => m.name);
const utOptions = ["Not Required", "S1 / E1", "S2 / E2", "S2 / E3", "Other — specify in remarks"];
const yesNo = ["Yes", "No"];

type FormState = {
  company: string;
  name: string;
  mobile: string;
  email: string;
  grade: string;
  make: string;
  thickness: string;
  width: string;
  length: string;
  quantity: string;
  weight: string;
  ut: string;
  cutting: string;
  laser: string;
  drilling: string;
  location: string;
  remarks: string;
};

const initialState: FormState = {
  company: "",
  name: "",
  mobile: "",
  email: "",
  grade: "",
  make: "",
  thickness: "",
  width: "",
  length: "",
  quantity: "",
  weight: "",
  ut: "",
  cutting: "",
  laser: "",
  drilling: "",
  location: "",
  remarks: "",
};

export function EnquiryForm({ variant = "quote" }: { variant?: Variant }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [whatsapp, setWhatsapp] = useState("");
  const [emailLink, setEmailLink] = useState("");

  useEffect(() => {
    const email = new URLSearchParams(window.location.search).get("email");
    if (email) setForm((prev) => ({ ...prev, email }));
  }, []);

  const set = (key: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const requiredFields: (keyof FormState)[] =
    variant === "stock"
      ? ["name", "mobile", "grade", "thickness", "quantity"]
      : ["company", "name", "mobile", "email", "grade", "thickness", "quantity"];

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    requiredFields.forEach((field) => {
      if (!form[field].trim()) next[field] = "Required";
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }
    if (form.mobile && !/^[0-9+\s-]{8,15}$/.test(form.mobile)) {
      next.mobile = "Enter a valid mobile number";
    }
    if (form.thickness && !/\d/.test(form.thickness)) {
      next.thickness = "Include thickness in mm";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const fields: Record<string, string> = {
      Company: form.company,
      Name: form.name,
      Mobile: form.mobile,
      Email: form.email,
      Grade: form.grade,
      Make: form.make,
      "Thickness (mm)": form.thickness,
      "Width (mm)": form.width,
      "Length (mm)": form.length,
      Quantity: form.quantity,
      Weight: form.weight,
      "UT level": form.ut,
      Cutting: form.cutting,
      "Laser cutting": form.laser,
      Drilling: form.drilling,
      Location: form.location,
      Remarks: form.remarks,
    };

    const body = buildEnquiryMessage({
      kind: variant,
      fields,
      files: files.map((file) => file.name),
    });
    const wa = whatsappUrl(body);
    const mail = mailtoUrl(enquirySubject(variant, form.name), body);
    setWhatsapp(wa);
    setEmailLink(mail);
    setStatus("submitting");
    window.setTimeout(() => {
      openChannel(wa);
      setStatus("success");
    }, 400);
  };

  const reset = () => {
    setForm(initialState);
    setFiles([]);
    setErrors({});
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center rounded-card border border-hairline-light bg-white px-8 py-14 text-center"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-orange-100">
          <CheckCircle2 size={32} className="text-orange-600" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink-primary">
          {variant === "stock" ? "Send your stock enquiry" : "Send your quote request"}
        </h3>
        <p className="mt-2.5 max-w-sm text-[15px] leading-relaxed text-ink-muted">
          Thank you, {form.name}. WhatsApp should have opened with your requirement. If a drawing
          was selected, attach those files in the chat before sending.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-btn bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle size={16} />
            Open WhatsApp
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
          onClick={reset}
          className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-orange-600"
        >
          <RotateCcw size={14} />
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card border border-hairline-light bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {variant === "quote" && (
          <TextField label="Company Name" name="company" required value={form.company} onChange={set("company")} error={errors.company} placeholder="Your company" />
        )}
        <TextField label="Customer Name" name="name" required value={form.name} onChange={set("name")} error={errors.name} placeholder="Your name" />
        <TextField label="Mobile Number" name="mobile" required value={form.mobile} onChange={set("mobile")} error={errors.mobile} placeholder="+91 XXXXX XXXXX" />
        <TextField
          label="Email"
          name="email"
          type="email"
          required={variant === "quote"}
          value={form.email}
          onChange={set("email")}
          error={errors.email}
          placeholder="you@company.com"
        />

        <SelectField label="Grade" name="grade" required value={form.grade} onChange={set("grade")} error={errors.grade} options={gradeOptions} placeholder="Select grade" />
        <SelectField label="Make" name="make" value={form.make} onChange={set("make")} options={makeOptions} placeholder="Any make" />

        <TextField label="Thickness (mm)" name="thickness" required value={form.thickness} onChange={set("thickness")} error={errors.thickness} placeholder="e.g. 25" />
        <TextField label="Width (mm)" name="width" value={form.width} onChange={set("width")} placeholder="e.g. 2000" />
        <TextField label="Length (mm)" name="length" value={form.length} onChange={set("length")} placeholder="e.g. 6000" />
        <TextField label="Quantity / Nos." name="quantity" required value={form.quantity} onChange={set("quantity")} error={errors.quantity} placeholder="e.g. 4 plates" />

        {variant === "quote" && (
          <>
            <TextField label="Approx. Weight" name="weight" value={form.weight} onChange={set("weight")} placeholder="e.g. 2.5 MT" />
            <SelectField label="Required UT Level" name="ut" value={form.ut} onChange={set("ut")} options={utOptions} placeholder="Not required" />
            <RadioField label="Cutting Required" name="cutting" value={form.cutting} onChange={set("cutting")} options={yesNo} />
            <RadioField label="Laser Cutting Required" name="laser" value={form.laser} onChange={set("laser")} options={yesNo} />
            <RadioField label="Drilling Required" name="drilling" value={form.drilling} onChange={set("drilling")} options={yesNo} />
          </>
        )}

        <TextField label="Delivery Location" name="location" value={form.location} onChange={set("location")} placeholder="City, State" className={variant === "quote" ? "" : "sm:col-span-2"} />

        <TextAreaField
          label="Remarks"
          name="remarks"
          value={form.remarks}
          onChange={set("remarks")}
          placeholder="Any additional detail about your requirement"
          className="sm:col-span-2"
        />

        {variant === "quote" && (
          <FileDropzone
            label="Upload Drawing / DXF / AutoCAD / Excel"
            className="sm:col-span-2"
            files={files}
            onChange={setFiles}
          />
        )}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-hairline-light pt-6">
        <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
          <AnimatePresence mode="wait" initial={false}>
            {status === "submitting" ? (
              <motion.span key="loading" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Loader2 size={16} className="animate-spin" />
                Opening WhatsApp
              </motion.span>
            ) : (
              <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {variant === "stock" ? "Send Enquiry on WhatsApp" : "Send Quote on WhatsApp"}
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
        <span className="max-w-xs text-xs text-ink-muted">
          We open WhatsApp with your requirement filled in. Attach drawings in the chat, then send.
        </span>
      </div>
    </form>
  );
}
