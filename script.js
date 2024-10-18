// Replace with your Discord user ID
const DISCORD_USER_ID = 'YOUR_DISCORD_USER_ID'; // Put your Discord user ID here

// Create an array of projects
const projects = [
    {
        title: "Project 1",
        description: "This is a description of Project 1.",
        link: "https://example.com/project1"
    },
    {
        title: "Project 2",
        description: "This is a description of Project 2.",
        link: "https://example.com/project2"
    },
    {
        title: "Project 3",
        description: "This is a description of Project 3.",
        link: "https://example.com/project3"
    }
];

// Function to create project elements
function createProjectElement(project) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    const title = document.createElement('h2');
    title.innerText = project.title;

    const description = document.createElement('p');
    description.innerText = project.description;

    const link = document.createElement('a');
    link.href = project.link;
    link.target = "_blank"; // Open link in a new tab
    link.innerText = "View Project";

    projectDiv.appendChild(title);
    projectDiv.appendChild(description);
    projectDiv.appendChild(link);

    return projectDiv;
}

// Function to render the portfolio
function renderPortfolio() {
    const portfolioDiv = document.getElementById('portfolio');
    projects.forEach(project => {
        const projectElement = createProjectElement(project);
        portfolioDiv.appendChild(projectElement);
    });
}

// Display Discord user ID (status fetching is limited without a bot)
function displayDiscordUserID() {
    document.getElementById('discord-status').innerText = `Discord User ID: ${DISCORD_USER_ID}`;
}

// Initialize the portfolio and display Discord user ID
renderPortfolio();
displayDiscordUserID();
