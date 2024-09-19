import { useParams } from "react-router-dom";
import { useGetCompanyQuery } from "../../api/company";
import Hero from "../../components/02_Home/CompanyDetail/Hero";
import Features from "../../components/02_Home/CompanyDetail/Features";
import Description from "../../components/02_Home/CompanyDetail/Description";
import Categories from "../../components/02_Home/CompanyDetail/Categories";
// import Projects from "../../components/02_Home/CompanyDetail/Projects";
import Comment from "../../components/02_Home/CompanyDetail/Comment";
const Company = () => {
  const { slug } = useParams();
  const { data: item, isLoading, error } = useGetCompanyQuery(slug!);

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

  if (!item) {
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
      <div>
        <Hero item={item} />
        <Features item={item} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
          <Description description={item.company_describe} />
          <Categories categories={item.sub_categories} />
        </div>
        {/* <Projects /> */}
        <Comment comment={item.ratings} />
      </div>
    </>
  );
};

export default Company;
