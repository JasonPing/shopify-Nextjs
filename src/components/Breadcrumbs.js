const Breadcrumbs = ({ handle, title }) => {
  return (
    <>
      <div className="my-4 text-secondary">
        <a href="/" className="text-primary">
          Home
        </a>
        <span className="px-1">/</span>
        <a href={`/products/${handle}`} className="hover:text-secondary-dark">
          {title}
        </a>
      </div>
    </>
  );
};

export { Breadcrumbs };
