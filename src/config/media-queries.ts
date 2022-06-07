export const BREAKPOINT_VALUES = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const BREAKPOINTS = {
  // sm: `100%`,
  sm: `${BREAKPOINT_VALUES.sm / 16}rem`,
  md: `${BREAKPOINT_VALUES.md / 16}rem`,
  lg: `${BREAKPOINT_VALUES.lg / 16}rem`,
  xl: `${BREAKPOINT_VALUES.xl / 16}rem`,
  "2xl": `${BREAKPOINT_VALUES["2xl"] / 16}rem`,
};

export const MEDIA_BREAKPOINTS = {
  sm: `(min-width: ${BREAKPOINTS.sm})`,
  md: `(min-width: ${BREAKPOINTS.md})`,
  lg: `(min-width: ${BREAKPOINTS.lg})`,
  xl: `(min-width: ${BREAKPOINTS.xl})`,
  "2xl": `(min-width: ${BREAKPOINTS["2xl"]})`,
};
