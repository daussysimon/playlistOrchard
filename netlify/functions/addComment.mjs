/* eslint-disable import/no-anonymous-default-export */
import fs from "fs";

export default async (req, context) => {
  const data = await req.json();

  function arrayToMarkdownTable(array) {
    if (array.length === 0) return "";

    const arrayMarkdown = array.map((item, it) => {
      return Object.keys(item)
        .map((key, index) =>
          index <= 0
            ? `\n ${" "}${" "}- ${key}: ${item[key]}`
            : `\n ${" "}${" "} ${" "}${key}: ${item[key]}`
        )
        .join("");
    });

    return arrayMarkdown.join("");
  }

  const arrayMarkdown = arrayToMarkdownTable(data);

  fs.readFile("./templates/comments.md", (err, data) => {
    const htmlTemplate = fs.readFileSync("./templates/comments.md", "utf8");
    fs.writeFileSync(
      "./content/comments/index.md",
      htmlTemplate.replace(new RegExp(`"{{content}}"`), arrayMarkdown)
    );
  });

  return new Response("all good");
};
