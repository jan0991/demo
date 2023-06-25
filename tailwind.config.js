/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "body-01": [
          "24px",
          {
            lineHeight: "32px",
            weight: 400,
          },
        ],
        "03": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: 400,
          },
        ],
        "productive-01": [
          "16x",
          {
            lineHeight: "24px",
            fontWeight: 700,
          },
        ],
        "productive-02": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 700,
          },
        ],
        "productive-03": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: 700,
          },
        ],
        "heading-1": [
          "64px",
          {
            lineHeight: "74px",
            fontWeight: 700,
          },
        ],
        "heading-2": [
          "48px",
          {
            lineHeight: "56px",
            fontWeight: 700,
          },
        ],
        "heading-3": [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: 700,
          },
        ],
        "heading-5": [
          "22px",
          {
            lineHeight: "28x",
            fontWeight: 700,
          },
        ],
        "heading-6": [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: 700,
          },
        ],
      },
      maxWidth: {
        container: "1440px",
      },
      colors: {
        "dark-10": "#052B52",
        "dark-20": "#42576D",
        "gray-10": "#F4F4F4",
        "gray-40": "#A8A8A8",
        "secondary-20": "#EFF3F8",
        "secondary-30": "#C6D0DB",
        "yellow-10": "#FFD601",
        "tertiary-a-10": "#66BB6A",
        "tertiary-e-10": "#FF9100",
        "blue-10": "#2622FF",
      },
    },
  },
  plugins: [],
};
