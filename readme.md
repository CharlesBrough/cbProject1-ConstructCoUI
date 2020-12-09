# Construction Company Server UI

## [Try it here!](http://revature-public-bucket.s3-website.us-east-2.amazonaws.com/)

## What is this?

This is a front-end UI client for the Construction Company Server back-end that was written by Daniel R. It is a Single Page Application accessible through a web browser that handles API requests through the website UI and contacts the back-end API for CRUD operations.

## Technologies Used

- Node.js and npm
- AWS EC2
  - Jenkins (& Tomcat on backend)
    - NodeJS plugin for proper CI/CD
- AWS S3 static website host bucket
- HTML
- CSS
- JS
- React.js
  - Webpack
  - Babel
  - & more

## Development

### Prerequisites

- Node.js 12+

### How-to

- Clone this repository to your dev machine
- `cd` into the github repo
- Run this command in bash: `npm run start`
- Connect to `localhost:3000` on your browser
- Begin editing `./src/...` and watch saved changes appear on the react app site

## How to Use

### Home page

- Describes the front-end UI and back-end server
- Contains links to other pages that provide functionality

### List page

- Lists all employees of the Construction Company

### Form page

- Add, update, or delete
