import GetPendingListCompaniesTable from "../../components/00_AdminDashboard/GetPendingListCompaniesTable";
import GetPendingSuggestTable from "../../components/00_AdminDashboard/GetPendingSuggestTable";
import Statistics from "../../components/00_AdminDashboard/Statistics";

const AdminDashboard = () => {
  return (
    <>
      <Statistics />
      <GetPendingSuggestTable />
      <GetPendingListCompaniesTable />
    </>
  );
};

export default AdminDashboard;
