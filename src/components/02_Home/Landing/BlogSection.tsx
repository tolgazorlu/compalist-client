import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../../api/blog";

const BlogSection = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (!posts || posts.length < 1) {
    return null;
  }

  return (
    <div className="bg-gradient-to-b from-white to-blue-100">
      {/* Card Blog */}
      <div className="px-4 py-10 mx-auto max-w-7xl">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Blog
          </h2>
          <p className="mt-1 text-gray-600">
            Sektör Hakkında Bilgi Edinmek İçin
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <div
            className={`group relative flex flex-col w-full min-h-60 bg-gradient-to-bl from-blue-600 to-blue-400 rounded-xl hover:shadow-lg transition`}
          >
            <div className="flex-auto p-4 md:p-6">
              <h3 className="text-xl text-white/90 group-hover:text-white">
                <span className="font-bold">Compalist</span> ile ilgili daha
                fazla bilgi almak için makalemizi buradan okuyabilirsiniz.
              </h3>
            </div>
            <div className="pt-0 p-4 md:p-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70">
                Makaleye git
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
              </div>
            </div>
          </div>
          {/* End Card */}
          {posts &&
            posts.slice(0, 2).map((post) => (
              <Link className="group" to={`/blog/${post.slug}`} key={post.slug}>
                <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                  <img
                    className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                    src={post.image}
                    alt="Image Description"
                  />
                </div>
                <div className="mt-7">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-gray-800">
                    {post.about.slice(0, 200)} ...
                  </p>
                  <span className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                    Daha fazla
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
                  </span>
                </div>
              </Link>
            ))}
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </div>
  );
};

export default BlogSection;
