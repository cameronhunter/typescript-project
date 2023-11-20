# `@cameronhunter/typescript-project`

[![npm package](https://img.shields.io/npm/v/%40cameronhunter/typescript-project?logo=npm)](https://www.npmjs.com/package/@cameronhunter/typescript-project)
[![@latest](https://img.shields.io/github/actions/workflow/status/cameronhunter/typescript-project/latest.yml?logo=npm&label=%40latest)](https://github.com/cameronhunter/typescript-project/actions/workflows/latest.yml)
[![main branch status](https://img.shields.io/github/actions/workflow/status/cameronhunter/typescript-project/main.yml?logo=github&label=main)](https://github.com/cameronhunter/typescript-project/actions/workflows/main.yml)

> A template repository for creating npm packages using TypeScript

## Setup

### Repository Settings

#### General Settings

[] Turn off wikis and projects
[] Turn off merge commits and rebase merging
[] Set the default commit message for squash to be "pull request title and description".
[] Turn on "Always suggest updating pull request branches"
[] Turn on "Allow auto-merge"
[] Turn on "Automatically delete head branches"

#### Branches

[] Protect `main` branch
[] Turn on "Require status checks to pass before merging"
[] Turn on "Require branches to be up to date before merging"

#### Actions

[] Set Workflow Permissions to "Read and write permissions"
[] Turn on "Allow GitHub Actions to create and approve pull requests"

#### Secrets and variables

[] Add an `NPM_TOKEN` repository secret: https://github.com/cameronhunter/typescript-project/settings/secrets/actions

### Files

[] Replace `typescript-project` across the project.
[] Remove `private: true` from `package.json`
[] Add a `description` to `package.json`
