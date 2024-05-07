const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // UUID for generating unique IDs

// Path to the input JSON file
const inputFilePath = path.join(
  "C:",
  "development",
  "projects",
  "schwazze_demo",
  "data",
  "sales",
  "Combined_Cannabis_Sales_Data.json"
);
// Path to the output JS file
const outputFilePath = path.join(
  "C:",
  "development",
  "projects",
  "schwazze_demo",
  "data",
  "Aggregated_Sales_Data.js"
);

// Function to format numbers as USD
function formatUSD(amount) {
  return `$${Number(amount).toFixed(2)}`; // Converts to a fixed decimal string with dollar sign
}

// Read the JSON file
fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const salesData = JSON.parse(data);
  const aggregatedData = {};

  // Aggregate and format the data
  salesData.forEach((item) => {
    if (item.Address) {
      // Exclude entries without an address
      const addressKey = item.Address + item.City + item.State + item.Zip; // Unique key for each address
      if (!aggregatedData[addressKey]) {
        aggregatedData[addressKey] = {
          _id: uuidv4(), // Assign a unique ID similar to MongoDB's ObjectID
          Licensee: item.Licensee,
          Address: item.Address,
          City: item.City,
          State: item.State,
          Zip: item.Zip,
          monthlyData: [],
        };
      }

      aggregatedData[addressKey].monthlyData.push({
        month: item.Month.toLowerCase(),
        year: item.Year,
        totalSales: formatUSD(item["Total Sales"]),
        medicalSales: formatUSD(item["Medical Sales"]),
        adultuseSales: formatUSD(item["Adult-Use Sales"]),
      });
    }
  });

  // Sort the data for each address
  for (let address in aggregatedData) {
    aggregatedData[address].monthlyData.sort(
      (a, b) =>
        new Date(
          a.year,
          new Date(Date.parse(a.month + " 1, 2012")).getMonth()
        ) -
        new Date(b.year, new Date(Date.parse(b.month + " 1, 2012")).getMonth())
    );
  }

  // Write to the JS file
  const outputFileContent = `export const dataProductStat = ${JSON.stringify(
    Object.values(aggregatedData),
    null,
    2
  )};`;
  fs.writeFile(outputFilePath, outputFileContent, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File has been saved.");
  });
});
