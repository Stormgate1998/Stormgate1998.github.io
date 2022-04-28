function menubar(url) {
    wipePage(document.getElementById('main'));
    goFetch(url);
}
var currenturl;


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function Charinfo() {
    document.getElementById("charInfo").classList.toggle("show");
}
function Combatinfo() {
    document.getElementById("combatInfo").classList.toggle("show");
} function Maginfo() {
    document.getElementById("magInfo").classList.toggle("show");
} function Geninfo() {
    document.getElementById("genInfo").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.char')) {
        var dropdowns = document.getElementsByClassName("character");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.com')) {
        var dropdowns = document.getElementsByClassName("combat");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.mag')) {
        var dropdowns = document.getElementsByClassName("magIc");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.gen')) {
        var dropdowns = document.getElementsByClassName("general");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Takes an object, presents a list of all items
function getList(sheet, addition = "") {
    const myElement = document.getElementById("main");
    //wipePage(myElement);
    var names = Object.values(sheet);
    var properties = Object.keys(sheet);
    let index = 0;
    names.forEach(element => {
        if ((typeof element) == "object") {
            //check API to view discrepencies
            let thing = document.createElement("h3");
            if (properties[index] != 0) {
                thing.innerText = properties[index];
            }
            myElement.appendChild(thing);
            getList(element/*, (addition + "       ")*/);
        } else {
            let item;
            let item2;
            element = String(element);
            if (properties[index] === "count" || properties[index] === "index" || properties[index] === "_id" || element === currenturl) {

            } else {

            
            if (element.includes("/")) {
                item = document.createElement("p");
                item2 = document.createElement("a");
                item2.innerText = "To learn more, click here";
                item2.addEventListener("click", (event) => {
                    wipePage(document.getElementById("main"));
                    console.log(element);
                    goFetch(element);
                }

                );
                item.appendChild(item2);
            } else {
                item = document.createElement("p");
                item.innerText = addition + properties[index] + ': ' + element;
            }
            myElement.appendChild(item);
            }
            index++;
        }
    })

}
//takes a piece of url, fetches list. If an item is an object, loop. If value is empty, print N/A
function goFetch(url) {
    let source = "https://www.dnd5eapi.co" + url;
    currenturl = url;
    fetch(source)
        .then((result) => result.json())
        .then((sheet) => {
            getList(sheet);
        });
}
//
//given an element, systematically removes all children from it
function wipePage(subject) {
    while (subject.firstChild) {
        subject.removeChild(subject.lastChild);
    }
}
//takes any string and checks for appropriate uppercase. Removes _ as well
function modInput(stringIn) {
// if string contains - or _, replace with space.
    //if string doesn't start with capital letter, make captialized
}
/* TO DO list:
 * Figure out how to block things into appropriate divs
 * do so
 * in html/css add grid format to make reading easier
 * dynamically change formatting
 * 
 * build and implement modInupt
 * alter display to hide unwanted elements
 * 
 * Make everything look nice
 *
 *if url matches current url, ignore it.
 * 
 */