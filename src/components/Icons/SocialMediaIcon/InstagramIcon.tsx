import { TIcon } from "@/shared/types/icon.types";

export const InstagramIcon = ({ size = 50, className }: TIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_263_33)">
        <path
          d="M25 0.5C18.2156 0.5 17.3625 0.53125 14.6969 0.65C12.0312 0.775 10.2156 1.19375 8.625 1.8125C6.95576 2.43852 5.44419 3.42312 4.19688 4.69688C2.92312 5.94419 1.93852 7.45576 1.3125 9.125C0.69375 10.7125 0.271875 12.5312 0.15 15.1875C0.03125 17.8594 0 18.7094 0 25.5031C0 32.2906 0.03125 33.1406 0.15 35.8063C0.275 38.4688 0.69375 40.2844 1.3125 41.875C1.95312 43.5187 2.80625 44.9125 4.19688 46.3031C5.58438 47.6937 6.97813 48.55 8.62187 49.1875C10.2156 49.8063 12.0281 50.2281 14.6906 50.35C17.3594 50.4688 18.2094 50.5 25 50.5C31.7906 50.5 32.6375 50.4688 35.3063 50.35C37.9656 50.225 39.7875 49.8063 41.3781 49.1875C43.0462 48.5611 44.5567 47.5765 45.8031 46.3031C47.1937 44.9125 48.0469 43.5187 48.6875 41.875C49.3031 40.2844 49.725 38.4688 49.85 35.8063C49.9688 33.1406 50 32.2906 50 25.5C50 18.7094 49.9688 17.8594 49.85 15.1906C49.725 12.5313 49.3031 10.7125 48.6875 9.125C48.0615 7.45576 47.0769 5.94419 45.8031 4.69688C44.5558 3.42312 43.0442 2.43852 41.375 1.8125C39.7812 1.19375 37.9625 0.771875 35.3031 0.65C32.6344 0.53125 31.7875 0.5 24.9937 0.5H25ZM22.7594 5.00625H25.0031C31.6781 5.00625 32.4688 5.02813 35.1031 5.15C37.5406 5.25938 38.8656 5.66875 39.7469 6.00938C40.9125 6.4625 41.7469 7.00625 42.6219 7.88125C43.4969 8.75625 44.0375 9.5875 44.4906 10.7563C44.8344 11.6344 45.2406 12.9594 45.35 15.3969C45.4719 18.0312 45.4969 18.8219 45.4969 25.4937C45.4969 32.1656 45.4719 32.9594 45.35 35.5938C45.2406 38.0312 44.8313 39.3531 44.4906 40.2344C44.087 41.3184 43.4476 42.2993 42.6187 43.1063C41.7437 43.9813 40.9125 44.5219 39.7438 44.975C38.8688 45.3188 37.5438 45.725 35.1031 45.8375C32.4688 45.9563 31.6781 45.9844 25.0031 45.9844C18.3281 45.9844 17.5344 45.9563 14.9 45.8375C12.4625 45.725 11.1406 45.3188 10.2594 44.975C9.17448 44.5727 8.19249 43.9344 7.38437 43.1063C6.55398 42.2988 5.91353 41.3167 5.50938 40.2313C5.16875 39.3531 4.75938 38.0281 4.65 35.5906C4.53125 32.9562 4.50625 32.1656 4.50625 25.4875C4.50625 18.8094 4.53125 18.025 4.65 15.3906C4.7625 12.9531 5.16875 11.6281 5.5125 10.7469C5.96563 9.58125 6.50937 8.74687 7.38437 7.87187C8.25937 6.99687 9.09062 6.45625 10.2594 6.00313C11.1406 5.65938 12.4625 5.25313 14.9 5.14062C17.2063 5.03438 18.1 5.00313 22.7594 5V5.00625ZM38.3469 9.15625C37.9529 9.15625 37.5628 9.23385 37.1988 9.38461C36.8348 9.53538 36.5041 9.75635 36.2256 10.0349C35.947 10.3135 35.726 10.6442 35.5752 11.0082C35.4245 11.3722 35.3469 11.7623 35.3469 12.1562C35.3469 12.5502 35.4245 12.9403 35.5752 13.3043C35.726 13.6683 35.947 13.999 36.2256 14.2776C36.5041 14.5561 36.8348 14.7771 37.1988 14.9279C37.5628 15.0787 37.9529 15.1562 38.3469 15.1562C39.1425 15.1562 39.9056 14.8402 40.4682 14.2776C41.0308 13.715 41.3469 12.9519 41.3469 12.1562C41.3469 11.3606 41.0308 10.5975 40.4682 10.0349C39.9056 9.47232 39.1425 9.15625 38.3469 9.15625ZM25.0031 12.6625C23.3002 12.6359 21.609 12.9484 20.0281 13.5817C18.4471 14.215 17.0079 15.1565 15.7942 16.3513C14.5806 17.5462 13.6168 18.9705 12.9589 20.5414C12.301 22.1124 11.9622 23.7985 11.9622 25.5016C11.9622 27.2047 12.301 28.8908 12.9589 30.4617C13.6168 32.0326 14.5806 33.457 15.7942 34.6518C17.0079 35.8467 18.4471 36.7881 20.0281 37.4214C21.609 38.0547 23.3002 38.3672 25.0031 38.3406C28.3736 38.288 31.5882 36.9122 33.9531 34.5102C36.3179 32.1081 37.6434 28.8724 37.6434 25.5016C37.6434 22.1307 36.3179 18.895 33.9531 16.493C31.5882 14.0909 28.3736 12.7151 25.0031 12.6625ZM25.0031 17.1656C26.0976 17.1656 27.1814 17.3812 28.1926 17.8C29.2037 18.2189 30.1225 18.8328 30.8964 19.6067C31.6703 20.3806 32.2842 21.2994 32.7031 22.3106C33.1219 23.3217 33.3375 24.4055 33.3375 25.5C33.3375 26.5945 33.1219 27.6783 32.7031 28.6894C32.2842 29.7006 31.6703 30.6194 30.8964 31.3933C30.1225 32.1672 29.2037 32.7811 28.1926 33.2C27.1814 33.6188 26.0976 33.8344 25.0031 33.8344C22.7927 33.8344 20.6728 32.9563 19.1098 31.3933C17.5468 29.8303 16.6688 27.7104 16.6688 25.5C16.6688 23.2896 17.5468 21.1697 19.1098 19.6067C20.6728 18.0437 22.7927 17.1656 25.0031 17.1656Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_263_33">
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