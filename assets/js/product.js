// Read "type" from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type') || 'liquid-filling-machine'; // fallback default
const category = urlParams.get("category") || 'primary-packages';

// Paths to content
const basePath = `assets/data/${category}/${type}`;
const mdPath = `${basePath}/description.md`;
const jsonPath = `${basePath}/models.json`;

// Load and render Markdown
fetch(mdPath)
  .then(res => res.text())
  .then(md => {
    const htmlContent = marked.parse(md);
    document.querySelector('.product-machine-description').innerHTML = htmlContent;
  })
  .catch(err => {
    console.error('Markdown load error:', err);
    document.querySelector('.product-machine-description').innerHTML = `<p>Details not available.</p>`;
  });

// Load and render JSON models
fetch(jsonPath)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-models-section');
    container.innerHTML = '';

    data.sections.forEach(section => {
      const sectionTitle = `<h4 class="product-model-section-main-heading">${section.title}</h4>`;
      container.insertAdjacentHTML('beforeend', sectionTitle);

      section.categories.forEach(category => {
        const catHeading = `<p class="product-model-category-heading">${category.subtitle}</p>`;
        const modelsHTML = category.models.map(model => `
          <div class="product-model-card" id="${model.id}">
            <a href="${model.link}">
              <div class="product-model-image-container">
                <img class="product-model-image" src="${model.image}" alt="${model.name}">
              </div>
              <div class="product-model-content">
                <p class="product-model-name">${model.name}</p>
              </div>
            </a>
          </div>
        `).join('');

        container.insertAdjacentHTML('beforeend', catHeading + `<div class="product-models-container">${modelsHTML}</div>`);
      });
    });
  })
  .catch(err => {
    console.error('JSON load error:', err);
    document.getElementById('product-models-section').innerHTML = `<p>Model data not available.</p>`;
  });
