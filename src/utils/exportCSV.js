// src/utils/exportCSV.js
export function exportToCSV(data, filename = "data.csv") {
    const csv = [
      Object.keys(data[0]).join(","), // headers
      ...data.map((row) => Object.values(row).join(",")), // rows
    ].join("\n");
  
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }
  