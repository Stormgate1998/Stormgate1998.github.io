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
        window.onclick = function (event) {
        }
        let h3limit;
        //Takes an object, presents a list of all items
        function getList(sheet, addition = "") {
            const myElement = document.getElementById("main");
            //wipePage(myElement);
            var names = Object.values(sheet);
            var properties = Object.keys(sheet);
            function getList(sheet, addition = "") {
                if (properties[index] != 0 && properties[index] != h3limit) {
                    thing.innerText = properties[index];
                    h3limit = properties[index];
                }
                myElement.appendChild(thing);
                getList(element/*, (addition + "       ")*/);
            } else {
                let item;
                let item2;
               function getList(sheet, addition = "") {
                    stringInput = element;
                    stringInput = stringInput;
                } else {
                    stringInput = addition + properties[index] + ': ' + element;
                    stringInput = stringInput;
                }
                item.innerText = stringInput;
                function modInput(stringIn) {
                }
                    function arrayList(subject) {
                        let container;
                        const myElement = document.getElementById("main");
                        subject.forEach(function (currval) {
                            container = document.createElement("div");
                            for (let props in currval) {

                            }
                        });
                    }