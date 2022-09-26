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
  rules: {
    "no-restricted-syntax": "off",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["slide"] },
    ],
  },
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
