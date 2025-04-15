{
    // Get query params
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    const type = urlParams.get("type");

    const accordionContainer = document.getElementById("accordionExample");

    function createAccordionItem(section, index) {
        const collapseId = `collapse${index}`;
        const isFirst = index === 0;
        const showClass = isFirst ? "show" : "";
        const expanded = isFirst ? "true" : "false";

        return `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button ${isFirst ? "" : "collapsed"}" type="button" data-bs-toggle="collapse"
                    data-bs-target="#${collapseId}" aria-expanded="${expanded}" aria-controls="${collapseId}">
                    <span class="d-flex justify-content-between align-items-center w-100">
                        <i class="icon-state bi me-2"></i>
                        <span>${section.title}</span>
                        <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                    </span>
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${showClass}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="ul">
                        ${section.categories.map(category => `
                            ${category.subtitle ? `<p class="product-model-category-text">${category.subtitle}</p>` : ""}
                            ${category.models.map(model => `
                                <li class="accordion-category-link">
                                    <div><i class="bi bi-chevron-right"></i></div>
                                    <a href="${model.link}">${model.name}</a>
                                </li>
                            `).join("")}
                        `).join("")}
                    </ul>
                </div>
            </div>
        </div>`;
    }

    function loadAccordion(productData) {
        const sections = productData.sections;
        if (sections && sections.length > 0) {
            accordionContainer.innerHTML = sections.map((section, index) => createAccordionItem(section, index)).join("");

            // After rendering accordion, apply icon toggle logic
            const buttons = document.querySelectorAll('.accordion-button');

            function setIcon(button) {
                const icon = button.querySelector('.icon-state');
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                icon.className = isExpanded
                    ? 'icon-state bi bi-dash-circle-fill me-2'
                    : 'icon-state bi bi-plus-circle-fill me-2';
                icon.style.fontSize = '22px';
            }

            buttons.forEach(button => {
                setIcon(button);
                const observer = new MutationObserver(() => setIcon(button));
                observer.observe(button, { attributes: true, attributeFilter: ['aria-expanded'] });
            });

        } else {
            accordionContainer.innerHTML = "<p>No data available for this selection.</p>";
        }
    }

    // Dynamic path based on category and type
    const jsonPath = `assets/data/${category}/${type}/models.json`;

    fetch(jsonPath)
        .then(response => response.json())
        .then(productData => {
            console.log("Fetched product data:", productData);
            loadAccordion(productData);
        })
        .catch(error => console.error("Error loading product data:", error));
}
