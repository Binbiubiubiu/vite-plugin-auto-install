# vite-plugin-auto-install

auto install dependencies when you exec `npm run dev`

### Install

``` sh
$ npm install vite-plugin-auto-install
```

``` ts
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import autoInstall from "vite-plugin-auto-install";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    autoInstall({
      file:'package.json',
      cli:'npm',
      include:['**/main.tsx'],
      exclude: [],
    }),
  ],
});
```

### Options

| name    | type                                                    | Description         | Default      |
| ------- | ------------------------------------------------------- | ------------------- | ------------ |
| file    | string                                                  | Package config name | package.json |
| cli     | "npm" \|"cnpm" \|"yarn" \|"pnpm"                        | Package manager cli | npm          |
| Include | ReadonlyArray<string \|RegExp> \|string \|RegExp \|null | Include file        | null         |
| exclude | ReadonlyArray<string \|RegExp> \|string \|RegExp \|null | exclude file        | null         |



