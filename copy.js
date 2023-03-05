import path from "path";
import fs from "fs";
import yargs from "yargs";
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;

const moveFrontend = () => {
  try {
    fs.copyFileSync(
      "./build/design-tokens.ts",
      "../azalea/client/src/design-tokens/design-tokens.ts"
    );
    console.log("コピーできたよ🐶");
  } catch (e) {
    console.log(e);
  }
};

const main = () => {
  if (argv.project !== "azalea") {
    console.log("[ERROR] 現在サポートされていないプロジェクトです");
    return;
  }

  if (argv.project === "azalea") moveFrontend();
};

main();
