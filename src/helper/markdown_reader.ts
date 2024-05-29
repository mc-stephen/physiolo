"use server";

import fs from "fs";
import path from "path";

export const readMarkdown = async ({
  filePath,
  fileName,
}: readMarkdownInter): Promise<string> => {
  const fullPath = path.join(process.cwd(), filePath, fileName);
  const markdownContent = await fs.promises.readFile(fullPath, "utf8");
  return markdownContent;
};

interface readMarkdownInter {
  filePath: string;
  fileName: string;
}
