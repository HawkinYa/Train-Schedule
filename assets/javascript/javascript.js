var config = {
    apiKey: "AIzaSyA4P1Lp7N7Nvs8eo0IXgYCaxqcTUnWR7Fc",
    authDomain: "train-time-7cdee.firebaseapp.com",
    databaseURL: "https://train-time-7cdee.firebaseio.com",
    projectId: "train-time-7cdee",
    storageBucket: "train-time-7cdee.appspot.com",
    messagingSenderId: "1023928771689"
  };
  
  firebase.initializeApp(config);
var database = firebase.database();
// start of javascript coding
var name = [];
var destination = [];
var frequency= 0;
var firstTrain = 0;
var tFrequency = 3;
//var firstTime = 0;
var time =  new Date()

console.log(time)
//Capture Button Click
$("#submit").on("click", function (event) {
    event.preventDefault();
    name = $("#name-input").val().trim();
        console.log(name)
    destination = $("#destinations").val().trim();
        console.log(destination);
    frequency = $("#trainFreq").val().trim();
        console.log(frequency);
    firstTrain = $("#first-train").val().trim();
       alert("Train added!")
  
       
        
//sends the information to firebase
    database.ref().push({
        name:name,
        destination: destination,
        frequency: frequency,
        firstTrain: firstTime
    });
 
});
//displays the value typed in into the current train schedule
    database.ref().on("child_added", function (snapshot){
        $("#addTrain").append("<tr><td>" + snapshot.val().name +"</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().frequency + "</td><td>" + snapshot.val().firstTrain + "</td></tr>")
     
   // time frequency
 //function moment(){ 
// Time is 3:30 AM
//var firstTime = "03:30";
// First Time (pushed back 1 year to make sure it comes before current time)
//var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
//console.log(firstTimeConverted);
// Current Time
//var currentTime = moment();
//console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
// Difference between the times
//var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
//console.log("DIFFERENCE IN TIME: " + diffTime);
// Time apart (remainder)
//var tRemainder = diffTime % tFrequency;
//console.log(tRemainder);
// Minute Until Train
//var tMinutesTillTrain = tFrequency - tRemainder;
//console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
// Next Train
//var nextTrain = moment().add(tMinutesTillTrain, "minutes");
//console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
//}
    });