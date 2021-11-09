## To test package

make required updates in the `src` (root) directory.

```bash
npm run build
npm link
cd demo-app
npm link react-ui-scrollspy
```

creates a `.tgz`

```bash
npm run build
npm pack
mv react-ui-scrollspy-2.0.0.tgz ./demo-app
cd demo-app
npm uninstall react-ui-scrollspy
npm install react-ui-scrollspy-2.0.0.tgz --production
```

## Commit Messages

https://github.com/ahmadawais/Emoji-Log

```bash
git commit -m "✨ NEW: "
git commit -m "👌 IMPROVE: "
git commit -m "🐛 FIX: "
git commit -m "📚 DOC: "
git commit -m "🚀 RELEASE: "
git commit -m "🤖 TEST: "
git commit -m "‼️ BREAKING: "
```

### GitHub package

```bash
npm login --registry=https://npm.pkg.github.com/
```

#### package.json

```json
"name": "@pettiboy/react-ui-scrollspy",
.....
"publishConfig": {
  "registry": "https://npm.pkg.github.com/"
},
"repository": {
  "type": "git",
  "url": "git+https://github.com/pettiboy/react-ui-scrollspy.git",
  "directory": "react-ui-scrollspy"
},
"bugs".....
```

```bash
npm publish
```

### npm package

```bash
npm login
```

#### package.json

```json
"name": "react-ui-scrollspy",
....
"repository": {
  "type": "git",
  "url": "git+https://github.com/pettiboy/react-ui-scrollspy.git"
},
"bugs".....
```

```bash
npm publish
```
