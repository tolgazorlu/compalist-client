import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { setUser } from "../redux/userSlice";
import toast from "react-hot-toast";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import apiClient from "./client";

interface UserLoginType {
  email: string;
  password: string;
}

interface UserAuthType {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

interface ErrorResponse {
  message: string;
}

export const useSigninMutation = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (user: UserLoginType) => {
      const response = await apiClient.post(`api/auth/user/signin`, user);
      return response.data; // Assuming the response contains the token and user details
    },
    onSuccess: (data) => {
      // Save the token to localStorage
      localStorage.setItem("token", JSON.stringify(data));

      // Dispatch the user data to the Redux store
      dispatch(
        setUser({
          user: {
            name: data.name,
            avatar: data.avatar,
            role: data.role,
          },
          token: data.token,
        })
      );

      // Navigate to the user dashboard or profile

      navigate("/user/dashboard");

      // Show success toast
      toast.success("Giriş Başarılı!");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Extract the error message from the response
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";

      // Show error toast with the extracted message
      toast.error(errorMessage);
    },
  });
};

export const useSignupMutation = () =>
  useMutation({
    mutationFn: async (user: UserAuthType) => {
      const response = await apiClient.post(`api/auth/user/signup`, user);
      const { token, _id } = response.data;

      const expirationTime = new Date().getTime() + 3600 * 1000; // 3600 seconds * 1000 milliseconds per second

      localStorage.setItem("accessToken", token);
      localStorage.setItem("userId", _id);
      localStorage.setItem("accessTokenExpiration", expirationTime.toString());
      localStorage.setItem("userIdExpiration", expirationTime.toString());
    },
  });

export const useVerifyEmailMutation = () =>
  useMutation({
    mutationFn: async ({ id, token }: { id: string; token: string }) =>
      (
        await apiClient.put(`api/auth/user/${id}/verify/${token}`, {
          id,
          token,
        })
      ).data,
  });

export const useGetAllUsersQuery = () =>
  useQuery({
    queryKey: ["all-users"],
    queryFn: async () => (await apiClient.get(`api/auth/user/all`)).data,
  });
