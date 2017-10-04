function showMap(mapName) {
    var maps = document.querySelectorAll(".map");
    for (var i = 0; i < maps.length; i++) {
        if (maps[i].getAttribute("id").includes(mapName)) {
            maps[i].classList.remove("hidden");
        } else {
            maps[i].classList.add("hidden");
        }
    }
}

function toggleRegions() {
    var m = document.querySelector(".map");
    if (m.getAttribute("src").includes("Outline")) {
        m.setAttribute("src", "resources/img/map/gmRegions.gif");
    } else {
        m.setAttribute("src", "resources/img/map/gmOutline.gif");
    }
}

function toggleCities() {
    var cities = document.querySelectorAll(".city");
    for (var i = 0; i < cities.length; i++) {
        cities[i].classList.toggle("hidden");
    }
}

function addMarker() {
    var name = document.querySelector("#markerNameInput").value;
    var html = "<img class=\"circle\" src=\"resources/img/map/circle.png\" alt=\"red circle\">";
    html += "<span class=\"cityName\">" + name + "</span>";
    var elem = document.createElement("div");
    elem.setAttribute("id", name);
    elem.setAttribute("class", "city");
    elem.innerHTML = html;

    document.querySelector("#container").appendChild(elem);

    console.log(document.querySelector("#container").innerHTML);

    var sheet = document.createElement("style");
    sheet.innerHTML = "#" + name + " {left: 300px; top: 300px;}";

    document.body.appendChild(sheet);
}

function adjustMarker() {
    var name = document.querySelector("#labelInput").value;
    var x = document.querySelector("#xInput").value;
    var y = document.querySelector("#yInput").value;
    document.querySelector("#" + name).style.left = x + "px";
    document.querySelector("#" + name).style.top = y + "px";
}

function showDiv(divName) {
    var divs = document.querySelectorAll(".item-thumbs");
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].getAttribute("class").includes(divName)) {
            divs[i].classList.remove("hidden");
        } else {
            divs[i].classList.add("hidden");
        }
    }
}

function moveLogo() {
    var elem = document.getElementById("logo");
    var pos = 0;
    var id = setInterval(moveAway, 5);
    function moveAway() {
        if (pos === 350) {
            clearInterval(id);
            elem.style.top = '0px';
            elem.style.left = '0px';
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}