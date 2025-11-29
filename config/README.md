# Projects Configuration

This folder contains custom configuration files for your portfolio projects.

## projects-config.json

Use this file to customize project names and descriptions for your portfolio.

### Format

```json
{
  "RepositoryName": {
    "name": "Professional Project Title",
    "description": "Detailed technical description including approach, techniques, and technologies used.",
    "technologies": ["Technology1", "Technology2", "Technology3"]
  }
}
```

### How to Use

1. **Find the repository name**: Use the exact GitHub repository name (as it appears in the URL)
   - Example: `AnomalyDetection_JournalEntries` from URL `github.com/username/AnomalyDetection_JournalEntries`

2. **Add custom information**:
   - `name`: Professional project title (replaces auto-generated name)
   - `description`: Technical description with:
     - High-level approach/methodology
     - Techniques and technologies used
     - Key achievements or features
   - `technologies`: (Optional) Array of technology names to display as blue bubbles. If not provided, technologies will be automatically extracted from the description if it contains "Technologies: ..." pattern.

3. **Save and commit**: The changes will be applied automatically when the GitHub Actions workflow runs

### Example

```json
{
  "MyProject": {
    "name": "Advanced Analytics Platform",
    "description": "Built a comprehensive analytics platform using machine learning algorithms for predictive modeling. Implemented real-time data processing with Apache Kafka and Spark. Achieved 40% improvement in forecast accuracy.",
    "technologies": ["Python", "Apache Spark", "Kafka", "PostgreSQL", "scikit-learn"]
  }
}
```

**Note**: Technologies can be specified in two ways:
1. **Explicit array**: Use the `technologies` field with an array of technology names
2. **Auto-extraction**: Include "Technologies: ..." in the description, and they will be automatically extracted and displayed as blue bubbles. The technologies section will be removed from the description text.

### Notes

- Repository names are case-sensitive
- If a repository is not in this config file, it will use auto-generated name and description
- The config file is used by both GitHub Actions workflow and the frontend
- Changes take effect after the workflow runs (or immediately for local testing)

