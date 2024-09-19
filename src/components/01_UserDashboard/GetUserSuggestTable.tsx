import { Link } from "react-router-dom";
import { useGetUserSuggestsQuery } from "../../api/suggest";

const GetUserSuggestTable = () => {
  const { data: suggests, isLoading, error } = useGetUserSuggestsQuery();

  if (error) {
    return <>Error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (suggests && suggests.length == 0) {
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
                      Öneri Talebiniz Bulunmamaktadır.
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
  if (suggests && suggests.length > 0)
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
                          Öneri Taleplerim
                        </h2>
                        <p className="text-sm text-gray-600">
                          Öneri Taleplerinizi buradan görebilirsiniz.
                        </p>
                      </div>
                    </div>
                    {/* End Input */}
                    <div className="sm:col-span-2 md:grow">
                      <div className="flex justify-end gap-x-2">
                        <div
                          className="hs-dropdown [--placement:bottom-right] relative inline-block"
                          data-hs-dropdown-auto-close="inside"
                        >
                          <Link
                            id="hs-as-table-table-filter-dropdown"
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-blue-600 text-white shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            to={"/user/get-suggest"}
                          >
                            Öneri Al
                            {/* <span className="ps-2 text-xs font-semibold text-white border-s border-gray-200">
                              5
                            </span> */}
                          </Link>
                        </div>
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
                              Şirket Adı
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Hizmet
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
                      {suggests.map((suggest) => (
                        <tr className="bg-white hover:bg-gray-50">
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
                                    {suggest.service_selection}
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-72 min-w-72 align-top">
                            <a className="block p-6" href="#">
                              <span className="block text-sm text-gray-600">
                                {suggest.project_detail.slice(0, 150)}...
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
                                className={`py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full ${
                                  suggest.status == "pending"
                                    ? "bg-gray-100 text-gray-800"
                                    : suggest.status == "rejected"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-green-100 text-green-800"
                                }  `}
                              >
                                {suggest.status == "pending"
                                  ? "Beklemede"
                                  : suggest.status == "rejected"
                                  ? "Reddedildi"
                                  : "Öneri Alındı"}
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
                          {suggests.length}
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

export default GetUserSuggestTable;
