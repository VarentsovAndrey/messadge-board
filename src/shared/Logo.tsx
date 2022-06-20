import React, { useState } from 'react';

interface Props {
  id: string;
}

const Logo = ({ id }: Props) => {
  switch (id) {
    case 'svg':
      return (
        <svg
          width="103"
          height="20"
          viewBox="0 0 103 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5858 8.36396C10.8047 9.14501 10.8047 10.4113 11.5858 11.1924L15.4749 15.0815L11.1924 19.364C10.4113 20.145 9.14501 20.145 8.36396 19.364L0.585786 11.5858C-0.195262 10.8047 -0.195262 9.53841 0.585786 8.75736L8.36396 0.979186C9.14501 0.198137 10.4113 0.198137 11.1924 0.979186L15.0815 4.86827L11.5858 8.36396ZM15.0815 4.86827L19.364 0.585786C20.145 -0.195262 21.4113 -0.195262 22.1924 0.585786L29.9706 8.36396C30.7516 9.14501 30.7516 10.4113 29.9706 11.1924L22.1924 18.9706C21.4113 19.7516 20.145 19.7516 19.364 18.9706L15.4749 15.0815L18.9706 11.5858C19.7516 10.8047 19.7516 9.53841 18.9706 8.75736L15.0815 4.86827Z"
            fill="url(#paint0_linear_6516_1458)"
          />
          <path
            d="M41.2764 16.16C40.1457 16.16 39.1217 15.9147 38.2044 15.424C37.2977 14.9227 36.5831 14.2347 36.0604 13.36C35.5484 12.4853 35.2924 11.4987 35.2924 10.4C35.2924 9.30133 35.5537 8.31467 36.0764 7.44C36.5991 6.56533 37.3137 5.88267 38.2204 5.392C39.1377 4.89067 40.1617 4.64 41.2924 4.64C42.2097 4.64 43.0471 4.8 43.8044 5.12C44.5617 5.44 45.2017 5.904 45.7244 6.512L44.3804 7.776C43.5697 6.90133 42.5724 6.464 41.3884 6.464C40.6204 6.464 39.9324 6.63467 39.3244 6.976C38.7164 7.30667 38.2417 7.77067 37.9004 8.368C37.5591 8.96533 37.3884 9.64267 37.3884 10.4C37.3884 11.1573 37.5591 11.8347 37.9004 12.432C38.2417 13.0293 38.7164 13.4987 39.3244 13.84C39.9324 14.1707 40.6204 14.336 41.3884 14.336C42.5724 14.336 43.5697 13.8933 44.3804 13.008L45.7244 14.288C45.2017 14.896 44.5564 15.36 43.7884 15.68C43.0311 16 42.1937 16.16 41.2764 16.16ZM55.6586 6.56H51.9466V16H49.8826V6.56H46.1866V4.8H55.6586V6.56ZM57.4685 4.8H59.5165V12.752L65.5325 4.8H67.4685V16H65.4205V8.064L59.4045 16H57.4685V4.8ZM74.7368 11.28H72.6568V16H70.6088V4.8H72.6568V9.488H74.8008L78.0168 4.8H80.2248L76.4008 10.224L80.3688 16H78.0168L74.7368 11.28ZM90.1806 14.256V16H81.7806V4.8H89.9566V6.544H83.8606V9.456H89.2686V11.168H83.8606V14.256H90.1806ZM97.1074 4.8C98.0781 4.8 98.9207 4.96 99.6354 5.28C100.361 5.6 100.915 6.05867 101.299 6.656C101.683 7.25333 101.875 7.96267 101.875 8.784C101.875 9.59467 101.683 10.304 101.299 10.912C100.915 11.5093 100.361 11.968 99.6354 12.288C98.9207 12.608 98.0781 12.768 97.1074 12.768H94.5794V16H92.4994V4.8H97.1074ZM97.0114 11.008C97.9181 11.008 98.6061 10.816 99.0754 10.432C99.5447 10.048 99.7794 9.49867 99.7794 8.784C99.7794 8.06933 99.5447 7.52 99.0754 7.136C98.6061 6.752 97.9181 6.56 97.0114 6.56H94.5794V11.008H97.0114Z"
            fill="#424242"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6516_1458"
              x1="5.67172"
              y1="5.77832"
              x2="13.1717"
              y2="13.7783"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFAC28" />
              <stop offset="1" stopColor="#FFC328" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'link':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="#2A2F37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="#2A2F37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );

    case 'admin':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.4"
            d="M0.621094 18V15.9492L1.83984 15.7734L7.26562 0.9375H10.7695L16.1602 15.7734L17.3789 15.9492V18H11.5664V15.9492L12.75 15.7383L12 13.3945H6L5.25 15.7383L6.43359 15.9492V18H0.621094ZM6.80859 10.875H11.1914L9.19922 5.02734L9.03516 4.51172H8.96484L8.78906 5.0625L6.80859 10.875Z"
            fill="#2A2F37"
          />
        </svg>
      );

    case 'ads':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.66675 2.5H6.66675C7.5508 2.5 8.39865 2.85119 9.02377 3.47631C9.64889 4.10143 10.0001 4.94928 10.0001 5.83333V17.5C10.0001 16.837 9.73669 16.2011 9.26785 15.7322C8.79901 15.2634 8.16312 15 7.50008 15H1.66675V2.5Z"
            stroke="#2A2F37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z"
            stroke="#2A2F37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'exit':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
            stroke="#2A2F37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 2.5H17.5V7.5"
            stroke="#2A2F37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33325 11.6667L17.4999 2.5"
            stroke="#2A2F37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'plus':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 4.1665V15.8332"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16675 10H15.8334"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'search':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#2C2D2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.0001 20.9999L16.6501 16.6499"
            stroke="#2C2D2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'arrow-left':
      return (
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 13L1 7L7 1"
            stroke="#2C2D2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0.999999L7 7L1 13"
            stroke="#2C2D2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'arrows':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12 7L16 11H8L12 7Z" fill="#2C2D2E" />
          <path d="M12 17L8 13L16 13L12 17Z" fill="#2C2D2E" />
        </svg>
      );
    case 'edit':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke="#2C2D2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            stroke="#2C2D2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            stroke="#2C2D2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'line':
      return (
        <svg
          width="263"
          height="1"
          viewBox="0 0 263 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="263" y2="0.5" stroke="#2A2F37" strokeOpacity="0.1" />
        </svg>
      );

    case 'eye':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <g clipPath="url(#clip0_3724_1160)">
              <path
                d="M0.833374 10.0002C0.833374 10.0002 4.16671 3.3335 10 3.3335C15.8334 3.3335 19.1667 10.0002 19.1667 10.0002C19.1667 10.0002 15.8334 16.6668 10 16.6668C4.16671 16.6668 0.833374 10.0002 0.833374 10.0002Z"
                stroke="#2C2D2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                stroke="#2C2D2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <rect x="0.5" y="0.5" width="19" height="19" stroke="#2C2D2E" strokeOpacity="0.08" />
          </g>
          <defs>
            <clipPath id="clip0_3724_1160">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'editor':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.1666 2.49993C14.3855 2.28106 14.6453 2.10744 14.9313 1.98899C15.2173 1.87054 15.5238 1.80957 15.8333 1.80957C16.1428 1.80957 16.4493 1.87054 16.7353 1.98899C17.0213 2.10744 17.2811 2.28106 17.5 2.49993C17.7188 2.7188 17.8924 2.97863 18.0109 3.2646C18.1294 3.55057 18.1903 3.85706 18.1903 4.16659C18.1903 4.47612 18.1294 4.78262 18.0109 5.06859C17.8924 5.35455 17.7188 5.61439 17.5 5.83326L6.24996 17.0833L1.66663 18.3333L2.91663 13.7499L14.1666 2.49993Z"
            stroke="#2C2D2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'delete':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path
              d="M2.5 5H4.16667H17.5"
              stroke="#2C2D2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66663 4.99984V3.33317C6.66663 2.89114 6.84222 2.46722 7.15478 2.15466C7.46734 1.8421 7.89127 1.6665 8.33329 1.6665H11.6666C12.1087 1.6665 12.5326 1.8421 12.8451 2.15466C13.1577 2.46722 13.3333 2.89114 13.3333 3.33317V4.99984M15.8333 4.99984V16.6665C15.8333 17.1085 15.6577 17.5325 15.3451 17.845C15.0326 18.1576 14.6087 18.3332 14.1666 18.3332H5.83329C5.39127 18.3332 4.96734 18.1576 4.65478 17.845C4.34222 17.5325 4.16663 17.1085 4.16663 16.6665V4.99984H15.8333Z"
              stroke="#2C2D2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.33337 9.1665V14.1665"
              stroke="#2C2D2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.6666 9.1665V14.1665"
              stroke="#2C2D2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="0.5" y="0.5" width="19" height="19" stroke="#2C2D2E" strokeOpacity="0.08" />
          </g>
        </svg>
      );
    case 'arrow-back':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 12L5 12"
            stroke="#2A2F37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 19L5 12L12 5"
            stroke="#2A2F37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'arrow-down':
      return (
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1L7 7L13 1"
            stroke="#2A2F37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return <svg></svg>;
  }
};

export default Logo;
