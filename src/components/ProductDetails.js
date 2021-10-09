import { AddToCartButton } from "./AddToCartButton";

const ProductDetails = ({ title, vendor, variants }) => {
  const variant = variants[0].node;

  return (
    <>
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <div className="mb-10">
        by <span className="text-primary">{vendor}</span>
      </div>
      <div className="text-secondary-dark text-xl mb-2">${variant.priceV2.amount}</div>
      <div className="text-secondary text-md mb-20">SKU: {variant.sku}</div>
      <AddToCartButton />
    </>
  );
};

export { ProductDetails };
