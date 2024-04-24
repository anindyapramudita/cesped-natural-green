import { TIcon } from "@/shared/types/icon.types";

export const FacebookIcon = ({ size = 50, className }: TIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_263_37)">
        <path
          d="M50 25.6531C50 11.7593 38.8063 0.496826 25 0.496826C11.1875 0.499951 -0.00622559 11.7593 -0.00622559 25.6562C-0.00622559 38.2093 9.13752 48.6156 21.0875 50.5031V32.925H14.7438V25.6562H21.0938V20.1093C21.0938 13.8062 24.8281 10.325 30.5375 10.325C33.275 10.325 36.1344 10.8156 36.1344 10.8156V17.0031H32.9813C29.8781 17.0031 28.9094 18.9437 28.9094 20.9343V25.6531H35.8406L34.7344 32.9218H28.9063V50.5C40.8563 48.6124 50 38.2062 50 25.6531Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_263_37">
          <rect
            width="50"
            height="50"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
