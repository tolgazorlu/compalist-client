import PrivacyPolicy from "../../../assets/policies/privacy.pdf";

const Privacy = () => {
  const pdfSrc = `${PrivacyPolicy}#toolbar=0`;

  return (
    <div className="h-auto overflow-auto">
      <iframe
        src={pdfSrc}
        title="KVKK"
        width="100%"
        className="h-[420em] pointer-events-none"
      />
    </div>
  );
};

export default Privacy;
