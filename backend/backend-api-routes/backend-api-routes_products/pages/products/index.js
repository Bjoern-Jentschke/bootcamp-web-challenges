import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductList() {
  const { data, error, isLoading } = useSWR(`/api/products`, fetcher);

  if (error) {
    return "Error";
  }

  if (isLoading) {
    return "is loading";
  }

  const products = data;

  return (
    <ul>
      {products.map((product) => (
        <>
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              id: {product.id} Name: {product.name} description:{" "}
              {product.description} price: {product.price}
              {product.currency}
            </Link>
          </li>
        </>
      ))}
    </ul>
  );
}
