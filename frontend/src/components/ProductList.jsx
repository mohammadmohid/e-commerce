import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          discountPercent={product.discountPercent}
          description={product.description}
          imageSrc={product.imageSrc}
        />
      ))}
    </div>
  );
};
