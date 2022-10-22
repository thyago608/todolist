module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@interfaces": "./src/interfaces",
            "@theme": "./src/theme/index.ts",
            "@mocks": "./src/mocks/index.ts",
            "@context": "./src/context",
          },
        },
      ],
    ],
  };
};
