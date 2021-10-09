import { useSingleProductData } from "../lib/shopify";
import { ProductContent } from "./ProductContent";

const ProductPage = ({ productHandle }) => {
  const { fetchStatus, product } = useSingleProductData(productHandle);
  const showNotification = (fetchStatus) => {
    if (fetchStatus !== "loading" && fetchStatus !== "fail") {
      return null;
    }
    let notification = "";
    if (fetchStatus === "loading") {
      notification = "Loading product";
    }
    if (fetchStatus === "fail") {
      notification = "Fail to load product";
    }
    return <p className="flex items-center justify-center min-h-screen">{notification}</p>;
  };

  return (
    <>
      {showNotification(fetchStatus)}

      {fetchStatus === "success" && <ProductContent product={product} />}
    </>
  );
};

export { ProductPage };
