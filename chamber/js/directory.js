let url = "js/data.json";
let container = document.querySelector(".directory");
let tabla = document.querySelector(".tabla");
async function getData(url){
    let response= await fetch(url);
    if (response.ok){
        console.log("if response.ok");
        let jsobject = await response.json();
        let businesses = jsobject.businesses;
        console.log(businesses);
        businesses.forEach(element => {
            displayBusinesses(element);
        });
        businesses.forEach(element =>{
            displayBusinessesTable(element);
        })
    }
    console.log("!if response.ok");
}

function displayBusinesses(algo){
    let card = document.createElement("div");
    let img = document.createElement("img");
    let address = document.createElement("p");
    let name = document.createElement("p");
    let phone = document.createElement("p");
    let link = document.createElement("a");

    name.textContent = algo["name"];
    img.src = algo["imageurl"];
    img.alt = "business logo";
    address.textContent = algo["address"];
    phone.textContent = algo["phone"];
    link.href = algo["siteurl"]
    link.textContent = "Visit Website";
    link.target = "_blank";
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(link);
    card.appendChild(address);
    card.appendChild(phone);

    container.appendChild(card);
}

function displayBusinessesTable(algo){
    let tr = document.createElement("tr");
    let address = document.createElement("td");
    let name = document.createElement("td");
    let phone = document.createElement("td");
    let tdlink = document.createElement("td");
    let link = document.createElement("a");

    name.textContent = algo["name"];
    address.textContent = algo["address"];
    phone.textContent = algo["phone"];
    link.textContent = "Visit Website";
    link.href = algo["siteurl"];

    tr.appendChild(name);
    tr.appendChild(address);
    tr.appendChild(phone);
    tdlink.appendChild(link);
    tr.appendChild(tdlink);
    tabla.appendChild(tr);
}

function displayTable(){
    let tableStyle = getComputedStyle(tabla);
    if (tableStyle.display == "none"){
        tabla.style.display = "block";
        container.style.display = "none";
    }

}

function displayGrid(){
    let gridStyle = getComputedStyle(container);
    if ( gridStyle.display == "none"){
        container.style.display = "grid";
        tabla.style.display = "none";
    }

}
document.querySelector(".grid").addEventListener("click", displayGrid);
document.querySelector(".list").addEventListener("click", displayTable);
getData(url);