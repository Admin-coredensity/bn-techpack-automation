const urlParams = new URLSearchParams(window.location.search);
const productType = urlParams.get("type");
const productId = urlParams.get("id");

const container = document.getElementById("variant-sections-container");

// Helper to generate a table row only if the value exists
function generateRow(label, value, id) {
  if (!value || value.trim() === "") return "";
  return `
    <tr>
      <th class="th-heading" scope="row">${label}</th>
      <td id="${id}">${value}</td>
    </tr>`;
}

// Helper to generate a <p> line only if the value exists
function generateParagraph(label, value, id) {
  if (!value || value.trim() === "") return "";
  return `<p id="${id}"><strong>${label}:</strong> ${value}</p>`;
}

function renderVariant(variantKey, variantData) {
  return `
    <div class="product-model-detail-container">
      <div class="product-model-section-1">
        <img id="product-model-image" src="${variantData.image || "assets/img/placeholder-image.jpg"}" alt="Product Image" />
        <a class="btn-getEnquireNow">Enquire Now</a>
      </div>
      <div class="product-model-section-2">
        <h4 id="product-model-name">${variantData.name || "-"}</h4>
        <div id="product-model-category-container">
          ${generateParagraph("Model No.", variantData.model, "product-model-number")}
          ${generateParagraph("Category", variantData.category, "product-model-category")}
        </div>
        <div>
          <h4 class="technical-specification-text">Technical Specification</h4>
          <table class="table table-striped">
        <tbody>
            ${generateRow("Power", variantData.power, "product-model-power")}
            ${generateRow("Air Pressure", variantData.airPressure, "product-model-air-pressure")}
            ${generateRow("Filling Speed", variantData.fillingSpeed, "product-model-filling-speed")}
            ${generateRow("Filling Accuracy", variantData.fillingAccuracy, "product-model-filling-accuracy")}
            ${generateRow("MOC", variantData.MOC, "product-model-moc")}
            ${generateRow("Production Speed BPM", variantData.productionSpeedBPM, "product-model-production-speed-bpm")}
            ${generateRow("Speed", variantData.speed, "product-model-speed")}
            ${generateRow("Capping Dimeter", variantData.cappingDimeter, "product-model-capping-dimeter")}
            ${generateRow("Operating", variantData.operating, "product-model-operating")}
            ${generateRow("Print no of line", variantData.printNoOfLine, "product-model-print-no-of-line")}
            ${generateRow("Label Roll Diameter", variantData.labelRollDiameter, "product-model-label-roll-diameter")}
            ${generateRow("Label Accuracy", variantData.labelAccuracy, "product-model-label-accuracy")}
            ${generateRow("Accuracy", variantData.accuracy, "product-model-accuracy")}
            ${generateRow("Weight", variantData.weight, "product-model-weight")}
            ${generateRow("Core Inner Diameter", variantData.coreInnerDiameter, "product-model-core-inner-diameter")}
            ${generateRow("Gap Between Two Labels", variantData.gapBetweenTwoLabels, "product-model-gap-between-two-labels")}
            ${generateRow("Applicator For Types", variantData.applicatorForTypes, "product-model-applicator-for-types")}
            ${generateRow("Machine Operated", variantData.machineOperated, "product-model-machine-operated")}
            ${generateRow("Applicator Label Size Length Any size", variantData.applicatorLabelSizeLengthAnySize, "product-model-applicator-label-size-length-any-size")}
            ${generateRow("Material Of Construction", variantData.materialOfConstruction, "product-model-material-of-construction")}
            ${generateRow("No Of Cup Row & Indexer", variantData.noOfCupRowAndIndexer, "product-model-no-of-cup-row-and-indexer")}
            ${generateRow("Cap Sealing Diameter", variantData.capSealingDiameter, "product-model-cap-sealing-diameter")}
            ${generateRow("Weighing Range", variantData.weighingRange, "product-model-weighing-range")}
            ${generateRow("Hopper Capacity", variantData.hopperCapacity, "product-model-hopper-capacity")}
            ${generateRow("Machine Dimension LxWxH", variantData.machineDimensionLxWxH, "product-model-machine-dimensions")}
          </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

fetch(`assets/data/primary-packages/${productType}.json`)
  .then((res) => res.json())
  .then((data) => {
    if (productType && data[productType] && data[productType][productId]) {
      const productData = data[productType][productId];
      const rendered = Object.entries(productData)
        .map(([variantKey, variantValue]) => renderVariant(variantKey, variantValue))
        .join("");
      container.innerHTML = rendered;
    } else {
      container.innerHTML = `<p>Product not found or has no variants.</p>`;
    }
  })
  .catch((err) => {
    console.error("Error loading product detail:", err);
    container.innerHTML = `<p>Error loading product details.</p>`;
  });

// Go back function 
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = '/index.html';
  }
}



