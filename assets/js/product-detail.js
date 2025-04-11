// 1. Get the product ID from the url
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// fetch('./data/productuctData.json').then(response => productData = response);

// product data
const productData = {
   // viscosity for water to honey level
  "BNTPALF: 10-100 ML -GM 1HP/ 2HP": {
    name: "BNTPALF: 10-100 ML -GM 1HP/2HP",
    image: "assets/img/products/semi-auto-liquid-filling-machine-water-to-honey-level.png",
    power: "20W-50W 230 AC 50Hz",
    airPressure: "4 to 6 Bar",
    fillingSpeed: "5-10 - 10-20 bottles/min",
    fillingAccuracy: "≤±1-2% ML-GM" ,
    machineDimensionLxWxH: "950X320X340mm - 1230x470X350mm" ,
    weight: "20KG / 40 kg"  
  },
  "BNTPALF:50-500 ML –GM 1HP/2HP": {
    name: "BNTPALF: 50-500 ML –GM 1HP/2HP",
    image: "assets/img/products/semi-auto-liquid-filling-machine-water-to-honey-level.png",
    power: "20W-50W 230 AC 50Hz",
    airPressure: "4 TO 6 Bar",
    fillingSpeed: "5-10 -10-20 bottles/min",
    fillingAccuracy: "≤±1-2% ML-GM" ,
    machineDimensionLxWxH: "920 X 285 X275 mm - 920 X 485 X275 mm" ,
    weight: "20KG / 40kg"  
  },
  "BNTPALF:100-1000 ML –GM 1HP/ 2HP": {
    name: "BNTPALF: 100-1000 ML –GM 1HP/2HP",
    image: "assets/img/products/semi-auto-liquid-filling-machine-water-to-honey-level.png",
    power: "20W -50W 230 AC 50Hz",
    airPressure: "4 TO 6 Bar",
    fillingSpeed: "5-10 -10 -20 bottles/min",
    fillingAccuracy: "≤±1-2% ML-GM" ,
    machineDimensionLxWxH: "1320 X 285 X275 mm - 1320 x 485 X 275 mm" ,
    weight: "20KG / 40kg"  
  },
  "BNTPALF:500-5000 ML –GM 1HP/2HP": {
    name: "BNTPALF: 500-5000 ML –GM 1HP/2HP",
    image: "assets/img/products/semi-auto-liquid-filling-machine-water-to-honey-level.png",
    power: "20W -50W 230 AC 50Hz",
    airPressure: "4 TO 6 Bar",
    fillingSpeed: "5-10 -10 -20 bottles/min",
    fillingAccuracy: "≤±1-2% ML-GM" ,
    machineDimensionLxWxH: "950 X 320 X 340mm - 1230 x 470 X 350mm" ,
    weight: "20KG / 40kg"  
  },

  // viscosity for water to edible oil level
  "BNE4000-MLT-1HE": {
    name: "BNE4000-MLT-1HE",
    image: "assets/img/products/semi-auto-liquid-filling-machine-water-to-edible-oil-level.png",
    power: "-",
    airPressure: "4 TO 6 Bar",
    fillingSpeed: "5-10 bottles/min",
    fillingAccuracy: "≤±1-2% ML" ,
    machineDimensionLxWxH: "-" ,
    weight: "5 kg"  
  },
  "BNE4000-MLT-2HEP": {
    name: "BNE4000-MLT-2HE",
    image: "assets/img/products/semi-auto-liquid-filling-machine-water-to-edible-oil-level.png",
    power: "-",
    airPressure: "4 TO 6 Bar",
    fillingSpeed: "5-10 bottles/min",
    fillingAccuracy: "≤±1-2% ML" ,
    machineDimensionLxWxH: "-" ,
    weight: "12 kg"  
  },

};

// 3. Get DOM elements
const nameElement = document.getElementById("product-model-name");
const imageElement = document.getElementById("product-model-image");
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