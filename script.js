const jobTitles = [
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Draftsman",
    "Designer",
    "Game Developer",
    "Modeller",
];
const colors = ["#116466", "#ffcb9a", "#d1e8e2"];

const webDevProjects = [
    {
        title: "Internal Inventory System",
        description:
            "This is an internal inventory system that I created for a previous employer. This system was created using HTML, CSS, JavaScript, MySql, Python, and PHP. This system was created to allow the company to track inventory and pulled from the shelf. It utilized tablets that could scan QR codes and then upload that information to the server. The user was able to create job numbers that the parts could be assigned to upon upload. It also utilize a unique system from printing QR code and part information to a label sheet for placement on the inventory shelf.",
        imgPath: "/imgs/createLabels.jpg",
        link: "",
    },
    {
        title: "Flexbox Business Site",
        description:
            "In this project I focused on using flex box to creating a website using solely flexbox vs grid. I used a responsive design to adjust the site based on the screen size.",
        imgPath: "/imgs/flexSite.jpg",
        link: "https://lyzboy.github.io/flexBusiness/index.html",
    },
    {
        title: "Responsive Business Site",
        description:
            "In this project I focused on ensuring a dynamic website that is responsive to display a functional user interface at all display sizes. I used a responsive design to adjust the site based on the screen size.",
        imgPath: "/imgs/responsiveSite.jpg",
        link: "https://lyzboy.github.io/responsiveSite/index.html",
    },
    {
        title: "WH Power Solutions Website",
        description:
            "This website was created for WH Power Solutions, a division of Watson Hopper, Inc. This website was created using Wordpress, Elegant Theme's Divi, and custom CSS. I was tasked with creating a website that was easy to navigate and provided a clean and professional look as well as a logo for the division. Many of the other projects I have worked on are also featured on this website.",
        imgPath: "/imgs/WhPowerSolutions_screenshot.jpg",
        link: "https://whpowersolutions.com",
    },
];

const gameProjects = [
    {
        title: "Sample Game",
        description: "A sample game",
        imgPath: "/imgs/ImgPlaceholder.png",
        link: "",
    },
];

const modelingProjects = [
    {
        title: "Electrial Control Box",
        description:
            "The control box is a real world object for an engine platform that was modeled in SolidWorks and then imported into Blender. Additional geometery was added and then textured and rendered within Blender.",
        imgPath: "/imgs/PowerModuleControlBox.JPG",
        link: "",
    },
    {
        title: "Power Module",
        description:
            "The is a real world object for an engine platform that was modeled in SolidWorks and then imported into Blender. Additional geometery was added and then textured and rendered within Blender.",
        imgPath: "/imgs/PowerModule.jpg",
        link: "",
    },
];

const draftingProjects = [
    {
        title: "WH Power Solutions Power Module",
        description:
            "Within this project, I was tasked with the design and drafting of a gen set that could be placed on various oil field equipment and act as a power transmission device within the designated platform. I worked closely with the engine provider to ensure that the engine would fit within the design and that the design would meet the needs of the customer. I also worked with the customer to ensure that the design met their needs and that the design would fit within their equipment. Using structural weldments and sheet metal, I designed and drafted this project for the requirements of the customer and ease of manufacturing. This required drawings in the range of 300-400 uniquely designed parts. This project was created using AutoCAD and SolidoWorks.",
        imgPath: "/imgs/PM_Design.jpg",
        link: "https://whpowersolutions.com/power-modules/",
    },
];

const codingProjects = [
    {
        title: "Murphy Power View",
        description:
            "Within this project, I was tasked with creating a UI/UX design as well as code to implement an engine control system utilizing J1939. This was compiled onto a Murphy Power View PV485 display controller. This project was created using a proprietary language which combined visual programming with a script similar to JavaScript. This project had to utilize custom mathmatical curves to translate analog input into a 0-100% value for fuel and DEF level displays. ",
        imgPath: "/imgs/MurphyViewScreen.png",
        link: "",
    },
];
const designProjects = [
    {
        title: "Marketing and Design",
        description:
            "Follow the link to view multiple market and design projects that I have worked on for a previous employer. All marketing ``projects from this page where created using Photoshop, Illustrator. The technical documents were created using Microsoft Word.",
        imgPath: "",
        link: "https://whpowersolutions.com/media/",
    },
];

