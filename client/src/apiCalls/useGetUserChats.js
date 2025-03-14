import { useQuery } from "@tanstack/react-query";

export const useGetUserChats = () => {
  return useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });
};
