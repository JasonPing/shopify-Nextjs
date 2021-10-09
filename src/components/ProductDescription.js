const ProductDescription = ({ description }) => {
  return (
    <div className="flex flex-col py-5">
      <h2 className="w-full border-b-2 my-2 text-xl font-semibold">Description</h2>
      <p>{description}</p>
    </div>
  );
};

export { ProductDescription };
