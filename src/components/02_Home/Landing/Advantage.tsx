import { Link } from "react-router-dom";

const categories = [
  {
    title: "Dijital Pazarlama",
    icon: (
      <svg
        className="flex-shrink-0 hidden sm:block size-7 stroke-gray-500 text-gray-800"
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
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
    items: [
      { title: "SEO Şirketleri", link: "/seo-sirketleri" },
      {
        title: "Influencer Pazarlama Sirketleri",
        link: "/influencer-pazarlama-sirketleri",
      },
      {
        title: "Sosyal Medya Pazarlama Sirketleri",
        link: "/sosyal-medya-pazarlama-sirketleri",
      },
      {
        title: "İçerik Pazarlama Sirketleri",
        link: "/icerik-pazarlama-sirketleri",
      },
      {
        title: "Tam Hizmet Dijital Pazarlama Sirketleri",
        link: "/tam-hizmet-dijital-pazarlama-sirketleri",
      },
    ],
  },
  {
    title: "Yazılım ve Teknoloji",
    icon: (
      <svg
        className="flex-shrink-0 hidden sm:block size-7 stroke-gray-500 text-gray-800"
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
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    items: [
      {
        title: "Yazılım Geliştirme Şirketleri",
        link: "/yazilim-gelistirme-sirketleri",
      },
      {
        title: "Web Geliştirme Şirketleri",
        link: "/web-gelistirme-sirketleri",
      },
      {
        title: "Oyun ve Uygulama Geliştirme Şirketleri",
        link: "/oyun-uygulama-gelistirme-sirketleri",
      },
      {
        title: "Blockchain Geliştirme Şirketleri",
        link: "/blockchain-gelistirme-sirketleri",
      },
      {
        title: "E-ticaret Yazılım Şirketleri",
        link: "/e-ticaret-yazilim-sirketleri",
      },
    ],
  },
  {
    title: "Reklam ve Marka",
    icon: (
      <svg
        className="flex-shrink-0 hidden sm:block size-7 stroke-gray-500 text-gray-800"
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
        <line x1="4" y1="9" x2="20" y2="9"></line>
        <line x1="4" y1="15" x2="20" y2="15"></line>
        <line x1="10" y1="3" x2="8" y2="21"></line>
        <line x1="16" y1="3" x2="14" y2="21"></line>
      </svg>
    ),
    items: [
      {
        title: "Geleneksel Reklam Şirketleri",
        link: "/geleneksel-reklam-sirketleri",
      },
      {
        title: "Etkinlik Düzenleme Şirketleri",
        link: "/etkinlik-duzenleme-sirketleri",
      },
      {
        title: "Marka Geliştirme Şirketleri",
        link: "/marka-gelistirme-sirketleri",
      },
      {
        title: "Medya Planlaması Şirketleri",
        link: "/medya-planlamasi-sirketleri",
      },
      { title: "Reklam Ajansları", link: "/reklam-ajanslari" },
    ],
  },
  {
    title: "İş ve Danışmanlık",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0 hidden sm:block size-6 stroke-gray-500"
      >
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),
    items: [
      {
        title: "E-ticaret Danışmanlık Şirketleri",
        link: "/e-ticaret-danismanlik-sirketleri",
      },
      {
        title: "Hukuk Danışmanlık Şirketleri",
        link: "/hukuk-danismanlik-sirketleri",
      },
      {
        title: "İthalat ve İhracat Danışmanlık Şirketleri",
        link: "/ithalat-ihracat-danismanlik-sirketleri",
      },
      {
        title: "İnsan Kaynakları Danışmanlık Şirketleri",
        link: "/insan-kaynaklari-danismanlik-sirketleri",
      },
      {
        title: "Muhasebe Danışmanlık Şirketleri",
        link: "/muhasebe-danismanlik-sirketleri",
      },
      {
        title: "Veri Analitiği ve İş Zekası Şirketleri",
        link: "/veri-analitigi-is-zekasi-sirketleri",
      },
    ],
  },
  {
    title: "Bilgi Teknolojileri",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0 hidden sm:block size-6 stroke-gray-500"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
        <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m15.7 13.4-.9-.3" />
        <path d="m9.2 10.9-.9-.3" />
        <path d="m10.6 15.7.3-.9" />
        <path d="m13.6 15.7-.4-1" />
        <path d="m10.8 9.3-.4-1" />
        <path d="m8.3 13.6 1-.4" />
        <path d="m14.7 10.8 1-.4" />
        <path d="m13.4 8.3-.3.9" />
      </svg>
    ),
    items: [
      {
        title: "SAP Danışmanlık Şirketleri",
        link: "/sap-danismanlik-sirketleri",
      },
      {
        title: "ERP Danışmanlık Şirketleri",
        link: "/erp-danismanlik-sirketleri",
      },
      {
        title: "CRM Danışmanlık Şirketleri",
        link: "/crm-danismanlik-sirketleri",
      },
      {
        title: "Siber Güvenlik Danışmanlık Şirketleri",
        link: "/siber-guvenlik-danismanlik-sirketleri",
      },
      {
        title: "Veri Tabanı Danışmanlık Şirketleri",
        link: "/veri-tabani-danismanlik-sirketleri",
      },
      {
        title: "AI ve Makine Öğrenimi Danışmanlığı",
        link: "/ai-makine-ogrenimi-danismanligi",
      },
    ],
  },
  {
    title: "Tasarım ve Üretim",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0 hidden sm:block size-6 stroke-gray-500"
      >
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    items: [
      {
        title: "Video Prodüksiyon Şirketleri",
        link: "/video-produksiyon-sirketleri",
      },
      { title: "Animasyon Şirketleri", link: "/animasyon-sirketleri" },
      {
        title: "Grafik Tasarım Şirketleri",
        link: "/grafik-tasarim-sirketleri",
      },
      {
        title: "UX/UI ve Web Tasarım Şirketleri",
        link: "/ux-ui-web-tasarim-sirketleri",
      },
      {
        title: "Fotoğraf Çekimi Şirketleri",
        link: "/fotograf-cekimi-sirketleri",
      },
      { title: "Logo Tasarım Şirketleri", link: "/logo-tasarim-sirketleri" },
    ],
  },
];

const Advantage = () => {
  return (
    <div className="py-10 px-4 border-b">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto py-6">
          <span className="text-3xl font-bold text-neutral-700">
            Kategorilere Göre Arayın
          </span>
          <br />
          <span className="text-lg text-neutral-500">
            Aradığınız sektörü kategoriler aracılığıyla bulun.
          </span>
        </div>
        <div className="grid lg:grid-cols-3 gap-3 ">
          {categories.map((item) => (
            <div
              key={item.title}
              className="text-start bg-gray-50 p-4 md:p-5 rounded-lg border"
            >
              <span className="flex">
                {item.icon}
                <span className="grow ms-6">
                  <span className="block text-lg font-semibold text-blue-500">
                    {item.title}
                  </span>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.link}
                      className="block mt-1 text-gray-800 hover:underline"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantage;
