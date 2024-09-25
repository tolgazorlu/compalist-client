import UserPolicy from "../../../assets/policies/user.pdf";

const User = () => {
  const pdfSrc = `${UserPolicy}#toolbar=0`;

  return (
    <div className="h-auto overflow-auto">
      <iframe
        src={pdfSrc}
        title="KVKK"
        width="100%"
        className="h-[200em] pointer-events-none"
      />
    </div>
  );
};

export default User;
