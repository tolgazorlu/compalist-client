import KVKK from "../../../assets/policies/kvkk.pdf";

const Kvkk = () => {
  const pdfSrc = `${KVKK}#toolbar=0`;

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

export default Kvkk;
