import { ProductImages } from "./ProductImages";
import { Button } from "../base/Button";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full flex flex-col shadow-lg">
      <ProductImages images={product.images} width={250} height={300} />
      <div className="p-2 flex flex-col h-48">
        <h2 className="font-bold mb-1">{product.title}</h2>
        <p>${product.priceRange.minVariantPrice.amount}</p>
        <div className="mt-auto w-full">
          <Button text={"ADD TO CART"} type={"primary"} />
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
