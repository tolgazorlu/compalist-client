import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVerifyEmailMutation } from "../../api/Auth";

const UserVerifyEmail = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();
  const { mutateAsync: verifyEmail } = useVerifyEmailMutation();

  useEffect(() => {
    const emailVerify = async () => {
      if (param.token && param.id)
        try {
          await verifyEmail({
            id: param.id,
            token: param.token,
          });
          setValidUrl(true);
        } catch (error) {
          console.log("Error verifying email");
          setValidUrl(false);
        }
    };

    emailVerify();
  }, [param, verifyEmail]);

  return (
    <>
      {validUrl ? (
        <>
          <div>
            <div className="h-screen flex flex-col items-center justify-center">
              <span className="text-7xl font-poppins text-success">
                Email Başarıyla Doğrulandı!
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="h-screen flex flex-col items-center justify-center">
              <span className="text-7xl font-poppins text-error">
                Bir hatayla karşılaşıldı!
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserVerifyEmail;
