var films = [
    {
        odgledan: true,
        naziv: "The green Mile",
        godina: 1999,
        drzava: "USA",
        napomena: "",
        glumci: ["Michael Clarke Duncan", "Tom Hanks", "Sam Rockwell"]
    },
    {
        odgledan: false,
        naziv: "Toma",
        godina: 2021,
        drzava: "Srbija",
        napomena: "",
        glumci: ["Milan Maric", "Tamara Dragicevic"]},
    {
        odgledan: true ,
        naziv: "The Shawshank Redemption" ,
        godina: 1994 ,
        drzava: "USA" ,
        napomena: "" ,
        glumci: ["Morgan Freeman", "Tim Robbins", "Bob Gunton"]
    }
];

function changeCheckbox(index){
    let lastBool = films[index].odgledan;
    let newBool= false;
    if (lastBool === false)
        newBool= true;
    films[index].odgledan = newBool;
    displayTable();    
}

let filmsHtml = [];
function displayTable(){
    filmsHtml = [];
    let index = 0;
    films.forEach(film => {
        let col = "green";
        if (film.odgledan === false)
            col = "red"
        filmsHtml.push(`<tr class="${col}">
        <td>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" onclick="changeCheckbox(${index})" ${convertBool(film.odgledan)}>
        </div>
        </td>
        <td>${film.naziv}</td><td>${film.godina}</td>
        <td>${film.drzava}</td><td>${film.napomena}</td><td>${film.glumci.join(", ")}</td></tr>`);
        index++;
    })
    document.getElementById("filmsTable").innerHTML = filmsHtml.join("");
    document.getElementById("forma").reset();
    
}

function convertBool(value){
    if (value === true)
    return "checked=\"cheched\"";
    return "";
}
function getModalData(){
    let newName = (String)(document.getElementById("inputName").value);
    let newYear = (String)(document.getElementById("inputYear").value);
    let newCountry = (String)(document.getElementById("inputCountry").value);
    let newNote = (String)(document.getElementById("inputNotes").value);
    let newActors = (String)(document.getElementById("inputActors").value);
    let arrActors = newActors.split(",");
    let newFilm = {
            odgledan: false,
            naziv: newName,
            godina: newYear,
            drzava: newCountry,
            napomena: newNote,
            glumci: arrActors
    }

    films.push(newFilm);
    displayTable();

}
displayTable();
