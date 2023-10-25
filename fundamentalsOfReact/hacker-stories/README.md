Title: The Road to React  
Author: Robin Wieruch  
Modified by: Brooke Taylor  
Date: 10/24/2023  
Description: Following along the book to learn React.  

---


1. Start project.

        npm create vite@latest hacker-stories -- --template react

        cd hacker-stories

        npm i

        npm run dev

## npm Scripts

"...let's go through the available commands. All of your project-specific commands can be found in your *package.json* file under the scripts property. They may look similar to these depending on your Vite version:"

        "scripts": {
            "dev": "vite",
            "build": "vite build",
            "preview": "vite preview"
        },

"These scripts are executed with the npm run < script > command in an IDE-integrated terminal or your standalone command line tool. The commands are as follows:

        # Runs the application locally for the browser
        npm run dev

        # Builds the application for production
        npm run build

---

adding 

        npm i vite-plugin-eslint --save-dev

        npm i eslint --save-dev

        npm i eslint-config-react-app --save-dev