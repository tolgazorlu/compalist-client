import { useState } from "react";
import {
  useConfirmSuggestMutation,
  useGetSuggestsQuery,
  useRejectSuggestMutation,
} from "../../api/suggest";
import toast from "react-hot-toast";

const GetSuggestTable = () => {
  const { data: suggests, isLoading, error, refetch } = useGetSuggestsQuery();
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [id, setId] = useState("");
  const { mutateAsync: rejectSuggest } = useRejectSuggestMutation(id);
  const { mutateAsync: confirmSuggest } = useConfirmSuggestMutation(id);

  const handleRejectSuggest = async () => {
    try {
      await rejectSuggest();
      toast.success("İşlem başarılı bir şekilde gerçekleştirildi.");
      setIsVerifyModalOpen(false);
      refetch();
    } catch (error) {
      toast.error("Bir hata oluştu");
    }
  };

  const handleConfirmSuggest = async () => {
    try {
      await confirmSuggest();
      toast.success("İşlem başarılı bir şekilde gerçekleştirildi.");
      setIsVerifyModalOpen(false);
      refetch();
    } catch (error) {
      toast.error("Bir hata oluştu");
    }
  };

  if (error) {
    <>Error</>;
  }

  if (isLoading) {
    <>Loading...</>;
  }

  if (suggests)
    return (
      <>
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                  <div>
                    <h2 className="text-xl font-semibold text-blue-500">
                      Tüm Öneri Talepleri
                    </h2>
                    <p className="text-sm text-gray-600">
                      Öneri taleplerini bu tablodan görebilirsiniz.
                    </p>
                  </div>
                </div>
                {/* End Header */}
                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
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
                      <th
                        scope="col"
                        className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                      >
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Ad Soyad
                          </span>
                        </div>
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
                            Telefon
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Hizmet Alanı
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
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Mesaj
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-end" />
                    </tr>
                  </thead>
                  {suggests.map((item) => (
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="size-px whitespace-nowrap">
                          <div className="ps-6 py-3">
                            <label
                              htmlFor="hs-at-with-checkboxes-3"
                              className="flex"
                            >
                              <input
                                type="checkbox"
                                className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                id="hs-at-with-checkboxes-3"
                              />
                              <span className="sr-only">Checkbox</span>
                            </label>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <span className="inline-flex items-center justify-center size-[38px] rounded-full bg-white border border-gray-300">
                                <span className="font-medium text-sm text-gray-800 leading-none">
                                  {item.name[0]}
                                </span>
                              </span>
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800">
                                  {item.name} {item.surname}
                                </span>
                                <span className="block text-sm text-gray-500">
                                  {item.email}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="size-px w-52">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold">
                              {item.company_name}
                            </span>
                          </div>
                        </td>
                        <td className="size-px">
                          <div className="px-6 py-3">
                            <span className="block text-sm text-blue-500">
                              {item.phone}
                            </span>
                          </div>
                        </td>

                        <td className="size-px w-52">
                          <div className="px-6 py-3">
                            <span className="block text-sm">
                              {item.service_selection}
                            </span>
                          </div>
                        </td>
                        <td className="size-px">
                          <div className="px-6 py-3">
                            {item.status === "done" ? (
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                tamamlandı
                              </span>
                            ) : item.status === "pending" ? (
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                                {" "}
                                beklemede{" "}
                              </span>
                            ) : (
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                                {" "}
                                reddedildi{" "}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="w-72">
                          <div className="px-6 py-3">
                            <span className="block text-sm ">
                              {item.project_detail}
                            </span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-1.5">
                            <button
                              type="button"
                              className="py-1 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                              onClick={() => {
                                setId(item._id);
                                setIsVerifyModalOpen(true);
                              }}
                            >
                              İşlem
                            </button>

                            {isVerifyModalOpen && (
                              <div className="bg-neutral-800/50 fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none flex items-center justify-center ">
                                <div className="transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto flex items-center">
                                  <div
                                    className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto 
                                "
                                  >
                                    <div className="flex justify-between items-center py-3 px-4 border-b ">
                                      <h3 className="font-bold text-gray-800 ">
                                        Öneri İşlemleri
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
                                        Bu öneriyi tamamlayın veya iptal edin.
                                      </p>
                                    </div>
                                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t ">
                                      <button
                                        type="button"
                                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-red-100 bg-red-100 text-red-600 shadow-sm hover:bg-red-600 hover:text-red-100 disabled:opacity-50 disabled:pointer-events-none "
                                        onClick={handleRejectSuggest}
                                      >
                                        İptal Et
                                      </button>
                                      <button
                                        type="button"
                                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700"
                                        onClick={handleConfirmSuggest}
                                      >
                                        Tamamla
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
                {/* End Table */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </>
    );
};

export default GetSuggestTable;
