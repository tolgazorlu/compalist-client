/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormEvent, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEditBlogMutation, useGetEditPostQuery } from "../../api/blog";
import { PostType } from "../../types/FormTypes";
import toast from "react-hot-toast";
import axios from "axios";
import Select, { MultiValue, SingleValue } from "react-select";
import CreatableSelect from "react-select/creatable";
import { useParams } from "react-router-dom";

const clientUrl = "https://www.compalist.app";

const initialFormData: PostType = {
  title: "",
  slug: "",
  content: "",
  image: "",
  about: "",
  category: "",
  sub_categories: [],
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
    value: "Dijital Tasarlama",
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
    value: "Yazılım Geliştirme",
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
    value: "Reklam ve Marka",
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
    value: "İş ve Danışmanlık",
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
    value: "BT Hizmetleri",
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
    value: "Tasarım ve Ürün",
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
  const result = await axios.post(`${clientUrl}/api/blog/images`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result.data;
}

const EditBlogPage = () => {
  const { slug } = useParams();

  const { data: editPostData } = useGetEditPostQuery(slug!);
  const { mutateAsync: editBlog } = useEditBlogMutation();
  const [editorContent, setEditorContent] = useState<string>("");
  const [formData, setFormData] = useState<PostType>(initialFormData);
  const [blogImage, setBlogImage] = useState<string>(
    "https://flowbite.com/docs/images/examples/image-1@2x.jpg"
  );
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

  useEffect(() => {
    if (editPostData) {
      setBlogImage(editPostData.image);
      setFormData(editPostData);
      setEditorContent(editPostData.content);
      setBlogImage(editPostData.image);
    }
  }, [editPostData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      image: blogImage,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const updatedFormData = {
        ...formData,
        content: editorContent,
        image: blogImage,
      };
      console.log(updatedFormData);
      await editBlog(updatedFormData);
      toast.success("Makale Güncellendi!");
    } catch (error) {
      toast.error("Bir şeyler yanlış gitti!");
    }
  };

  const [file, setFile] = useState<string>();

  const uploadImageHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const result = await postImage({ image: file });
      setBlogImage(`${clientUrl}/api/company${result.imagePath}`);
      toast.success("Blog başarıyla resmi yüklendi!");
    } catch (error: any) {
      toast.error(error?.message || "Bir hata oluştu. Tekrar deneyiniz.");
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fileSelected = (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];
    setFile(file);
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
  return (
    <>
      {/* Card Section */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="w-full pb-2">
              <span className="font-bold text-xl text-blue-500">Blog Yaz</span>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Card */}
              <div className="rounded-xl">
                <ReactQuill
                  theme="snow"
                  value={editorContent}
                  onChange={setEditorContent}
                />
                <div className="pt-4 flex justify-end ">
                  <>
                    <button
                      type="button"
                      className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      data-hs-overlay="#hs-overlay-right"
                    >
                      İçerik Ayarları
                    </button>
                    <div
                      id="hs-overlay-right"
                      className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-s overflow-scroll"
                      tabIndex={-1}
                    >
                      <div className="flex justify-between items-center py-3 px-4 border-b">
                        <h3 className="font-bold text-gray-800 ">
                          Blog Ayarları
                        </h3>
                        <button
                          type="button"
                          className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                          data-hs-overlay="#hs-overlay-right"
                        >
                          <span className="sr-only">Close modal</span>
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <div className="h-full flex flex-col gap-2">
                          <img
                            src={blogImage}
                            alt="blogImage"
                            className="object-cover object-center rounded-lg"
                          />
                          <div className="h-full flex flex-col gap-2">
                            <div>
                              <label htmlFor="file-input" className="sr-only">
                                Dosya Seç
                              </label>
                              <input
                                onChange={(event: any) => fileSelected(event)}
                                type="file"
                                name="file-input"
                                id="file-input"
                                className="block w-full border border-gray-600 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
   "
                              />
                            </div>

                            <button
                              onClick={uploadImageHandler}
                              type="button"
                              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-600 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            >
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
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1={12} x2={12} y1={3} y2={15} />
                              </svg>
                              Resmi yükle
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="space-y-2 ">
                            <label
                              htmlFor="af-submit-app-project-name"
                              className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                            >
                              Başlık
                            </label>
                            <input
                              id="af-submit-app-project-name"
                              type="text"
                              className="py-2 px-3 pe-11 block w-full border shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              placeholder="Makalenin Başlığını girin"
                              value={formData.title}
                              name="title"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="af-submit-project-url"
                              className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                            >
                              Slug
                            </label>
                            <input
                              id="af-submit-project-url"
                              type="text"
                              className="py-2 px-3 pe-11 block w-full border shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              placeholder="Makalenin uzantısını girin"
                              name="slug"
                              value={formData.slug}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="af-submit-project-url"
                              className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                            >
                              Özet
                            </label>
                            <input
                              id="af-submit-project-url"
                              type="text"
                              className="py-2 px-3 pe-11 block w-full border shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              placeholder="Makalenin özetini yazın. Blog listelerinde görünecektir."
                              name="about"
                              value={formData.about}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="af-submit-app-category"
                              className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                            >
                              Kategori
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
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="af-submit-app-category"
                              className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                            >
                              Kategori
                            </label>
                            <CreatableSelect
                              isMulti
                              options={subCategoryOptions}
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
                          </div>
                        </div>
                        <div className="mt-2 float-end">
                          <button
                            onClick={handleSubmit}
                            type="submit"
                            className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Yayınla
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
              {/* End Card */}
            </form>
          </div>
          {/* End Card Section */}
        </div>{" "}
      </div>
    </>
  );
};

export default EditBlogPage;
