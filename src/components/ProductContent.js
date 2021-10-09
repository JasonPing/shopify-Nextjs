import { Breadcrumbs } from "./Breadcrumbs";
import { ProductImages } from "./ProductImages";
import { ProductDetails } from "./ProductDetails";
import { ProductDescription } from "./ProductDescription";
import { RecommendSection } from "./RecommendSection";

const ProductContent = ({ product }) => {
  const relatedProducts = product.collections?.edges[0]?.node?.products?.edges;
  return (
    <>
      {!product.id && <p>This product is not available</p>}
      {product.length !== 0 && (
        <div className="pb-5">
          <div className="mb-20">
            <Breadcrumbs handle={product.handle} title={product.title} />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="shadow-lg">
              <ProductImages images={product.images} width={500} height={400} />
            </div>
            <div className="flex flex-col">
              <ProductDetails title={product.title} vendor={product.vendor} variants={product.variants.edges} />
            </div>
          </div>
          <ProductDescription description={product.description} />
          {relatedProducts && <RecommendSection products={relatedProducts} />}
        </div>
      )}
    </>
  );
};

export { ProductContent };
