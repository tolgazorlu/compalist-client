/* eslint-disable @typescript-eslint/no-explicit-any */
import { CompanyType } from "../../../types/CompanyType";

import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCreateCompanyMutation } from "../../../api/company";
import Select, { SingleValue, MultiValue } from "react-select";

const clientUrl = "https://www.compalist.app";

const initialFormData: CompanyType = {
  company_name: "",
  logo: "",
  slug: "",
  slogan: "",
  hourly_price: "",
  founded_year: "",
  numbers_of_employee: 0,
  numbers_of_customers: 0,
  website_link: "",
  category: "",
  sub_categories: [],
  city: "",
  company_describe: "",
  visits: 0,
  isListed: false,
  isVerified: false,
  createdAt: "",
  ratings: [],
  social_instagram_link: "",
  social_linkedin_link: "",
  social_twitter_link: "",
  social_facebook_link: "",
  social_youtube_link: "",
  big_partners: 0,
  medium_partners: 0,
  website_visits: 0,
};

interface CategoryOption {
  label: string;
  value: string;
  subCategories: SubCategoryOption[];
}

interface SubCategoryOption {
  label: string;
  value: string;
}

const categoryOptions: CategoryOption[] = [
  {
    label: "Dijital Tasarlama",
    value: "digital",
    subCategories: [
      { label: "Grafik Tasarım", value: "graphic-design" },
      { label: "Logo Tasarım", value: "logo-design" },
      { label: "Web Tasarım", value: "web-design" },
      { label: "Mobil Uygulama Tasarım", value: "mobile-app-design" },
      { label: "Marka Tasarım", value: "brand-design" },
    ],
  },
  {
    label: "Yazılım Geliştirme",
    value: "software",
    subCategories: [
      { label: "Web Geliştirme", value: "web-development" },
      { label: "Oyun ve Uygulama Geliştirme", value: "game-development" },
      { label: "Blok Zinciri", value: "blockchain" },
      { label: "E-Ticaret", value: "e-commerce" },
      { label: "AR / VR", value: "ar-vr" },
    ],
  },

  {
    label: "Reklam ve Marka",
    value: "advertising",
    subCategories: [
      { label: "Sosyal Medya Yönetimi", value: "social-media-management" },
      { label: "SEO", value: "seo" },
      { label: "Google Reklamları", value: "google-ads" },
      { label: "Sosyal Medya Reklamları", value: "social-media-ads" },
      { label: "Marka Stratejisi", value: "brand-strategy" },
    ],
  },
  {
    label: "İş ve Danışmanlık",
    value: "consultancy",
    subCategories: [
      { label: "İK", value: "hr" },
      { label: "Finansal Danışmanlık", value: "financial" },
      { label: "Pazarlama", value: "marketing" },
      { label: "Yönetim", value: "management" },
      { label: "Dijital Dönüşüm", value: "digital-transform" },
    ],
  },
  {
    label: "BT Hizmetleri",
    value: "it",
    subCategories: [
      { label: "SAP", value: "sap" },
      { label: "ERP", value: "erp" },
      { label: "CRM", value: "crm" },
      { label: "Siber Güvenlik", value: "cyber-security" },
      { label: "Veri Tabanı", value: "database" },
      { label: "AI ve Makine Öğrenimi", value: "ai-ml" },
    ],
  },
  {
    label: "Tasarım ve Ürün",
    value: "design",
    subCategories: [
      { label: "UI/UX Tasarım", value: "ui-ux" },
      { label: "Grafik Tasarım", value: "graphic-design" },
      { label: "Animation", value: "animation" },
      { label: "Logo", value: "logo" },
      { label: "Video Prodiksüyon", value: "video" },
      { label: "Fotoğraf Çekimi", value: "photograph" },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function postImage({ image }: any) {
  const formData = new FormData();
  formData.append("image", image);
  const result = await axios.post(`${clientUrl}/api/company/images`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result.data;
}

export default function ListedForm() {
  const { mutateAsync: companyCreate } = useCreateCompanyMutation();
  const [formData, setFormData] = useState<CompanyType>(initialFormData);
  const [image, setImage] = useState<string>("");
  const [subCategoryOptions, setSubCategoryOptions] = useState<
    SubCategoryOption[]
  >([]);

  useEffect(() => {
    if (formData.category) {
      const selectedCategory = categoryOptions.find(
        (category) => category.value === formData.category
      );
      setSubCategoryOptions(
        selectedCategory ? selectedCategory.subCategories : []
      );
      setFormData((prevData) => ({
        ...prevData,
        sub_categories: [],
      }));
    }
  }, [formData.category]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      logo: image,
    }));

    if (name === "category") {
      const selectedCategory = categoryOptions.find(
        (category) => category.value === value
      );
      setSubCategoryOptions(
        selectedCategory ? selectedCategory.subCategories : []
      );
      setFormData((prevData) => ({
        ...prevData,
        sub_categories: [], // Change subCategory to sub_categories
      }));
    }
  };

  const handleCategoryChange = (
    selectedOption: SingleValue<CategoryOption>
  ) => {
    if (selectedOption) {
      setFormData((prevData) => ({
        ...prevData,
        category: selectedOption.value,
        sub_categories: [],
      }));
    }
  };

  const handleSubCategoryChange = (
    selectedOptions: MultiValue<SubCategoryOption>
  ) => {
    const options = selectedOptions.map((option) => option.value);
    setFormData((prevData) => ({
      ...prevData,
      sub_categories: options,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await companyCreate(formData);
      toast.success("Şirketiniz oluşturuldu!");
    } catch (error) {
      toast.error("Bir hata oluştu");
    }
  };

  const [file, setFile] = useState<string>();

  const uploadImageHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const result = await postImage({ image: file });
      setImage(`${clientUrl}/api/company${result.imagePath}`);
      toast.success("Şirketinizin profil fotoğrafı yüklendi!");
    } catch (error: any) {
      toast.error(error?.message || "Bir hata oluştu");
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fileSelected = (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];
    setFile(file);
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
                Şirketinizi Listelemek İçin Formu Doldurun
              </h2>

              <form>
                <div className="mt-6 grid gap-4 lg:gap-6">
                  {/* Grid */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-firstname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Şirket Logosu
                      </label>
                      <div className="flex gap-2">
                        <input
                          onChange={(event: any) => fileSelected(event)}
                          type="file"
                          accept="image/*"
                          className="block w-2/3 border border-gray-200 rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-100 file:border-0 file:me-4 file:py-3 file:px-4"
                        />
                        <button
                          className="btn btn-sm bg-orange-400 hover:bg-orange-500 rounded font-poppins text-white w-1/3"
                          onClick={uploadImageHandler}
                        >
                          {/* {uploadAvatarLoading ? (
                                    <span className="btn btn-sm font-poppins bg-white text-neutral-content w-full loading loading-spinner"></span>
                                ) : (
                                    <span>Upload image</span>
                                )} */}
                          Resmi Yükle
                        </button>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="hs-firstname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Şirket Adı
                      </label>

                      <input
                        type="text"
                        value={formData.company_name}
                        name="company_name"
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Compalist"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Slogan
                      </label>

                      <input
                        type="text"
                        name="slogan"
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Şirketinizi Listeleyin"
                        onChange={handleChange}
                        value={formData.slogan}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Web Sayfası
                      </label>

                      <input
                        type="text"
                        name="website_link"
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="https://compalist.com"
                        onChange={handleChange}
                        value={formData.website_link}
                      />
                    </div>
                  </div>

                  {/* Grid */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-company-website-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Hangi Alanda Hizmet Veriyorsunuz?
                      </label>

                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        name="category"
                        options={categoryOptions}
                        value={categoryOptions.find(
                          (option) => option.value === formData.category
                        )}
                        onChange={handleCategoryChange}
                        placeholder="Kategori Seçin"
                        styles={{
                          control: (baseStyles) => ({
                            ...baseStyles,
                            borderColor: "#e2e8f0",
                            borderRadius: "0.5em",
                            padding: "0.2em",
                            backgroundColor: "white",
                          }),
                        }}
                      />
                    </div>{" "}
                    <div>
                      <label
                        htmlFor="hs-company-website-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Alt Kategorileri seçin
                      </label>
                      {/* Select */}
                      <Select
                        className="basic-multi-select"
                        classNamePrefix="select"
                        isMulti
                        name="sub_categories"
                        options={subCategoryOptions}
                        value={subCategoryOptions.filter((option) =>
                          formData.sub_categories.includes(option.value)
                        )}
                        onChange={handleSubCategoryChange}
                        placeholder="Alt Kategorileri Seçin"
                        styles={{
                          control: (baseStyles) => ({
                            ...baseStyles,
                            borderColor: "#e2e8f0",
                            borderRadius: "0.5em",
                            padding: "0.2em",
                          }),
                        }}
                      />
                      {/* End Select */}

                      {/* <select
                        name="sub_categories"
                        value={formData.sub_categories}
                        onChange={handleChange}
                        className="border py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option selected>Dijital Tasarlama</option>

                        <option>İş ve Danışmanlık</option>

                        <option>Yazılım ve Teknoloji</option>

                        <option>BT Hizmetleri</option>

                        <option>Reklam ve Marka</option>

                        <option>Tasarım ve Ürün</option>
                      </select> */}
                    </div>
                  </div>

                  {/* End Grid */}

                  {/* Grid */}

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-company-website-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Şirketin kurulma tarihi
                      </label>

                      <input
                        value={formData.founded_year}
                        onChange={handleChange}
                        type="text"
                        name="founded_year"
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="1999"
                      />
                    </div>{" "}
                    <div>
                      <label
                        htmlFor="hs-company-website-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Şirkette kaç kişi çalışıyor?{" "}
                      </label>

                      <input
                        value={formData.numbers_of_employee}
                        onChange={handleChange}
                        type="number"
                        name="numbers_of_employee"
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="20"
                      />
                    </div>{" "}
                    <div>
                      <label
                        htmlFor="hs-company-website-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Şirketinizin Lokasyonu Neresi?
                      </label>

                      <input
                        value={formData.city}
                        onChange={handleChange}
                        type="text"
                        name="city"
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="İstanbul/Ataşehir"
                      />
                    </div>{" "}
                    <div>
                      <label
                        htmlFor="hs-company-website-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Müşteri Sayısı
                      </label>

                      <input
                        value={formData.numbers_of_customers}
                        onChange={handleChange}
                        type="text"
                        name="numbers_of_customers"
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="İstanbul/Ataşehir"
                      />
                    </div>{" "}
                  </div>

                  {/* End Grid */}

                  <div>
                    <label
                      htmlFor="hs-about-hire-us-1"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      Şirketinizle ilgili detaylar.
                    </label>

                    <textarea
                      value={formData.company_describe}
                      onChange={handleChange}
                      name="company_describe"
                      rows={4}
                      className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      defaultValue={""}
                      placeholder="Şirketinizle ilgili detaylar belirtiniz..."
                    />
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
