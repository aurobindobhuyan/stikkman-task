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
$ npm run build // This will make your app production ready.
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
$ npm run build // This will make your app production ready.
$ npm run start
```

## API's base url - http://localhost:8000/course

### Course Resource

| #   | action                 | method | <div  align="center">URL</div>         | <div  align="center">request body</div>                                                                   | <div  align="center">response</div>                                         |
| --- | ---------------------- | ------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 1.  | Get All Courses        | GET    | <div  align="center">/</div>           | <div  align="center">-</div>                                                                              | <div  align="center">Array of courses<br />or <br />[ ]</div>               |
| 2.  | Create Single Course   | POST   | <div  align="center">/</div>           | <ul><li>thumbnail(required)</li><li>name(required)</li><li>author(required)</li><li>description</li></ul> | <ul><li>thumbnail</li><li>name</li><li>author</li><li>description</li></ul> |
| 3.  | Get One Course         | GET    | <div  align="center">/:courseId</div>  | <div  align="center">-</div>                                                                              | <ul><li>thumbnail</li><li>name</li><li>author</li><li>description</li></ul> |
| 4.  | Update One Record      | PUT    | <div  align="center">/:courseId</div>  | <ul><li>thumbnail(required)</li><li>name(required)</li><li>author(required)</li><li>description</li></ul> | <ul><li>thumbnail</li><li>name</li><li>author</li><li>description</li></ul> |
| 5.  | Delete One Record      | DELETE | <div  align="center">/:courseId</div>  | <div  align="center">-</div>                                                                              | <ul><li>thumbnail</li><li>name</li><li>author</li><li>description</li></ul> |
| 6.  | Add multiple records   | POST   | <div  align="center">/addCourses</div> | Array of Courses                                                                                          | Array of Courses                                                            |
| 7.  | Fetch Record by author | GET    | /filter-by-authors?author=< name >     | <div  align="center">-</div>                                                                              | <div  align="center">Array of courses<br />or <br />[ ]</div>               |
