var photos = [];
var fileNames = [];
var imageList = [];
var image;

var openList = "<li class='photo'>";
var closeList = "</li>";

var openCaption = "<div class='caption'>";
var closeCaption = "</div>";

var openInfoBox = "<li id='infoBox'>";
var closeInfoBox = "</li>";

var closeText = "Click This To Close";

var textInfo = [
    "The first winterland scene shows a quiet road covered in fresh snow. The trees and soft sunlight create a peaceful winter landscape.",
    
    "This winter road is surrounded by snow-covered trees. The sunlight shining through the branches gives the scene a warm and beautiful feeling.",
    
    "A snowy path leads through the winter landscape. The fresh snow and tall trees make this a calm place to enjoy the outdoors.",
    
    "The winter countryside is covered in snow. The rows of trees and bright sky create a beautiful view of the winter season.",
    
    "Snowy trees line the road in this peaceful winter scene. The landscape shows how beautiful a quiet winter day can be.",
    
    "This winterland view combines a snowy road, tall trees, and soft sunlight. It is a simple example of the beauty of winter.",

    "The winterland is covered by snow, which creates a picturesque scene.",

    "The winterland is perfect for families and couples to visit."
];


var captions = [
    "Snow Land",
    "Wintery Road",
    "Snowy Drive",
    "Winter in the Country",
    "Winter Road",
    "Winter Wonderland",
    "Winter playground",
    "Winter Bench"
];


for (var i = 0; i < 8; i++) {

    fileNames.push("winterland" + (i + 1));

    photos.push(
        "<img src='images/" + fileNames[i] + ".jpg' alt='" + captions[i] + "'>"
    );

    var captionBar = openCaption + captions[i] + closeCaption;

    image = openList + photos[i] + captionBar + closeList;

    imageList.push(image);
}

document.getElementById("album").innerHTML = imageList.join("");

var infoBoxHTML =
    openInfoBox +
    "<h2 id='infoHeading'></h2>" +
    "<p id='infoText'></p>" +
    "<a href='#' id='closeInfo'>" + closeText + "</a>" +
    closeInfoBox;

document.getElementById("album").innerHTML += infoBoxHTML;

var infoBox = document.getElementById("infoBox");
var infoHeading = document.getElementById("infoHeading");
var infoText = document.getElementById("infoText");
var closeInfo = document.getElementById("closeInfo");

infoBox.style.visibility = "hidden";

var captionBars = document.querySelectorAll("#album .caption");

for (var j = 0; j < captionBars.length; j++) {

    captionBars[j].addEventListener("click", function () {

        var selectedCaption = this.textContent;
        var selectedIndex = captions.indexOf(selectedCaption);

        infoHeading.innerHTML = selectedCaption;
        infoText.innerHTML = textInfo[selectedIndex];

        infoBox.style.visibility = "visible";
    });
}

closeInfo.addEventListener("click", function (event) {

    event.preventDefault();

    infoBox.style.visibility = "hidden";
});