import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function FetchProducts() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (error || id === undefined) {
    return "Error";
  }

  if (isLoading) {
    return "is loading...";
  }

  const products = data;

  return (
    <>
      ID: {products.id} Name: {products.name}
    </>
  );
}
