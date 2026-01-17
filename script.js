// Array of fake printables
const printables = [
  { name: "3D Vase", size: "2MB" },
  { name: "Phone Stand", size: "1MB" },
  { name: "Mini Robot", size: "3MB" }
];

// Function to display the list
function showPrintables() {
  const container = document.getElementById("printableList");
  container.innerHTML = ""; // Clear previous content

  printables.forEach((item, index) => {
    const div = document.createElement("div");
    div.style.margin = "10px 0";
    div.style.padding = "10px";
    div.style.border = "1px solid #ccc";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";

    div.innerHTML = `
      <span>${item.name} (${item.size})</span>
      <button onclick="downloadPrintable(${index})">Download</button>
    `;

    container.appendChild(div);
  });
}

// Function for download button
function downloadPrintable(index) {
  alert(`Downloading ${printables[index].name}...`);
}

// Run on page load
window.onload = showPrintables;
