import facepaint from 'facepaint';

export { default as styled } from '@emotion/styled';
export { css } from '@emotion/core';

export enum Colors {
  black = '#000',
  blue = '#0b3e50',
  red = '#500c0c',
  green = '#1f721d',
  orange = '#9e5d26',
}

export const breakpoints = [576, 992, 1200, 1300];
export const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
