import { useState } from "react";
import { useDeletePostMutation, useGetPostsQuery } from "../../api/blog";
import toast from "react-hot-toast";

const GetBlogTable = () => {
  const { data: post, refetch, isLoading, error } = useGetPostsQuery();
  const { mutateAsync: deletePost } = useDeletePostMutation();

  const [deleteSlug, setDeleteSlug] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deletePostHandle = async (slug: string) => {
    try {
      await deletePost(slug);
      refetch();
      toast.success("Post deleted!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  if (error) {
    <>Error</>;
  }

  if (isLoading) {
    <>Loading...</>;
  }

  if (post)
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
                      Blog
                    </h2>
                    <p className="text-sm text-gray-600">
                      Blogları buradan yönetebilirsiniz.
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        href="/admin/blog/create"
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
                        Blog Yaz
                      </a>
                    </div>
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
                            Yazar
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Başlık
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Kategori
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Yayınlanma Tarihi
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-end" />
                    </tr>
                  </thead>
                  {post.map((item) => (
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="size-px whitespace-nowrap">
                          <div className="ps-6 py-3">
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
                          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <img
                                className="inline-block size-[38px] rounded-full"
                                src={item.author.avatar}
                                alt="Image Description"
                              />
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800">
                                  {item.author.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="size-px w-72 whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800">
                              {item.title}
                            </span>
                            <span className="block text-sm text-gray-500">
                              {item.about.slice(0, 60)}...
                            </span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm text-gray-500">
                              {item.category}
                            </span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="text-sm text-gray-500">
                              {item.updatedAt.slice(0, 10)}
                            </span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-1.5 flex gap-2">
                            <a
                              className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                              href={`/admin/blog/update/${item.slug}`}
                            >
                              Düzenle
                            </a>
                            <button
                              type="button"
                              className="inline-flex items-center gap-x-1 text-sm text-red-600 decoration-2 hover:underline font-medium"
                              onClick={() => {
                                setDeleteSlug(item.slug);
                                toggleModal();
                              }}
                            >
                              Sil
                            </button>
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

        {/* End Table Section */}

        {isModalOpen && (
          <>
            <div className="fixed inset-[-30px] z-50 bg-black bg-opacity-50"></div>
            <div id="hs-basic-modal" className="fixed top-1/3 start-1/3 z-[60]">
              <div className="hs-overlay-open:opacity-100 duration-500 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                  <div className="flex justify-between items-center py-3 px-4 border-b ">
                    <h3 className="font-bold text-gray-800 ">Attention!</h3>
                    <button
                      type="button"
                      className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                      onClick={toggleModal}
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
                  <div className="p-4 overflow-y-auto">
                    <p className="mt-1 text-gray-800">
                      Do you want to delete this post? You can not take it back
                      the process!
                    </p>
                  </div>
                  <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t ">
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800  dark:text-white dark:hover:bg-neutral-700"
                      onClick={toggleModal}
                    >
                      Close
                    </button>
                    <button
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                      onClick={() => deletePostHandle(deleteSlug)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
};

export default GetBlogTable;
