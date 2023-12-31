import { API_ENDPOINTS } from "../utils/endpoints";
import { useQuery } from "@tanstack/react-query";
import request from "../utils/requests";

console.log(API_ENDPOINTS)

export const useGetGroupsUsers = (id) => {
  return useQuery({
    queryKey: ["groups",id],
    queryFn: async () => {
      const { data } = await request.get(`${API_ENDPOINTS.GROUP_USERS}${id}`);
      return data;
    },
  });
};