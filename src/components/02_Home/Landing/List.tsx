import { Link } from "react-router-dom";

const List = () => {
  return (
    <>
      {/* Testimonials */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl px-4 py-12 lg:py-16 mx-auto">
          {/* Gradients */}
          <div aria-hidden="true" className="flex -z-[1] absolute start-0">
            <div className="bg-blue-200 opacity-20 blur-3xl w-[1036px] h-[300px]" />
          </div>
          {/* End Gradients */}
          {/* Grid */}
          <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
            <div className="hidden lg:block lg:col-span-2">
              <img
                className="rounded-xl"
                alt="Image Description"
                src="/listelen.jpg"
              />
            </div>
            {/* End Col */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Blockquote */}
              <span className="text-4xl text-primary font-bold">
                İşletmenizi Listeleyin!
              </span>
              <p className="text-xl text-gray-800 lg:text-xl lg:leading-normal">
                Ajanslar, teknoloji firmaları, uzmanlar... Şimdi Compalist'te
                işletmenizi listeleyin ve potansiyel müşterilerle bağlantı
                kurmaya başlayın!
              </p>
              <footer className="mt-6">
                <Link
                  className="m-1 py-3 px-12 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-orange-400 text-gray-100 shadow-sm hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                  to={"/user/be-listed"}
                >
                  Listelen
                </Link>
              </footer>
              {/* End Blockquote */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Testimonials */}
    </>
  );
};

export default List;
