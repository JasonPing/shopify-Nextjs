const Button = ({ text, type }) => {
  let style = "";
  if (type === "primary") {
    style =
      "p-2 flex-1 bg-primary text-white rounded-md items-center w-full justify-items-center hover:bg-primary-light focus:outline-none transition";
  }
  return <button className={style}>{text}</button>;
};

export { Button };
