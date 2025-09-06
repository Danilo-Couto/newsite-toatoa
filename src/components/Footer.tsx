export default function Footer() {

  return (
    <footer>
      {<button className="floating-whatsapp-button"
            onClick={() => {
              window.open('https://wa.me/558481096734?text="olá, vim pelo site."', '_blank');
            } }>
        <img src="/WhatsApp_icon.png" alt="WhatsApp Logo" />
      </button>  }
    </footer>
    );
  }
  