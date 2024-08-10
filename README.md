#### React - 3D frontend skill showcase
##### Description:
A visually stunning and interactive React portfolio website showcasing my skills and experience. 

##### Features:
- Modern Design: A clean desktop layout.
- Interactive Elements: Engage visitors with animations, smooth transitions, and user-friendly interactions.
- Project Showcase: Highlight your most impressive projects with detailed descriptions, screenshots, and links.
- Clear Navigation: Seamlessly guide visitors through your website with a well-structured navigation bar.
- Contact Information: Make it easy for potential employers to connect with you by providing your contact details. 

##### Future Features:
- Content Management System (CMS) (To be implemented)
- Responsive design for mobile and tablets (To be implemented)
- Multilingual Support (To be implemented)
- Full portfolio page (To be implemented)

##### Known Bugs:
- horizontal slideshow - double time for first item (jump between last and first)



##### Development Setup:

###### Prerequisites:
Node.js (version 16 or later) and npm (version 5.6 or later) installed on your system. You can verify these by running node -v and npm -v in your terminal.


###### Clone the Repository:

Clone this repository to your local machine using Git.
```
git clone https://github.com/honzakj/React---3D-frontend-showcase.git
```

###### Install Dependencies:
Open a terminal in the project directory and run:
```
cd client
npm install
```

###### Start Development Server:
Start the development server to view your portfolio application in the browser:
```
npm start
```
Note that this command will expose the app to public net as well as your localhost.
If you do not want that run this instead:
```
npm dev
```
This command will typically launch your portfolio at http://localhost:3000/ 
(the exact URL might vary depending on your setup).



##### Dependencies

###### Essential:
- react: The core React library for building user interfaces.
- react-dom: Allows rendering React components in the browser.
- react-icons: Provides a wide variety of icons for enhancing your portfolio's design.
- react-responsive-masonry: Creates responsive masonry layouts for your project showcase.
- react-social-icons: Integrates social media icons for easy connection.
- react-tilt: Enables interactive tilt effects for engaging visuals.
- three: The popular 3D library used for creating and manipulating 3D scenes.
- @react-three/fiber: Provides React bindings for Three.js. 
- @react-three/drei: Offers additional utilities and components for Three.js.
- @14islands/r3f-scroll-rig: Creates smooth 3D scrolling effects. 

###### Development:
- @types/react: Type definitions for React, improving code clarity and safety.
- @types/react-dom: Type definitions for React DOM.
- @vitejs/plugin-react: Vite plugin for React integration.
- eslint: Linting tool for enforcing code style and best practices.
- eslint-plugin-react: ESLint plugin for React-specific rules.
- eslint-plugin-react-hooks: Linter for React hooks usage.
- eslint-plugin-react-refresh: Enables hot module replacement during development.
- vite: The frontend build tool used to compile and optimize your application.