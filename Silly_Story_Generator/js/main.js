var username = document.getElementById("username");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

function randomStoryFromList(array){
    return array[Math.floor(Math.random()*array.length)];
}

var storyText = "It was 94 Fahrenheit outside, so :insertx: went for a bike ride. When she got to :inserty:, she stared in awe for a few moments, then :insertz:. Sarah Connolly saw the whole thing, but was not surprised — the bicycle :insertx: borrowed weighs 300 pounds, and it was a hot day.";
var insertX = ["Ayesha McGowan", "Conny Rivera", "Helen Wyman"];
var insertY = ["Mount Ventoux", "the south-west coast of Wales", "Roubaix"];
var insertZ = ["proceeded to drink two barrels of water", "ordered five scoops of ice cream", "visit a watermelon farm"];

randomize.addEventListener("click", result);
function result(){
    var newStory = storyText;
    var xItem = randomStoryFromList(insertX);
    var yItem = randomStoryFromList(insertY);
    var zItem = randomStoryFromList(insertZ);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":insertx:", xItem);

    if(username.value!=""){
        var name = username.value;
        newStory = newStory.replace("Shah Rukh Khan", name);
    }

    if(document.getElementById("america").checked){
        var weight = Math.round(300*0.07142857) + " stone";
        var temperature = Math.round((94-32)*5/9) + " degrees Celsius";
        newStory = newStory.replace("94 Fahrenheit", temperature).replace("300 pounds", weight);
      }
    
        story.textContent = newStory;
        story.style.visibility = "visible";
}