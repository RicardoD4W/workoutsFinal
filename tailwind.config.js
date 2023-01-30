/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
                            //%info% all custom color 500 are the pprimary in the variants

  theme: {
    extend: {
        "colors": {
          "primary": {
            50: "#EEEFEB",
            100: "#E0E2DA",
            200: "#C1C4B5",
            300: "#A2A790",
            400: "#83886D",
            500: "#5F634F", 
            600: "#4C4F3F",
            700: "#393C30",
            800: "#262820",
            900: "#131410"
          },
          "clightblue": {
            50: "#F5F9FA",
            100: "#EBF3F5",
            200: "#D7E7EA",
            300: "#C3DBE0",
            400: "#AECFD5",
            500: "#9BC4CB",
            600: "#6BA8B2",
            700: "#49838D",
            800: "#31575E",
            900: "#182C2F"
          },
          "choney": {
            50: "#FBFEFD",
            100: "#F4FBF8",
            200: "#EDF8F3",
            300: "#E2F3EC",
            400: "#D7EFE4",
            500: "#CFEBDF",
            600: "#8FD1B4",
            700: "#52B78B",
            800: "#347E5E",
            900: "#193D2E"
          },
          "cnyanza": {
            50: "#FBFEFB",
            100: "#F8FEF6",
            200: "#F4FDF2",
            300: "#EDFCE9",
            400: "#EAFBE4",
            500: "#E2FADB",
            600: "#A2EF8B",
            700: "#5EE335",
            800: "#38A617",
            900: "#1B510B"
          },
          "ctea": {
            50: "#FBFDF7",
            100: "#F8FCF3",
            200: "#EFF8E2",
            300: "#E9F5D6",
            400: "#E2F2C9",
            500: "#DBEFBC",
            600: "#B5DF77",
            700: "#8FCE31",
            800: "#5E8820",
            900: "#314611"
          }
      }
    },
    
  },
  plugins: [],
}