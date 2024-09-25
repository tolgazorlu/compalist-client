import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RatingType } from "../../../types/FormTypes";
import { useRatingMutation } from "../../../api/rating";
import CreatableSelect from "react-select/creatable";
import { useGetAllCompaniesForSelect } from "../../../api/company";

export default function RatingForm() {
  const initialFormData: RatingType = {
    name: "",
    email: "",
    company_name: "",
    project_name: "",
    project_cost: "",
    project_status: "",
    project_desc: "",
    which_service: "",
    rating_title: "",
    rating_detail: "",
    service_quality: 0,
    time_management: 0,
    general_rating: 0,
    company_communication: 0,
    your_company_name: "",
    company_position: "",
    company_location: "",
    website: "",
    linkedin: "",
    createdAt: "",
    owner: { name: "", surname: "" },
  };

  const { mutateAsync: rating } = useRatingMutation();

  const [formData, setFormData] = useState<RatingType>(initialFormData);

  const { data: companies } = useGetAllCompaniesForSelect();
  const [companyOptions, setCompanyOptions] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    if (companies) {
      const options = companies.map((company: string) => ({
        value: company,
        label: company,
      }));
      setCompanyOptions(options);
    }
  }, [companies]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (
    newValue: { value: string; label: string } | null
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      company_name: newValue ? newValue.value : "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await rating(formData);
      toast.success("Değerlendirme formu başarıyla gönderildi.");
    } catch (error) {
      toast.error("Bir hata oluştu!");
    }
  };

  return (
    <div id="getSuggest" className="bg-gray-50">
      {/* Hire Us */}

      <div className="max-w-7xl px-4 py-4 mx-auto">
        {/* Grid */}

        <div className="flex flex-col gap-8 bg-white">
          {/* End Col */}

          <div className="relative">
            {/* Card */}

            <div className="flex flex-col border rounded-lg p-4 sm:p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Şirket Değerlendirmek İçin Formu Doldurun.
              </h2>

              <form>
                <div className="mt-6 grid gap-4 lg:gap-6">
                  {/* Grid */}

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-6">
                    <div className="col-span-2">
                      <label
                        htmlFor="hs-firstname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Hizmet Aldığınız Firmanın Adı
                      </label>
                      <CreatableSelect
                        value={companyOptions.find(
                          (option) => option.value === formData.company_name
                        )}
                        onChange={handleSelectChange}
                        options={companyOptions}
                        styles={{
                          control: (baseStyles) => ({
                            ...baseStyles,
                            borderColor: "#e2e8f0",
                            borderRadius: "0.5em",
                            padding: "0.2em",
                          }),
                        }}
                        placeholder="Firma Adı"
                        isClearable
                      />

                      {/* <input
                        type="text"
                        value={formData.company_name}
                        name="company_name"
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Compalist"
                        onChange={handleChange}
                      /> */}
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Şirketinizin Adı
                      </label>

                      <input
                        type="text"
                        name="your_company_name"
                        value={formData.your_company_name}
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Compalist"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Değerlendirme Başlığı
                      </label>

                      <input
                        type="text"
                        name="rating_title"
                        value={formData.rating_title}
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Mükemmel bir hizmet"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Şirketteki Pozisyonunuz
                      </label>

                      <input
                        type="text"
                        name="company_position"
                        value={formData.company_position}
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="İnsan Kaynakları"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Linkedin Adresiniz
                      </label>

                      <input
                        type="text"
                        name="linkedin"
                        value={formData.linkedin}
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Şirket veya kişisel profiliniz"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Web Adresiniz
                      </label>

                      <input
                        type="text"
                        name="website"
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="https://compalist.com"
                        onChange={handleChange}
                        value={formData.website}
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Alınan Hizmet
                      </label>

                      <select
                        onChange={handleChange}
                        value={formData.which_service}
                        name="which_service"
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option value="digital">Dijital Pazarlama</option>
                        <option value="software">Yazılım ve Teknoloji</option>
                        <option value="brand">Reklam ve Marka</option>
                        <option value="consultancy">İş ve Danışmanlık</option>
                        <option value="it">BT Hizmetleri</option>
                        <option value="design">Tasarım ve Ürün</option>
                      </select>
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Proje Maliyeti
                      </label>

                      <select
                        onChange={handleChange}
                        value={formData.project_cost}
                        name="project_cost"
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option selected>Seçin</option>
                        <option value="0-1000">0-1000 $</option>
                        <option value="1000-10000">1000-10000 $</option>
                        <option value="10000-100000">10000-100000 $</option>
                        <option value="100000-1000000">100000-1000000 $</option>
                      </select>
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Projenin Durumu
                      </label>

                      <select
                        value={formData.project_status}
                        name="project_status"
                        onChange={handleChange}
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option>Seçin</option>
                        <option value="waiting">Beklemede</option>
                        <option value="working">Çalışılıyor</option>
                        <option value="rejected">İptal Edildi</option>
                        <option value="done">Tamamlandı</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Alınan Hizmet
                      </label>

                      <select
                        value={formData.service_quality}
                        name="service_quality"
                        onChange={handleChange}
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option selected>Seçin</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>{" "}
                    <div>
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Zaman Yönetimi
                      </label>

                      <select
                        value={formData.time_management}
                        name="time_management"
                        onChange={handleChange}
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option selected>Seçin</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        İletişim
                      </label>

                      <select
                        value={formData.company_communication}
                        name="company_communication"
                        onChange={handleChange}
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option selected>Seçin</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Genel Değerlendirme
                      </label>

                      <select
                        value={formData.general_rating}
                        name="general_rating"
                        onChange={handleChange}
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option selected>Seçin</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="col-span-4">
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Değerlendirme Detayı
                      </label>

                      <textarea
                        rows={4}
                        name="rating_detail"
                        value={formData.rating_detail}
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </form>

              {/* End Grid */}

              <div className="mt-6 grid">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full py-3 border px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Formu Gönder
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  Tahmini dönüş süresi 1-2 iş günüdür.
                </p>
              </div>
            </div>

            {/* End Card */}
          </div>

          {/* End Col */}
        </div>

        {/* End Grid */}
      </div>

      {/* End Hire Us */}
    </div>
  );
}
