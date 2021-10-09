import { Button } from "../base/Button";
import { Input } from "../base/Input";

const AddToCartButton = () => {
  return (
    <div className="w-full flex">
      <Input />
      <Button text={"ADD TO CART"} type={"primary"} />
    </div>
  );
};

export { AddToCartButton };
