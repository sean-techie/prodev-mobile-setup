# Step 1: Go to your home folder
cd ~

# Step 2: Remove any existing folder to start fresh
rm -rf prodev-mobile-setup

# Step 3: Create the project root folder
mkdir -p prodev-mobile-setup/mobile-development-setup
cd prodev-mobile-setup/mobile-development-setup

# Step 4: Create README.md with documentation
cat << EOF > README.md
# Mobile Development Setup

## Project Overview
This repository contains the setup for my mobile development environment using **React Native** and **Expo**. It documents the folder structure, dependencies, and setup steps to help track progress and troubleshoot issues.

---

## Folder Structure

\`\`\`
prodev-mobile-setup/
└── mobile-development-setup/
    └── README.md
\`\`\`

- \`prodev-mobile-setup/\` – Root of the Git repository.
- \`mobile-development-setup/\` – Folder for mobile development setup files.
- \`README.md\` – Documentation for setup process.

---

## Setup Instructions

### 1. Install Node.js LTS
Install Node.js to run JavaScript on your machine.

### 2. Initialize Git in the project root
\`\`\`bash
cd ~/prodev-mobile-setup
git init
git branch -M main
\`\`\`

### 3. Create project folders
\`\`\`bash
mkdir mobile-development-setup
cd mobile-development-setup
touch README.md
\`\`\`

### 4. Stage and commit files
\`\`\`bash
git add .
git commit -m "Initial commit"
\`\`\`

### 5. Link to GitHub repository
\`\`\`bash
git remote add origin https://github.com/sean-techie/prodev-mobile-setup.git
git push -u origin main
\`\`\`

---

## Challenges Faced

1. **GitHub CLI detection issue** – \`gh repo create\` sometimes fails if there’s no commit in the repo. Solved by committing at least one file before running the command.
2. **Branch mismatch** – GitHub uses \`main\` by default, so pushing to \`master\` caused errors. Fixed by renaming branch to \`main\`.
3. **Incorrect remote URL** – The repository URL must match exactly (no extra dashes or typos).

---

## Notes

- Always stage files with \`git add .\` before committing.
- Ensure your local branch matches GitHub’s branch (usually \`main\`).
- This documentation is maintained to track progress and troubleshoot any future issues.

EOF

# Step 5: Go to the repo root and initialize Git
cd ~/prodev-mobile-setup
git init
git branch -M main

# Step 6: Stage all files and commit
git add .
git commit -m "Initial commit with README documentation"

# Step 7: Add GitHub remote
git remote add origin https://github.com/sean-techie/prodev-mobile-setup.git

# Step 8: Push to GitHub
git push -u origin main