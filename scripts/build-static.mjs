import { spawn } from "node:child_process";
import { cpSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = path.join(root, "src", "app", "api");
const hiddenDir = path.join(root, ".tmp-api-skip");
const nextDir = path.join(root, ".next");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
      shell: process.platform === "win32",
      env: { ...process.env, STATIC_EXPORT: "1" },
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with ${code}`));
    });
  });
}

async function rmWithRetry(target) {
  let lastError;
  for (let i = 0; i < 10; i += 1) {
    try {
      if (existsSync(target)) rmSync(target, { recursive: true, force: true });
      return;
    } catch (error) {
      lastError = error;
      await sleep(300 * (i + 1));
    }
  }
  throw lastError;
}

if (existsSync(nextDir)) {
  rmSync(nextDir, { recursive: true, force: true });
}

let moved = false;
try {
  if (existsSync(apiDir)) {
    await rmWithRetry(hiddenDir);
    cpSync(apiDir, hiddenDir, { recursive: true });
    await rmWithRetry(apiDir);
    moved = true;
  }
  await run("npx", ["next", "build"]);
} finally {
  if (moved && existsSync(hiddenDir) && !existsSync(apiDir)) {
    cpSync(hiddenDir, apiDir, { recursive: true });
    await rmWithRetry(hiddenDir);
  }
}
