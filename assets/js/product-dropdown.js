document.addEventListener("DOMContentLoaded", function () {
    const navTab = document.getElementById("nav-tab");
    const navContent = document.getElementById("nav-tabContent");

    fetch("assets/data/dropdownData.json")
        .then((res) => res.json())
        .then((data) => {
            if (data && data.tabs) {
                const dropdownData = data.tabs;

                dropdownData.forEach((tab, index) => {
                    // Create tab button
                    const tabBtn = document.createElement("button");
                    tabBtn.className = "nav-link" + (index === 0 ? " active" : "");
                    tabBtn.id = `nav-${tab.id}-tab`;
                    tabBtn.setAttribute("data-bs-toggle", "tab");
                    tabBtn.setAttribute("data-bs-target", `#nav-${tab.id}`);
                    tabBtn.setAttribute("type", "button");
                    tabBtn.setAttribute("role", "tab");
                    tabBtn.setAttribute("aria-controls", `nav-${tab.id}`);
                    tabBtn.setAttribute("aria-selected", index === 0 ? "true" : "false");
                    tabBtn.innerHTML = `<i class="${tab.icon}"></i> ${tab.label}`;

                    navTab.appendChild(tabBtn);

                    // Create tab content
                    const tabPane = document.createElement("div");
                    tabPane.className = "tab-pane fade" + (index === 0 ? " show active" : "");
                    tabPane.id = `nav-${tab.id}`;
                    tabPane.setAttribute("role", "tabpanel");
                    tabPane.setAttribute("aria-labelledby", `nav-${tab.id}-tab`);
                    tabPane.setAttribute("tabindex", "0");

                    const container = document.createElement("div");
                    container.className = "dropdown-container";

                    tab.items.forEach((item) => {
                        const a = document.createElement("a");
                        a.href = item.link;

                        const itemDiv = document.createElement("div");
                        itemDiv.className = "dropdown-item-container";

                        const img = document.createElement("img");
                        img.className = "dropdown-image";
                        img.src = item.image;
                        img.alt = item.text;

                        const p = document.createElement("p");
                        p.className = "dropdown-item-text";
                        p.textContent = item.text;

                        itemDiv.appendChild(img);
                        itemDiv.appendChild(p);
                        a.appendChild(itemDiv);
                        container.appendChild(a);
                    });

                    tabPane.appendChild(container);
                    navContent.appendChild(tabPane);
                });
            } else {
                console.error("Dropdown data is not structured correctly.");
            }
        })
        .catch((err) => {
            console.error("Failed to load dropdown data:", err);
        });
});
