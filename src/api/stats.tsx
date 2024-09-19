import { useQuery } from "@tanstack/react-query";
import apiClient from "./client";

export const useGetUserCountStatQuery = () =>
  useQuery({
    queryKey: ["user-count"],
    queryFn: async () => (await apiClient.get<number>(`api/stats/user`)).data,
  });

export const useGetCompanyCountStatQuery = () =>
  useQuery({
    queryKey: ["company-count"],
    queryFn: async () =>
      (await apiClient.get<number>(`api/stats/company`)).data,
  });

export const useGetSuggestCountStatQuery = () =>
  useQuery({
    queryKey: ["suggest-count"],
    queryFn: async () =>
      (await apiClient.get<number>(`api/stats/suggest`)).data,
  });

export const useGetRatingCountStatQuery = () =>
  useQuery({
    queryKey: ["rating-count"],
    queryFn: async () => (await apiClient.get<number>(`api/stats/rating`)).data,
  });

export const useGetNotificationQuery = () =>
  useQuery({
    queryKey: ["notification"],
    queryFn: async () =>
      (await apiClient.get<number>(`api/stats/notification`)).data,
  });
