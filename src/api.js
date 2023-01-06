import { SWING_FILE } from "./extension-settings.js";
import { getCandidateMarkupFilenames } from "./preview/languages/markup";

export const api = {
  isComponent(files = ['']) {
    return (
      files.includes(".block") ||
      files.includes(SWING_FILE) ||
      files.some((file) => getCandidateMarkupFilenames().includes(file)) ||
      files.includes("scripts") ||
      (files.includes("script.js") &&
        files.some((file) => file.endsWith(".markdown")))
    );
  },
};
