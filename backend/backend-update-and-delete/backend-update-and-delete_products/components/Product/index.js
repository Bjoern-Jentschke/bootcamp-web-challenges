import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { StyledButton } from "../Button/Button.styled";
import Comments from "../Comments";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEditProduct(event) {
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
  }
  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    } else {
      console.log("There was an error.");
    }
  }

  return (
    <ProductCard>
      {/* {isEditMode === true ? <ProductForm /> : ""} */}
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          isEditMode={true}
          value={data}
          formHeading="Edit Fish"
        />
      )}
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledButton
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Update📝
      </StyledButton>
      <StyledButton
        style={{ color: "red" }}
        onClick={() => handleDeleteProduct(id)}
      >
        Delete❌
      </StyledButton>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
