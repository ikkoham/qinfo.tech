# Development Workflow

For all future codebase modifications, the following workflow MUST be strictly followed:

1. **Branch Creation**: Always create a new feature/chore branch before making any changes.
2. **Implementation & Testing**: Apply changes and verify them locally.
3. **Pull Request**: Create a pull request using the GitHub CLI (`gh pr create`).
4. **Artifact Verification**:
   - Wait for the CI/CD (GitHub Actions) to complete the build.
   - Use the GitHub CLI (`gh run download`) to download the build artifacts.
   - Verify the downloaded artifacts by running a local server (e.g., `npx serve -s build`).
   - Confirm behavioral correctness using the served build before considering the task complete.

This workflow ensures that every change is properly isolated, reviewed, and verified against the actual build artifacts produced by the CI environment.

# Content Standards

## Publications
- **Data Storage**:
  - The data file (`src/data/publications.ts`) MUST contain the **full list of authors** as an array of strings.
- **UI Display**:
  - For publications with **6 or fewer authors**, list ALL authors.
  - For publications with **more than 6 authors**, list only the **first 3 authors** followed by "et al.".
  - This logic is implemented dynamically in the component.
