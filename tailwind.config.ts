import type { Config } from "tailwindcss";

function toRgba(cssVariable: string) {
  const color = `var(${cssVariable})`;
  return ({ opacityValue }: any) => `rgba(${color}, ${opacityValue})`;
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "var(--screen-mobile)",
      tablet: "var(--screen-tablet)",
      desktop: "var(--screen-desktop)",
      tv: "var(--screen-tv)",
    },
    extend: {
      colors: {
        primary: toRgba("--primary"),
        secondary: toRgba("--secondary"),
        tertiary: toRgba("--tertiary"),
        quaternary: toRgba("--quaternary"),
        hover: toRgba("--hover"),
        click: toRgba("--click"),
        icon: toRgba("--icon"),
        outline: toRgba("--outline"),
        divider: toRgba("--divider"),
        "bg-light": toRgba("--bg-light"),
        "bg-dark": toRgba("--bg-dark"),
        "bg-disabled": toRgba("--bg-disabled"),
        "text-primary": toRgba("--text-primary"),
        "text-secondary": toRgba("--text-secondary"),
        "text-tertiary": toRgba("--text-tertiary"),
        "text-disabled": toRgba("--text-disabled"),
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        focus: "var(--shadow-focus)",
        outline: "var(--shadow-outline)",
        "button-focus": "var(--shadow-button-focus)",
      },
      blur: {
        default: "var(--blur)",
      },
    },
  },
  plugins: [],
};
export default config;
