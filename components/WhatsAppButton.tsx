import { site } from "@/content/site";

export default function WhatsAppButton() {
  const n = site.contact.whatsapp.replace(/\D/g, "");
  if (!n) return null;
  return (
    <a
      href={`https://wa.me/${n}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Me contacter sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-offset-4"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
        <path d="M12.04 2a9.82 9.82 0 0 0-8.5 14.73L2 22l5.4-1.42A9.93 9.93 0 0 0 12.04 22 10 10 0 0 0 12.04 2Zm0 18.3a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.2.84.86-3.12-.2-.32a8.2 8.2 0 1 1 7.03 3.93Zm4.49-6.14c-.25-.12-1.45-.72-1.68-.8-.23-.09-.39-.12-.56.12-.17.25-.64.8-.79.96-.15.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.22a7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.66-1.16.2-.58.2-1.07.14-1.17-.06-.1-.23-.16-.48-.29Z" />
      </svg>
    </a>
  );
}
