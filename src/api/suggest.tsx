import { useMutation, useQuery } from "@tanstack/react-query";
import { SuggestType } from "../types/FormTypes";
import apiClient from "./client";

export const useCreateSuggestMutation = () =>
  useMutation({
    mutationFn: async (suggest: SuggestType) =>
      (
        await apiClient.post<{ suggest: SuggestType }>(
          `api/suggest/create`,
          suggest
        )
      ).data,
  });

export const useGetSuggestsQuery = () =>
  useQuery({
    queryKey: ["all-suggest"],
    queryFn: async () =>
      (await apiClient.get<SuggestType[]>(`api/suggest/all`)).data,
  });

export const useGetUserSuggestsQuery = () =>
  useQuery({
    queryKey: ["user-suggest"],
    queryFn: async () =>
      (await apiClient.get<SuggestType[]>(`api/suggest/user_suggests`)).data,
  });

export const useGetPendingSuggestsQuery = () =>
  useQuery({
    queryKey: ["pending-suggest"],
    queryFn: async () =>
      (await apiClient.get<SuggestType[]>(`api/suggest/pending`)).data,
  });

export const useRejectSuggestMutation = (id: string) =>
  useMutation({
    mutationFn: async () =>
      (await apiClient.put(`api/suggest/reject/${id}`)).data,
  });

export const useConfirmSuggestMutation = (id: string) =>
  useMutation({
    mutationFn: async () =>
      (await apiClient.put(`api/suggest/confirm/${id}`)).data,
  });
