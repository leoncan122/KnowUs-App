module.exports = {
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
                extensions: [".js", ".jsx"],
            },
        },
        "import/no-unresolved": [2, { commonjs: true }],
    },
    rules: {},
};
