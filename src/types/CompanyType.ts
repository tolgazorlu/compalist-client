import { RatingType } from "./FormTypes";

export type CompanyType = {
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
};
