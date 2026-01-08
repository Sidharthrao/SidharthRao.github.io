# Projects Configuration

This folder contains the configuration file that controls your portfolio projects.

## projects-config.json

This file is the **ONLY source of truth** for your portfolio projects. Only projects defined in this file will be displayed on the portfolio page.

### Format

```json
{
  "repository-name": {
    "name": "Professional Project Title",
    "description": "Detailed technical description including approach, techniques, and technologies used.",
    "technologies": ["Technology1", "Technology2", "Technology3"],
    "features": ["Feature 1", "Feature 2", "Feature 3"],
    "url": "https://github.com/username/repository-name",
    "private": false
  }
}
```

### Field Descriptions

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | The project title displayed on the card |
| `description` | Yes | The project description paragraph |
| `technologies` | Yes | Array of technologies displayed as blue bubbles |
| `features` | No | Array of features displayed as bullet points |
| `url` | No | GitHub repository URL (displays "View on GitHub" link if public) |
| `private` | No | Set to `true` if repo is private (displays "Private Repo" instead of link) |

### How to Use

1. **Add a new project**: Add a new entry with the repository name as the key

2. **Configure all fields**:
   - `name`: The display title for the project card
   - `description`: A clear description of what the project does
   - `technologies`: List of technologies used (displayed as blue bubbles)
   - `features`: Optional list of key features (displayed as bullet points)
   - `url`: The GitHub repository URL
   - `private`: Set to `true` for private repos, `false` for public repos

3. **Save and refresh**: Changes take effect immediately when you refresh the page

### Example

```json
{
  "AnomalyDetection_JournalEntries": {
    "name": "Journal Entries - Anomaly Detection System",
    "description": "Developed a machine learning-based anomaly detection system for journal entries using isolation forests and statistical analysis.",
    "technologies": ["Python", "scikit-learn", "pandas", "SQL"],
    "features": [
      "Isolation forest algorithm",
      "Statistical analysis",
      "Automated flagging",
      "95% accuracy"
    ],
    "url": "https://github.com/Sidharthrao/AnomalyDetection_JournalEntries",
    "private": true
  }
}
```

### Link Display Logic

- **Public repos with URL**: Displays "View on GitHub" link
- **Private repos** (`private: true`): Displays "Private Repo" label
- **No URL provided**: No link section displayed

### Notes

- Only projects in this file will be displayed on the portfolio
- The key (e.g., `AnomalyDetection_JournalEntries`) is used as an identifier
- Changes take effect immediately when the page is refreshed
- No GitHub Actions workflow is needed - this file is loaded directly by the frontend
