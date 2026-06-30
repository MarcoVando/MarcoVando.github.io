const TEXT_COLLAPSE_LINES = 3;

const NEWS_FILES = [
    "news/paper-accepted.html",
    "news/conference-talk.html",
    "news/final-view-phd.html",
];

const PROJECTS_FILES = [
    "Projects/mof-synthesis.md",
    "Projects/python-data-tools.md"
];

const SITE = {
    name: "Marco Vandone",
    title: "Solid State Scientist | Chemistry specialist | Ph.D. in Chemistry",
    email: "marco.vandone@gmail.com",
    github: "https://github.com/MarcoVando",
    linkedin: "https://www.linkedin.com/in/marco-vandone-2b2456220/",
    scholar: "https://scholar.google.com/citations?user=q60koSwAAAAJ&hl=it",
    cv: "assets/Vandone_Resume.pdf",
    small_description: `Happened to be a Ph.D. in Chemistry, but multidisciplinary in the heart. 
    Electronics and DIY enhusiast, with a passion for coding and data science applied to scientific research.
    Currently exploring new endeavors in the field of polymeric materials.  
    Former MIT visitor in Mircea Dinca Lab, working on novel Metal Organic Frameworks (MOFs).
    Reviewer for Inorganic Chemistry. 
    Consultant for AmbroPolymer, providing expertise in polymeric materials analysis and quality control. 
    Strong background in crystallography and materials science, specializing in X-ray techniques and data analysis. \ 
    `,
    about: `
        As a Ph.D. Chemist with a strong foundation in crystallography and materials science, I specialize in the structural characterization of complex materials—including Metal–Organic Frameworks (MOFs) and pharmaceutical compounds—using advanced X-ray techniques. My expertise spans powder and single-crystal X-ray diffraction, Pair Distribution Function (PDF) analysis, and X-ray absorption spectroscopy (XAS), all of which I’ve applied to elucidate structure–function relationships in porous and functional materials. Furthermore, I also sharpened my skills in the analysis of data coming from a large variety of analytical techiniques such as NMR, IR-Raman, TGA-DSC, SEM-EDX, ICP-MS and porosity assessment) 
        I’ve led and independently developed research projects across several international institutions, including MIT (USA) and ICMM-CSIC (Spain), and actively collaborated with pharmaceutical companies on API structure determination. My hands-on experience includes designing and executing synchrotron-based experiments, from beamtime proposal to data collection and analysis, at facilities such as ESRF and ELETTRA.

        Beyond the lab, I bring a passion for coding and data science to scientific research. I’ve developed custom Python tools and packages to automate and streamline processing of alrge amount of data —skills that complement my experimental work and enhance reproducibility and throughput in large-scale studies. 

        I’ve also contributed to student mentorship, public science communication, and the organization of international scientific schools.

        🔬 Core Competencies:

        Crystallography (PXRD, SC-XRD, PDF, XAS)
        Standard Laboratory  analytical techniques (TGA-DSC, IR-Raman, SEM-EDX, ICP-MS, NMR, Porosity assessment)
        Porous metal-organic materials synthesis & characterization
        Python scripting for data analysis
        Synchrotron experiment design
        API structure elucidation
        Scientific writing & presentation
        📍 Driven by curiosity and precision, I strive to bridge experimental chemistry with data science to accelerate materials discovery. I'm always open to interdisciplinary collaborations, particularly those combining structure, function, and computation.
            `
};

const EDUCATION = [
{
    title: "Ph.D. in Chemistry",
    organization: "University of Milan",
    logo: "images/logos/unimi.png",
    years: "2021 - 2025",
    description: "Synthesized and characterized a wide range of metal-organic frameworks (MOFs) using XRD, PDF, porosity analysis, IR, TGA, NMR, SEM-EDX, and ICP techniques. \
    Investigated the polymorphism of various API through PXRD, SC-XRD, TGA-DSC. Investigated active sites in porous MOFs using advanced spectroscopic and crystallographic methods. \
    Employed operando X-ray techniques to study structural changes and functional behavior under real-time conditions. \
    Explored catalytic performance of MOFs for methane-to-methanol oxidation reactions. \
    Proposed and coordinated successful beamtime experiments at synchrotron radiation facilities. \
    Conducted synchrotron-based experiments, ensuring efficient data collection and analysis workflows. \
    Developed Python scripts and packages for batch analysis of large synchrotron datasets. Automated software workflows using custom Python scripting. Collaborated across multidisciplinary teams to interpret complex experimental data"
},
{
    title: "Master of Science in Chemical Sciences",
    organization: "University of Milan",
    logo: "images/logos/unimi.png",
    years: "2019 - 2021",
    description: ""
},
{
    title: "Bachelor of Science in Chemistry",
    organization: "University of Milan",
    logo: "images/logos/unimi.png",
    years: "2016 - 2019",
    description: ""
}
];

