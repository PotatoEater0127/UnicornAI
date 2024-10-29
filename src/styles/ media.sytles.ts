/* eslint-disable @typescript-eslint/no-explicit-any */

import { css } from "styled-components";

const breakpoints = {
  xs: 480,
  sm: 768,
  md: 1279,
  lg: 1280,
};

export const media = {
  xs: (styles: any) => css`
    @media (max-width: ${breakpoints.xs}px) {
      ${styles}
    }
  `,
  sm: (styles: any) => css`
    @media (min-width: ${breakpoints.xs + 1}px) and (max-width: ${breakpoints.sm}px) {
      ${styles}
    }
  `,
  md: (styles: any) => css`
    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.md}px) {
      ${styles}
    }
  `,
  lg: (styles: any) => css`
    @media (min-width: ${breakpoints.lg}px) {
      ${styles}
    }
  `,
};
