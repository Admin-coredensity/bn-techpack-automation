fetch('assets/data/productData.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const container = document.getElementById("product-description");

      const title = `<h2>${data.product_description.title}</h2>`;
      const overview = `<p>${data.product_description.overview}</p>`;

      const faqs = data.product_description.faqs.map(faq => `
        <h5>${faq.question}</h5>
        <p>${faq.answer}</p>
      `).join("");

      const featuresAuto = data.product_description.features.automatic.map(item => `<li>${item}</li>`).join("");
      const featuresSemi = data.product_description.features.semi_automatic.map(item => `<li>${item}</li>`).join("");

      container.innerHTML = `
        ${title}
        ${overview}
        ${faqs}
        <h6>Features & Advantages of Automatic Liquid Filling Machine:</h6>
        <ul>${featuresAuto}</ul>
        <h6>Features & Advantages of Semi-Automatic Liquid Filling Machine:</h6>
        <ul>${featuresSemi}</ul>
      `;
    })
    .catch(error => {
      console.error('Error loading the product description:', error);
    });