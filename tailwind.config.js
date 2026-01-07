import relumeTailwindPreset from "@relume_io/relume-tailwind";

export default {
  presets: [relumeTailwindPreset],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@relume_io/**/*.{js,jsx,ts,tsx}",
  ],
};
