## Sundae App

**eslint설정**

1. eslint설치
   `npm i eslint-plugin-testing-library eslint-plugin-jest-dom`
2. package.json에서 eslintConfig부분 삭제
3. /.eslintrc.json - config추가

```
  {
"plugins": ["jest-dom", "testing-library"],
"extends": [
  "react-app",
  "react-app/jest",
  "plugin:testing-library/react",
  "plugin:jest-dom/recommended"
]
}

```

4. /.vscode/settings.json - config추가

```
  {
"editor.codeActionsOnSave": { "source.fixAll.eslint": true },
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
}
```

5. gitignore - .eslintcache, .vscode추가
