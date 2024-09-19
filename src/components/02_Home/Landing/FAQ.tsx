import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FAQ = () => {
  const params = useLocation();
  useEffect(() => {
    const targetId = params.search.split("=")[1];

    if (targetId == "faq") {
      const targetElement = document.getElementById("faq");

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
    }
  }, [params]);
  return (
    <div id="faq" className=" bg-gradient-to-b from-blue-100 to-white pt-5">
      {/* FAQ */}
      <div id="faq" className="px-4 py-10 mx-auto max-w-7xl">
        {/* Grid */}
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
                Sık sorulan Sorular
              </h2>
              <p className="mt-1 hidden md:block text-gray-600">
                Sık sorulan soruların cevapları
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="md:col-span-3">
            {/* Accordion */}
            <div className="hs-accordion-group divide-y divide-gray-200">
              <div
                className="hs-accordion pb-3 active"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                >
                  Compalist'te güvenlik nasıl sağlanıyor?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
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
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p className="text-gray-600">
                    Compalist olarak müşteri güvenliği bizim önceliğimizdir. Tüm
                    kullanıcı bilgileri güçlü şifreleme yöntemleri ile korunur
                    ve platformumuz düzenli olarak güvenlik denetimlerinden
                    geçer.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                >
                  Compalistin hizmet sağlayıcısına sunduğu avantajlar nelerdir?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
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
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <p className="text-gray-600">
                    Compalist, hizmet sağlayıcılara geniş bir müşteri kitlesi
                    sunar ve detaylı profillerini oluşturarak yeteneklerini
                    vurgulamalarına imkan tanır. Doğrudan iletişim, iş ilanı
                    yayını ve iş birliği fırsatları gibi avantajlarla, hizmet
                    sağlayıcılar işlerini büyütme ve yeni müşterilere ulaşma
                    imkanına sahiptir.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                >
                  Compalistin hizmet alıcısına sunduğu avantajlar nelerdir?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
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
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                >
                  <p className="text-gray-600">
                    Compalist, hizmet alıcılarına çeşitli sektörlerden güvenilir
                    hizmet sağlayıcılarına kolay erişim sağlar. Ayrıca, detaylı
                    arama filtreleri ve sağlayıcı profilleri ile doğru hizmeti
                    bulmalarını kolaylaştırır. Rekabetçi teklifler alabilir,
                    doğrudan iletişim kurabilir ve projelerini etkin bir şekilde
                    yönetebilirler. Platform, iş süreçlerini hızlandırarak ve
                    kaliteli hizmetlere erişimi artırarak hizmet alıcılarına
                    değerli avantajlar sunar.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-four"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                >
                  Compalist kullanıcı olmanın sektörel ayrıcalıkları nelerdir?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
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
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                >
                  <p className="text-gray-600">
                    Compalist kullanıcıları, çeşitli sektörlerden hizmet
                    sağlayıcılarına ve projelere kolayca erişim sağlar. Detaylı
                    profiller, doğrudan iletişim, iş ilanları ve iş birliği
                    fırsatları gibi özelliklerle, kullanıcılar işlerini büyütme
                    ve etkili bir şekilde yönetme imkanına sahip olurlar.
                    Platform, sektörel ağ oluşturarak ve iş süreçlerini optimize
                    ederek kullanıcılara değerli ayrıcalıklar sunar.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-five"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                >
                  Compalist'te bir hizmet sağlayıcısı nasıl seçilir?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
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
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                >
                  <p className="text-gray-600">
                    Compalist üzerinde bir hizmet sağlayıcısı seçerken,
                    işletmenizin ihtiyaçlarına en uygun olanı bulmak için hizmet
                    sağlayıcıların profillerini inceleyebilir, kullanıcı
                    yorumlarını gözden geçirebilir ve hizmet kalitesi,
                    fiyatlandırma ve deneyim gibi faktörleri
                    karşılaştırabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
            {/* End Accordion */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End FAQ */}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
