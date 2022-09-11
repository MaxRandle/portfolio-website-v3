import { MEDIA_BREAKPOINTS } from "@config/media-queries";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* ------------------------------------------------------------------------- */
/* CSS RESET */
/* see here: https://www.joshwcomeau.com/css/custom-css-reset/ */
/* ------------------------------------------------------------------------- */

/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html,
body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root,
#__next {
  isolation: isolate;
}

/* ------------------------------------------------------------------------- */
/* THEME */
/* ------------------------------------------------------------------------- */

:root {
  /* ----------------------------------------------------------------------- */
  /* COLOR SPECTRUM */
  /* ----------------------------------------------------------------------- */

  /* grey-scale colors */

  --neutral-grey-50:   hsl(220, 10%, 97%);
  --neutral-grey-100:  hsl(220, 10%, 90%);
  --neutral-grey-200:  hsl(220, 10%, 80%);
  --neutral-grey-300:  hsl(220, 10%, 70%);
  --neutral-grey-400:  hsl(220, 10%, 60%);
  --neutral-grey-500:  hsl(220, 10%, 50%);
  --neutral-grey-600:  hsl(220, 10%, 40%);
  --neutral-grey-700:  hsl(220, 10%, 30%);
  --neutral-grey-800:  hsl(220, 10%, 20%);
  --neutral-grey-900:  hsl(220, 10%, 10%);

  /* accent colors */

  --indigo-50:  hsl(252, 50%, 97%);
  --indigo-100: hsl(252, 50%, 90%);
  --indigo-200: hsl(252, 50%, 80%);
  --indigo-300: hsl(252, 50%, 70%);
  --indigo-400: hsl(252, 50%, 60%);
  --indigo-500: hsl(252, 50%, 50%);
  --indigo-600: hsl(252, 50%, 40%);
  --indigo-700: hsl(252, 50%, 30%);
  --indigo-800: hsl(252, 50%, 20%);
  --indigo-900: hsl(252, 50%, 10%);

  /* status colors */

  --danger-50:  hsl(0, 80%, 97%);
  --danger-100: hsl(0, 80%, 90%);
  --danger-200: hsl(0, 80%, 80%);
  --danger-300: hsl(0, 80%, 70%);
  --danger-400: hsl(0, 80%, 60%);
  --danger-500: hsl(0, 80%, 50%);
  --danger-600: hsl(0, 80%, 40%);
  --danger-700: hsl(0, 80%, 30%);
  --danger-800: hsl(0, 80%, 20%);
  --danger-900: hsl(0, 80%, 10%);

  --warning-50:   hsl(24, 100%, 97%);
  --warning-100:  hsl(24, 100%, 90%);
  --warning-200:  hsl(24, 100%, 80%);
  --warning-300:  hsl(24, 100%, 70%);
  --warning-400:  hsl(24, 100%, 60%);
  --warning-500:  hsl(24, 100%, 50%);
  --warning-600:  hsl(24, 100%, 40%);
  --warning-700:  hsl(24, 100%, 30%);
  --warning-800:  hsl(24, 100%, 20%);
  --warning-900:  hsl(24, 100%, 10%);

  --info-50:  hsl(200, 100%, 97%);
  --info-100: hsl(200, 100%, 90%);
  --info-200: hsl(200, 100%, 80%);
  --info-300: hsl(200, 100%, 70%);
  --info-400: hsl(200, 100%, 60%);
  --info-500: hsl(200, 100%, 50%);
  --info-600: hsl(200, 100%, 40%);
  --info-700: hsl(200, 100%, 30%);
  --info-800: hsl(200, 100%, 20%);
  --info-900: hsl(200, 100%, 10%);

  --success-50:  hsl(140, 100%, 97%);
  --success-100: hsl(140, 100%, 90%);
  --success-200: hsl(140, 100%, 80%);
  --success-300: hsl(140, 100%, 70%);
  --success-400: hsl(140, 100%, 60%);
  --success-500: hsl(140, 100%, 50%);
  --success-600: hsl(140, 100%, 40%);
  --success-700: hsl(140, 100%, 30%);
  --success-800: hsl(140, 100%, 20%);
  --success-900: hsl(140, 100%, 10%);

  --base-50: var(--neutral-grey-50);
  --base-100: var(--neutral-grey-100);
  --base-200: var(--neutral-grey-200);
  --base-300: var(--neutral-grey-300);
  --base-400: var(--neutral-grey-400);
  --base-500: var(--neutral-grey-500);
  --base-600: var(--neutral-grey-600);
  --base-700: var(--neutral-grey-700);
  --base-800: var(--neutral-grey-800);
  --base-900: var(--neutral-grey-900);

  --primary-50: var(--indigo-50);
  --primary-100: var(--indigo-100);
  --primary-200: var(--indigo-200);
  --primary-300: var(--indigo-300);
  --primary-400: var(--indigo-400);
  --primary-500: var(--indigo-500);
  --primary-600: var(--indigo-600);
  --primary-700: var(--indigo-700);
  --primary-800: var(--indigo-800);
  --primary-900: var(--indigo-900);

  /* ----------------------------------------------------------------------- */
  /* TEXT THEME */
  /* ----------------------------------------------------------------------- */
  
  /* font */
  --font-family--base: "CircularPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
  sans-serif;
  
  --font-size--xs: 0.75rem;     /* 12px -4  */
  --font-size--sm: 0.875rem;    /* 14px -2  */
  --font-size--md: 1rem;        /* 16px +0  */
  --font-size--lg: 1.125rem;    /* 18px +2  */
  --font-size--xl: 1.25rem;     /* 20px +4  */
  --font-size--2xl: 1.5rem;     /* 24px +8  */
  --font-size--3xl: 1.75rem;    /* 28px +12 */
  --font-size--4xl: 2.125rem;   /* 34px +18 */
  --font-size--5xl: 2.5rem;     /* 40px +24 */
  --font-size--6xl: 3rem;       /* 48px +32 */
  --font-size--7xl: 3.5rem;     /* 56px +40 */
  
  --font-weight--400: 400;
  --font-weight--500: 500;
  --font-weight--600: 600;
  --font-weight--700: 700;
  
  /* ----------------------------------------------------------------------- */
  /* MISC THEME */
  /* ----------------------------------------------------------------------- */
  --box-shadow--point-source: 0.125rem 0.25rem 0.75rem 0.125rem rgba(0, 0, 0, 0.08);
  --box-shadow--ambient:  0rem 0rem 4rem 0rem rgba(0, 0, 0, 0.20);
  --box-shadow--high-glow: 0rem 0rem 4rem 0rem rgba(255, 255, 255, 0.12);
  --box-shadow--low-glow: 0rem 0rem 1rem 0rem rgba(255, 255, 255, 0.12);


  /* ----------------------------------------------------------------------- */
  /* RULE SET - ONLY USE CSS VARIABLES BELOW THIS POINT */
  /* ----------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------- */

  /* ----------------------------------------------------------------------- */
  /* TEXT RULES */
  /* ----------------------------------------------------------------------- */

  --text-font-size--caption: var(--font-size--xs);
  --text-font-size--body: var(--font-size--md);
  --text-font-size--subheading: var(--font-size--lg);
  --text-font-size--h3: var(--font-size--2xl);
  --text-font-size--h2: var(--font-size--4xl);
  --text-font-size--h1: var(--font-size--6xl);

  --text-font-weight--caption: var(--font-weight--600);
  --text-font-weight--body: var(--font-weight--500);
  --text-font-weight--subheading: var(--font-weight--600);
  --text-font-weight--h3: var(--font-weight--600);
  --text-font-weight--h2: var(--font-weight--500);
  --text-font-weight--h1: var(--font-weight--400);

  @media ${MEDIA_BREAKPOINTS.md} {
    --text-font-size--caption: var(--font-size--sm);
    --text-font-size--body: var(--font-size--lg);
    --text-font-size--subheading: var(--font-size--xl);
    --text-font-size--h3: var(--font-size--3xl);
    --text-font-size--h2: var(--font-size--5xl);
    --text-font-size--h1: var(--font-size--7xl);

    --text-font-weight--caption: var(--font-weight--500);
    --text-font-weight--body: var(--font-weight--400);
    --text-font-weight--subheading: var(--font-weight--500);
    --text-font-weight--h3: var(--font-weight--600);
    --text-font-weight--h2: var(--font-weight--500);
    --text-font-weight--h1: var(--font-weight--400);
  }

  --text-font-weight--link: var(--font-weight--700);
  --text-font-weight--button: var(--font-weight--700);

  --text-letter-spacing--button: 0.05rem;

  /* ----------------------------------------------------------------------- */
  /* COLOR RULES */
  /* ----------------------------------------------------------------------- */

  /* primary */

  --primary--base: var(--primary-600);
  --primary--hover: var(--primary-800);

  /* text */

  --text-color--base: var(--base-900);
  --text-color--weak: var(--base-600);
  --text-color--danger: var(--danger-700);
  --text-color--disabled: var(--base-300);
  --text-color--primary: var(--primary-600);

  --text-color--on-primary: var(--base-50);

  @media (prefers-color-scheme: dark) {
    --text-color--base: var(--base-50);
    --text-color--weak: var(--base-300);
    --text-color--danger: var(--danger-500);
    --text-color--disabled: var(--base-600);
    --text-color--primary: var(--primary-300);
  }

  /* border */

  --border-color--weak: var(--base-300);
  --border-color--base: var(--base-400);
  --border-color--hover: var(--base-600);

  @media (prefers-color-scheme: dark) {
    --border-color--weak: var(--base-600);
    --border-color--base: var(--base-500);
    --border-color--hover: var(--base-300);
  }

  /* input */

  --input-bg--base: var(--base-50);
  --input-bg--hover: var(--base-200);
  --input-bg--disabled: var(--base-400);

  @media (prefers-color-scheme: dark) {
    --input-bg--base: var(--base-900);
    --input-bg--hover: var(--base-700);
    --input-bg--disabled: var(--base-500);
  }

  /* icon */

  --icon-color--base: var(--base-700);
  --icon-color--hover: var(--base-900);

  @media (prefers-color-scheme: dark) {
    --icon-color--base: var(--base-200);
    --icon-color--hover: var(--base-50);
  }

  /* status */

  --status-color--disabled: var(--base-600);
  --status-color--success: var(--success-600);
  --status-color--info: var(--info-600);
  --status-color--warning: var(--warning-600);
  --status-color--danger: var(--danger-600);

  --status-color--danger-hover: var(--danger-800);

  --status-color--disabled-weak: var(--base-200);
  --status-color--success-weak: var(--success-50);
  --status-color--info-weak: var(--info-50);
  --status-color--warning-weak: var(--warning-50);
  --status-color--danger-weak: var(--danger-50);
  
  @media (prefers-color-scheme: dark) {
    --status-color--disabled: var(--base-300);
    --status-color--success: var(--success-300);
    --status-color--info: var(--info-300);
    --status-color--warning: var(--warning-300);
    --status-color--danger: var(--danger-300);

    --status-color--danger-hover: var(--danger-100);

    --status-color--disabled-weak: var(--base-700);
    --status-color--success-weak: var(--success-900);
    --status-color--info-weak: var(--info-900);
    --status-color--warning-weak: var(--warning-900);
    --status-color--danger-weak: var(--danger-900);
  }

  /* surface */

  --surface-bg--base: var(--base-50);
  --surface-bg--raised: var(--base-100);
  --surface-bg--primary: var(--primary-100);
  
  @media (prefers-color-scheme: dark) {
      --surface-bg--base: var(--base-900);
      --surface-bg--raised: var(--base-800);
      --surface-bg--primary: var(--primary-900);
  }

  /* ----------------------------------------------------------------------- */
  /* MISC RULES */
  /* ----------------------------------------------------------------------- */

  --border-radius--input: 10px;
  --border-radius--surface: 18px;

  --shadows--low: var(--box-shadow--point-source);
  --shadows--high: var(--box-shadow--point-source), var(--box-shadow--ambient);
  --shadows--hover: 0px 0px 0.25rem 0.25rem var(--primary-100);
  
  @media (prefers-color-scheme: dark) {
    --shadows--high: var(--box-shadow--high-glow);
    --shadows--low: var(--box-shadow--low-glow);
    --shadows--hover: 0px 0px 0.25rem 0.25rem var(--primary-700);
  }
}

/* ------------------------------------------------------------------------- */
/* APPLY BASE THEME */
/* ------------------------------------------------------------------------- */

body {
  background: var(--surface-bg--base);
  color: var(--text-color--base);
  font-family: var(--font-family--base);
  font-size: var(--text-font-size--body);
  font-weight: var(--text-font-weight--body);
}
`;
