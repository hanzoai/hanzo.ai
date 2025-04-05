# Hanzo AI Website

A modern, responsive website for Hanzo AI built with React, TypeScript, and Tailwind CSS.

## Project Structure

The project follows a component-based architecture with the following structure:

```
src/
  ├── components/      # React components
  │   ├── ui/          # UI components (buttons, cards, etc.)
  │   ├── platform/    # Platform-specific components
  │   ├── cloud/       # Cloud-specific components
  │   └── index3/      # Homepage components
  ├── constants/       # Constants and configuration
  ├── hooks/           # React hooks
  ├── lib/             # Utility functions
  └── pages/           # Page components
=======
**Use Hanzo App**

Simply visit the [Hanzo App](https://hanzo.app/projects/ee887e68-a27e-43a1-88d1-813320af7a8c) and start prompting.

Changes made via Hanzo will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Hanzo.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
