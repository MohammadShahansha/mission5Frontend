# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Here are description of my project

At first I wrote my backend code. I used moduler pattern in my backend code. As a tachnology I used Express js as well as to stored data I used mongoose with mongodb etc.

After finished some work of backend I started to write fronted code. Sometime I face some problem because my backend was not complite. Then I back to my backend code and after solve this problem I tried to write frontend code. In my fronted part, I used typeScript, react.js, redux, ant design, tailwind etc.

However, my project name is Shoes Shop. To access my project you must need to register first. You can access as a user or buyer. Here are two part. One for user and one for buyer. User can create shoes, update shoes, delete shoes, duplicate shoes and sell etc. Otherwise user alos can give some service such polish.

On the other hand, buyer can see which shoes are selled. and he can be send request to polish as well as he can see the progress of service(polish)
