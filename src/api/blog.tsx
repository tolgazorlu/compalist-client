import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "./client";
import { PostType } from "../types/FormTypes";

export type getPostType = {
  title: string;
  slug: string;
  content: string;
  image: string;
  about: string;
  category: string;
  sub_categories: string[];
  updatedAt: string;
  createdAt: string;
  author: AuthorType;
};

interface AuthorType {
  name: string;
  surname: string;
  avatar: string;
}

export const useGetPostsQuery = () =>
  useQuery({
    queryKey: ["all-posts"],
    queryFn: async () =>
      (await apiClient.get<getPostType[]>(`api/blog/all`)).data,
  });

export const useGetEditPostQuery = (slug: string) =>
  useQuery({
    queryKey: ["post", slug],
    queryFn: async () =>
      (await apiClient.get<getPostType>(`api/blog/edit/${slug}`)).data,
  });

export const useGetSinglePostQuery = (slug: string) =>
  useQuery({
    queryKey: ["post", slug],
    queryFn: async () =>
      (await apiClient.get<getPostType>(`api/blog/${slug}`)).data,
  });

export const useCreateBlogMutation = () =>
  useMutation({
    mutationFn: async (company: PostType) =>
      (await apiClient.post<{ company: PostType }>(`api/blog/create`, company))
        .data,
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
        await apiClient.post<FormData>(`api/blog/image`, {
          image,
        })
      ).data,
  });

export const useDeletePostMutation = () =>
  useMutation({
    mutationFn: async (slug: string) =>
      (
        await apiClient.delete<{ message: string; post: PostType[] }>(
          `api/blog/delete/${slug}`
        )
      ).data,
  });

export const useEditBlogMutation = () => {
  return useMutation({
    mutationFn: async (post: PostType) =>
      (
        await apiClient.put<{ post: PostType }>(
          `api/blog/update/${post.slug}`,
          {
            post,
          }
        )
      ).data,
  });
};
