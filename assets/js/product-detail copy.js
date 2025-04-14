// 1. Get the product ID from the url
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Get DOM elements
const nameElement = document.getElementById("product-model-name");
const categoryElement = document.getElementById("product-model-category");
const modelElement = document.getElementById("product-model-number");
const imageElement = document.getElementById("product-model-image");
const powerElement = document.getElementById("product-model-power");
const airPressureElement = document.getElementById("product-model-air-pressure");
const fillingSpeedElement = document.getElementById("product-model-filling-speed");
const fillingAccuracyElement = document.getElementById("product-model-filling-accuracy");
const machineDimensionLxWxHElement = document.getElementById("product-model-machine-dimensions");
const weightElement = document.getElementById("product-model-weight");
const descElement = document.getElementById("product-model-description");

// Helper function to check and show/hide elements
function setField(element, value) {
  if (value && value.trim() !== "-") {
    element.textContent = value;
    element.parentElement.style.display = "";
  } else {
    element.parentElement.style.display = "none";
  }
}

// Set the content
fetch("assets/data/productDetail.json")
  .then((res) => res.json())
  .then((data) => {
    const productData = data.liquidFillingMachines;
    if (productId && productData[productId]) {
      const product = productData[productId];

      nameElement.textContent = product.name || "Unnamed Machine";
      categoryElement.textContent = product.category || "Unnamed Category";
      modelElement.textContent = "Model No. : " + product.model || "Unnamed Model";
      imageElement.src = product.image || "assets/img/placeholder-image.jpg";

      setField(powerElement, product.power);
      setField(airPressureElement, product.airPressure);
      setField(fillingSpeedElement, product.fillingSpeed);
      setField(fillingAccuracyElement, product.fillingAccuracy);
      setField(machineDimensionLxWxHElement, product.machineDimensionLxWxH);
      setField(weightElement, product.weight);
    } else {
      modelElement.textContent = "Product Not Found";
      descElement.textContent = "The product you are looking for doesn't exist.";
    }
  })
  .catch((error) => {
    console.error("Failed to load product data:", error);
    modelElement.textContent = "Error Loading Product";
    descElement.textContent = "There was a problem loading the product details.";
  });


// go back function 
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = '/index.html';
  }
}
