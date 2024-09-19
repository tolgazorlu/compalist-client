export type ContactType = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
};

export type RatingType = {
  company_name: string;
  project_name: string;
  project_cost: string;
  project_status: string;
  project_desc: string;
  which_service: string;
  rating_title: string;
  rating_detail: string;
  service_quality: number;
  time_management: number;
  general_rating: number;
  company_communication: number;
  your_company_name: string;
  company_position: string;
  company_location: string;
  website: string;
  linkedin: string;
  name: string;
  email: string;
  createdAt: string;
  owner: {
    name: string;
    surname: string;
  };
};

export type SuggestType = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  company_name: string;
  service_selection: string;
  project_detail: string;
  status: string;
  createdAt: string;
};

export type PostType = {
  title: string;
  slug: string;
  content: string;
  image: string;
  about: string;
  category: string;
  sub_categories: string[];
};
