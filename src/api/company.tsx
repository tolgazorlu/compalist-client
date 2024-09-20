import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "./client";
import { RatingType } from "../types/FormTypes";

interface CompanyType {
  isVerified: boolean;
  company_name: string;
  logo: string;
  slug: string;
  slogan: string;
  hourly_price: string;
  founded_year: string;
  numbers_of_employee: number;
  numbers_of_customers: number;
  website_link: string;
  category: string;
  sub_categories: string[];
  city: string;
  company_describe: string;
  visits: number;
  isListed: boolean;
  createdAt: string;
  ratings: RatingType[];
  website_visits: number;
  social_instagram_link: string;
  social_linkedin_link: string;
  social_twitter_link: string;
  social_facebook_link: string;
  social_youtube_link: string;
  big_partners: number;
  medium_partners: number;
}

interface CompanyListType {
  company_name: string;
  logo: string;
  slug: string;
  slogan: string;
  hourly_price: number;
  founded_year: string;
  numbers_of_employee: number;
  numbers_of_customers: number;
  website_link: string;
  social_instagram_link: string;
  social_linkedin_link: string;
  social_twitter_link: string;
  social_facebook_link: string;
  social_youtube_link: string;
  category: string;
  sub_categories: string[];
  city: string;
  company_describe: string;
  visits: number;
  owner: OwnerType;
  isVerified: boolean;
  isListed: boolean;
}
interface OwnerType {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

export const useSearchCompanyQuery = ({
  query,
  category,
}: {
  query: string;
  category: string;
}) =>
  useQuery({
    queryKey: ["company", query, category],
    queryFn: async () =>
      (
        await apiClient.get<CompanyType[]>(
          `api/company/search?query=${query}&category=${category}`
        )
      ).data,
  });

export const useGetCompanyQuery = (slug: string) =>
  useQuery({
    queryKey: ["company", slug],
    queryFn: async () =>
      (await apiClient.get<CompanyType>(`api/company/${slug}`)).data,
  });

export const useGetCompanyListQuery = () =>
  useQuery({
    queryKey: ["company-list"],
    queryFn: async () =>
      (await apiClient.get<CompanyListType[]>(`api/company/companyList`)).data,
  });

export const useGetUserCompanyQuery = () =>
  useQuery({
    queryKey: ["user-company"],
    queryFn: async () =>
      (await apiClient.get<CompanyType>(`api/company/user_company`)).data,
  });

export const useGetAllCompaniesForSelect = () =>
  useQuery({
    queryKey: ["select-companies"],
    queryFn: async () =>
      (await apiClient.get<string[]>(`api/company/all_companies_for_select`))
        .data,
  });

export const useGetPendingListCompanyQuery = () =>
  useQuery({
    queryKey: ["pending-company"],
    queryFn: async () =>
      (await apiClient.get<CompanyListType[]>(`api/company/pending`)).data,
  });

export const useCreateCompanyMutation = () =>
  useMutation({
    mutationFn: async (company: CompanyType) =>
      (
        await apiClient.post<{ company: CompanyType }>(
          `api/company/create`,
          company
        )
      ).data,
  });

export const useUpdateCompanyMutation = (company_name: string) =>
  useMutation({
    mutationFn: async (company: CompanyType) =>
      (
        await apiClient.put<{ company: CompanyType }>(
          `api/company/update/${company_name}`,
          company
        )
      ).data,
  });

export const useVerifyCompanyMutation = (company_name: string) =>
  useMutation({
    mutationFn: async () =>
      (await apiClient.put(`api/company/verify/${company_name}`)).data,
  });

export const useListCompanyMutation = (company_name: string) =>
  useMutation({
    mutationFn: async () =>
      (await apiClient.put(`api/company/list/${company_name}`)).data,
  });

export const useUploadImageMutation = () =>
  useMutation({
    mutationFn: async ({
      image,
    }: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      image: any;
    }) =>
      (
        await apiClient.post<FormData>(`api/company/image`, {
          image,
        })
      ).data,
  });

export const useUpdateVisitMutation = (slug: string) =>
  useMutation({
    mutationFn: async () =>
      (await apiClient.post(`api/company/update_visit/${slug}`)).data,
  });

export const useUpdateWebsiteVisitMutation = (slug: string) =>
  useMutation({
    mutationFn: async () =>
      (await apiClient.post(`api/company/update_website_visit/${slug}`)).data,
  });
