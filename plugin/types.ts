export interface AutoInstallOptions {
  /**
   * root project path
   */
  root: string;
  /**
   * package.json file path
   */
  file: string;

  /**
   * install cli ,such as npm、yarn and so on
   */
  cli: "npm" | "cnpm" | "yarn" | "pnpm";
}

export const CMD = {
  npm: "npm install",
  yarn: "yarn add",
  pnpm: "pnpm install",
  cnpm: "cnpm install",
};

export const DEFAULT_OPTIONS: AutoInstallOptions = {
  root: process.cwd(),
  file: "package.json",
  cli: "npm",
};
