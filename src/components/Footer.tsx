import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3-sa-east-1.amazonaws.com/hbook-universal-js/js/632b13f5e819f634133f8f8a.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // const handleWhatsAppClick = () => {
  //   const message = encodeURIComponent("Olá, vim pelo site.");
  //   window.open(`https://wa.me/558481096734?text=${message}`, "_blank");
  // };

  return (
    <footer>
    </footer>
  );
}
