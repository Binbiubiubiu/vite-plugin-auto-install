# vite-plugin-auto-install

auto install dependencies when you exec `npm run dev`

### Install

``` sh
$ npm install vite-plugin-auto-install
```

### Options

| name | type                             | Description         | Default         |
| ---- | -------------------------------- | ------------------- | --------------- |
| root | string                           | project path        | `process.cwd()` |
| file | string                           | Package config name | package.json    |
| cli  | "npm" \|"cnpm" \|"yarn" \|"pnpm" | Package manager cli | npm             |

