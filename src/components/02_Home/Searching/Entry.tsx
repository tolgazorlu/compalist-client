import { useLocation } from "react-router-dom";

const Entry = () => {
  const searchContent = [
    {
      path: "",
      title: "Compalist İle Ara",
      description: `İşletmelerin hizmet arayışında harcadığı zaman ve enerjinin büyük bir kısmı, doğru hizmet sağlayıcılarını bulma çabalarına yöneliyordu. Bu zorluklar, işletmelerin büyüme potansiyelini sınırlıyor ve zaman ile kaynak israfına neden oluyordu. Compalist, hizmet arayan işletmelerle hizmet sağlayıcıları arasında köprü kurarak bu süreci optimize eden ve iş birliğini kolaylaştıran bir B2B platformudur.`,
    },
    {
      path: "/search?query=digital",
      title: "En İyi Dijital Pazarlama Şirketleri",
      description: `Compalist, Türkiye'nin önde gelen dijital pazarlama şirketlerini bir araya getirerek işletmenizin dijital dünyada başarıya ulaşmasını sağlar. Compalist'i keşfedin ve dijital pazarlama liderleriyle çalışarak işletmenizin potansiyelini artırın.
      `,
    },
    {
      path: "/search?query=design",
      title: "En İyi Tasarım ve Üretim Şirketleri",
      description: `Compalist, Türkiye'nin tasarım ve üretim hizmetleri alanında öne çıkan şirketleri bir araya getirerek yaratıcılığı şekillendiren bir platformdur. Compalist'i keşfedin ve yaratıcılığınızı şekillendirmek, üretim süreçlerinizi optimize etmek ve sektörde fark yaratmak için ideal çözümleri bulun!`,
    },
    {
      path: "/search?query=software",
      title: "En İyi Yazılım Şirketleri",
      description: `Compalist'teki seçkin yazılım ve teknoloji şirketleri, işletmelerin teknolojik ihtiyaçlarına çözümler sunarak rekabet avantajı sağlar. Compalist'i keşfedin ve teknolojide zirveye çıkın!
      `,
    },
    {
      path: "/search?query=brand",
      title: "En İyi Reklam ve Marka Şirketleri",
      description: `Compalist'teki reklam ve marka uzmanları, işletmelerin hikayelerini güçlendirmelerine, çarpıcı marka kimlikleri oluşturmalarına ve hedef kitlelerine ulaşma potansiyelini artırmaya yardımcı olur. Compalist'i keşfedin ve markanızı unutulmaz kılacak reklam ve marka çözümlerini bir arada hayata geçirin!`,
    },
    {
      path: "/search?query=consultancy",
      title: "En İyi İş ve Danışmanlık Şirketleri",
      description: `Compalist, Türkiye'nin iş ve danışmanlık kategorisinde öne çıkan şirketleri bir araya getirerek işletmelere etkili çözümler sunan bir platformdur. Compalist'te yer alan bu seçkin şirketler, işletmelerin stratejik hedeflerine ulaşmalarına, operasyonel etkinliklerini artırmalarına ve rekabet avantajı elde etmelerine yardımcı oluyor. Şimdi Compalist'i keşfedin ve işletmenizin başarı hikayesini yazmak, stratejik hedeflere ulaşmak ve sektörde öne çıkmak için uygun çözümleri bulun!      `,
    },
    {
      path: "/search?query=it",
      title: "En İyi BT Hizmetleri Şirketleri",
      description: `Compalist'te yer alan bu seçkin şirketler, işletmelerin BT altyapılarını güçlendirmelerinde, siber güvenliklerini sağlamlaştırmalarına ve rekabet avantajı elde etmelerine yardımcı oluyor. Compalist, BT hizmetleri dünyasında öncü şirketlerle iş birliği yapma fırsatının yanı sıra, işletmelere geniş bir BT destek yelpazesi sunarak dijital dönüşüm süreçlerine rehberlik ediyor. Şimdi Compalist'i keşfedin ve işletmenizin BT altyapısını güçlendirmek, siber güvenliği optimize etmek ve teknolojik çözümlerle büyümek için en uygun şirketleri bulun!      `,
    },
  ];

  const location = useLocation();

  // Find the matching content based on the current location
  const currentContent = searchContent.find(
    (content) => content.path === location.pathname + location.search
  );

  if (!currentContent) {
    return (
      <>
        {/* Hero */}
        <div className="bg-blue-500">
          {/* Title */}
          <div className="max-w-7xl px-4 py-10 lg:py-14 mx-auto">
            <h1 className="font-semibold text-gray-100 text-4xl md:text-4xl">
              {searchContent[0].title}
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-gray-200 text-lg">
                {" "}
                {searchContent[0].description}
              </p>
            </div>
          </div>
          {/* End Title */}
        </div>
        {/* End Hero */}
      </>
    ); // Handle case when no matching content is found
  }

  const { title, description } = currentContent;

  return (
    <>
      {/* Hero */}
      <div className="bg-blue-500">
        {/* Title */}
        <div className="max-w-7xl px-4 py-10 mx-auto">
          <h1 className="font-semibold text-gray-100 text-3xl">{title}</h1>
          <div className="max-w-4xl">
            <p className="mt-3 text-gray-200 text-lg">{description}</p>
          </div>
        </div>
        {/* End Title */}
      </div>
      {/* End Hero */}
    </>
  );
};

export default Entry;
