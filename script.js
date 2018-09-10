// Script for Toivoniemi website

var myIndex = 0;
aboutLink = document.getElementById('about-link');
historyLink = document.getElementById('history-link');
servicesLink = document.getElementById('services-link');
connectionsLink = document.getElementById('connections-link');
headerText = document.getElementById('header');
aboutText = document.getElementById('about');
slideshow();

aboutLink.addEventListener('click', function() {
    headerText.innerHTML = "<b>Toivoniemi</b>";
    aboutText.innerHTML = "Toivoniemi is one of the greatest neighborhoods of Oulu. This residential area is built on an island next to Tuira, bordered by Merikoski canal. Toivoniemi is a beautiful, nice area to live in, surrounded by waterfront and garden-like environment. Toivoniemi has a population of around 600 and is very centrally located, only one kilometer away from the Oulu City Centre.";
});

historyLink.addEventListener('click', function() {
    headerText.innerHTML = "<b>History of Toivoniemi</b>";
    aboutText.innerHTML = "The modern history of Toivoniemi goes way back to the beginning of 1900's. Back then, Merikoski was only a passage for tar boats. In 1914, Bertel Jung made plans to reserve an area for Merikoski power plant and canal. Before development, there was an architecture contest on power plant design & appearance in 1942. Shortly after that Toivoniemi was built based on Alvar Aalto's urban design ideas. Alvar Aalto also designed most of the towers of Toivoniemi."
});

servicesLink.addEventListener('click', function() {
    headerText.innerHTML = "<b>Services</b>";
    aboutText.innerHTML = "Unfortunately, there are not many services available in Toivoniemi. There is a small football field for recreation purposes. Nearest supermarkets, restaurants, bike repair and other useful services are located in Tuira within close proximity.\n\nWider variety of services and special retailers are available in Oulu city centre."
});

connectionsLink.addEventListener('click', function() {
    headerText.innerHTML = "<b>Traffic connections</b>"
    aboutText.innerHTML = "There are excellent traffic connections from Toivoniemi to every part of Oulu. The main road connection is Tuiran Sillat Bridge, which gets you to Oulu city centre in the south, and to Tuira in the north. You may even go all the way far north to a swamp, which is called University of Oulu. Amazing bike route network also goes through Toivoniemi. \n\nBus connections are convenient. From Toivoniemi bus stop you can get to Oulu Airport (OUL), but sometimes you must walk to Pokkitörmä bus stop for that."
});

function slideshow() {
    var i;
    var picturecollection = document.getElementsByClassName("pictures");
    console.log(picturecollection);
    for (i = 0; i < picturecollection.length; i++) {
       picturecollection[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > picturecollection.length) {
        myIndex = 1
    }
    picturecollection[myIndex-1].style.display = "block";
    setTimeout(slideshow, 10000);
}