const EXPERIENCE = [
{
    title: "R&D Chemistry and Microbiology Specialist",
    organization: "Goglio S.p.A",
    logo: "images/logos/goglio.png",
    years: "2025 - Present",
    description: "Description of your role and responsibilities at the company."
},
{
    title: "Research Fellow",
    logo: "images/logos/unimi.png",
    organization: "University of Milan",
    years: "2024 - 2025",
    description: "- Supervising research on the synthesis and characterization of metal-organic frameworks (MOFs) for CO2 capture. \
    - Performing SCXRD, PXRD, TGA-DSC, NMR, IR, SEM-EDX, and porosimetry on APIs and porous materials. \
    - Collaborating with a pharmaceutical company on solid-state analysis and API crystallization. \
    - Developing SOPs for new techniques and instruments. Training new lab members in synthesis and analytical workflows. \
    - Developed custom Python scripts and packages to automate workflows involving multiple scientific software tools, and enabling batch analysis of large datasets from synchrotron experiment"
},
{
    title: "Visiting Ph.D. Researcher",
    organization: "Massachusetts Institute of Technology (MIT), USA",
    logo: "images/logos/mit.png",
    years: "2023",
    description: "Independently ideated, designed, and developed a novel research project focused on flexible multi-metal MOFs \
    Synthesized and characterized innovative MOFs with unique structural properties \
    Performed air-free synthesis using Schlenk techniques and gloveboxes \
    Conducted detailed characterization using powder X-ray diffraction (PXRD) and porosity analysis \
    Carried out structure elucidation of novel porous metal-organic materials via advanced PXRD techniques \
    Designed and built a Swagelok-based high-pressure gas dosing system for in situ diffraction studies"
},
{
    title: "Independent Consultant",
    logo: "images/logos/ambropolymer.png",
    organization: "AmbroPolymer",
    years: "2021 - 2024",
    description: "Identified and resolved chemistry-related issues in the analysis of polymeric materials. Provided guidance on selecting appropriate analytical instruments for evaluation and quality control of polymer systems"
},
{
    title: "Visiting Master Student Researcher",
    organization: "ICMM-CSIC, Spain",
    logo: "images/logos/icmm.jpg",
    years: "2021",
    description: "Conducted the synthesis and analysis of various Fe-based MOFs\
    Applied X-ray diffraction techniques to investigate and characterize material structures\
    Completed a 5-month international research project as part of the University of Milan’s “Tesi all’Estero” program"
},
{
    title: "Visiting Student, Studente Laureato" ,
    organization: "University of Milan",
    logo: "images/logos/unimi.png",
    years: "2019-2020",
    description: "Conducted crystallographic analysis of Y-based Metal-Organic Frameworks (MOFs), including structure determination using ab initio methods and Rietveld refinement to optimize and characterize the obtained crystal structures."
}
];

const AWARDS_PRIZES= [
{
    name: "Best Poster Award",
    year: "2023",
    organization: "International Conference on MOFs and Porous Materials",
    description: "Received the Best Poster Award for presenting research on novel MOF structures and their applications in gas storage and separation."
},
{
    name: "Young Researcher Grant",
    year: "2022",
    organization: "European Crystallographic Association",
    description: "Awarded a grant to support research on advanced crystallographic techniques for the study of complex materials."
},

];

const PROJECTS = [
{
    title: "Project Name",
    image: "images/projects/project1.jpg",
    description: "Description",
    github: "#",
    website: "#"
}
];

const NEWS = [
{
    date: "Jun 2026",
    text: "Paper accepted at CVPR."
},
{
    date: "Feb 2026",
    text: "Released project."
}
];

const LICENSES_CERTIFICATIONS = [
    {
        title: "Python for Data Science and Machine Learning Bootcamp",
        organization: "Udemy",
        year: "2026",
        credential_id: "",
        credential_url: ""
    },
    {
        title: "McKinsey Forward Program",
        organization: "McKinsey & Company",
        year: "2026",
        credential_id: "0987654321",
        credential_url: "https://www.mckinsey.com/certificate/UC-0987654321/"
    }
]

const PUBLICATIONS = [
{
    year: 2026,
    image: "images/publications/pub1.jpg",
    title: "Paper Title",
    authors: "Author A, Author B",
    venue: "CVPR 2026",
    paper: "#",
    code: "#",
    project: "#"
},
{
    year: 2025,
    image: "images/publications/pub2.jpg",
    title: "Paper Title 2",
    authors: "Author A, Author B",
    venue: "NeurIPS 2025",
    paper: "#",
    code: "#",
    project: "#"
}
];
