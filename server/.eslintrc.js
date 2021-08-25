module.exports = {
    rules: {
        camelcase: ["error", { allow: ["aa_bb"] }],
    },
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: ["airbnb-base", "prettier"],
    plugins: ["prettier"],
    parserOptions: {
        ecmaVersion: 12,
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".json"],
            },
        },
    },
};
