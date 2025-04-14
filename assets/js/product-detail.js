const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const container = document.getElementById("variant-sections-container");

function renderVariant(variantKey, variantData) {
  return `
    <div class="product-model-detail-container">
      <div class="product-model-section-1">
        <img id="product-model-image" src="${variantData.image || "assets/img/placeholder-image.jpg"}" alt="Product Image" />
        <a class="btn-getEnquireNow">Enquire Now</a>
      </div>
      <div class="product-model-section-2">
        <h4 id="product-model-name">${variantData.name}</h4>
        <div id="product-model-category-container">
          <p id="product-model-number"><strong>Model No.:</strong> ${variantData.model}</p>
          <p id="product-model-category"><strong>Category:</strong> ${variantData.category}</p>
          <p><strong>Variant:</strong> ${variantKey}</p>
        </div>
        <div>
          <h4 class="technical-specification-text">Technical Specification</h4>
          <table class="table table-striped">
            <tbody>
              <tr>
                <th class="th-heading" scope="row">Power</th>
                <td id="product-model-power">${variantData.power}</td>
              </tr>
              <tr>
                <th class="th-heading" scope="row">Air Pressure</th>
                <td id="product-model-air-pressure">${variantData.airPressure}</td>
              </tr>
              <tr>
                <th class="th-heading" scope="row">Filling Speed</th>
                <td id="product-model-filling-speed">${variantData.fillingSpeed}</td>
              </tr>
              <tr>
                <th class="th-heading" scope="row">Filling Accuracy</th>
                <td id="product-model-filling-accuracy">${variantData.fillingAccuracy}</td>
              </tr>
              <tr>
                <th class="th-heading" scope="row">Machine Dimension L x W x H</th>
                <td id="product-model-machine-dimensions">${variantData.machineDimensionLxWxH}</td>
              </tr>
              <tr>
                <th class="th-heading" scope="row">Weight</th>
                <td id="product-model-weight">${variantData.weight}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

fetch("assets/data/productDetail.json")
  .then((res) => res.json())
  .then((data) => {
    const productData = data.liquidFillingMachines[productId];

    if (productData && typeof productData === "object") {
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
