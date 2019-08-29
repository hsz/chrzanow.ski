import facepaint from 'facepaint';

export { default as styled } from '@emotion/styled';
export { css } from '@emotion/core';

export enum Colors {
  black = '#000',
  blue = '#0b3e50',
  yellow = '#9e9c18',
  green = '#2b9e28',
  orange = '#9e5d26',
}

export const breakpoints = [576, 992, 1200, 1300];
export const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
