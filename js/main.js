var myList = [];


document.addEventListener("DOMContentLoaded", function (ev) {
        //this runs when the page loads

        if (localStorage.getItem("Vard0020_key")) {
            myList = JSON.parse(localStorage.getItem("Vard0020_key"));
            //convert from String to Array
        }
    
    showList();

    document.querySelector("#btnAdd").addEventListener("click", function (ev) {
        ev.preventDefault();
        var newItem = document.querySelector("#item").value;
        if(newItem!=""){
        myList.push(newItem);
        localStorage.setItem("Vard0020_key", JSON.stringify(myList));
        document.getElementById("item").value = '';
        //convert from Array to String.
        showList();
        return false;
        }
    });


    //document.myForm.addEventListener("submit", function(ev){});
});

function removeItem(ev) {
    //this.firstChild.nodeValue
    //ev.currentTarget.firstChild - the textNode inside the paragraph
    //ev.currentTarget.firstChild.nodeValue - the text inside the textNode
    var txt = ev.currentTarget.firstChild.nodeValue;
    for (var i = 0; i < myList.length; i++) {
        if (myList[i] == txt) {
            //found the match
            myList.splice(i, 1);
        }
    }
    localStorage.setItem("November-list", JSON.stringify(myList));
    showList();
}

function showList() {
    var output = document.querySelector(".output");
    output.innerHTML = " ";
    for (var i = 0; i < myList.length; i++) {
        var divy = document.createElement("div");
        var inputdiv = document.createElement("div");
        var pdiv = document.createElement("div");
        var input = document.createElement("input");
        var p = document.createElement("p");
        
   
        //p.setAttribute("type", "checkbox");
        input.setAttribute("type", "checkbox");
        inputdiv.setAttribute("class", "inputDiv");
        pdiv.setAttribute("class", "pDiv");
        divy.setAttribute("class", "divy");
       
        p.innerHTML = myList[i];

        inputdiv.appendChild(input);
        pdiv.appendChild(p);
        divy.appendChild(inputdiv);
        divy.appendChild(pdiv);
        
        output.appendChild(divy);
        p.addEventListener("click", removeItem);
    }

}