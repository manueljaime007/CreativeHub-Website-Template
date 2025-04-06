# 💡 SparkVibe

SparkVibe is your online source of creative energy. A vibrant platform that connects ideas, inspires action, and turns moments into brilliant opportunities.

Initially, in its testing phase, it only features a Landing Page.

## References

- [Inspiration for Creative Landing Pages](https://www.awwwards.com/websites/landing-page/)  
- [Guide to Impactful Projects](https://github.com/matiassingers/awesome-readme)  
- [Tips for Creating a Memorable First Impression](https://www.smashingmagazine.com/2011/06/a-guide-to-creating-a-compelling-landing-page/)

## Authors

- [Manuel Jaime - manueljaime007](https://www.github.com/manueljaime007)

## Running Tests

To run the tests, execute the following command:

```bash
  npm run test
```

## Tech Stack

### **Front-end:** 

<p align="left" style="display:flex; gap: .2rem;">
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a><a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a>
</p>

### **Back-end:**: No Backend yet

# 

# SparkVibe

## How to Use SparkVibe?

Follow the steps below to run the project locally and explore what SparkVibe has to offer!

### Prerequisites
- Make sure you have [Node.js](https://nodejs.org/) installed (we recommend the LTS version) along with npm. To check, use:

  ```bash
  node -v && npm -v
  ```

## Step-by-step Guide

### 1. Navigate to the Project Directory
Open the terminal and move to the SparkVibe folder with:

 ```bash
  cd path/to/sparkvibe
 ```

### 2. Install Dependencies
Run the following command to install all required dependencies:

 ```bash
  npm run dev
 ```

A local server will start. Access http://localhost:4000 (or the port indicated in the terminal) in your browser to see SparkVibe in action!
If you want to customize the server port, open the vite.config.ts file in the project root and modify it:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' // Import TailwindCSS installed with Vite

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // Add plugin to use TailwindCSS
  ],
  server: { port: 4000 } // Change 4000 to the desired port. Default port: 3000
})
```

After modifying, restart the server with npm run dev to apply the change.

## 🚀 About Me
I'm a frontend developer determined to solve problems with the skills I acquire over time.
I'm taking my first steps into Backend development and exploring market-relevant frameworks.

🔗[Check out my GitHub profile](https://github.com/manueljaime007)
