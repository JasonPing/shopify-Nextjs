import { ProductCard } from "./ProductCard";

const RecommendSection = ({ products }) => {
  return (
    <div className="w-full">
      <h2 className="w-full border-b-2 my-2 text-xl font-semibold">Recommend for you</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <div className="duration-500 ease-in-out transform hover:-translate-y-1" key={p.node.id}>
            <ProductCard product={p.node} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { RecommendSection };
