import useSWR from "swr";

const fetcher: any = (url: any) => fetch(url).then((res) => res.json());

export function useGetUser() {
  const { data, error, isLoading } = useSWR(`/api/get/getusers`, fetcher);
  return {
    users: data,
    isLoading,
    isError: error,
  };
}
