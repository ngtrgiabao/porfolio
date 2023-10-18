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
            },
            fontWeight: {},
        },
    },
    plugins: [
        plugin(({ addComponents }) => {
            addComponents({});
        }),
    ],
};
