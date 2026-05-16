"use client";

export default function ResumeDownloadButton({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) {
  const openResume = () => {
    window.open("/resume", "_blank");
  };

  return (
    <span onClick={openResume} className={className} style={{ cursor: "pointer", display: "inline-block" }}>
      {children}
    </span>
  );
}
