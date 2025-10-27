export default function Footer() {

  return (
    <footer>
      {<div className="floating-whatsapp-button"
            onClick={() => {
              window.open('https://wa.me/558481096734?text="olá, vim pelo site."', '_blank');
            } }>
        <img src="/WhatsAp.webp" alt="WhatsApp Logo" />
      </div>  }
    </footer>
    );
  }
  