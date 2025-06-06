import { memo } from "react";
import { ListenThreeDots } from "./ListenThreeDots";

export const BurgerIcon = memo(function BurgerIcon({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="focus:outline-none">
      {isOpen ? (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="40"
            height="40"
            rx="20"
            fill="white"
            fillOpacity="0.08"
          />
          <rect
            x="0.5"
            y="0.5"
            width="39"
            height="39"
            rx="19.5"
            stroke="url(#paint0_linear_2039_14182)"
            strokeOpacity="0.16"
          />
          <path
            d="M21.0607 20L24.0295 17.0312C24.1704 16.8906 24.2496 16.6997 24.2498 16.5007C24.25 16.3016 24.171 16.1106 24.0304 15.9697C23.8897 15.8288 23.6989 15.7495 23.4998 15.7494C23.3007 15.7492 23.1097 15.8281 22.9688 15.9687L20.0001 18.9375L17.0313 15.9687C16.8904 15.8278 16.6993 15.7487 16.5001 15.7487C16.3008 15.7487 16.1097 15.8278 15.9688 15.9687C15.8279 16.1096 15.7488 16.3007 15.7488 16.5C15.7488 16.6992 15.8279 16.8903 15.9688 17.0312L18.9376 20L15.9688 22.9687C15.8279 23.1096 15.7488 23.3007 15.7488 23.5C15.7488 23.6992 15.8279 23.8903 15.9688 24.0312C16.1097 24.1721 16.3008 24.2513 16.5001 24.2513C16.6993 24.2513 16.8904 24.1721 17.0313 24.0312L20.0001 21.0625L22.9688 24.0312C23.1097 24.1721 23.3008 24.2513 23.5001 24.2513C23.6993 24.2513 23.8904 24.1721 24.0313 24.0312C24.1722 23.8903 24.2514 23.6992 24.2514 23.5C24.2514 23.3007 24.1722 23.1096 24.0313 22.9687L21.0607 20Z"
            fill="#D9D9D9"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2039_14182"
              x1="20"
              y1="40"
              x2="20"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="40"
            height="40"
            rx="20"
            fill="white"
            fillOpacity="0.08"
          />
          <rect
            x="0.5"
            y="0.5"
            width="39"
            height="39"
            rx="19.5"
            stroke="url(#paint0_linear_2135_2332)"
            strokeOpacity="0.16"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.6585 27H22.3191V26.9993C23.2174 26.9993 23.9455 26.2712 23.9455 25.3729C23.9455 24.4746 23.2174 23.7465 22.3191 23.7465H19.285V14.6264C19.285 13.7281 18.5569 13 17.6585 13C16.7602 13 16.0321 13.7281 16.0321 14.6264V25.3736C16.0321 26.2719 16.7602 27 17.6585 27ZM11.4226 23.1259C11.4226 24.0242 12.1507 24.7523 13.049 24.7523C13.9474 24.7523 14.6754 24.0242 14.6754 23.1259V16.8749C14.6754 15.9766 13.9474 15.2485 13.049 15.2485C12.1507 15.2485 11.4226 15.9766 11.4226 16.8749V23.1259ZM22.3191 22.5038C21.4208 22.5038 20.6927 21.7757 20.6927 20.8774V14.6264C20.6927 13.7281 21.4208 13 22.3191 13C23.2175 13 23.9455 13.7281 23.9455 14.6264V20.8774C23.9455 21.7757 23.2175 22.5038 22.3191 22.5038ZM25.3016 23.1259C25.3016 24.0242 26.0296 24.7523 26.928 24.7523C27.8263 24.7523 28.5544 24.0242 28.5544 23.1259V16.8749C28.5544 15.9766 27.8263 15.2485 26.928 15.2485C26.0296 15.2485 25.3016 15.9766 25.3016 16.8749V23.1259ZM8.44952 21.6389C9.35463 21.6389 10.0884 20.9051 10.0884 20C10.0884 19.0949 9.35463 18.3612 8.44952 18.3612C7.54441 18.3612 6.81067 19.0949 6.81067 20C6.81067 20.9051 7.54441 21.6389 8.44952 21.6389ZM33.1894 20C33.1894 20.9051 32.4557 21.6389 31.5506 21.6389C30.6455 21.6389 29.9117 20.9051 29.9117 20C29.9117 19.0949 30.6455 18.3612 31.5506 18.3612C32.4557 18.3612 33.1894 19.0949 33.1894 20Z"
            fill="url(#paint1_linear_2135_2332)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2135_2332"
              x1="20"
              y1="40"
              x2="20"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2135_2332"
              x1="6.81067"
              y1="28.75"
              x2="22.3664"
              y2="-0.760711"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FD98A2" />
              <stop offset="0.315" stopColor="#FB2671" />
              <stop offset="0.675" stopColor="#A42CCD" />
              <stop offset="1" stopColor="#7F4AFB" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </button>
  );
});

export const BurgerIconListenThreeDots = memo(
  function BurgerIconListenThreeDots({
    isOpen,
    onClick,
  }: {
    isOpen: boolean;
    onClick: () => void;
  }) {
    return (
      <button onClick={onClick} className="focus:outline-none">
        {isOpen ? (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="40"
              height="40"
              rx="20"
              fill="white"
              fillOpacity="0.08"
            />
            <rect
              x="0.5"
              y="0.5"
              width="39"
              height="39"
              rx="19.5"
              stroke="url(#paint0_linear_2039_14182)"
              strokeOpacity="0.16"
            />
            <path
              d="M21.0607 20L24.0295 17.0312C24.1704 16.8906 24.2496 16.6997 24.2498 16.5007C24.25 16.3016 24.171 16.1106 24.0304 15.9697C23.8897 15.8288 23.6989 15.7495 23.4998 15.7494C23.3007 15.7492 23.1097 15.8281 22.9688 15.9687L20.0001 18.9375L17.0313 15.9687C16.8904 15.8278 16.6993 15.7487 16.5001 15.7487C16.3008 15.7487 16.1097 15.8278 15.9688 15.9687C15.8279 16.1096 15.7488 16.3007 15.7488 16.5C15.7488 16.6992 15.8279 16.8903 15.9688 17.0312L18.9376 20L15.9688 22.9687C15.8279 23.1096 15.7488 23.3007 15.7488 23.5C15.7488 23.6992 15.8279 23.8903 15.9688 24.0312C16.1097 24.1721 16.3008 24.2513 16.5001 24.2513C16.6993 24.2513 16.8904 24.1721 17.0313 24.0312L20.0001 21.0625L22.9688 24.0312C23.1097 24.1721 23.3008 24.2513 23.5001 24.2513C23.6993 24.2513 23.8904 24.1721 24.0313 24.0312C24.1722 23.8903 24.2514 23.6992 24.2514 23.5C24.2514 23.3007 24.1722 23.1096 24.0313 22.9687L21.0607 20Z"
              fill="#D9D9D9"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2039_14182"
                x1="20"
                y1="40"
                x2="20"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <ListenThreeDots />
        )}
      </button>
    );
  }
);
