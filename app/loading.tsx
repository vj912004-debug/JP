export default function Loading() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden bg-white/10"
      role="status"
      aria-label="Loading page"
    >
      <div className="h-full w-1/3 animate-[loadingBar_1s_ease-in-out_infinite] bg-gradient-to-r from-orange-500 to-blue-600" />
      <style>{`
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
