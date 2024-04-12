import { useRouter } from "next/router";
import { FC } from "react";
import { IButtonProps } from ".";

export const Button: FC<IButtonProps> = ({ label, slug, _key, variant }) => {
  const route = useRouter();
  const handleNavigate = () => {
    route.push(slug);
  };
  return (
    <button
      onClick={handleNavigate}
      key={_key}
      className={`py-3.5 px-10 ${
        variant == "primary"
          ? "bg-primary-green text-white hover:bg-darker-green"
          : "bg-white text-primary-green hover:bg-darker-green hover:text-white"
      }`}
    >
      {label}
    </button>
  );
};
