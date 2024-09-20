/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormEvent, useEffect, useState } from "react";
import {
  useGetUserCompanyQuery,
  useUpdateCompanyMutation,
} from "../../api/company";
import toast from "react-hot-toast";
import axios from "axios";
import { CompanyType } from "../../types/CompanyType";

const initialFormData: CompanyType = {
  company_name: "",
  logo: "",
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
  slug: "",
  visits: 0,
  isVerified: false,
  isListed: false,
  createdAt: "",
  ratings: [],
  website_visits: 0,
  social_instagram_link: "",
  social_linkedin_link: "",
  social_twitter_link: "",
  social_facebook_link: "",
  social_youtube_link: "",
  big_partners: 0,
  medium_partners: 0,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function postImage({ image }: any) {
  const formData = new FormData();
  formData.append("image", image);
  const result = await axios.post(
    "https://www.compalist.app/api/company/images",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return result.data;
}

const UserCompany = () => {
  const { data: company } = useGetUserCompanyQuery();
  const [formData, setFormData] = useState<CompanyType>(initialFormData);
  const [image, setImage] = useState<string>("");
  const [comp_name, setCompName] = useState<string>("");

  const { mutateAsync: companyUpdate } = useUpdateCompanyMutation(comp_name);

  useEffect(() => {
    if (company) {
      setFormData({
        company_name: company.company_name,
        company_describe: company.company_describe,
        logo: company.logo,
        slogan: company.slogan,
        hourly_price: company.hourly_price,
        founded_year: company.founded_year,
        numbers_of_employee: company.numbers_of_employee,
        numbers_of_customers: company.numbers_of_customers,
        website_link: company.website_link,
        category: company.category,
        sub_categories: company.sub_categories,
        city: company.city,
        slug: company.slug,
        visits: company.visits,
        isVerified: company.isVerified,
        isListed: company.isListed,
        createdAt: company.createdAt,
        ratings: company.ratings,
        website_visits: company.website_visits,
        social_instagram_link: company.social_instagram_link,
        social_linkedin_link: company.social_linkedin_link,
        social_twitter_link: company.social_twitter_link,
        social_facebook_link: company.social_facebook_link,
        social_youtube_link: company.social_youtube_link,
        medium_partners: company.medium_partners,
        big_partners: company.big_partners,
      });
      setImage(company.logo);
      setCompName(company.company_name);
    }
  }, [company]);

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await companyUpdate(formData);
      toast.success("Şirket profiliniz başarıyla güncellendi!");
    } catch (error) {
      toast.error("Bir hata oluştu");
    }
  };

  const [file, setFile] = useState<File | null>(null);

  const uploadImageHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error("Lütfen bir dosya seçin");
      return;
    }
    try {
      const result = await postImage({ image: file });
      const imagePath = `https://www.compalist.app/api/company${result.imagePath}`;
      setImage(imagePath);
      setFormData((prevData) => ({
        ...prevData,
        logo: imagePath,
      }));
      toast.success("Şirketinizin profil fotoğrafı yüklendi!");
    } catch (error: any) {
      toast.error(error?.message || "Bir hata oluştu");
    }
  };

  const fileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  if (!company) return null;

  if (company)
    return (
      <div className="bg-neutral-50">
        <form className="max-w-7xl mx-auto pb-10 px-4 py-4 grid grid-cols-3 gap-2">
          {/* PROFILE INFO START */}
          <div className="shadow-sm bg-white border rounded-lg col-span-3 md:col-span-2  flex flex-col">
            <span className="text-lg text-gray-700 font-semibold divide-y-2 px-4 py-3">
              Profil
            </span>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-2">
              <label className="text-sm font-semibold text-neutral-600">
                Şirket Logosu
              </label>
              <div className="flex gap-4 justify-start items-end">
                <img
                  className="w-20 h-20 rounded-lg object-cover border"
                  src={image}
                />
                <label htmlFor="file-input" className="sr-only">
                  Dosya Seç
                </label>
                <div className="w-full">
                  <div className="flex gap-2">
                    <input
                      onChange={fileSelected}
                      type="file"
                      name="file-input"
                      id="file-input"
                      className="block w-1/3 bg-blue-500 text-white border border-black-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                file:bg-blue-600 file:border-0 file:text-white
                file:me-4
                file:py-3 file:px-4"
                    />
                    <button
                      onClick={uploadImageHandler}
                      className="px-4 py-3 border rounded-lg bg-orange-400 text-white text-sm"
                    >
                      Fotoğraf Yükle
                    </button>
                  </div>
                  <span className="text-gray-500 text-sm">
                    Resminiz kare olmalı, en az 100x100 piksel boyutunda ve JPG
                    veya PNG formatında olmalıdır.
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-2">
              <label className="text-sm font-semibold text-neutral-600">
                Genel Bilgiler
              </label>
              <div className="gap-4 justify-start items-end grid grid-cols-2">
                <div className="w-full ">
                  <label
                    htmlFor="company_name"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Şirket Adı
                  </label>
                  <input
                    type="text"
                    value={formData.company_name}
                    name="company_name"
                    onChange={handleChange}
                    id="company_name"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="slogan"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Şirket Sloganı
                  </label>
                  <input
                    type="text"
                    value={formData.slogan}
                    name="slogan"
                    onChange={handleChange}
                    id="slogan"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="category"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Sektör
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    name="category"
                    onChange={handleChange}
                    id="category"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="sub_categories"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Kategoriler
                  </label>
                  <input
                    type="text"
                    value={formData.sub_categories}
                    name="sub_categories"
                    onChange={handleChange}
                    id="sub_categories"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full col-span-2">
                  <label
                    htmlFor="company_description"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Hakkında
                  </label>
                  <textarea
                    value={formData.company_describe}
                    name="company_describe"
                    onChange={handleChange}
                    id="company_description"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* PROFILE INFO END */}

          {/* CARDS INFO START */}
          <div className=" shadow-sm bg-white border rounded-lg col-span-3 md:col-span-1 flex flex-col">
            <span className="text-lg text-gray-700 font-semibold divide-y-2 px-4 py-3">
              Organizasyon
            </span>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-2">
              <div className="gap-4 justify-start items-end grid grid-cols-2">
                <div className="w-full col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Lokasyon
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    name="city"
                    onChange={handleChange}
                    id="city"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full col-span-2">
                  <label
                    htmlFor="website_link"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Web sayfası Linki
                  </label>
                  <input
                    type="text"
                    value={formData.website_link}
                    name="website_link"
                    onChange={handleChange}
                    id="website_link"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="founded_date"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Kuruluş Tarihi
                  </label>
                  <input
                    type="text"
                    value={formData.founded_year}
                    name="founded_year"
                    onChange={handleChange}
                    id="founded_date"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="hourly_price"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Tahmini Proje Maliyeti
                  </label>
                  <select
                    onChange={handleChange}
                    value={formData.hourly_price}
                    name="hourly_price"
                    className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <option selected>Seçin</option>
                    <option value="0-1000">0-1000 $</option>
                    <option value="1000-10000">1000-10000 $</option>
                    <option value="10000-100000">10000-100000 $</option>
                    <option value="100000-1000000">100000-1000000 $</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="social_linkedin_link"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Linkedin Adresi
                  </label>
                  <input
                    type="text"
                    value={formData.social_linkedin_link}
                    name="social_linkedin_link"
                    onChange={handleChange}
                    id="social_linkedin_link"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="social_instagram_link"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    İnstagram Adresi
                  </label>
                  <input
                    type="text"
                    value={formData.social_instagram_link}
                    name="social_instagram_link"
                    onChange={handleChange}
                    id="social_instagram_link"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="social_twitter_link"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Twitter Adresi
                  </label>
                  <input
                    type="text"
                    value={formData.social_twitter_link}
                    name="social_twitter_link"
                    onChange={handleChange}
                    id="social_twitter_link"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="social_facebook_link"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Facebook Adresi
                  </label>
                  <input
                    type="text"
                    value={formData.social_facebook_link}
                    name="social_facebook_link"
                    onChange={handleChange}
                    id="social_facebook_link"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="social_youtube_link"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Youtube Adresi
                  </label>
                  <input
                    type="text"
                    value={formData.social_youtube_link}
                    name="social_youtube_link"
                    onChange={handleChange}
                    id="social_youtube_link"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="employee_count"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Çalışan Sayısı
                  </label>
                  <input
                    type="text"
                    value={formData.numbers_of_employee}
                    name="numbers_of_employee"
                    onChange={handleChange}
                    id="numbers_of_employee"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full col-span-2">
                  <label
                    htmlFor="customer_count"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Referans Sayısı
                  </label>
                  <input
                    type="text"
                    value={formData.numbers_of_customers}
                    name="numbers_of_customers"
                    onChange={handleChange}
                    id="numbers_of_customers"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
                <div className="w-full col-span-2">
                  <label
                    htmlFor="customer_count"
                    className="block text-sm text-neutral-500 font-medium mb-2"
                  >
                    Büyük Ölçekli İşletme Oranı
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={formData.big_partners}
                    name="big_partners"
                    onChange={handleChange}
                    id="big_partners"
                    className="py-3 px-4 block w-full border rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* CARDS INFO END */}

          <div className="py-3 flex flex-col gap-2 items-end col-span-3">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 border rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm"
            >
              Profili Güncelle
            </button>
          </div>
        </form>
      </div>
    );
};

export default UserCompany;
