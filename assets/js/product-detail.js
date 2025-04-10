// 1. Get the product ID from the url
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// product data
const productData = {
  "BNELF-10-100-ML-1HP": {
    name: "BNELF-10-100-ML-1HP",
    image: "assets/img/products/fully-auto-liquid-filling-machine.png",
    description: "A high-performance semi-auto liquid filling machine with 1HP power for 10-100ml filling range.",
    power: "20W - 50W 230v AC 50Hz",
    airPressure: "0.4 - 0.6MPa",
    fillingSpeed: "5-25 -10 -50 bottles/min",
    fillingAccuracy: "≤±1%" ,
    machineDimensionLxWxH: "950 X320 X 340mm" ,
    weight: "20KG / 40 kg"  
  },
  "BNELF-10-100-ML-2HP": {
    name: "BNELF-10-100-ML-2HP",
    image: "assets/img/products/fully-auto-liquid-filling-machine.png",
    description: "An upgraded 2HP variant for faster and more efficient filling.",
    power: "20W -50W 230v AC 50Hz",
    airPressure: "0.4-0.6MPa",
    fillingSpeed: "5-25 -10 -50 bottles/min",
    fillingAccuracy: "≤±1%" ,
    machineDimensionLxWxH: "950 X 320 X 340mm" ,
    weight: "20KG / 40kg"  
  },
  // Add other products similarly
};

// 3. Get DOM elements
const nameElement = document.getElementById("product-model-name");
const imageElement = document.getElementById("product-model-image");
const descElement = document.getElementById("product-model-description");
const powerElement = document.getElementById("product-model-power");
const airPressureElement = document.getElementById("product-model-air-pressure");
const fillingSpeedElement = document.getElementById("product-model-filling-speed");
const fillingAccuracyElement = document.getElementById("product-model-filling-accuracy");
const machineDimensionLxWxHElement = document.getElementById("product-model-machine-dimensions");
const weightElement = document.getElementById("product-model-weight");

// 4. Set the content
if (productId && productData[productId]) {
  const product = productData[productId];
  nameElement.textContent = product.name;
  imageElement.src = product.image;
  descElement.textContent = product.description;
  powerElement.textContent = product.power;
  airPressureElement.textContent = product.airPressure;
  fillingSpeedElement.textContent = product.fillingSpeed;
  fillingAccuracyElement.textContent = product.fillingAccuracy;
  machineDimensionLxWxHElement.textContent = product.machineDimensionLxWxH;
  weightElement.textContent = product.weight;
} else {
  nameElement.textContent = "Product Not Found";
  descElement.textContent = "The product you are looking for doesn't exist.";
}