import path from "path";
import fs from "fs";
import { exec } from "child_process";
import { promisify } from "util";
import { normalizePath, Plugin } from "vite";
import ora, { Ora } from "ora";
import { AutoInstallOptions, DEFAULT_OPTIONS, CMD } from "./types";
import { getPkgName, isLocalPath } from "./utils";

const execSync = promisify(exec);

export default function (ops: Partial<AutoInstallOptions> = {}): Plugin {
  let options = Object.assign({}, DEFAULT_OPTIONS, ops) as AutoInstallOptions;

  const cmd = CMD[options.cli];
  if (!cmd) {
    throw new Error(`${options.cli} is not valid package manage`);
  }

  const configFile = path.join(normalizePath(options.root), options.file);

  let installedPkg: string[] = [];

  if (fs.existsSync(configFile)) {
    const txt = fs.readFileSync(configFile, { encoding: "utf-8" });
    try {
      const { dependencies = {} } = JSON.parse(txt);
      installedPkg = Array.from(new Set(Object.keys(dependencies)));
    } catch (e) {
      throw new Error("package.json parse failed");
    }
  }

  let spinner: Ora;

  return {
    name: "vite-plugin-auto-install",
    buildStart() {
      spinner = ora("auto install ...");
    },
    async resolveId(id, importer) {
      // entry module ignore.
      if (!importer) return null;

      const isNeedInstallPkg = !isLocalPath(id);

      let pkgName = "";
      if (isNeedInstallPkg) {
        pkgName = getPkgName(id);
        spinner.start(`auto install ${pkgName}`);
        try {
          const needInstall = pkgName && !installedPkg.includes(pkgName);
          needInstall && (await execSync(`${cmd} ${pkgName}`));
          spinner.succeed(`auto install ${pkgName}`);
        } catch (e) {
          spinner.fail(`auto install ${pkgName}`);
        }
      }

      return id;
    },
    buildEnd(_this) {
      spinner.clear();
    },
  };
}
