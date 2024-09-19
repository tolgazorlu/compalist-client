const Entry = () => {
  return (
    <>
      {/* Hero */}
      <div className="bg-blue-500">
        <div className="max-w-7xl px-4 py-10 mx-auto">
          <h1 className="font-semibold text-gray-100 text-3xl">
            <span className="text-gray-100 ">Neden Biz?</span> Startup Yolculuğu
          </h1>
          <div className="max-w-4xl">
            <p className="mt-3 text-gray-200 text-lg">
              Şirketlerin hizmet arayışında geçirdikleri zamanın ve enerjinin
              çok büyük bir kısmı, doğru hizmet sağlayıcılarını bulmaya
              harcanıyordu. Bu zorluklar, bir işin büyümesini engelliyor, zaman
              ve kaynak israfına neden oluyordu. Ortaya çıkan fikirimiz,
              Compalist adında bir platformdu: Hizmet arayan şirketlerle, hizmet
              sağlayıcıları arasında köprü kuran, etkili bir B2B platformu.
              <br />
              <br />
              Compalist ekibi, kullanıcıların ihtiyaçlarına uygun, güvenilir
              hizmet sağlayıcılarını bulmalarını sağlamak amacıyla
              platformlarını geliştirdi. İşletmeler, Compalist üzerinden hizmet
              aradıklarında, ihtiyaçlarına en uygun çözümleri hızlıca
              bulabiliyor, zaman ve kaynaklarını daha etkin kullanabiliyorlardı.
            </p>
          </div>
        </div>
      </div>
      {/* End Hero */}

      <div className="max-w-7xl px-4 py-10 lg:py-14 mx-auto">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center ">
          COMPALIST OLARAK TEMEL PRENSİBİMİZ
        </h1>
        <div className="flex justify-between">
          <div className="relative flex flex-col ">
            <span className="md:text-[96px] text-[48px] font-extrabold">E</span>
            <div className="font-extrabold md:text-xl text-xs">Entegrasyon</div>
            <div className="absolute md:top-16 top-7 md:-left-1 -left-3 md:w-[60px] w-[35px] md:h-[60px] h-[35px] bg-blue-500 opacity-50 rounded-full -z-50"></div>
          </div>
          <div className="relative flex flex-col ">
            <span className="md:text-[96px] text-[48px] font-extrabold">N</span>
            <div className="font-extrabold md:text-xl text-xs">Network</div>
            <div className="absolute md:top-7 top-3 md:right-0 right-1 md:w-[60px] w-[35px] md:h-[60px] h-[35px] bg-blue-500 opacity-50 rounded-full -z-50"></div>
          </div>
          <div className="relative flex flex-col ">
            <span className="md:text-[96px] text-[48px] font-extrabold">T</span>
            <div className="font-extrabold md:text-xl text-xs">Teknoloji</div>
            <div className="absolute md:bottom-16 bottom-7 md:right-4 right-3 md:w-[60px] w-[35px] md:h-[60px] h-[35px] bg-blue-500 opacity-50 rounded-full -z-50"></div>
          </div>
          <div className="relative flex flex-col ">
            <span className="md:text-[96px] text-[48px] font-extrabold">E</span>
            <div className="font-extrabold md:text-xl text-xs">Etkin</div>
            <div className="absolute md:bottom-[72px] top-5 right-0   md:w-[60px] w-[30px] md:h-[60px] h-[30px] bg-blue-500 opacity-50 rounded-full -z-50"></div>
          </div>
          <div className="relative flex flex-col ">
            <span className="md:text-[96px] text-[48px] font-extrabold">G</span>
            <div className="font-extrabold md:text-xl text-xs">Güçlü</div>
            <div className="absolute md:bottom-14 bottom-6 md:-right-4 -right-2 md:w-[60px] w-[35px] md:h-[60px] h-[35px] bg-blue-500 opacity-50 rounded-full -z-50"></div>
          </div>
          <div className="relative flex flex-col ">
            <span className="md:text-[96px] text-[48px] font-extrabold">R</span>
            <div className="font-extrabold md:text-xl text-xs">Rekabet</div>
            <div className="absolute md:top-8 top-0 -left-2 md:w-[60px] w-[35px] md:h-[60px] h-[35px] bg-blue-500 opacity-50 rounded-full -z-50"></div>
          </div>
          <div className="relative flex flex-col ">
            <span className="md:text-[96px] text-[48px] font-extrabold">E</span>
            <div className="font-extrabold md:text-xl text-xs">Etkili</div>
            <div className="absolute md:bottom-16 bottom-8 -right-3 md:w-[60px] w-[35px] md:h-[60px] h-[35px] bg-blue-500 opacity-50 rounded-full -z-50"></div>
          </div>
        </div>
      </div>

      <>
        {/* Features */}
        <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-7">
              {/* Grid */}
              <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                <div className="col-span-4">
                  <img
                    className="rounded-xl"
                    src="/list1.jpg"
                    alt="Image Description"
                  />
                </div>
                {/* End Col */}
                <div className="col-span-3">
                  <img
                    className="rounded-xl"
                    src="/list3.jpg"
                    alt="Image Description"
                  />
                </div>
                {/* End Col */}
                <div className="col-span-5">
                  <img
                    className="rounded-xl"
                    src="https://images.pexels.com/photos/6340696/pexels-photo-6340696.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt="Image Description"
                  />
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
            </div>
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                    COMPALIST İLE DOĞRU ŞİRKETİ BUL
                  </h2>
                  <p className="text-gray-500">
                    Compalist ihtiyaçlarınıza yönelik en doğru partneri
                    bulmanıza yardımcı oluyor. B2B pazar yeri olarak
                    sağladığımız temel avantajlar:
                  </p>
                </div>
                {/* End Title */}
                {/* List */}
                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                      <svg
                        className="flex-shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {/* End Solid Check */}
                    <span className="text-sm sm:text-base text-gray-500">
                      Geniş ağ ve bağlantı
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                      <svg
                        className="flex-shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {/* End Solid Check */}
                    <span className="text-sm sm:text-base text-gray-500">
                      En uygun hizmeti bulmanızı sağlayan şirket listeleme
                      hizmetimiz
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                      <svg
                        className="flex-shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {/* End Solid Check */}
                    <span className="text-sm sm:text-base text-gray-500">
                      B2B İlişkilerinin geliştirilmesi ve İş birliği
                    </span>
                  </li>
                </ul>
                {/* End List */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </>
    </>
  );
};

export default Entry;
