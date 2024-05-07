const fs = require("fs");
const path = require("path");

const inputDirPath = "C:\\development\\projects\\schwazze_demo\\data\\menu";
const outputFilePath =
  "C:\\development\\projects\\schwazze_demo\\data\\combinedMenus.js";

fs.readdir(inputDirPath, (err, files) => {
  if (err) {
    return console.error("Failed to list directory", err);
  }

  let combinedData = "";

  files.forEach((file) => {
    const filePath = path.join(inputDirPath, file);
    const fileData = fs.readFileSync(filePath, { encoding: "utf8" });
    const dispensaryIdentifier = path.basename(file, path.extname(file)); // Assuming the file name is the dispensary identifier

    // If the file is a JSON file, wrap the contents with an export statement
    if (path.extname(file) === ".json") {
      combinedData += `export const ${dispensaryIdentifier}_menu = ${fileData.trim()};\n`;
    }
  });

  // Write the combined data to a file
  fs.writeFile(outputFilePath, combinedData, (err) => {
    if (err) {
      return console.error("Failed to write file", err);
    }
    console.log("Combined file created successfully!");
  });
});
