// Project configurations (loaded from config/projects-config.json)
// This is the ONLY source of truth for project data
let projectConfigs = {};

// Load project configurations from projects-config.json
async function loadProjectConfigs() {
    try {
        // Add cache-busting query parameter to force fresh fetch
        const cacheBuster = new Date().getTime();
        const response = await fetch(`config/projects-config.json?v=${cacheBuster}`, {
            cache: 'no-cache'
        });
        if (response.ok) {
            projectConfigs = await response.json();
            console.log('Loaded project configurations from projects-config.json');
            return true;
        } else {
            console.error('Failed to load projects-config.json:', response.status);
            return false;
        }
    } catch (error) {
        console.error('Could not load projects-config.json:', error);
        return false;
    }
}

// Convert project configurations to array format for rendering
function getProjectsFromConfig() {
    const projects = [];
    
    for (const [repoName, config] of Object.entries(projectConfigs)) {
        projects.push({
            id: repoName,
            name: config.name || formatProjectName(repoName),
            description: config.description || '',
            technologies: config.technologies || [],
            features: config.features || [],
            url: config.url || null,
            private: config.private === true,
            repoName: repoName
        });
    }
    
    return projects;
}

// Format repository name to title case
function formatProjectName(name) {
    // Convert kebab-case or snake_case to Title Case
    return name
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Rendering Functions
function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    
    loading.style.display = 'none';
    error.style.display = 'none';
    
    if (!projects || projects.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 40px;">No projects found. Add projects to config/projects-config.json</p>';
        return;
    }
    
    container.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

function createProjectCard(project) {
    // Create technology stack bubbles (blue bubbles)
    const technologies = project.technologies || [];
    const technologyBubbles = technologies.map(tech => 
        `<span class="tech-bubble">${escapeHtml(tech)}</span>`
    ).join('');
    
    const technologySection = technologies.length > 0 
        ? `<div class="project-card__technologies">${technologyBubbles}</div>`
        : '';
    
    // Create features list (bullet points)
    const features = project.features || [];
    const featuresList = features.length > 0
        ? `<ul class="project-features">${features.map(feature => 
            `<li>${escapeHtml(feature)}</li>`
          ).join('')}</ul>`
        : '';
    
    // For private repos, show "Private Repo" text
    // For public repos with URL, show GitHub link
    // For public repos without URL, show nothing
    let linkSection = '';
    if (project.private) {
        linkSection = '<div class="project-card__link"><span class="private-repo-label">Private Repo</span></div>';
    } else if (project.url) {
        linkSection = `<div class="project-card__link"><a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">View on GitHub →</a></div>`;
    }
    
    return `
        <div class="project-card">
            <h2 class="project-card__title">${escapeHtml(project.name)}</h2>
            <p class="project-card__description">${escapeHtml(project.description)}</p>
            ${featuresList}
            ${technologySection}
            ${linkSection}
        </div>
    `;
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showError(message) {
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    
    loading.style.display = 'none';
    error.style.display = 'block';
    error.querySelector('p').textContent = message;
}

// Initialize
async function init() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    try {
        // Load project configurations from projects-config.json (ONLY source of truth)
        const loaded = await loadProjectConfigs();
        
        if (!loaded) {
            showError('Could not load projects. Please check config/projects-config.json exists and is valid JSON.');
            return;
        }
        
        // Convert config to projects array
        const projects = getProjectsFromConfig();
        
        // Render projects
        renderProjects(projects);
        
    } catch (error) {
        console.error('Initialization error:', error);
        showError(error.message || 'Failed to load projects. Please check your configuration and try again.');
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
