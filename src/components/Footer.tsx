import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3-sa-east-1.amazonaws.com/hbook-universal-js/js/632b13f5e819f634133f8f8a.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer>
      <div className="floating-whatsapp-button"
        onClick={() => {
          window.open('https://wa.me/558481096734?text="olá, vim pelo site."', '_blank');
        } }>
        <img loading='lazy' decoding="async" src="/WhatsAp.webp" alt="WhatsApp Logo" />
      </div>
       <div>
          <a
          href='https://hbook.hsystem.com.br/Booking?companyId=632b13f5e819f634133f8f8a&promocode=igdHnaPz'
          target="_blank"
          rel="noopener noreferrer"
          className="room-button" />
      </div>  
    </footer>
  );
}
