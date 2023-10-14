/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 25s linear infinite",
                "infinite-slider-r-to-l":
                    "infiniteSliderRtoL 30s linear infinite",
                "infinite-slider-l-to-r":
                    "infiniteSliderLtoR 30s linear infinite",
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
        },
    },
    plugins: [],
};
