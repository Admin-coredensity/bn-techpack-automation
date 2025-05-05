const urlParams = new URLSearchParams(window.location.search);
const productType = urlParams.get("type");
const productId = urlParams.get("id");
const category = urlParams.get("category") || "primary-packages";

const container = document.getElementById("variant-sections-container");
const headerTitle = document.getElementById("section-header-title");

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
        <img id="product-model-image" src="${variantData.image || "assets/img/placeholder-image.jpg"}" 
        alt="Product Image" onerror="this.onerror=null; this.src='assets/img/placeholder-image.jpg';" />
        <img id="product-model-demo-image" src="${variantData.demoImage || "assets/img/placeholder-image.jpg"}" 
        alt="Product Image" onerror="this.onerror=null; this.src='assets/img/placeholder-image.jpg';" />
      </div>
      <div class="product-model-section-2">
        <h4 id="product-model-name">${variantData.name || "-"}</h4>
        <div id="product-model-category-container">
          ${generateParagraph("Model No.", variantData.model, "product-model-number")}
          ${generateParagraph("Category", variantData.category, "product-model-category")}
        </div>
        <div>
          <h4 class="technical-specification-text">Technical Specification</h4>
          <table class="table table-striped table-bordered">
        <tbody>
            ${generateRow("Power", variantData.power, "product-model-power")}
            ${generateRow("Air Pressure", variantData.airPressure, "product-model-air-pressure")}
            ${generateRow("Filling Speed", variantData.fillingSpeed, "product-model-filling-speed")}
            ${generateRow("Filling Accuracy", variantData.fillingAccuracy, "product-model-filling-accuracy")}
            ${generateRow("MOC", variantData.MOC, "product-model-moc")}
            ${generateRow("Production Speed BPM", variantData.productionSpeedBPM, "product-model-production-speed-bpm")}
            ${generateRow("Production Speed", variantData.productionSpeed, "product-model-production-speed")}
            ${generateRow("Speed", variantData.speed, "product-model-speed")}
            ${generateRow("Capping Diameter", variantData.cappingDimeter, "product-model-capping-dimeter")}
            ${generateRow("Operating", variantData.operating, "product-model-operating")}
            ${generateRow("Print no of line", variantData.printNoOfLine, "product-model-print-no-of-line")}
            ${generateRow("Label Roll Diameter", variantData.labelRollDiameter, "product-model-label-roll-diameter")}
            ${generateRow("Label Accuracy", variantData.labelAccuracy, "product-model-label-accuracy")}
            ${generateRow("Accuracy", variantData.accuracy, "product-model-accuracy")}
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
            ${generateRow("Pouch Selling Types", variantData.pouchSellingTypes, "product-model-pouch-selling-types")}
            ${generateRow("Pouch Size", variantData.pouchSize, "product-model-pouch-size")}
            ${generateRow("film Roll Width", variantData.filmRollWidth, "product-model-film-roll-width")}
            ${generateRow("Number of Heads", variantData.numberOfHeads, "product-model-no-head")}
            ${generateRow("Model Type", variantData.modelType, "product-model-model-type")}
            ${generateRow("Box Size lxwxh", variantData.boxSizelxwxh, "product-model-box-size-lxwxh")}
            ${generateRow("Box types", variantData.boxTypes, "product-model-box-types")}
            ${generateRow("Applicable Film", variantData.applicableFilm, "product-model-model-applicable-film")}
            ${generateRow("Air Supply", variantData.airSupply, "product-model-air-supply")}
            ${generateRow("Width BOPP/Strap", variantData.widthBOPPStrap, "product-model-width-BOPP-Strap")}
            ${generateRow("Strap Width", variantData.strapWidth, "product-model-strap-width")}
            ${generateRow("Sealing length", variantData.sealingLength, "product-model-sealing-length")}
            ${generateRow("sealing Width and Length", variantData.sealingWidthLength, "product-model-sealing-width-and-length")}
            ${generateRow("Sealing Width", variantData.sealingWidth, "product-model-sealing-width")}
            ${generateRow("temperature", variantData.temperature, "product-model-temperature")}
            ${generateRow("belt Speed", variantData.beltSpeed, "product-model-belt-speed")}
            ${generateRow("sling Size", variantData.slingSize, "product-model-sling-size")}
            ${generateRow("suitable Product", variantData.suitableProduct, "product-model-suitable-product")}
            ${generateRow("capacity", variantData.capacity, "product-model-capacity")}
            ${generateRow("print Height", variantData.printHeight, "product-model-print-height")}
            ${generateRow("product Height", variantData.productHeight, "product-model-product-height")}
            ${generateRow("chamber Size", variantData.chamberSize, "product-model-chamber-size")}
            ${generateRow("Conveyor Drive Types", variantData.conveyorDriveTypes, "product-model-conveyor-drive-types")}
            ${generateRow("conveyor Speed", variantData.conveyorSpeed, "product-model-conveyor-speed")}
            ${generateRow("conveyor Size lxwxh", variantData.conveyorSizelxwxh, "product-model-conveyor-size-lxwxh")}
            ${generateRow("conveyor Using Application", variantData.conveyorUsingApplication, "product-model-conveyor-using-application")}
            ${generateRow("Drive Types", variantData.driveTypes, "product-model-drive-types")}
            ${generateRow("Heater Load Capacity", variantData.heaterLoadCapacity, "product-model-heater-load-capacity")}
            ${generateRow("sling Size lxw", variantData.slingSizelxw, "product-model-sling-size-lxw")}
            ${generateRow("Sealing Power", variantData.sealingPower, "product-model-selling-power")}
            ${generateRow("product Travel", variantData.productTravel, "product-model-product-travel")}
            ${generateRow("product Selling Size lxwxh", variantData.productSellingSizelxwxh, "product-model-product-selling-size-lxwxh")}
            ${generateRow("Hit Zone Size LXWXH", variantData.hitZoneSizeLXWXH, "product-model-hit-zone-size-LXWXH")}
            ${generateRow("hopper Volume", variantData.hopperVolume, "product-model-hopper-volume")}
            ${generateRow("weight Carrying Capacity", variantData.weightCarryingCapacity, "product-model-weight-carrying-capacity")}
            ${generateRow("film Height & Micron", variantData.filmHeightAndMicron, "product-model-film-height&micron")}
            ${generateRow("roll Size In Inch", variantData.rollSizeInInch, "product-model-roll-size-in-inch")}
            ${generateRow("micron", variantData.micron, "product-model-micron")}
            ${generateRow("tick", variantData.tick, "product-model-tick")}
            ${generateRow("length In Meter", variantData.lengthInMeter, "product-model-length-in-meter")}
            ${generateRow("bag Size", variantData.bagSize, "product-model-bag-size")}
            ${generateRow("bag Types", variantData.bagTypes, "product-model-bag-types")}
            ${generateRow("weighing Capacity", variantData.weighingCapacity, "product-model-weighing-capacity")}
            ${generateRow("weighing Accuracy", variantData.weighingAccuracy, "product-model-weighing-accuracy")}
            ${generateRow("application For", variantData.applicationFor, "product-model-application-for")}
            ${generateRow("liquid Tank Capacity", variantData.liquidTankCapacity, "product-model-liquid-tank-capacity")}
          </tbody>
          </table>
          </div>
          <a class="btn-getEnquireNow">Enquire Now</a>
          </div>
    </div>
  `;
}

// Fetch product data
fetch(`assets/data/${category}/${productType}.json`)
  .then((res) => {
    if (!res.ok) throw new Error(`Failed to load ${category}/${productType}.json`);
    return res.json();
  })
  .then((data) => {
    const productData = data?.[productType]?.[productId];

    if (productData) {

      // display heading e.g Liquid Filling Machine
      const firstVariant = Object.values(productData)[0];
      if (headerTitle && firstVariant?.heading) {
        headerTitle.textContent = firstVariant.heading;
      }

      const rendered = Object.entries(productData)
        .map(([variantKey, variantValue]) => renderVariant(variantKey, variantValue))
        .join("");
      container.innerHTML = rendered;

      // Listen for "Enquire Now" button clicks
      // document.addEventListener("click", function (e) {
      //     if (e.target.classList.contains("btn-getEnquireNow")) {
      //         const parent = e.target.closest(".product-model-detail-container");
      //         const productName = parent.querySelector("#product-model-name")?.textContent.trim() || "";
      //         const modelNumber = parent.querySelector("#product-model-number")?.textContent.trim().replace("Model No.:", "").trim() || "";

      // Fill in the modal form
      // document.getElementById("product_name_display").textContent = productName;
      // document.getElementById("product_name").value = productName;

      // document.getElementById("model_number_display").textContent = "Model Number: " + modelNumber;
      // document.getElementById("model_number").value = modelNumber;

      // Show the modal (if not already handled)
      // const enquiryModal = new bootstrap.Modal(document.getElementById("enquiryModal"));
      // enquiryModal.show();
      //     }
      // });

    } else {
      console.warn("Matching product type or ID not found in data.");
      container.innerHTML = `<p>Product not found or has no variants.</p>`;
    }
  })
  .catch((err) => {
    console.error("Error loading product detail:", err);
    container.innerHTML = `<p>Error loading product details.</p>`;
  });

// enquiry form submission
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-getEnquireNow")) {
    const parent = e.target.closest(".product-model-detail-container");
    const productName = parent.querySelector("#product-model-name")?.textContent.trim() || "";
    const modelNumber = parent.querySelector("#product-model-number")?.textContent.trim().replace("Model No.:", "").trim() || "";

    // Fill modal inputs
    document.getElementById("product_name_display").textContent = "Product Name: " + productName;
    document.getElementById("product_name").value = productName;

    document.getElementById("model_number_display").textContent = "Model Number: " + modelNumber;
    document.getElementById("model_number").value = modelNumber;

    const enquiryModal = new bootstrap.Modal(document.getElementById("enquiryModal"));
    enquiryModal.show();
  }
});

// Handle form submission
document.getElementById("enquiryForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData
    });

    const result = await response.text();
    if (!response.ok || result.toLowerCase().includes("error") || result.toLowerCase().includes("failed")) {
      showErrorMessage(result, "danger");
    } else {
      showSuccessMessage(result, "success");
      form.reset();
    }
  } catch (err) {
    showErrorMessage("Error sending enquiry: " + err.message, "danger");
  }
});

// success handler after enquiry form submission 
function showSuccessMessage() {
  const productName = document.getElementById('product_name').value;
  const modelNo = document.getElementById('model_number').value;

  document.getElementById('success_product_name').textContent = productName;
  document.getElementById('success_model_no').textContent = modelNo;

  // Change modal heading to success message
  document.getElementById('enquiryModalLabel').textContent = 'Thank you for your enquiry';
  // Change modal header background to danger
  document.querySelector('#modal-header').classList.add('bg-success');
  document.querySelector('#enquiryModalLabel').classList.add('text-light');

  document.getElementById('enquiry-form-section').style.display = 'none';
  document.getElementById('enquiry-footer').style.display = 'none';
  document.getElementById('enquiry-success-section').style.display = 'block';
}

//error handler after enquiry form submission 
function showErrorMessage() {
  const productName = document.getElementById('product_name').value;
  const modelNo = document.getElementById('model_number').value;

  document.getElementById('error_product_name').textContent = productName;
  document.getElementById('error_model_no').textContent = modelNo;

  // Change modal heading to error message
  document.getElementById('enquiryModalLabel').textContent = 'Failed to send enquiry';
  // Change modal header background to danger
  document.querySelector('#modal-header').classList.add('bg-danger');
  document.querySelector('#enquiryModalLabel').classList.add('text-light');

  document.getElementById('enquiry-form-section').style.display = 'none';
  document.getElementById('enquiry-footer').style.display = 'none';
  document.getElementById('enquiry-error-section').style.display = 'block';
}


// Go back function 
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = '/index.html';
  }
}



