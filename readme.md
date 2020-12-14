# Construction Company Server UI

### [**Static website hosted here!**](http://revature-public-bucket.s3-website.us-east-2.amazonaws.com/)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=CharlesBrough_cbProject1-ConstructCoUI&metric=alert_status)](https://sonarcloud.io/dashboard?id=CharlesBrough_cbProject1-ConstructCoUI)

## What is this?

This is a front-end UI client for the Construction Company Server back-end that was written by Daniel R. It is a Single Page Application accessible through a web browser that handles API requests through the website UI and contacts the back-end API for CRUD operations. [The backend can be accessed through this endpoint, which is an example of the 'get all employees' functionality.](http://3.17.206.158:8080/EmployeeServer/employee)

## Technologies Used

- Node.js and npm
- AWS EC2
  - Jenkins (& Tomcat on backend)
    - NodeJS plugin for proper CI/CD of frontend
- AWS S3 static website host bucket
- HTML
- CSS
- JS
- FontAwesome
- React.js
  - Webpack
  - Babel
  - Redux
  - React Toastify
  - & more

## How to Use

### Home page

- Describes the front-end UI and back-end server
- Contains links to the view list page and the login page
  - You can view the list of employees without being logged in as an admin!
- The header and footer are constant across the website, whereas the main content is changed and managed by a React Router Switch
  - The header can be used to navigate to the different pages in the site

### List page

- Lists all employees of the Construction Company
- Contains links to the editing page to change database data when logged in as admin

### Form page

- Add, update, or delete employees based on what you need
- Conditional rendering for each form so you can be sure you're doing the action you want
- Each unique form will send data to the backend for the specified operation and return you to the employee list upon success

### Login page

- When not logged in, the login page will display a form for entering credentials and logging in
- When logged in, the login page will contain a logout button to terminate the HTTP session

## Development

### Prerequisites

- Node.js 12+

### How-to

- Clone this repository to your dev machine
- `cd` into the github repo
- Run this command in bash: `npm run start`
- Connect to `localhost:3000` on your browser
- Begin editing `./src/...` and watch saved changes appear on the react app site

# Contributions

- Daniel Reyes: [Backend API](https://github.com/2011JavaReact/DanielReyes_Project00)
- [2011JavaReact Org](https://github.com/2011JavaReact)
- Bach Tran for main UI inspiration

# Known issues

- Login cookie is only valid until refresh; needs refactoring on front and back end to handle cookies better
