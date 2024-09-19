import { useSearchCompanyQuery } from "../../api/company";
import { useLocation } from "react-router-dom";
import { CompanyType } from "../../types/CompanyType";
import Entry from "../../components/02_Home/Searching/Entry";
import CompanyItem from "../../components/02_Home/Searching/CompanyItem";
import Pagination from "../../components/02_Home/Searching/Pagination";

const Searching = () => {
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const category = sp.get("category") || "all";
  const query = sp.get("query") || "all";

  const {
    data: companies,
    isLoading,
    error,
  } = useSearchCompanyQuery({
    query,
    category,
  });

  if (isLoading) {
    return (
      <>
        <div className="py-32 w-full flex justify-center items-center">
          <div
            className="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="py-32 w-full flex justify-center items-center">
          <div>
            <span className="text-3xl text-red-400 font-bold">
              Sayfa yüklenemedi :(...
            </span>
          </div>
        </div>
      </>
    );
  }

  if (!companies) {
    return (
      <>
        <div className="py-32 w-full flex justify-center items-center">
          <div>
            <span className="text-3xl text-red-400 font-bold">
              Şirket bulunamadı!
            </span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Entry />
      <div className="pt-10">
        {companies.map((item: CompanyType) => {
          return (
            <div>
              <CompanyItem item={item} />
            </div>
          );
        })}
      </div>
      <Pagination />
    </>
  );
};

export default Searching;
