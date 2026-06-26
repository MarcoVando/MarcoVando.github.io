const $ = id => document.getElementById(id);
const CL = TEXT_COLLAPSE_LINES || 3;

// ── simple frontmatter parser ──
function parseFrontmatter(md){
    const match = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if(!match) return {data:{}, body:md};
    const raw = match[1];
    const body = match[2];
    const data = {};
    raw.split("\n").forEach(line=>{
        const m = line.match(/^(\w+):\s*"(.+)"$/);
        if(m) data[m[1]] = m[2];
    });
    return {data, body};
}

// ── simple markdown → html ──
function mdToHTML(md){
    let html = md
        .replace(/^### (.+)$/gm, "<h3>$1</h3>")
        .replace(/^## (.+)$/gm, "<h2>$1</h2>")
        .replace(/^# (.+)$/gm, "<h1>$1</h1>")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        .replace(/^- (.+)$/gm, "<li>$1</li>")
        .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")
        .replace(/^\n+/, "")
        .replace(/\n{2,}/g, "</p><p>")
        .replace(/^(.+)$/gm, (m)=>{
            if(/^<(\/?(ul|ol|li|h[1-6]|p|img|a|strong|em|div))/.test(m) || m.trim()==="") return m;
            if(/^<p>/.test(m)) return m;
            return `<p>${m}</p>`;
        });
    return html;
}

// ── fetch + render a list of .md files ──
function loadMarkdownList(fileList, containerId){
    const container = $(containerId);
    container.innerHTML = "";
    let loaded = 0;
    fileList.forEach((path, i)=>{
        fetch(path)
            .then(r=>r.text())
            .then(md=>{
                const {data, body} = parseFrontmatter(md);
                const htmlBody = mdToHTML(body.trim());
                const title = data.title || "Untitled";
                const date = data.date || "";
                const image = data.image || "";
                const isNews = containerId === "newsGrid";
                const card = document.createElement("div");
                card.className = isNews ? "news-card" : "project-card";

                let imgHTML;
                if(image){
                    imgHTML = `<img src="${image}" alt="${title}" loading="lazy">`;
                } else {
                    imgHTML = `<div class="card-img-placeholder"></div>`;
                }

                card.innerHTML = `
                    ${imgHTML}
                    <div class="card-content">
                        <h3>${title}</h3>
                        ${date ? `<p class="card-date">${date}</p>` : ""}
                        <div class="card-description">${htmlBody}</div>
                    </div>
                `;
                container.appendChild(card);
                loaded++;
            })
            .catch(()=>{
                loaded++;
            });
    });
}

function collapseHTML(text, id){
    if(!text || text.trim() === "") return `<div class="collapsible-content">${text}</div>`;
    return `
        <div class="collapsible-content collapsed" style="--collapse-lines:${CL}" id="${id}">
            <p>${text}</p>
        </div>
    `;
}

function toggleExpand(arrowEl){
    const contentId = arrowEl.getAttribute("data-target");
    const content = document.getElementById(contentId);
    if(content){
        content.classList.toggle("collapsed");
        arrowEl.classList.toggle("expanded");
    }
}

$("siteName").textContent = SITE.name;
$("name").textContent = SITE.name;
$("title").textContent = SITE.title;
$("small_description").textContent = SITE.small_description;
$("small_description").textContent = SITE.small_description;

$("emailLink").href = `mailto:${SITE.email}`;
$("githubLink").href = SITE.github;
$("linkedinLink").href = SITE.linkedin;
$("scholarLink").href = SITE.scholar;
$("cvLink").href = SITE.cv;

// About section — collapsible with arrow in header
{
    const aboutSection = document.getElementById("about");
    const h2 = aboutSection.querySelector("h2");
    h2.innerHTML = `About & Contact`;
    const header = document.createElement("div");
    header.className = "section-header";
    h2.parentNode.insertBefore(header, h2);
    header.appendChild(h2);
    const arrow = document.createElement("img");
    arrow.src = "images/down_arrow.png";
    arrow.className = "toggle-arrow";
    arrow.setAttribute("data-target", "aboutContent");
    arrow.onclick = () => toggleExpand(arrow);
    header.appendChild(arrow);

    const aboutContent = $("aboutContent");
    aboutContent.innerHTML = SITE.about;
    aboutContent.classList.add("collapsible-content");
    aboutContent.style.setProperty("--collapse-lines", CL);
    aboutContent.classList.add("collapsed");
}

// Load markdown-driven content
loadMarkdownList(NEWS_FILES, "newsGrid");
loadMarkdownList(PROJECTS_FILES, "projectGridMarkdown");

EDUCATION.forEach((item, i)=>{
    const id = `edu-text-${i}`;
    $("educationContent").innerHTML += `
        <div class="card">
            <div class="card-header">
                <img src="${item.logo}" alt="${item.organization}" class="institution-logo">
                <div>
                    <h3>${item.title}</h3>
                    <p>${item.organization}</p>
                    <p>${item.years}</p>
                </div>
                <img src="images/down_arrow.png" class="toggle-arrow" data-target="${id}" onclick="toggleExpand(this)">
            </div>
            ${collapseHTML(item.description, id)}
        </div>
    `;
});

EXPERIENCE.forEach((item, i)=>{
    const id = `exp-text-${i}`;
    $("experienceContent").innerHTML += `
        <div class="card">
            <div class="card-header">
                <img src="${item.logo}" alt="${item.organization}" class="institution-logo">
                <div>
                    <h3>${item.title}</h3>
                    <p>${item.organization}</p>
                    <p>${item.years}</p>
                </div>
                <img src="images/down_arrow.png" class="toggle-arrow" data-target="${id}" onclick="toggleExpand(this)">
            </div>
            ${collapseHTML(item.description, id)}
        </div>
    `;
});

// Render awards as a single card with 3-column grid of items
{
    const container = $("awardsContent");
    let html = `<div class="card"><div class="awards-grid">`;
    AWARDS_PRIZES.forEach(item=>{
        html += `
            <div class="award-item">
                <strong>${item.name}</strong> — ${item.year}
            </div>
        `;
    });
    html += `</div></div>`;
    container.innerHTML = html;
}

PROJECTS.forEach(project=>{
    $("projectGrid").innerHTML += `
    <div class="project-card">
        <img src="${project.image}">
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    </div>
    `;
});

NEWS.forEach(item=>{
    $("newsTimeline").innerHTML += `
        <div class="timeline-item">
            <strong>${item.date}</strong>
            <p>${item.text}</p>
        </div>
    `;
});

const years = [...new Set(PUBLICATIONS.map(p=>p.year))]
.sort((a,b)=>b-a);

$("publicationFilters").innerHTML =
`<button class="filter-btn" onclick="renderPubs('all')">All</button>` +
years.map(y =>
`<button class="filter-btn" onclick="renderPubs(${y})">${y}</button>`
).join("");

function renderPubs(year){

const list =
year === "all"
? PUBLICATIONS
: PUBLICATIONS.filter(p=>p.year===year);

$("publicationList").innerHTML = "";

list.forEach(pub=>{

$("publicationList").innerHTML += `
<div class="pub-card">

<img src="${pub.image}">

<div>
<h3>${pub.title}</h3>

<p>${pub.authors}</p>

<p>${pub.venue}</p>

<p>
<a href="${pub.paper}">Paper</a> |
<a href="${pub.code}">Code</a> |
<a href="${pub.project}">Project</a>
</p>
</div>

</div>
`;
});
}

renderPubs("all");

const toggle = $("themeToggle");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme){
document.documentElement.setAttribute(
"data-theme",
savedTheme
);
}

toggle.onclick = () => {

const current =
document.documentElement.getAttribute("data-theme");

const next =
current === "dark"
? "light"
: "dark";

document.documentElement.setAttribute(
"data-theme",
next
);

localStorage.setItem(
"theme",
next
);
};
