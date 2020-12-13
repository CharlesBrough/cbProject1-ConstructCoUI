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
- React.js
  - Webpack
  - Babel
  - Redux
  - React Toastify
  - & more

## How to Use

### Home page

- Describes the front-end UI and back-end server
- Contains links to other pages that provide functionality

### List page

- Lists all employees of the Construction Company
- Contains links to the editing page to change database data

### Form page

- Add, update, or delete selection
- Each has a unique form that will send data to the backend for the specified operation

### Login page

- Login and logout

## Development

### Prerequisites

- Node.js 12+

### How-to

- Clone this repository to your dev machine
- `cd` into the github repo
- Run this command in bash: `npm run start`
- Connect to `localhost:3000` on your browser
- Begin editing `./src/...` and watch saved changes appear on the react app site
