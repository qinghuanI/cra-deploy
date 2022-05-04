module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // parser: "@babel/eslint-parser",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    ecmaVersion: 2020,
  },

  settings: {
    "import/resolver": {},
    react: {
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
      flowVersion: "0.53",
    },
    jest: {
      version: 26,
    },
  },
  plugins: [],
  rules: {
    // base
    "no-console": 0,
    "react/react-in-jsx-scope": 0,
    camelcase: 0,
    "arrow-parens": 0,
    "comma-dangle": 0,
    "implicit-arrow-linebreak": 0,
  },
  globals: {},
};