const accolades = [
    {
        id: "bsit",
        title: "BSIT",
        description:
            "I have received my Bachelor of Science in Information Technology with a focus in Software Systems Engineering. I graduated with honors and a 3.98 GPA. Within this degree field I studied a wide variety of topics including: Software Development, Web Development, Database Management, Project Management, Networking, and Security.",
        completionDate: "2015",
        institution: "Colorado Technical University",
        imgPath: "/imgs/Jsanford_BSIT.jpg",
    },
    {
        id: "mechanical",
        title: "Mechanical Drafting",
        description:
            "I received my Mechanical Draft certification in 2011. In this program I learned about mechanical drafting techniques and standards. We also focused on design and drafting of mechanical projects including: 3D modeling, 2D modeling, Design, and Geometric Dimensioning and Tolerancing. We utilized AutoCAD, Inventor, and Solidworks.",
        completionDate: "2011",
        institution: "Delta Montrose Technical College",
        imgPath: "/imgs/Jsanford_Mechanical.jpg",
    },
    {
        id: "civil",
        title: "Civil Drafting",
        description:
            "I received my Civil Drafting certification in 2012. In this program I learned about civil drafting techniques and standards. We also focused on design and drafting of civil projects including surveying and plat map creation for residential projects. These projects where completed using AutoCAD Civil 3D.",
        completionDate: "2012",
        institution: "Delta Montrose Technical College",
        imgPath: "/imgs/Jsanford_Civil.jpg",
    },
    {
        id: "architectural",
        title: "Architectural Drafting",
        description:
            "I received my Architectural Drafting certificaton in 2011. In this program I learned about architectural drafting techniques and standards. We also focused on design and drafting of architectural projects including: 3D modeling, 2D modeling, and Design. We utilized AutoCAD and Revit.",
        completionDate: "2011",
        institution: "Delta Montrose Technical College",
        imgPath: "/imgs/JSanford_Architectural.jpg",
    },
    {
        id: "techincal",
        title: "Technical Drafting",
        description:
            "I received my Technical Drafting certification in 2010. In this program I learned about drafting techniques and standards. The focus of this program was to understand drafting and gain a complete understanding of drafting programs. We utilized AutoCAD and SolidWorks.",
        completionDate: "2010",
        institution: "Delta Montrose Technical College",
        imgPath: "/imgs/JSanford_Technical.jpg",
    },
    {
        id: "webDevBootcamp",
        title: "Web Dev Bootcamp",
        description:
            "I received this certificate in 2018. This course covered a wide variety of topics including: HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and React.",
        completionDate: "2018",
        institution: "Udemy",
        imgPath: "/imgs/JSanford_WebDevBootcamp.jpg",
    },
    {
        id: "learnReact",
        title: "Learn React",
        description:
            "I received this certificate in 2020. This course covered React.js. I learned how to create components, use props, use state, and use hooks using the standard React.js library.",
        completionDate: "2023",
        institution: "Codecademy",
        imgPath: "/imgs/JSanford_LearnReact.jpg",
    },
];

let jobIndex = 0;
colorIndex = 0;

