import path from "path";
import fs from "fs";
import esbuild from "esbuild";

const license = fs.readFileSync("./LICENSE.md", "utf-8");

export const buildEsm = async (inputPath, outputPath) => {
  const input = path.resolve(import.meta.dirname, "../", inputPath);
  const output = path.resolve(import.meta.dirname, outputPath);

  await esbuild.build({
    entryPoints: [input],
    outfile: output,
    bundle: true,
    minify: true,
    legalComments: "none",
    sourcemap: false,
    format: "esm",
    target: "esnext",
    define: {
      __DEV__: JSON.stringify(false),
    },
    external: ["react", "react-dom"],
    banner: {
      js: `/**\n${license
        .trim()
        .split("\n")
        .map((e) => ` * ${e}`)
        .join("\n")}\n */`,
    },
    footer: {
      js: `/* build by esm pack */`,
    },
  });
};

buildEsm("index.ts", "index.mjs");
