const FindCompany = () => {
  return (
    <>
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h1 className="font-semibold text-3xl md:text-4xl">
          <span className="text-gray-700">COMPALIST İLE DOĞRU ŞİRKETİ BUL</span>
        </h1>
        <br />
        <h4>
          <span className="mt-5 text-neutral-800 text-md md:text-lg">
            Compalist ihtiyaçlarınıza yönelik en doğru partneri bulmanıza
            yardımcı oluyor. B2B pazar yeri olarak sağladığımız temel
            avantajlar:
          </span>
        </h4>
        <br />
        <br />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
          {/* Card */}
          <a
            className="group flex gap-y-6 size-full hover:bg-orange-600 rounded-lg p-5 transition-all bg-gray-800"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-8 text-gray-100 mt-0.5 me-6"
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
              <circle cx="13.5" cy="6.5" r=".5" />
              <circle cx="17.5" cy="10.5" r=".5" />
              <circle cx="8.5" cy="7.5" r=".5" />
              <circle cx="6.5" cy="12.5" r=".5" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
            <div>
              <div>
                <h3 className="block font-bold text-gray-100">
                  Geniş ağ ve bağlantı
                </h3>
                <p className="text-gray-200">
                  Geniş ağ ve bağlantı ile networklerinizi büyük tutun.
                </p>
              </div>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a
            className="group flex gap-y-6 size-full hover:bg-orange-600 rounded-lg p-5 transition-all bg-gray-800"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-8 text-gray-100 mt-0.5 me-6"
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
              <circle cx="13.5" cy="6.5" r=".5" />
              <circle cx="17.5" cy="10.5" r=".5" />
              <circle cx="8.5" cy="7.5" r=".5" />
              <circle cx="6.5" cy="12.5" r=".5" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
            <div>
              <div>
                <h3 className="block font-bold text-gray-100">
                  Şirket Listeleme
                </h3>
                <p className="text-gray-200">
                  Listelerde öne çıkarak tanınırlığınızı arttırın.
                </p>
              </div>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a
            className="group flex gap-y-6 size-full hover:bg-orange-600 rounded-lg p-5 transition-all bg-gray-800"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-8 text-gray-100 mt-0.5 me-6"
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
              <circle cx="13.5" cy="6.5" r=".5" />
              <circle cx="17.5" cy="10.5" r=".5" />
              <circle cx="8.5" cy="7.5" r=".5" />
              <circle cx="6.5" cy="12.5" r=".5" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
            <div>
              <div>
                <h3 className="block font-bold text-gray-100">İş Birliği</h3>
                <p className="text-gray-200">
                  B2B ilişkilerini geliştir ve daha çok müşteri kazan.
                </p>
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
};

export default FindCompany;
