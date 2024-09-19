import {
  useGetCompanyCountStatQuery,
  useGetRatingCountStatQuery,
  useGetSuggestCountStatQuery,
  useGetUserCountStatQuery,
} from "../../api/stats";

const Statistics = () => {
  const { data: userCount } = useGetUserCountStatQuery();
  const { data: companyCount } = useGetCompanyCountStatQuery();
  const { data: suggestCount } = useGetSuggestCountStatQuery();
  const { data: ratingCount } = useGetRatingCountStatQuery();
  return (
    <>
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card */}
        <div className="flex flex-col bg-gradient-to-tl from-white via-white to-purple-50 border shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users border rounded-lg p-2 w-10 bg-white shadow mb-4 stroke-violet-500"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div className="flex items-center gap-x-2">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Kullanıcı Sayısı
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-bold">
                {userCount! && userCount}
              </h3>
              {/* <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span> */}
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col bg-gradient-to-tl from-white via-white to-blue-50 border shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users border rounded-lg p-2 w-10 bg-white shadow mb-4 stroke-blue-500"
            >
              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
              <path d="M17 18h1" />
              <path d="M12 18h1" />
              <path d="M7 18h1" />
            </svg>
            <div className="flex items-center gap-x-2">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Şirket Sayısı
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-bold">
                {companyCount! && companyCount}
              </h3>
              {/* <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span> */}
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col bg-gradient-to-tl from-white via-white to-green-50 border shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users border rounded-lg p-2 w-10 bg-white shadow mb-4 stroke-green-500"
            >
              <path d="m11 17 2 2a1 1 0 1 0 3-3" />
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
              <path d="m21 3 1 11h-2" />
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
              <path d="M3 4h8" />
            </svg>
            <div className="flex items-center gap-x-2">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Öneri Sayısı
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-bold">
                {suggestCount! && suggestCount}
              </h3>
              {/* <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span> */}
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col bg-gradient-to-tl from-white via-white to-orange-50 border shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users border rounded-lg p-2 w-10 bg-white shadow mb-4 stroke-orange-500"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M12 7v2" />
              <path d="M12 13h.01" />
            </svg>
            <div className="flex items-center gap-x-2">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Değerlendirme Sayısı
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-bold">
                {ratingCount! && ratingCount}
              </h3>
              {/* <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span> */}
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Grid */}
    </>
  );
};

export default Statistics;
