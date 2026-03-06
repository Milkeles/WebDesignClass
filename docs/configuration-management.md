# Configuration Management Plan
> Document ID: FW-CMP-02032026
>
> Current Version: 1.0
>
> Date: 02.03.2026
>
> Organisation: University of Ruse "Angel Kanchev"
>
> Department: IIT
>
> Author(s): H. Hristov
>
> Reviewer(s): M. Dzurov
>
> Confidentiality: Internal

## Table of Contents
- [Introduction](#introduction)
- [Development Strategy](#development-strategy)
- [Change and Version Control](#change-and-version-control)
- [Tools and Permissions](#tools-and-permissions)

---

## Introduction
### Document Purpose
This document defines the configuration management practices and development standards for the Fervor Web website. It establishes guidelines for development workflow, version control, branching strategy, and coding standards to ensure consistency and traceability throughout the project lifecycle.
### Document Scope
The practices outlined in this document apply to the full development lifecycle of the Fervor Web website. This document is intended for the developer working on the project and any technical reviewers assessing it. It is to be read alongside the Technical Design Document ([FW-TDD-02032026](/docs/technical-design.md)).

## Development Strategy
### Methodology
Due to the single-developer nature of this project, no formal team development methodology (such as Scrum or Kanban) is applied.
The Development is component-driven and carried out iteratively, with components and features implemented and refined incrementally as the project progresses.
Components are first implemented and verified in isolation via Storybook before being composed into application pages.

### Branching Strategy
The project follows a trunk-based development approach. The ``main`` branch serves as the single source of truth and should always remain in a stable, deployable state. Development work is carried out on short-lived branches that are merged back into ``main`` promptly upon completion.
Branch names follow the convention ``type/short-description``, where type is one of:
- ``feature/`` - new functionality;
- ``fix/`` - bug fixes;
- ``docs/`` - documentation changes;
- ``chore/`` - maintenance tasks such as dependency updates or configuration changes;

### Coding Standards
#### Naming Conventions
- Components - PascalCase (e.g. HeroSection.tsx)
- Hooks - camelCase prefixed with use (e.g. useScrollPosition.ts)
- Utilities and helpers - camelCase (e.g. formatDate.ts)
- Constants - SCREAMING_SNAKE_CASE (e.g. MAX_RETRIES)
- CSS classes - Tailwind utility classes only; no custom class names unless strictly necessary
#### File and Folder Naming
All files and folders use **kebab-case**, with the exception of component files and pages which use PascalCase to match their exported component name.
Folders group files by type (e.g. components/, pages/), consistent with the project structure defined in the Technical Design Document.
#### Comment Style
- Comments should explain why, not what - the code itself should be self-explanatory.
- JSDoc-style comments (``/** */``) are used for functions and component props where the purpose or parameters are not immediately obvious.
- Inline comments (``//``) are used sparingly, only where a specific decision or workaround requires clarification.
- Translation keys should include a brief comment in the locale JSON files where the context of a string may be ambiguous.

## Change and Version Control
### Commit Convention
Commits follow a standard label prefix to keep the history readable and traceable:
- ``feat:`` - a new feature
- ``fix:`` - a bug fix
- ``docs:`` - documentation changes only
- ``chore:`` - maintenance, tooling, or dependency changes
- ``style:`` - formatting or visual changes that do not affect functionality
- ``refactor:`` - code changes that neither fix a bug nor add a feature
Commit messages should be written in the imperative mood and kept concise.

### Versioning
The project follows Semantic Versioning (SemVer): ``MAJOR.MINOR.PATCH``
- MAJOR - breaking changes or significant milestone releases
- MINOR - new features or pages added
- PATCH - bug fixes, copy changes, or minor visual corrections

### Change Tracking
All changes are tracked through Git commit history on GitHub. Each merge into ``main`` represents a stable checkpoint in the project's development.

## Tools and Permissions
### Tools
- Git - Version control
- GitHub - Remote repository and wiki hosting
- Vite - Development server and production build
- npm - Dependency management
- Jekyll - Project wiki, hosted via GitHub Pages
- Storybook - Used for isolated component development and visual validation.

### Permissions
The repository is publicly accessible on GitHub and open source, as is the GitHub Pages wiki.