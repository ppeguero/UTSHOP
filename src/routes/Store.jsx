import { products } from "../data";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const Store = () => {
  return (
    <>
      <Heading>
        <h1>Browse the Store!</h1>
        <p>New Arrivals for you! Check out our selection of products.</p>
      </Heading>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </>
  );
};

export default Store;
