import fs from "fs";
import path from "path";
import { URL } from "url";
import { AutoInstallOptions } from "./types";

/**
 * importer which startwith "./" "../" "/" ignore
 * @param importer resolveId
 * @returns
 */
export function isLocalPath(importer: string) {
  return /^(\.\/|\.\.\/|\/).*/.test(importer);
}

/**
 * get package name from importer
 * @param importer resolveId
 * @returns
 */
export function getPkgName(importer: string) {
  const path = importer.split("/");
  let name = path.shift() || "";
  if (name.startsWith("@")) {
    name += path.shift();
  }
  return name;
}
