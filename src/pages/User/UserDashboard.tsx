import GetUserRatingTable from "../../components/01_UserDashboard/GetUserRatingTable";
import GetUserSuggestTable from "../../components/01_UserDashboard/GetUserSuggestTable";
import Statistics from "../../components/01_UserDashboard/Statistics";
import UserCompany from "../../components/01_UserDashboard/UserCompany";

export const UserDashboard = () => {
  return (
    <>
      <Statistics />
      <GetUserSuggestTable />
      <GetUserRatingTable />
      <UserCompany />
    </>
  );
};
