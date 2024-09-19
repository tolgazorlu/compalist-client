import { useGetUserCompanyQuery } from "../../api/company";
import Belisted from "../../pages/Landing/Belisted";

const Statistics = () => {
  const { data: company } = useGetUserCompanyQuery();

  if (!company)
    return (
      <>
        <Belisted />
      </>
    );

  if (company)
    return (
      <div className="bg-neutral-50">
        {/* Features */}
        <div className="max-w-7xl px-4 py-4 mx-auto">
          {/* Grid */}
          <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12 border rounded-lg bg-white px-4 py-6">
            <div className="lg:col-span-6">
              {/* Stats */}
              <div className="lg:pe-6 xl:pe-12 flex gap-4">
                <img
                  className="max-w-24 rounded-lg object-cover border border-gray-200"
                  src={company?.logo}
                  alt={company.company_name}
                />
                <div className="flex flex-col items-start gap-2">
                  {" "}
                  <p className="text-2xl md:text-3xl font-bold leading-10 text-blue-600">
                    {company?.company_name}
                  </p>
                  {company?.isVerified ? (
                    <span className="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-blue-500 text-xs leading-4 rounded-full py-0.5 px-2">
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                      </svg>
                      Onaylandı
                    </span>
                  ) : (
                    <span className="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-600 text-xs leading-4 rounded-full py-0.5 px-2">
                      Onay Bekliyor
                    </span>
                  )}
                  <p className="text-gray-500">
                    {company?.isListed
                      ? "Şirketiniz Compalist aracılığıyla listelendi."
                      : "Şirketiniz henüz listelenmedi."}
                  </p>
                </div>
              </div>
              {/* End Stats */}
            </div>
            {/* End Col */}
            <div className="lg:col-span-6 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-400">
              <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 sm:gap-8">
                {/* Stats */}
                <div>
                  <p className="text-3xl font-semibold text-blue-600">
                    {company && company.createdAt.split("-")[0]}
                  </p>
                  <p className="mt-1 text-gray-500">yılından itibaren</p>
                </div>
                {/* End Stats */}
                {/* Stats */}
                <div>
                  <p className="text-3xl font-semibold text-blue-600">
                    {company?.visits}+
                  </p>
                  <p className="mt-1 text-gray-500">Profil Ziyareti</p>
                </div>
                {/* End Stats */}
                {/* Stats */}
                <div>
                  <p className="text-3xl font-semibold text-blue-600">
                    {company?.website_visits}+
                  </p>
                  <p className="mt-1 text-gray-500">Web Ziyareti</p>
                </div>
                {/* End Stats */}
                {/* Stats */}
                <div>
                  <p className="text-3xl font-semibold text-blue-600">
                    {company?.numbers_of_customers}+
                  </p>
                  <p className="mt-1 text-gray-500">Referans</p>
                </div>
                {/* End Stats */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </div>
    );
};

export default Statistics;
