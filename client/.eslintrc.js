module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "airbnb", "prettier"],
    plugins: ["react", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        "react/jsx-filename-extension": [0],
        "react/prop-types": "off",
    },
    
};
