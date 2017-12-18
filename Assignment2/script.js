
var launch = document.getElementById("launch");
launch.addEventListener("click", writeStory, false);






function writeStory(){
var name = document.getElementById("name");
var color = document.getElementById("color");
var place = document.getElementById("place");
var number = document.getElementById("number");
var story = document.getElementById("story")
    
    
var launchedStory = "Hey";
launchedStory += "<p>Hello, " + name.value + ". ";
launchedStory += "You did choose " + color.value + " because it looks good on you.</p>";
launchedStory += "<p>The " + place.value + " where you will be living soon.</p>";
launchedStory += "<p>You will have, " + number.value + " kids.</p>";

story.innerHTML = launchedStory;
    
    

    
    
    
}










//if (name.value) {message.innerText = "hi" + name.value +"from"}