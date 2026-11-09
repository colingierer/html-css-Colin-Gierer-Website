function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Builds one project card per entry in PORTFOLIO (see portfolio-data.js).
function buildProjectCards() {
    const container = document.getElementById("project-cards");
    if (!container || typeof PORTFOLIO === "undefined") return;

    PORTFOLIO.forEach(function (item) {
        const card = document.createElement("div");
        card.className = "details-container color-container";
        card.id = item.id;

        const imgWrap = document.createElement("div");
        imgWrap.className = "article-container";
        const img = document.createElement("img");
        img.src = "./assets/" + item.image;
        img.alt = item.imageAlt;
        img.className = "project-img";
        imgWrap.appendChild(img);
        card.appendChild(imgWrap);

        const title = document.createElement("h2");
        title.className = "experience-sub-title project-title";
        title.textContent = item.title;
        card.appendChild(title);

        const meta = [item.week ? "Week " + item.week : "", item.audience]
            .filter(Boolean).join(" · ");
        if (meta) {
            const metaP = document.createElement("p");
            metaP.className = "project-meta";
            metaP.textContent = meta;
            card.appendChild(metaP);
        }

        if (item.summary) {
            const summary = document.createElement("p");
            summary.className = "project-summary";
            summary.textContent = item.summary;
            card.appendChild(summary);
        }
        if (item.tools) {
            const tools = document.createElement("p");
            tools.className = "project-tools";
            tools.textContent = "Tools: " + item.tools;
            card.appendChild(tools);
        }

        const btns = document.createElement("div");
        btns.className = "btn-container";
        if (item.link) btns.appendChild(makeButton("Github", item.link));
        if (item.howMadeLink) btns.appendChild(makeButton("How this was made", item.howMadeLink));

        card.appendChild(btns);
        container.appendChild(card);
    });
}

function makeButton(label, url) {
    const btn = document.createElement("button");
    btn.className = "btn btn-color-2 project-btn";
    btn.textContent = label;
    btn.addEventListener("click", function () {
        location.href = url;
    });
    return btn;
}

document.addEventListener("DOMContentLoaded", buildProjectCards);
