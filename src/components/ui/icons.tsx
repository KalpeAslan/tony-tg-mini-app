import React from 'react';

// List of available icon names
export type IconName =
  | 'shack'
  | 'airdrop'
  | 'packs'
  | 'invites'
  | 'selected-shack'
  | 'selected-airdrop'
  | 'selected-packs'
  | 'selected-invites';

export const IconDefs = () => (
  <div className="absolute w-0 h-0 icon-defs">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        {/* SHACK */}
        <symbol id="shack" viewBox="0 0 44 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: 'luminosity' }} filter="url(#filter0_d_49_288)">
            <path
              d="M39.9822 13.2865C39.9392 7.93945 38.5084 2.72146 37.7445 2.01138C36.9484 1.3551 29.622 0.0532889 22.005 0.0102539C14.3774 0.0425301 7.05095 1.34434 6.25483 2.00062C5.48023 2.72146 4.06013 7.93945 4.01709 13.2865C3.84496 18.6336 5.10369 24.2067 5.80298 25.6591C6.45924 26.8856 14.1299 28.5317 22.005 28.6285C29.8802 28.5317 37.5401 26.8856 38.2071 25.6591C38.9064 24.2067 40.1651 18.6336 39.993 13.2865H39.9822Z"
              fill="url(#paint0_radial_49_288)"
            />
            <path
              d="M4.01795 15.3748C4.16856 19.9903 5.19061 24.3368 5.80383 25.5956C6.46009 26.8221 14.1308 28.4682 22.0059 28.565C29.881 28.4682 37.541 26.8221 38.208 25.5956C38.8104 24.3368 39.8432 19.9903 39.9939 15.3748C39.9939 15.4178 39.9939 15.4608 39.9939 15.5039C40.166 20.851 38.9073 26.424 38.208 27.8764C37.5517 29.1029 29.881 30.749 22.0059 30.8458C14.1308 30.749 6.47085 29.1029 5.80383 27.8764C5.09378 26.424 3.83505 20.851 4.01795 15.5039C4.01795 15.4608 4.01795 15.4178 4.01795 15.3748Z"
              fill="#E07A19"
            />
            <path
              d="M21.9904 4C21.4822 4 13.3757 12.4911 11.1321 14.8959C10.8842 15.1686 11.0205 15.6024 11.38 15.6644C12.2353 15.8379 13.4624 16.123 13.5368 16.3338C13.6483 16.6685 14.8011 24.2423 14.9127 24.4654H18.4329V18.1807C18.4329 17.9328 18.6436 17.7221 18.8916 17.7221H25.0892C25.3495 17.7221 25.5478 17.9328 25.5478 18.1807V24.4654H29.0681C29.1796 24.2547 30.3324 16.6685 30.444 16.3338C30.5183 16.123 31.7455 15.8379 32.6007 15.6644C32.9602 15.59 33.0966 15.1562 32.8486 14.8959C30.6051 12.4787 22.5234 4 21.9904 4Z"
              fill="#6D3E95"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_49_288"
              x="0"
              y="0"
              width="44.0098"
              height="38.8458"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_49_288" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_49_288"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_49_288"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(22.1465 34.0204) scale(34.2079 30.6824)"
            >
              <stop stopColor="#FFB42A" />
              <stop offset="0.31" stopColor="#FFBF34" />
              <stop offset="0.85" stopColor="#FFDE4E" />
              <stop offset="1" stopColor="#FFE857" />
            </radialGradient>
          </defs>
        </symbol>

        {/* AIRDROP */}
        <symbol id="airdrop" viewBox="0 0 44 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: 'luminosity' }} filter="url(#filter0_d_66_1085)">
            <path
              d="M39.9725 13.3529C39.9294 7.97909 38.499 2.73501 37.7353 2.02138C36.9394 1.36182 29.615 0.053504 22.0002 0.0102539C14.3746 0.0426915 7.05016 1.35101 6.25426 2.01057C5.47987 2.73501 4.06016 7.97909 4.01713 13.3529C3.84505 18.7267 5.10343 24.3276 5.80253 25.7873C6.45861 27.02 14.1272 28.6743 22.0002 28.7716C29.8731 28.6743 37.531 27.02 38.1978 25.7873C38.8969 24.3276 40.1553 18.7267 39.9832 13.3529H39.9725Z"
              fill="url(#paint0_radial_66_1085)"
            />
            <path
              d="M39.9725 13.3529C39.9294 7.97909 38.499 2.73501 37.7353 2.02138C36.9394 1.36182 29.615 0.053504 22.0002 0.0102539C14.3746 0.0426915 7.05016 1.35101 6.25426 2.01057C5.47987 2.73501 4.06016 7.97909 4.01713 13.3529C3.84505 18.7267 5.10343 24.3276 5.80253 25.7873C6.45861 27.02 14.1272 28.6743 22.0002 28.7716C29.8731 28.6743 37.531 27.02 38.1978 25.7873C38.8969 24.3276 40.1553 18.7267 39.9832 13.3529H39.9725Z"
              fill="url(#paint1_linear_66_1085)"
              fillOpacity="0.55"
            />
            <path
              d="M4.01794 15.4515C4.16852 20.0901 5.19028 24.4584 5.80334 25.7234C6.45942 26.9561 14.128 28.6104 22.001 28.7077C29.8739 28.6104 37.5318 26.9561 38.1986 25.7234C38.8009 24.4584 39.8334 20.0901 39.984 15.4515C39.984 15.4948 39.984 15.538 39.984 15.5813C40.1561 20.9551 38.8977 26.556 38.1986 28.0157C37.5425 29.2483 29.8739 30.9026 22.001 31C14.128 30.9026 6.47017 29.2483 5.80334 28.0157C5.09348 26.556 3.8351 20.9551 4.01794 15.5813C4.01794 15.538 4.01794 15.4948 4.01794 15.4515Z"
              fill="#E07A19"
            />
            <path
              d="M31.9962 10.4941C31.6585 7.68867 29.0868 5.58086 26.1218 4.60488C27.4726 6.06699 28.4374 8.33809 28.4374 11.125H29.4802L25.1533 15.9307C25.0605 15.9084 24.9752 15.875 24.875 15.875H23.0937V11.125H27.25C27.25 6.85 24.6931 4 22.5 4C20.3069 4 17.7501 6.85 17.7501 11.125H21.9063V15.875H20.125C20.0248 15.875 19.9395 15.9084 19.8467 15.9307L15.5198 11.125H16.5626C16.5626 8.33809 17.5274 6.06699 18.8782 4.60488C15.9132 5.58457 13.3415 7.69238 13.0038 10.4941C12.963 10.8318 13.2562 11.125 13.5976 11.125H13.9204L18.9932 16.7619C18.9672 16.8584 18.9338 16.9549 18.9338 17.0625V21.8125C18.9338 22.4693 19.4645 23 20.1213 23H24.8713C25.5281 23 26.0588 22.4693 26.0588 21.8125V17.0625C26.0588 16.9549 26.0254 16.8621 25.9994 16.7619L31.0759 11.125H31.3987C31.7438 11.125 32.037 10.8355 31.9962 10.4941Z"
              fill="#B85700"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_66_1085"
              x="0"
              y="0"
              width="44"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_66_1085" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_66_1085"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_66_1085"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(22.1416 34.1904) scale(34.1985 30.8358)"
            >
              <stop stopColor="#FFB42A" />
              <stop offset="0.31" stopColor="#FFBF34" />
              <stop offset="0.85" stopColor="#FFDE4E" />
              <stop offset="1" stopColor="#FFE857" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_66_1085"
              x1="46.3195"
              y1="-8.68832"
              x2="2.91225"
              y2="28.5354"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </symbol>

        {/* INVITES */}
        <symbol id="invites" viewBox="0 0 44 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: 'luminosity' }} filter="url(#filter0_d_49_295)">
            <path
              d="M39.9822 13.2865C39.9392 7.93945 38.5084 2.72146 37.7445 2.01138C36.9484 1.3551 29.622 0.0532889 22.005 0.0102539C14.3774 0.0425301 7.05095 1.34434 6.25483 2.00062C5.48023 2.72146 4.06013 7.93945 4.01709 13.2865C3.84496 18.6336 5.10369 24.2067 5.80298 25.6591C6.45924 26.8856 14.1299 28.5317 22.005 28.6285C29.8802 28.5317 37.5401 26.8856 38.2071 25.6591C38.9064 24.2067 40.1651 18.6336 39.993 13.2865H39.9822Z"
              fill="url(#paint0_radial_49_295)"
            />
            <path
              d="M4.01795 15.3748C4.16856 19.9903 5.19061 24.3368 5.80383 25.5956C6.46009 26.8221 14.1308 28.4682 22.0059 28.565C29.881 28.4682 37.541 26.8221 38.208 25.5956C38.8104 24.3368 39.8432 19.9903 39.9939 15.3748C39.9939 15.4178 39.9939 15.4608 39.9939 15.5039C40.166 20.851 38.9073 26.424 38.208 27.8764C37.5517 29.1029 29.881 30.749 22.0059 30.8458C14.1308 30.749 6.47085 29.1029 5.80383 27.8764C5.09378 26.424 3.83505 20.851 4.01795 15.5039C4.01795 15.4608 4.01795 15.4178 4.01795 15.3748Z"
              fill="#E07A19"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.8 12.4C27.8063 12.6797 27.7567 12.9575 27.6541 13.2177C27.5514 13.478 27.3978 13.7155 27.2023 13.9155C27.0068 14.1156 26.7733 14.2746 26.5155 14.3831C26.2577 14.4917 25.9808 14.5476 25.7011 14.5477C25.4213 14.5477 25.1444 14.4915 24.8865 14.3831C24.6287 14.2747 24.3951 14.116 24.1995 13.916C24.0038 13.7161 23.8501 13.4789 23.7474 13.2188C23.6446 12.9586 23.5949 12.6807 23.6011 12.401C23.6132 11.8523 23.8396 11.3303 24.2319 10.9465C24.6242 10.5627 25.1512 10.3478 25.7 10.3477C26.2488 10.3475 26.7759 10.5619 27.1684 10.9455C27.5609 11.3291 27.7876 11.8513 27.8 12.4ZM17.3 14.5C17.0203 14.5063 16.7422 14.4565 16.482 14.3539C16.2218 14.2512 15.9847 14.0977 15.7847 13.9022C15.5846 13.7067 15.4256 13.4735 15.3171 13.2157C15.2085 12.9579 15.1526 12.6808 15.1525 12.401C15.1524 12.1213 15.2083 11.8442 15.3167 11.5864C15.4251 11.3285 15.584 11.095 15.7839 10.8993C15.9839 10.7037 16.2209 10.5499 16.481 10.4471C16.7412 10.3444 17.0193 10.2948 17.2989 10.301C17.8476 10.3132 18.3698 10.5399 18.7536 10.9322C19.1374 11.3244 19.3524 11.8512 19.3525 12.4C19.3526 12.9488 19.1379 13.4759 18.7543 13.8684C18.3707 14.2608 17.8487 14.4876 17.3 14.5ZM26.6492 17.0758C25.6391 22.8277 17.3609 22.7185 16.3508 16.9666C16.2406 16.3387 16.7561 15.9858 17.3945 15.9858H25.6055C26.2439 15.9858 26.7594 16.4479 26.6492 17.0758ZM21.5 22.9C16.8685 22.9 13.1 19.1315 13.1 14.5C13.1 9.86845 16.8685 6.1 21.5 6.1C26.1315 6.1 29.9 9.86845 29.9 14.5C29.9 19.1315 26.1315 22.9 21.5 22.9ZM21.5 4C15.7009 4 11 8.70085 11 14.5C11 20.2991 15.7009 25 21.5 25C27.2991 25 32 20.2991 32 14.5C32 8.70085 27.2991 4 21.5 4Z"
              fill="#565656"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_49_295"
              x="0"
              y="0"
              width="44.0098"
              height="38.8458"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_49_295" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_49_295"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_49_295"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(22.1465 34.0204) scale(34.2079 30.6824)"
            >
              <stop stopColor="#FFB42A" />
              <stop offset="0.31" stopColor="#FFBF34" />
              <stop offset="0.85" stopColor="#FFDE4E" />
              <stop offset="1" stopColor="#FFE857" />
            </radialGradient>
          </defs>
        </symbol>

        {/* PACKS */}
        <symbol id="packs" viewBox="0 0 44 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: 'luminosity' }} filter="url(#filter0_d_66_1076)">
            <path
              d="M39.9823 13.2865C39.9392 7.93945 38.5084 2.72146 37.7445 2.01138C36.9484 1.3551 29.622 0.0532889 22.0051 0.0102539C14.3774 0.0425301 7.05098 1.34434 6.25486 2.00062C5.48026 2.72146 4.06016 7.93945 4.01712 13.2865C3.84499 18.6336 5.10372 24.2067 5.80301 25.6591C6.45927 26.8856 14.13 28.5317 22.0051 28.6285C29.8802 28.5317 37.5401 26.8856 38.2071 25.6591C38.9064 24.2067 40.1652 18.6336 39.993 13.2865H39.9823Z"
              fill="url(#paint0_radial_66_1076)"
            />
            <path
              d="M4.01795 15.3748C4.16856 19.9903 5.19061 24.3368 5.80383 25.5956C6.46009 26.8221 14.1308 28.4682 22.0059 28.565C29.881 28.4682 37.541 26.8221 38.208 25.5956C38.8104 24.3368 39.8432 19.9903 39.9939 15.3748C39.9939 15.4178 39.9939 15.4608 39.9939 15.5039C40.166 20.851 38.9073 26.424 38.208 27.8764C37.5517 29.1029 29.881 30.749 22.0059 30.8458C14.1308 30.749 6.47085 29.1029 5.80383 27.8764C5.09378 26.424 3.83505 20.851 4.01795 15.5039C4.01795 15.4608 4.01795 15.4178 4.01795 15.3748Z"
              fill="#E07A19"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 4C16.3431 4 15 5.34315 15 7V22C15 23.6569 16.3431 25 18 25H26C27.6569 25 29 23.6569 29 22V7C29 5.34315 27.6569 4 26 4H18ZM22 19C24.2091 19 26 17.2091 26 15C26 12.7909 24.2091 11 22 11C19.7909 11 18 12.7909 18 15C18 17.2091 19.7909 19 22 19Z"
              fill="#6D3E95"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_66_1076"
              x="0"
              y="0"
              width="44.0099"
              height="38.8458"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_66_1076" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_66_1076"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_66_1076"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(22.1466 34.0204) scale(34.2079 30.6824)"
            >
              <stop stopColor="#FFB42A" />
              <stop offset="0.31" stopColor="#FFBF34" />
              <stop offset="0.85" stopColor="#FFDE4E" />
              <stop offset="1" stopColor="#FFE857" />
            </radialGradient>
          </defs>
        </symbol>

        {/* AIRDROP SELECTED */}
        <symbol
          id="airdrop-selected"
          viewBox="0 0 69 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_0_1)">
            <path
              d="M64.3515 22.2849C64.2794 13.3164 61.8794 4.56453 60.5983 3.37355C59.263 2.2728 46.9747 0.0893315 34.1992 0.0171509C21.4056 0.0712864 9.11733 2.25475 7.78203 3.35551C6.48283 4.56453 4.10096 13.3164 4.02878 22.2849C3.74007 31.2533 5.85127 40.6007 7.02416 43.0368C8.12488 45.094 20.9906 47.8549 34.1992 48.0173C47.4077 47.8549 60.2554 45.094 61.3742 43.0368C62.5471 40.6007 64.6583 31.2533 64.3696 22.2849H64.3515Z"
              fill="url(#paint0_radial_0_1)"
            />
            <path
              d="M64.3515 22.2849C64.2794 13.3164 61.8794 4.56453 60.5983 3.37355C59.263 2.2728 46.9747 0.0893315 34.1992 0.0171509C21.4056 0.0712864 9.11733 2.25475 7.78203 3.35551C6.48283 4.56453 4.10096 13.3164 4.02878 22.2849C3.74007 31.2533 5.85127 40.6007 7.02416 43.0368C8.12488 45.094 20.9906 47.8549 34.1992 48.0173C47.4077 47.8549 60.2554 45.094 61.3742 43.0368C62.5471 40.6007 64.6583 31.2533 64.3696 22.2849H64.3515Z"
              fill="url(#paint1_linear_0_1)"
              fillOpacity="0.55"
            />
            <path
              d="M4.0301 25.7873C4.28272 33.5287 5.99695 40.8189 7.02549 42.9302C8.1262 44.9873 20.9919 47.7483 34.2005 47.9107C47.4091 47.7483 60.2567 44.9873 61.3755 42.9302C62.386 40.8189 64.1183 33.5287 64.3709 25.7873C64.3709 25.8595 64.3709 25.9317 64.3709 26.0038C64.6596 34.9723 62.5484 44.3197 61.3755 46.7558C60.2748 48.8129 47.4091 51.5738 34.2005 51.7362C20.9919 51.5738 8.14425 48.8129 7.02549 46.7558C5.83455 44.3197 3.72334 34.9723 4.0301 26.0038C4.0301 25.9317 4.0301 25.8595 4.0301 25.7873Z"
              fill="#E07A19"
            />
          </g>
          <path
            d="M49.9936 17.9375C49.4248 13.2125 45.0936 9.6625 40.0999 8.01875C42.3749 10.4813 43.9999 14.3063 43.9999 19H45.7561L38.4687 27.0938C38.3125 27.0562 38.1687 27 38 27H35V19H41.9999C41.9999 11.8 37.6937 7 34 7C30.3063 7 26.0001 11.8 26.0001 19H33V27H30C29.8313 27 29.6875 27.0562 29.5313 27.0938L22.2439 19H24.0001C24.0001 14.3063 25.6251 10.4813 27.9001 8.01875C22.9064 9.66875 18.5752 13.2188 18.0064 17.9375C17.9377 18.5063 18.4314 19 19.0064 19H19.5502L28.0938 28.4937C28.0501 28.6562 27.9938 28.8188 27.9938 29V37C27.9938 38.1063 28.8876 39 29.9938 39H37.9937C39.0999 39 39.9937 38.1063 39.9937 37V29C39.9937 28.8188 39.9374 28.6625 39.8937 28.4937L48.4436 19H48.9873C49.5686 19 50.0623 18.5125 49.9936 17.9375Z"
            fill="#B85700"
          />
          <defs>
            <filter
              id="filter0_d_0_1"
              x="0"
              y="0"
              width="68.3977"
              height="59.7363"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(34.4365 57.0608) scale(57.3754 51.4623)"
            >
              <stop stopColor="#FFB42A" />
              <stop offset="0.31" stopColor="#FFBF34" />
              <stop offset="0.85" stopColor="#FFDE4E" />
              <stop offset="1" stopColor="#FFE857" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="75"
              y1="-14.5"
              x2="2.50003"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </symbol>

        {/* PACKS SELECTED */}
        <symbol
          id="packs-selected"
          viewBox="0 0 68 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_78_205)">
            <path
              d="M63.954 22.3985C63.8823 13.3844 61.4982 4.58783 60.2255 3.39078C58.899 2.28442 46.6916 0.0898215 34.0002 0.0172729C21.2909 0.0716844 9.08352 2.26628 7.75702 3.37265C6.46637 4.58783 4.10018 12.4682 4.02848 22.3985C3.74167 31.4127 5.83897 40.8077 7.00414 43.2562C8.09761 45.3239 20.8786 48.0989 34.0002 48.2621C47.1218 48.0989 59.8849 45.3239 60.9963 43.2562C62.1614 40.8077 64.2587 31.4127 63.9719 22.3985H63.954Z"
              fill="url(#paint0_radial_78_205)"
            />
            <path
              d="M4.0299 25.9188C4.28086 33.6997 5.9838 41.0271 7.00556 43.1491C8.09903 45.2168 20.88 47.9917 34.0016 48.155C47.1232 47.9917 59.8863 45.2168 60.9977 43.1491C62.0015 41.0271 63.7224 33.6997 63.9734 25.9188C63.9734 25.9914 63.9734 26.0639 63.9734 26.1365C64.2602 35.1506 62.1629 44.5457 60.9977 46.9942C59.9042 49.0618 47.1232 51.8368 34.0016 52C20.88 51.8368 7.97972 49.0618 6.90538 46.9942C5.76172 44.5457 3.73433 35.1506 4.02891 26.1365C4.02891 26.0639 4.02891 25.9914 4.02891 25.9188Z"
              fill="#E07A19"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.3284 6.74323C23.6715 6.74323 22.3284 8.08637 22.3284 9.74323V39.1451C22.3284 40.802 23.6715 42.1451 25.3284 42.1451H42.6553C44.3122 42.1451 45.6553 40.802 45.6553 39.1451V9.74323C45.6553 8.08637 44.3122 6.74323 42.6553 6.74323H25.3284ZM33.9918 32.0303C37.6727 32.0303 40.6567 29.0113 40.6567 25.2871C40.6567 21.5629 37.6727 18.5439 33.9918 18.5439C30.311 18.5439 27.327 21.5629 27.327 25.2871C27.327 29.0113 30.311 32.0303 33.9918 32.0303Z"
              fill="#B85700"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_78_205"
              x="0"
              y="0"
              width="68"
              height="60.0001"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_78_205" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_78_205"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_78_205"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(34.2359 57.3517) scale(56.9975 51.7246)"
            >
              <stop stopColor="#FFB42A" />
              <stop offset="0.31" stopColor="#FFBF34" />
              <stop offset="0.85" stopColor="#FFDE4E" />
              <stop offset="1" stopColor="#FFE857" />
            </radialGradient>
          </defs>
        </symbol>

        {/* INVITES SELECTED */}
        <symbol
          id="invites-selected"
          viewBox="0 0 66 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_66_1070)">
            <path
              d="M61.9569 20.8759C61.8876 12.468 59.5828 4.26316 58.3525 3.14662C57.0701 2.11466 45.269 0.0676692 33 0C20.7137 0.0507519 8.91257 2.09774 7.63021 3.1297C6.38252 4.26316 4.09508 12.468 4.02576 20.8759C3.7485 29.2838 5.776 38.047 6.90239 40.3308C7.95947 42.2594 20.3151 44.8477 33 45C45.6849 44.8477 58.0232 42.2594 59.0976 40.3308C60.224 38.047 62.2515 29.2838 61.9742 20.8759H61.9569Z"
              fill="url(#paint0_radial_66_1070)"
            />
            <path
              d="M4.02891 24C4.2715 31.4583 5.91767 38.4819 6.90538 40.516C7.9624 42.4979 20.3174 45.1579 33.0016 45.3143C45.6858 45.1579 58.0234 42.4979 59.0978 40.516C60.0681 38.4819 61.7316 31.4583 61.9742 24C61.9742 24.0695 61.9742 24.1391 61.9742 24.2086C62.2515 32.8491 60.2241 41.8547 59.0978 44.2017C58.0407 46.1836 45.6858 48.8435 33.0016 49C20.3174 48.8435 7.97972 46.1836 6.90538 44.2017C5.76172 41.8547 3.73433 32.8491 4.02891 24.2086C4.02891 24.1391 4.02891 24.0695 4.02891 24Z"
              fill="#E07A19"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.4 19.6C42.4099 20.0528 42.332 20.5027 42.1707 20.924C42.0094 21.3453 41.768 21.7298 41.4608 22.0537C41.1535 22.3776 40.7866 22.635 40.3815 22.8107C39.9763 22.9865 39.5412 23.0771 39.1017 23.0772C38.6621 23.0773 38.2269 22.9863 37.8217 22.8107C37.4165 22.6352 37.0494 22.3783 36.742 22.0545C36.4346 21.7308 36.1931 21.3469 36.0316 20.9256C35.8701 20.5044 35.7919 20.0544 35.8017 19.6017C35.8207 18.7133 36.1766 17.8681 36.793 17.2467C37.4095 16.6253 38.2376 16.2774 39.1 16.2772C39.9624 16.277 40.7907 16.624 41.4075 17.2451C42.0242 17.8662 42.3805 18.7117 42.4 19.6ZM25.9 23C25.4605 23.0102 25.0235 22.9296 24.6146 22.7634C24.2057 22.5973 23.8331 22.3487 23.5188 22.0321C23.2044 21.7156 22.9546 21.3381 22.784 20.9207C22.6134 20.5033 22.5255 20.0546 22.5254 19.6017C22.5253 19.1488 22.613 18.7002 22.7834 18.2827C22.9538 17.8652 23.2034 17.4871 23.5176 17.1704C23.8318 16.8536 24.2042 16.6046 24.6131 16.4382C25.0219 16.2719 25.4589 16.1916 25.8983 16.2017C26.7606 16.2213 27.5811 16.5883 28.1842 17.2235C28.7873 17.8586 29.1252 18.7114 29.1254 19.6C29.1256 20.4886 28.7882 21.3419 28.1854 21.9773C27.5825 22.6128 26.7622 22.9799 25.9 23ZM40.5916 27.1703C39.0043 36.4829 25.9957 36.3061 24.4084 26.9935C24.2352 25.9769 25.0453 25.4056 26.0485 25.4056H38.9515C39.9547 25.4056 40.7648 26.1537 40.5916 27.1703ZM32.5 36.6C25.2219 36.6 19.3 30.4987 19.3 23C19.3 15.5013 25.2219 9.4 32.5 9.4C39.7782 9.4 45.7 15.5013 45.7 23C45.7 30.4987 39.7782 36.6 32.5 36.6ZM32.5 6C23.3871 6 16 13.6109 16 23C16 32.3891 23.3871 40 32.5 40C41.6129 40 49 32.3891 49 23C49 13.6109 41.6129 6 32.5 6Z"
              fill="#B85700"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_66_1070"
              x="0"
              y="0"
              width="66"
              height="57"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_66_1070" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_66_1070"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_66_1070"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(33.2279 53.4783) scale(55.1006 48.2458)"
            >
              <stop stopColor="#FFB42A" />
              <stop offset="0.31" stopColor="#FFBF34" />
              <stop offset="0.85" stopColor="#FFDE4E" />
              <stop offset="1" stopColor="#FFE857" />
            </radialGradient>
          </defs>
        </symbol>

        {/* SHACK SELECTED */}
        <symbol
          id="shack-selected"
          viewBox="0 0 66 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_66_1094)">
            <path
              d="M61.9556 21.1063C61.8863 12.6122 59.5816 4.32317 58.3513 3.19518C57.0691 2.15264 45.2686 0.0846595 33.0003 0.0162964C20.7146 0.0675687 8.91413 2.13555 7.63185 3.17809C6.38422 4.32317 4.0969 12.6122 4.02759 21.1063C3.75034 29.6004 5.77773 38.4535 6.90406 40.7607C7.96108 42.7091 20.3161 45.3239 33.0003 45.4778C45.6845 45.3239 58.0221 42.7091 59.0965 40.7607C60.2228 38.4535 62.2502 29.6004 61.9729 21.1063H61.9556Z"
              fill="url(#paint0_radial_66_1094)"
            />
            <path
              d="M4.02891 24.4235C4.2715 31.7555 5.91767 38.6601 6.90538 40.6598C7.9624 42.6081 20.3174 45.223 33.0016 45.3768C45.6858 45.223 58.0234 42.6081 59.0978 40.6598C60.0681 38.6601 61.7316 31.7555 61.9742 24.4235C61.9742 24.4919 61.9742 24.5602 61.9742 24.6286C62.2515 33.1227 60.2241 41.9757 59.0978 44.283C58.0407 46.2314 45.6858 48.8462 33.0016 49.0001C20.3174 48.8462 7.97972 46.2314 6.90538 44.283C5.76172 41.9757 3.73433 33.1227 4.02891 24.6286C4.02891 24.5602 4.02891 24.4919 4.02891 24.4235Z"
              fill="#E07A19"
            />
            <path
              d="M32.9766 6.35419C32.158 6.35419 19.1011 19.8427 15.4875 23.6628C15.0882 24.096 15.3078 24.7852 15.8868 24.8836C17.2644 25.1593 19.2409 25.6122 19.3606 25.947C19.5403 26.4786 21.397 38.51 21.5767 38.8644H27.2467V28.881C27.2467 28.4871 27.5861 28.1524 27.9854 28.1524H37.9678C38.387 28.1524 38.7065 28.4871 38.7065 28.881V38.8644H44.3764C44.5561 38.5297 46.4128 26.4786 46.5925 25.947C46.7123 25.6122 48.6888 25.1593 50.0664 24.8836C50.6454 24.7655 50.865 24.0763 50.4657 23.6628C46.8521 19.823 33.8351 6.35419 32.9766 6.35419Z"
              fill="#6D3E95"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_66_1094"
              x="0"
              y="0"
              width="66"
              height="57.0001"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_66_1094" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_66_1094"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_66_1094"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(33.2281 54.043) scale(55.0976 48.7405)"
            >
              <stop stopColor="#FFB42A" />
              <stop offset="0.31" stopColor="#FFBF34" />
              <stop offset="0.85" stopColor="#FFDE4E" />
              <stop offset="1" stopColor="#FFE857" />
            </radialGradient>
          </defs>
        </symbol>
      </defs>
    </svg>
  </div>
);
