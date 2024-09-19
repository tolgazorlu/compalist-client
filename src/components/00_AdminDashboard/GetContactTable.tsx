import { useGetContactQuery } from "../../api/contact";

const GetContactTable = () => {
  const { data: contact, isLoading, error } = useGetContactQuery();

  if (error) {
    <>Error</>;
  }

  if (isLoading) {
    <>Loading...</>;
  }

  if (contact)
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
                      İletişim ve Geri Bildirim
                    </h2>
                    <p className="text-sm text-gray-600">
                      İletişim ve Geri Bildirimleri bu tablodan görebilirsiniz.
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
                            Telefon
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
                  {contact.map((item) => (
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
                        <td className="size-px">
                          <div className="px-6 py-3">
                            <span className="block text-sm text-blue-500">
                              {item.phone}
                            </span>
                          </div>
                        </td>
                        <td className="w-72">
                          <div className="px-6 py-3">
                            <span className="block text-sm ">
                              {item.message}
                            </span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-1.5">
                            <a
                              className="inline-flex items-center gap-x-1 text-sm font-semibold text-blue-600 decoration-2 hover:underline"
                              href={`mailto:${item.email}`}
                            >
                              Mail gönder
                            </a>
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

export default GetContactTable;
