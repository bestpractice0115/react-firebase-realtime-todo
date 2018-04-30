# firebase-realtime-todo

1.1 Create react app with starter kit

1.2 Setup Google Firebase

Next, we gonna setup backend and database for our project.

Go to https://console.firebase.google.com and create new project

Next, setup access rules for database in Database > Rules. You should get this result.

{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
We have created the Google Firebase project. Next, we will connect your react app to firebase. Back to react project.

First we need to install firebase module.
```
$ npm install --save firebase
```

2.1 Data structure

we are going to store the data in this way.

{
  id: 1,
  name: "Daily",
  todos: [{
    id: 1,
    name: "Feed the birds",
    timestamp: 1288389400
  },{
    id: 2,
    name: "Running",
    timestamp: 1288989400
  }],
  timestamp: 1277385300
}

2.2 Set up redux

```
$ npm install --save react-redux redux redux-thunk
```
 
