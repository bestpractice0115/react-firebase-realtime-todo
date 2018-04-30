import * as firebase from "firebase";
import sectionModel from "./models/section";
import todoModel from "./models/todo";

let database;

export const init = () => {
  let config = {
    apiKey: "AIzaSyA8GlHBnar61A4UJ5LDmVgJjMq57PzVQek",
    authDomain: "first-todo.firebaseapp.com",
    databaseURL: "https://first-todo.firebaseio.com",
    projectId: "first-todo",
    storageBucket: "first-todo.appspot.com",
    messagingSenderId: "482976372225"
  };
  firebase.initializeApp(config);
  database = firebase.database();
};

// retrieve from firebase
// return promise object
export const getSectionsDB = () => {
  return database.ref("/").once("value");
};

// get specified section
export const getTodoDB = sectionId => {
  return database.ref(`/${sectionId}`).once("value");
};

// add new section
export const addSection = name => {
  const key = database.ref("/").push().key;
  const model = sectionModel(
    key,
    name,
    firebase.database.ServerValue.TIMESTAMP
  );
  return database.ref("/" + key).set(model);
};

// add new todo item into specified section
export const addTodoItem = (id, name) => {
  return new Promise((resolve, reject) => {
    database.ref(`/${id}`).once("value").then(todo => {
      const todos = todo.val().todos || [];
      const key = database.ref(`/${id}`).push().key;
      todos.push(todoModel(
        key,
        name,
        firebase.database.ServerValue.TIMESTAMP
      ));
      database.ref(`/${id}/todos`).set(todos)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        })
    })
  })
}
