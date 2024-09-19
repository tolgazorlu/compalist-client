import { useMutation, useQuery } from "@tanstack/react-query";
import { RatingType } from "../types/FormTypes";
import apiClient from "./client";

export const useRatingMutation = () =>
  useMutation({
    mutationFn: async (rating: RatingType) =>
      (
        await apiClient.post<{ rating: RatingType }>(
          `/api/rating/create`,
          rating
        )
      ).data,
  });

export const useGetRatingsQuery = () =>
  useQuery({
    queryKey: ["all-rating"],
    queryFn: async () =>
      (await apiClient.get<RatingType[]>(`api/rating/all`)).data,
  });

export const useGetUserRatingsQuery = () =>
  useQuery({
    queryKey: ["user-rating"],
    queryFn: async () =>
      (await apiClient.get<RatingType[]>(`api/rating/user_ratings`)).data,
  });
