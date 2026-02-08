# Portfolio Website

This is a React-based portfolio website built with Vite and Tailwind CSS.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start development server:**
    ```bash
    npm run dev
    ```

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages.

1.  **Initialize Git (if not already done):**
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Add your GitHub repository as remote:**
    ```bash
    git remote add origin https://github.com/amitbarel/amitbarel.github.io.git
    ```

3.  **Deploy:**
    ```bash
    npm run deploy
    ```

    This command runs `npm run build` and then uses `gh-pages` to push the `dist` folder to the `gh-pages` branch.

    **Note:** Since this is a user/organization site (`amitbarel.github.io`), GitHub Pages usually publishes from the `main` branch by default. 
    
    **Option A (Recommended for User Sites):**
    If you want the `main` branch to contain the source code and deploy the build artifacts to `gh-pages` branch:
    1. Go to your repository settings on GitHub.
    2. Go to "Pages".
    3. Under "Build and deployment" > "Source", select "Deploy from a branch".
    4. Under "Branch", select `gh-pages` and `/ (root)`.
    5. Save.

    **Option B (Alternative):**
    If you want to serve directly from `main` (not recommended for React apps unless using a workflow), you would need to build and commit the `dist` folder content to `main`, which is messy. Stick to Option A.

## Customization

-   Update `src/components/Projects.jsx` with your actual projects.
-   Update `src/components/About.jsx` with your bio and skills.
-   Update `src/components/Contact.jsx` with your contact details.
-   Update `src/components/Footer.jsx` with your social links.
