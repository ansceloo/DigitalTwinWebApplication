import { projects } from "./el.BL_buildingsList.js";

// Get the current project ID from the URL parameter
const currentUrl = window.location.href; 
const url = new URL(currentUrl);
const currentProjectID = url.searchParams.get("id");

console.log("I got the project id!")


// Get the current project
const currentProject = projects.find(project => project.id === currentProjectID);

// Add the project URL to the iframe
const iframe = document.getElementById('model-iframe');
iframe.src = currentProject.url;