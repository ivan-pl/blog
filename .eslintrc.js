module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
  overrides: [
    {
      files: ["webpack.*.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off",
      },
    },
  ],
};