// every second, change the text of about__header__job-titles to a random job title and color
setInterval(() => {
    let jobTitleElement = document.querySelector("#about__header__job-titles");

    let newJobIndex = Math.floor(Math.random() * jobTitles.length);

    while (newJobIndex === jobIndex) {
        newJobIndex = Math.floor(Math.random() * jobTitles.length);
    }
    jobIndex = newJobIndex;
    const jobTitle = jobTitles[newJobIndex];

    jobTitleElement.textContent = jobTitle;
    jobTitleElement.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 1000);

const btn_bsit = document.querySelector("#bsit");
const btn_mechanical = document.querySelector("#mechanical");
const btn_civil = document.querySelector("#civil");
const btn_architectural = document.querySelector("#architectural");
const btn_techincal = document.querySelector("#techincal");
const btn_webDevBootcamp = document.querySelector("#webDevBootcamp");
const btn_learnReact = document.querySelector("#learnReact");
const accolade_expansion = document.querySelector("#accolade_expansion");
const accolade_close = document.querySelector("#accolade__exit");
const accoladeContent = document.querySelector("#accolade_expansion__content");

btn_bsit.addEventListener("click", () => {
    handleAccoladeClick("bsit");
});
btn_mechanical.addEventListener("click", () => {
    handleAccoladeClick("mechanical");
});
btn_civil.addEventListener("click", () => {
    handleAccoladeClick("civil");
});
btn_architectural.addEventListener("click", () => {
    handleAccoladeClick("architectural");
});
btn_techincal.addEventListener("click", () => {
    handleAccoladeClick("techincal");
});
btn_webDevBootcamp.addEventListener("click", () => {
    handleAccoladeClick("webDevBootcamp");
});
btn_learnReact.addEventListener("click", () => {
    handleAccoladeClick("learnReact");
});
accolade_close.addEventListener("click", () => {
    let accoladeImg = document.querySelector(".accoladeImg img");
    if (accoladeImg) {
        accoladeImg.style.visibility = "hidden";
    }
    scaleDownAccolade().then(() => {
        accolade_expansion.classList.replace("show", "hide");
    });
});

function handleAccoladeClick(accolade) {
    accolade_expansion.classList.replace("hide", "show");
    populateAccolade(accolade);
    scaleUpAccolade();
}

// animation to scale down the accolade
function scaleDownAccolade() {
    return new Promise((resolve) => {
        let scale = 1;
        let id = setInterval(frame, 5);
        function frame() {
            if (scale <= 0) {
                clearInterval(id);
                resolve();
            } else {
                scale -= 0.05;
                accolade_expansion.style.transform = `scale(${scale})`;
            }
        }
    });
}

// scale up the accolade
function scaleUpAccolade() {
    let scale = 0;
    let id = setInterval(frame, 5);
    function frame() {
        if (scale >= 1) {
            clearInterval(id);
        } else {
            scale += 0.05;
            accolade_expansion.style.transform = `scale(${scale})`;
        }
    }
}

function populateAccolade(accolade) {
    let accoladeObj = accolades.find((obj) => obj.id === accolade);
    accoladeContent.innerHTML = `
    <h2>${accoladeObj.title}</h2>
    <div class="accoladeImg">
    <img src="${accoladeObj.imgPath}" alt="">
    </div>
    <p class="accolade__heading">Completed ${accoladeObj.completionDate}</p>
    <p class="accolade__heading">At ${accoladeObj.institution}</p>
    <p>${accoladeObj.description}</p>
    `;
}

const projectContainer = document.querySelector("#projects");
const project_scrollArea = document.querySelector("#projects_scroll");
const btnWebDev = document.querySelector("#btn_webDev");
const btnCoding = document.querySelector("#btn_coding");
const btnModeling = document.querySelector("#btn_modeling");
const btnDrafting = document.querySelector("#btn_drafting");
const btnGames = document.querySelector("#btn_games");
const btnDesign = document.querySelector("#btn_design");
const animationElement = document.querySelector("#animation-element");
let selectedNav = btnWebDev;

let animationInProgress = false;

btnWebDev.addEventListener("click", (event) => {
    handleButtonClick(event.target, webDevProjects);
});

btnCoding.addEventListener("click", (event) => {
    handleButtonClick(event.target, codingProjects);
});

btnModeling.addEventListener("click", (event) => {
    handleButtonClick(event.target, modelingProjects);
});

btnDrafting.addEventListener("click", (event) => {
    handleButtonClick(event.target, draftingProjects);
});

btnDesign.addEventListener("click", (event) => {
    handleButtonClick(event.target, designProjects);
});

function handleButtonClick(target, projects) {
    selectedNav.classList.remove("nav-selected");
    selectedNav = target;
    selectedNav.classList.add("nav-selected");
    if (!animationInProgress) {
        scrollUp()
            .then(() => swipeRight())
            .then(() => populateProjects(projects))
            .then(() => swipeLeft());
    }
}

// use fragment to avoid reflow
// function addElementsBetter(element) {
//     var div,
//         fragment = document.createDocumentFragment();
//     for (var i = 0; i < 5; i++) {
//         div = document.createElement('div');
//         div.textContent = 'added';
//         fragment.appendChild(div);
//     }
//     element.appendChild(fragment);
// }
async function populateProjects(projects) {
    projectContainer.innerHTML = "";
    let fragment = document.createDocumentFragment();
    projects.forEach((project) => {
        let link = "";
        if (project.link.length > 0) {
            link = `<a href="${project.link}" target="_blank">Visit the site</a>`;
        }
        let projectElement = document.createElement("div");
        projectElement.classList.add("project");
        projectElement.innerHTML = `
        <div class="project__header">
            <h2>${project.title}</h2>
        </div>
        <div class="project__img">
            <img src="${project.imgPath}" alt="">
        </div>
        <div class="project__description">
            <p>${project.description}</p>
            ${link}
        </div>
        `;
        fragment.appendChild(projectElement);
    });
    projectContainer.appendChild(fragment);

    return;
}

function scrollUp() {
    return new Promise((resolve) => {
        project_scrollArea.scroll({
            top: 0,
            behavior: "smooth",
        });

        let checkScroll = setInterval(function () {
            if (project_scrollArea.scrollTop === 0) {
                clearInterval(checkScroll);
                resolve();
            }
        }, 50); // check every 50ms
    });
}

function swipeRight() {
    return new Promise((resolve) => {
        animationElement.style.visibility = "visible";
        animationElement.style.top = project_scrollArea.scrollTop + "px"; // Set the top to the current scroll position

        animationElement.style.opacity = 1;
        let pos = -1000;
        let id = setInterval(frame, 5);
        function frame() {
            if (pos >= 0) {
                clearInterval(id);
                animationElement.style.left = 0;
                resolve();
            } else {
                pos += 8;
                animationElement.style.left = pos + "px";
            }
        }
    });
}

function swipeLeft() {
    return new Promise((resolve) => {
        animationInProgress = true;
        let pos = 0;
        let id = setInterval(frame, 5);
        function frame() {
            if (pos <= -1000) {
                clearInterval(id);
                animationElement.style.left = -1000;
                animationElement.style.opacity = 0;
                animationElement.style.visibility = "hidden";
                animationInProgress = false; // Set animationInProgress back to false
                resolve();
            } else {
                pos -= 8;
                animationElement.style.left = pos + "px";
            }
        }
    });
}
