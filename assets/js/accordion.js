document.addEventListener("DOMContentLoaded", () => {
    fetch('assets/data/accordionData.json')
      .then(response => response.json())
      .then(data => {
        const accordionContainer = document.getElementById('accordionExample');
        accordionContainer.innerHTML = '';

        data.forEach((section, index) => {
          const collapseId = `collapse${index}`;
          const headingId = `heading${index}`;
          const isOpen = section.isOpen ? 'show' : '';
          const buttonCollapsed = section.isOpen ? '' : 'collapsed';
          const expandedAttr = section.isOpen ? 'true' : 'false';

          let bodyContent = '';

          if (section.sections) {
            section.sections.forEach(sub => {
              bodyContent += `<p class="product-model-category-heading">${sub.heading}</p>`;
              sub.items.forEach(item => {
                bodyContent += `
                  <li class="accordion-category-link">
                    <a href="${item.link}">
                      <i class="bi bi-chevron-right"></i>
                      ${item.label}
                    </a>
                  </li>`;
              });
            });
          } else if (section.items) {
            section.items.forEach(item => {
              bodyContent += `
                <li class="accordion-category-link">
                  <i class="bi bi-chevron-right"></i>
                  ${item}
                </li>`;
            });
          }

          accordionContainer.innerHTML += `
            <div class="accordion-item">
              <h2 class="accordion-header" id="${headingId}">
                <button class="accordion-button ${buttonCollapsed}" type="button"
                  data-bs-toggle="collapse" data-bs-target="#${collapseId}"
                  aria-expanded="${expandedAttr}" aria-controls="${collapseId}">
                  <span class="d-flex justify-content-between align-items-center w-100">
                    <i class="icon-state bi me-2"></i>
                    <span>${section.title}</span>
                    <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                  </span>
                </button>
              </h2>
              <div id="${collapseId}" class="accordion-collapse collapse ${isOpen}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul class="ul">
                    ${bodyContent}
                  </ul>
                </div>
              </div>
            </div>`;
        });
      })
      .catch(err => {
        console.error("Failed to load accordion data:", err);
      });
  });