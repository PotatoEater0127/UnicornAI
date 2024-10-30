/* eslint-disable @typescript-eslint/no-explicit-any */

import { css } from "styled-components";

export const BREAK_POINTS = {
  XS: 480,
  SM: 768,
  MD: 1279,
  LG: 1280,
  MLG: 2147,
  XLG: 2560,
};

export const media = {
  xs: (styles: any) => css`
    @media (max-width: ${BREAK_POINTS.XS}px) {
      ${styles}
    }
  `,
  sm: (styles: any) => css`
    @media (min-width: ${BREAK_POINTS.XS + 1}px) and (max-width: ${BREAK_POINTS.SM}px) {
      ${styles}
    }
  `,
  md: (styles: any) => css`
    @media (min-width: ${BREAK_POINTS.SM + 1}px) and (max-width: ${BREAK_POINTS.MD}px) {
      ${styles}
    }
  `,
  lg: (styles: any) => css`
    @media (min-width: ${BREAK_POINTS.LG}px) {
      ${styles}
    }
  `,
    mlg: (styles: any) => css`
    @media (max-width: ${BREAK_POINTS.MLG}px) {
      ${styles}
    }
  `,
};
