import { useGetUserRatingsQuery } from "../../api/rating";

const GetUserRatingTable = () => {
  const { data: ratings, isLoading, error } = useGetUserRatingsQuery();

  if (error) {
    return <>Error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (ratings && ratings.length == 0) {
    return (
      <>
        <div className=" bg-neutral-50">
          <div className="overflow-x-auto max-w-7xl mx-auto pb-4 px-4">
            <div className="min-w-full inline-block align-middle">
              <div className="bg-white border rounded-lg overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-orange-500">
                      Şirket Değerlendirmeniz Bulunmamaktadır.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (ratings && ratings.length > 0)
    return (
      <div className="bg-neutral-50">
        <div className="max-w-7xl mx-auto pb-4 px-4">
          {/* Card */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  {/* Header */}
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                    {/* Input */}
                    <div className="sm:col-span-1">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                          Değerlendirmelerim
                        </h2>
                        <p className="text-sm text-gray-600">
                          Değerlendirmelerinizi buradan görebilirsiniz.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Header */}
                  {/* Table */}
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Hizmet Alan Şirket
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Hizmet Veren Şirket
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Detaylar
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              İstek Tarihi
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Durum
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {ratings.map((suggest) => (
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="size-px whitespace-nowrap align-top">
                            <a className="block p-6" href="#">
                              <div className="flex items-center gap-x-3">
                                <div className="grow">
                                  <span className="block text-sm text-gray-600">
                                    {suggest.your_company_name}
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-top">
                            <a className="block p-6" href="#">
                              <div className="flex items-center gap-x-3">
                                <div className="grow">
                                  <span className="block text-sm text-gray-600">
                                    {suggest.company_name}
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-top">
                            <a className="block p-6" href="#">
                              <div className="flex items-center gap-x-3">
                                <div className="grow">
                                  <span className="block text-sm text-gray-600">
                                    {suggest.project_name}
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>{" "}
                          <td className="h-px w-72 min-w-72 align-top">
                            <a className="block p-6" href="#">
                              <div className="flex gap-x-1 mb-2">
                                <svg
                                  className="flex-shrink-0 size-3 text-gray-800"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg
                                  className="flex-shrink-0 size-3 text-gray-800"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg
                                  className="flex-shrink-0 size-3 text-gray-800"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg
                                  className="flex-shrink-0 size-3 text-gray-800"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg
                                  className="flex-shrink-0 size-3 text-gray-800"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </div>
                              <span className="block text-sm font-semibold text-gray-800">
                                {suggest.rating_title}
                              </span>
                              <span className="block text-sm text-gray-500">
                                {suggest.rating_detail.slice(0, 140)}...
                              </span>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-top">
                            <a className="block p-6" href="#">
                              <span className="text-sm text-gray-600">
                                {new Date(
                                  suggest.createdAt
                                ).toLocaleDateString()}
                              </span>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-top">
                            <a className="block p-6" href="#">
                              <span
                                className={`py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800`}
                              >
                                Beklemede
                              </span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* End Table */}
                  {/* Footer */}
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-800">
                          {ratings.length}
                        </span>{" "}
                        sonuç
                      </p>
                    </div>
                  </div>
                  {/* End Footer */}
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Table Section */}
      </div>
    );
};

export default GetUserRatingTable;
