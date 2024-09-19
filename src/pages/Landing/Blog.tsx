import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../api/blog";

const Blog = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (error) {
    <>Error</>;
  }

  if (isLoading) {
    <>Loading...</>;
  }

  if (posts)
    return (
      <>
        <div className="bg-blue-500">
          {/* Title */}
          <div className="max-w-7xl px-4 py-10 lg:py-14 mx-auto">
            <h1 className="font-semibold text-gray-100 text-4xl md:text-4xl">
              Compalist Blog: İş Dünyasında Yeni Trendleri Keşfedin!
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-gray-200 text-lg">
                Compalist Blog, iş dünyasındaki en güncel trendleri, ilham
                verici hikayeleri ve faydalı ipuçlarını bir araya getirerek
                işletme sahiplerine değerli bir kaynak sunar. İş dünyasında
                ilerlemenin anahtarını keşfetmek için Compalist Blog'u ziyaret
                edin!
              </p>
            </div>
          </div>
          {/* End Title */}
        </div>
        {/* Card Blog */}
        <div className="max-w-7xl px-4 py-10 lg:py-14 mx-auto">
          {/* Grid */}
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((item) => (
              <li key={item.title}>
                {/* Card */}
                <Link
                  className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
                  to={`/blog/${item.slug}`}
                >
                  <div className="aspect-w-16 aspect-h-11">
                    <img
                      className="w-full object-cover rounded-xl h-48"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="my-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-gray-600">
                      {item.about.slice(0, 200)}...
                    </p>
                  </div>
                </Link>
                {/* End Card */}
              </li>
            ))}
          </ul>
          {/* End Grid */}
          {/* Card */}
          <div className="mt-12 text-center">
            <a
              className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="/blog/s"
            >
              Read more
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
            </a>
          </div>
        </div>
        {/* End Card Blog */}
      </>
    );
};

export default Blog;
