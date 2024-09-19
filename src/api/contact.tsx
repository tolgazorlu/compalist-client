import { useMutation, useQuery } from "@tanstack/react-query";
import { ContactType } from "../types/FormTypes";
import apiClient from "./client";

export const useContactMutation = () =>
  useMutation({
    mutationFn: async (contact: ContactType) =>
      (
        await apiClient.post<{ contact: ContactType }>(
          `api/contact/create`,
          contact
        )
      ).data,
  });

export const useGetContactQuery = () =>
  useQuery({
    queryKey: ["all-rating"],
    queryFn: async () =>
      (await apiClient.get<ContactType[]>(`api/contact/all`)).data,
  });
