import { API_ENDPOINTS } from "../utils/endpoints";
import { useQuery } from "@tanstack/react-query";
import request from "../utils/requests";

console.log(API_ENDPOINTS)

export const useGetGroups = () => {
  return useQuery({
    queryKey: ["groups"],
    queryFn: async () => {
      const { data } = await request.get(API_ENDPOINTS.GROUP);
      return data;
    },
  });
};