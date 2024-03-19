<h1 align="center">
🌐 MERN Stack
</h1>

## Prerequirements

- [MongoDB](https://docs.mongodb.com/v4.4/installation/) 5.0.5
- [Node](https://nodejs.org/en/download/) 18.16.1
- [npm](https://nodejs.org/en/download/package-manager/)
- [nodemon](https://nodemon.io/)

## Client-side Usage(PORT: 5173)

### Starting Client and Making Build

```terminal
$ cd front-end              // go to front-end folder
$ npm i                     // npm install pacakges
$ npm run dev               // run it locally

// deployment for front-end app
$ npm run build // this will compile the react code and generate a folder called dist in front-end folder, then run
$ npm run preview
```

## Server-side Usage(PORT: 8000)

### Starting Server and Making Build

```terminal
$ cd back-end               // go to back-end folder
$ npm i                     // npm install pacakges
$ cp .env.example .env      // Update .env file keys
$ npm run dev               // run it locally

// deployment for back-end app
$ npm run build // this will build the server code to es5 js codes and generate a build folder in server folder, then run the command
$ npm run start
```

## API's base url - http://localhost:8000/course

### Course Resource

| #   | action | method | url | request body | response |
| --- | ------ | ------ | --- | ------- | -------- |
| 1. | Get All Courses | GET | / | <div  align="center">-</div> | Array of courses or [ ] |
| 2. | Create Single Course | POST | / | <ul><li>thumbnail*</li><li>name*</li><li>author*</li><li>description</li></ul> | <ul><li>thumbnail</li><li>name</li><li>author</li><li>description</li></ul> |
| 3. | Get One Course | GET | /:courseId | <div  align="center">-</div> | <ul><li>thumbnail</li><li>name</li><li>author</li><li>description</li></ul>
| 4. | Update One Record | PUT | /:courseId | <ul><li>thumbnail*</li><li>name*</li><li>author*</li><li>description</li></ul> | <ul><li>thumbnail</li><li>name</li><li>author</li><li>description</li></ul>|
| 5. | Delete One Record | DELETE | /:courseId | <div  align="center">-</div> | <ul><li>thumbnail</li><li>name</li><li>author</li><li>description</li></ul>
| 6. | Add multiple records | POST | /addCourses | Array of Courses | Array of Courses
| 7. | Fetch Record by author | GET | /filter-by-authors?author=< name > | <div  align="center">-</div> | Array of Courses or [ ]
|
