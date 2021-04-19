var city = prompt("Search Your City.....???");

if (city === "karachi"){
    alert("Welcome To The City Of Light..")
}
else if (city === "punjab"){
    alert("Welcome to Punjab")
}
else if (city === "sindh"){
    alert("Welcome to sindh")
}
else if (city === "hyderabad"){
    alert("Welcome to Hyderabad")
}
else{
    alert("Sai se likho sare alfaz small me ese search kro.....\nkarachi\npunjab\nsindh\nhyderabad")
}
var gender = prompt("Type Your Genger");

if(gender === "male"){
    alert("Good Morning Sir..!")
}
else if (gender === "female"){
    alert("Good Morning Maam..!")
}
else{
    alert("Third Person Is Not Allowed...!!")
}
var color = prompt("Traffic Signal Colour Search Colour.........\nred\nyellow\ngreen");

if (color === "red"){
    alert("Red Light is show you MUST STOP IT....")
}
else if(color === "yellow"){
    alert("Yellow Light is show You Must Ready To Move.....")
}
else if (color === "green"){
    alert("Move Now your place..")
}
else{
    alert("Signal nhi torna Chalan katega nhi to...")
}

var per = prompt("Search Your Result...")
if (per >= 80){
    alert("A-One Grade \n Excellent")
}
else if (per >= 70){
    alert("A Grade \n Good")
}
else if (per >= 60){
    alert("B Grade \n You need to improve")
}
else{
    alert("Sorry..!!Your are Fail")
}

var time = prompt("Enter Timing...........")
if(time > 13){
    alert ("Good day")
}
else{
    alert("Soory Time Is Finish")
}

var tem = prompt("Search Temperature")
if (tem > 40){
    alert("It is too hot outside")
}
else if ( tem > 30){
    alert("The Weather today is Normal")
}
else if ( tem > 20){
    alert("Today’s Weather is cool")
}
else if ( tem > 10){
    alert("OMG! Today’s weather is so Cool")
}
else if (tem < 10){
    alert("It is snowing")
}
else{
    alert("Search Properly")
}
