fetch("https://ousama-fd.herokuapp.com/data")
    .then(response=>response.json())
    .then(info=>
        {

        var people=document.getElementById("people");

        info.Sheet1.forEach(element => {
        var person=document.createElement("option");
        person.innerHTML=element.A;
        people.appendChild(person);
        });
        }
        )