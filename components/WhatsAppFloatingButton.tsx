// components/WhatsAppFloatingButton.tsx
import Image from "next/image";

export default function WhatsAppFloatingButton() {
    return (
      <a
        href="https://wa.me/97142292416"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-white p-2 border border-gray-200 hover:scale-110 transition-transform"
        style={{ width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        aria-label="Chat on WhatsApp"
      >
        <Image src="/Landing-page/whatsapplogo.png" alt="WhatsApp" width={40} height={40} />
      </a>
    );
  }