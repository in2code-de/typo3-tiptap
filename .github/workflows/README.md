# GitHub Actions for typo3tiptap

## Packagist Auto-Update

This repository includes a GitHub Action that automatically notifies Packagist when new releases or tags are published.

### Setup Requirements

To use this workflow, you need to configure the following secrets in your GitHub repository:

1. Go to your repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add the following repository secrets:

- `PACKAGIST_USERNAME`: Your Packagist username
- `PACKAGIST_TOKEN`: Your Packagist API token (get it from https://packagist.org/profile/)

### How it works

The workflow triggers automatically when:
- A new release is published on GitHub
- A new tag is pushed to the repository

The action will then notify Packagist to update the package information and make the new version available via Composer.

### Manual Trigger

If needed, you can also manually trigger a Packagist update by creating a new release or pushing a tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```
