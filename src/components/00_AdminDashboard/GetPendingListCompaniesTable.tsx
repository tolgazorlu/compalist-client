import { useState } from "react";
import {
  useGetPendingListCompanyQuery,
  useListCompanyMutation,
  useVerifyCompanyMutation,
} from "../../api/company";
import toast from "react-hot-toast";

const GetPendingListCompaniesTable = () => {
  const {
    data: company,
    isLoading,
    error,
    refetch,
  } = useGetPendingListCompanyQuery();
  const [companyName, setCompanyName] = useState("");

  const { mutateAsync: verifyCompany } = useVerifyCompanyMutation(companyName);
  const { mutateAsync: listCompany } = useListCompanyMutation(companyName);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);

  const handleVerifyCompany = async () => {
    try {
      await verifyCompany();
      toast.success("İşlem başarılı bir şekilde gerçekleştirildi.");
      refetch();
    } catch (error) {
      toast.error("Bir hata oluştu");
    }
  };

  const handleListCompany = async () => {
    try {
      await listCompany();
      toast.success("İşlem başarılı bir şekilde gerçekleştirildi.");
      refetch();
    } catch (error) {
      toast.error("Bir hata oluştu");
    }
  };

  if (error) {
    return <>Error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (company && company.length == 0) {
    return (
      <>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                  <div>
                    <h2 className="text-xl font-semibold text-green-500">
                      Listelenmeyi Bekleyen Şirket Bulunmuyor.
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

  if (company && company.length > 0)
    return (
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-blue-500">
                    Listelenmeyi Bekleyen Şirketler
                  </h2>
                </div>
                {/* <div>
                  <div className="inline-flex gap-x-2">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
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
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      Şirket oluştur
                    </a>
                  </div>
                </div> */}
              </div>
              {/* End Header */}
              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th scope="col" className="ps-6 py-3 text-start">
                      <label
                        htmlFor="hs-at-with-checkboxes-main"
                        className="flex"
                      >
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          id="hs-at-with-checkboxes-main"
                        />
                        <span className="sr-only">Checkbox</span>
                      </label>
                    </th>
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
                          Onay Durumu
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Şirket Sahibi
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                          Email
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {company.map((item) => (
                    <tr>
                      <td className="size-px whitespace-nowrap">
                        <div className="ps-6 py-2">
                          <label
                            htmlFor="hs-at-with-checkboxes-1"
                            className="flex"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              id="hs-at-with-checkboxes-1"
                            />
                            <span className="sr-only">Checkbox</span>
                          </label>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-2">
                          <div className="flex items-center gap-x-2">
                            <img
                              src={item.logo}
                              className="inline-block size-5"
                            />
                            <div className="grow">
                              <span className="text-sm text-gray-600">
                                {item.company_name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-6 py-2">
                        {item.isVerified ? (
                          <span className="inline-flex items-center gap-x-1 bg-gray-200 font-medium text-blue-500 text-xs leading-4 rounded-full py-0.5 px-2">
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
                          <span className="inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-600 text-xs leading-4 rounded-full py-0.5 px-2">
                            Onay Bekliyor
                          </span>
                        )}
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-2">
                          <span className="text-sm text-gray-600">
                            {item.owner.name} {item.owner.surname}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-2">
                          <span className="text-sm text-gray-600">
                            {item.owner.email}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-1.5 flex gap-4">
                          {!item.isVerified ? (
                            <button
                              type="button"
                              className="py-1 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                              onClick={() => {
                                setIsVerifyModalOpen(true);
                                setCompanyName(item.company_name);
                              }}
                            >
                              Onayla
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="py-1 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                              onClick={() => {
                                setIsVerifyModalOpen(true);
                                setCompanyName(item.company_name);
                              }}
                            >
                              Onayı Kaldır
                            </button>
                          )}

                          {isVerifyModalOpen && (
                            <div className="bg-neutral-800/50 fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none flex items-center justify-center ">
                              <div className="transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto flex items-center">
                                <div
                                  className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto 
                                "
                                >
                                  <div className="flex justify-between items-center py-3 px-4 border-b ">
                                    <h3 className="font-bold text-gray-800 ">
                                      Şirket Onaylama
                                    </h3>
                                    <button
                                      type="button"
                                      className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                                      onClick={() =>
                                        setIsVerifyModalOpen(false)
                                      }
                                    >
                                      <span className="sr-only">Close</span>
                                      <svg
                                        className="flex-shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                      </svg>
                                    </button>
                                  </div>
                                  <div className="p-4">
                                    <p className="text-gray-800 ">
                                      <span className="text-orange-500">
                                        {item.company_name}
                                      </span>{" "}
                                      {!item.isVerified
                                        ? "şirketini onaylamak istiyor musunuz?"
                                        : "şirketinin onayını kaldırmak istiyor musunuz?"}
                                    </p>
                                  </div>
                                  <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t ">
                                    <button
                                      type="button"
                                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                                      onClick={() =>
                                        setIsVerifyModalOpen(false)
                                      }
                                    >
                                      Kapat
                                    </button>
                                    <button
                                      type="button"
                                      className={`py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  disabled:opacity-50 disabled:pointer-events-none ${
                                        !item.isVerified
                                          ? "bg-blue-600 text-white hover:bg-blue-700"
                                          : "bg-red-600 text-white hover:bg-red-700"
                                      }`}
                                      onClick={handleVerifyCompany}
                                    >
                                      {item.isVerified
                                        ? "Onayı Kaldır"
                                        : "Onayla"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {/* <a
                            className="inline-flex items-center gap-x-1 text-sm font-semibold text-red-500 decoration-2 hover:underline"
                            href="#"
                          >
                            Sil
                          </a> */}
                          {!item.isListed ? (
                            <button
                              type="button"
                              className="py-1 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                              onClick={() => {
                                setCompanyName(item.company_name);
                                handleListCompany();
                              }}
                            >
                              Listele
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="py-1 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                              onClick={() => {
                                setCompanyName(item.company_name);
                                handleListCompany();
                              }}
                            >
                              Listeden Kaldır
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* End Table */}
              {/* Footer */}
              {/* <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
              <div className="inline-flex items-center gap-x-2">
                <p className="text-sm text-gray-600">Showing:</p>
                <div className="max-w-sm space-y-3">
                  <select className="py-2 px-3 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option selected="">9</option>
                    <option>20</option>
                  </select>
                </div>
                <p className="text-sm text-gray-600">of 20</p>
              </div>
              <div>
                <div className="inline-flex gap-x-2">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <svg
                      className="flex-shrink-0 size-4"
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
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    Prev
                  </button>
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Next
                    <svg
                      className="flex-shrink-0 size-4"
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div> */}
              {/* End Footer */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default GetPendingListCompaniesTable;
