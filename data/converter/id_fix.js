const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Path to the input JS file
const inputFilePath = path.join(
  "C:",
  "development",
  "projects",
  "schwazze_demo",
  "data",
  "Aggregated_Sales_Data.js"
);
// Path to the output JS file
const outputFilePath = path.join(
  "C:",
  "development",
  "projects",
  "schwazze_demo",
  "data",
  "Formatted_Sales_Data.js"
);

// Function to generate a new 24-character hexadecimal ID
function generateId() {
  return crypto.randomBytes(12).toString("hex");
}

// Read the JS file
fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Extract the array from the module export
  const dataArray = eval(data.replace("export const dataProductStat =", ""));

  // Function to format a single entry
  function formatEntry(entry) {
    const monthlyDataFormatted = entry.monthlyData
      .map(
        (md) =>
          `  {month: "${md.month}", year: ${
            md.year
          }, totalSales: ${md.totalSales.replace(
            "$",
            ""
          )}, medicalSales: ${md.medicalSales.replace(
            "$",
            ""
          )}, adultuseSales: ${md.adultuseSales.replace("$", "")}}`
      )
      .join(",\n");

    return `{\n  _id: "${generateId()}",\n  Licensee: "${
      entry.Licensee
    }",\n  Address: "${entry.Address}",\n  City: "${entry.City}",\n  State: "${
      entry.State
    }",\n  Zip: ${
      entry.Zip
    },\n  monthlyData: [\n${monthlyDataFormatted}\n  ]\n},`;
  }

  // Format all data
  const formattedData = dataArray.map(formatEntry).join("\n");

  // Write the formatted data to a new JS file
  const outputFileContent = `export const dataProductStat = [\n${formattedData}\n];`;
  fs.writeFile(outputFilePath, outputFileContent, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Formatted file has been saved.");
  });
});
