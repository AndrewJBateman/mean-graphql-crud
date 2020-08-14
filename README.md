# :zap: MEAN Form

* Project using MongoDB, Express.js, Angular and Node.js

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* The [Udemy Angular & NodeJS - The MEAN Stack Guide](https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/v4/content) course contains 13 sections, listed below:

**Section 1 Getting Started:** Explanation of the MongoDB-Express-Angular-Node.js stack, Single Page Applications.

**Section 2 The Angular Frontend - Understanding the Basics:** Folder structure, Components, Events, Outputting content, User Inputs, Angular Material, Toolbars, Directives, Property & Event Binding, Models, Observables, Forms.

**Section 3 Adding NodeJS to our Project:** Connect Node to Angular, RESTful APIs, the Express Framework, Fetching Posts, using HTTP Client, CORS, POST Backend.

**Section 4 Working with MongoDB:** SQL and NoSQL, Connecting Angular to a Database, MongoDB, Mongoose, Schemas & Models, Creating a POST, Connecting Node Express to MongoDB, Storing Data in a Database, Transforming Response Data, Deleting and Updating Posts, Adding Posts with ID.

**Section 5 Enhancing the App:** Routing - Client and Server Sides, Errors, Edit Form, Backend Routes, Loading Spinners.

**Section 6 Adding Image Uploads to our App:** File Inputs, Image Upload, Preview, Validation, Server-Side Upload, Fetching Images from the Frontend.

**Section 7 Adding Pagination:** Pagination Component, Backend, Angular Paginator, Fetching Posts.

**Section 8 Adding User Authentication:** Login Input Fields, User Input, Signup, User Model, connecting Angular to Backend, SPA Authentication, Sending Tokens, Middleware, UI Headers and Messages, Redirecting Users, Route Guards, Token Expiry, Saving Tokens.

**Section 9 Authorization:** Adding a Reference to a Model, Adding the User ID to Posts, Using Authorization, Passing the User ID to the Frontend.

**Section 10 Handling Errors:** Uses a global Http-Interceptor to minimise code required for handling errors. Adds a separate error-handling component. Uses separate errors for different components.

**Section 11 Optimizations:** Using Controllers, Separating Middleware, Creating an Angular Material Model, Feature Modules, Creating the Auth Module, Fixing AuthGuard, Lazy Loading, Global Angular Config, Node Environment Variables.

**Section 12 Deploying our App:** Deployment Options, Angular Deployment - 2 Apps or Integrated.

**Section 13 Course Roundup:** Summary and Review of the Course.  

## :camera: Screenshots

![Example screenshot](./img/screenshot.png)

## :signal_strength: Technologies

* [MongoDB Atlas v4](https://www.mongodb.com/) using AWS Cloud storage
* [Express v4](https://www.npmjs.com/package/express)
* [Angular v7](https://angular.io/), including [Angular Material](https://material.angular.io/)
* [Node.js v12](https://nodejs.org/en/)

## :floppy_disk: Setup

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* To start the Node.js backend on "localhost://3000": `npm run start:server`

## :computer: Code Examples

```typescript
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}

```

## :cool: Features

* Integrated front and backends.

## :clipboard: Status & To-do list

* Status: Project is partially working.
* To-do: Fix error preventing integration and hosting on Amazon AWS. Use Amazon AWS to host integrated app.

## :clap: Inspiration

Project is coursework from [Maximilian Schwarzmüller's Course: Angular & NodeJS - The MEAN Stack Guide](https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/v4/content).

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
