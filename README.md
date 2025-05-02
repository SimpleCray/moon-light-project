# Moon Light Project

A web development project using Gulp for task automation and BrowserSync for live reloading.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)
- Gulp CLI (install globally):
  ```bash
  npm install -g gulp-cli
  ```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd moon-light-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   gulp serve
   ```

The development server will start and automatically open your default browser to `http://localhost:3000`. Any changes you make to HTML, CSS, or JavaScript files in the `public` directory will automatically trigger a browser reload.

## Project Structure

- `public/` - Contains all your static files (HTML, CSS, JavaScript)
- `gulpfile.js` - Gulp configuration file
- `package.json` - Project dependencies and scripts

## Development Workflow

1. Make changes to files in the `public` directory
2. The browser will automatically reload when you save changes to:
   - HTML files (*.html)
   - CSS files (*.css)
   - JavaScript files (*.js)

## Available Gulp Tasks

- `gulp serve` - Starts the development server with live reloading

## Additional Information

This project uses:
- Gulp 4.0.2 for task automation
- BrowserSync for live reloading and local development server

For any issues or questions, please refer to the project documentation or create an issue in the repository.
