const Input = () => {
  return (
    <div className="border-2 border-secondary-dark opacity-40 rounded-md p-2 w-20 mr-3 focus-within:opacity-100 transition">
      <p className="text-sm text-secondary-dark">Quantity</p>
      <input
        className="w-full text-secondary-dark focus:outline-none"
        maxLength="1"
        type="number"
        min="1"
        defaultValue="1"
      />
    </div>
  );
};

export { Input };
