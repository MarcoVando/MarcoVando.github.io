const $ = id => document.getElementById(id);

$("siteName").textContent = SITE.name;
$("name").textContent = SITE.name;
$("title").textContent = SITE.title;

$("aboutContent").innerHTML = SITE.about;

$("emailLink").href = `mailto:${SITE.email}`;
$("githubLink").href = SITE.github;
$("linkedinLink").href = SITE.linkedin;
$("scholarLink").href = SITE.scholar;
$("cvLink").href = SITE.cv;

EDUCATION.forEach(item=>{
    $("educationContent").innerHTML += `
        <div class="card">
            <h3>${item.title}</h3>
            <p>${item.organization}</p>
            <p>${item.years}</p>
            <p>${item.description}</p>
        </div>
    `;
});

AWARDS.forEach(item=>{
    $("awardsContent").innerHTML += `
        <div class="card">
            ${item.name} (${item.year})
        </div>
    `;
});

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
