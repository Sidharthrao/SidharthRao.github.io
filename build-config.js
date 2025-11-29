// Build script to generate config.js from .env file
// Run this before testing locally: node build-config.js

const fs = require('fs');
const path = require('path');

// Check if .env file exists
const envPath = path.join(__dirname, '.env');

if (!fs.existsSync(envPath)) {
    console.error('Error: .env file not found!');
    console.log('Please create a .env file with: IO=your_github_token_here');
    process.exit(1);
}

// Read .env file
const envContent = fs.readFileSync(envPath, 'utf8');
const envLines = envContent.split('\n');

// Parse IO variable
let token = '';
envLines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('IO=')) {
        token = trimmed.substring(3).trim();
        // Remove quotes if present
        token = token.replace(/^["']|["']$/g, '');
    }
});

if (!token) {
    console.error('Error: IO variable not found in .env file!');
    console.log('Please add: IO=your_github_token_here');
    process.exit(1);
}

// Generate config.js
const configContent = `// Configuration (Generated from .env file)
// This file is auto-generated - do not edit manually
// Run: node build-config.js to regenerate

window.config = {
    // GitHub Personal Access Token (loaded from .env file)
    githubToken: '${token}',
    
    // Filtering options
    excludeForks: true,        // Exclude forked repositories
    excludeArchived: true,      // Exclude archived repositories
    excludePrivate: false       // Set to true to exclude private repositories
};
`;

// Write config.js
fs.writeFileSync(path.join(__dirname, 'config.js'), configContent);
console.log('✓ Successfully generated config.js from .env file');
console.log('✓ You can now test locally by opening index.html');
console.log('');
console.log('⚠️  WARNING: config.js now contains your token!');
console.log('⚠️  Do NOT commit this file to git. Only commit the template version (empty token).');
console.log('⚠️  To restore the template, run: git checkout config.js');

