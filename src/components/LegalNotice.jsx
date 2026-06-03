import "./LegalNotice.css";

function LegalNotice() {
  return (
    <div className="legal-notice" style={{ marginTop: "10px" }}>
      <h3 style={{ letterSpacing: "1px" }}>⚠️ Legal Notice ⚠️</h3>

      <p style={{ letterSpacing: "1px", lineHeight: "1.6" }}>
        All Spy Gadgets & Surveillance Products are sold only after valid ID
        verification and required documentation. Products are strictly for
        legal and authorized security use only. Any misuse of these products
        will be solely the responsibility of the user.
      </p>
    </div>
  );
}

export default LegalNotice;