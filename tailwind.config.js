// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 25s linear infinite",
                "infinite-slider-r-to-l":
                    "infiniteSliderRtoL 40s linear infinite",
                "infinite-slider-l-to-r":
                    "infiniteSliderLtoR 40s linear infinite",
            },
            keyframes: {
                infiniteSliderRtoL: {
                    from: { transform: "translate3d(0, 0, 0)" },
                    to: {
                        transform: "translate3d(-100%, 0, 0)",
                    },
                },
                infiniteSliderLtoR: {
                    from: {
                        transform: "translate3d(-100%, 0, 0)",
                    },
                    to: {
                        transform: "translate3d(0, 0, 0)",
                    },
                },
            },
            fontFamily: {
                luxury: ["Libre Caslon Display", "serif"],
                trispace: ["Trispace", "sans-serif"],
                saira: ["Saira Stencil One", "sans-serif"],
            },
            fontSize: {
                xxxl: "200px",
                xxl: "150px",
            },
            boxShadow: {
                large: "6px 6px 0 var(--primary-color-light)",
                shadow10: "10px 10px 0 var(--yellow)",
            },
            fontWeight: {},
            height: {
                _50vh: "50vh",
                _42vh: "42vh",
            },
            screens: {
                sm: "100px",
            },
            letterSpacing: {
                lg: "2.2rem",
            },
        },
    },
    plugins: [
        plugin(({ addComponents }) => {
            addComponents({});
        }),
    ],
};
