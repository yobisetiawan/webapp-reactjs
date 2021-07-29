module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-undef": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // we want to avoid useless spaces
    "no-multi-spaces": ["error"],
    // we use 2 spaces to indent our code
    indent: ["error", 2],
    // we want to force semicolons
    semi: ["error", "always"],
    // disallow multiple empty lines
    "no-multiple-empty-lines": ["error"],
  },
};
