module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:prettier/recommended"
    ],
    plugins: ["prettier", "vue"],
    rules: {
        "prettier/prettier": 1,
        "no-unused-vars": [2, { argsIgnorePattern: "^_" }]
    }
};
