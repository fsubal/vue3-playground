module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint",
    "import"
  ],
  "rules": {
    "import/no-restricted-paths": {
      "zones": [
        {
          "target": "./src/**/*.ce.vue",
          "from": "./src/**/*.ce.vue",
          "message": "WebComponents の中から WebComponents を import してはいけません。他のコンポーネントを使いたい場合は register された名前（ <x-〇〇> ）で参照してください。"
        }
      ]
    }
  }
}
