import { Banner } from "../../components/02_Home/CompanySignUp/Banner";
import { Stepper } from "../../components/02_Home/CompanySignUp/Stepper";

const Signup = () => {
  return (
    <>
      <div className="grid grid-cols-3 h-screen">
        <Banner />
        <Stepper />
      </div>
    </>
  );
};

export default Signup;
