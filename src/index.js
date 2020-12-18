import "./styles.css";
 // import data from "./insideFolder.txt";


// Show Error When Use Fetch Method With Import Method
//  fetch(data).then(function(response) {
//   return response
// }).then(function(data) {
//  console.log(data)
//  return data.text()
// }).then(function(Normal) {
//  console.log(Normal)
//  document.getElementById("app").innerHTML = Normal;
// }).catch(function(err) {
//  console.log('Fetch problem show: ' + err.message);
// });

//Read rootFolder.txt File
fetch("./rootFolder.txt").then(function(response) {
   return response
}).then(function(data) {
  return data.text()
}).then(function(Normal) {
  document.getElementById("app").innerHTML = Normal;
}).catch(function(err) {
  console.log('Fetch problem show: ' + err.message);
});


//Read InsideFolder.txt File
fetch("./src/insideFolder.txt").then(function(response) {
  response.text().then(function(text) {
    document.getElementById("appData").innerHTML =text  
  });
});
