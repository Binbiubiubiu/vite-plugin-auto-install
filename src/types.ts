import { FilterPattern } from "@rollup/pluginutils";

export interface AutoInstallOptions {
  /**
   * the code which included was execed by the plugin
   */
  include: FilterPattern;

  /**
   * the code which excluded was execed by the plugin
   */
  exclude: FilterPattern;

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
  file: "package.json",
  cli: "npm",
  include:null,
  exclude:null,
};
