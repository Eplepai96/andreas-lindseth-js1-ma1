// Question 1
const cat = {complain: function() {
    console.log("Meow!");
} }

cat.complain();


// Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// Question 3
heading.style.fontSize = "2em";


// Question 4
heading.classList.add = ("subheading");

console.log(heading);


// Question 5
const paragraphs = document.querySelectorAll("p");

for(i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


// Question 6
const resultContainer = document.querySelector(".results");
resultContainer.innerHTML = `<p>New paragraph</p>`;
resultContainer.style.backgroundColor = "yellow";


// Question 7
function listItems(list) {
    for(i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
listItems(cats);


// Question 8
function createCats(cats) {

    let html = "";

    for(i = 0; i < cats.length; i++) {
        
        let catsName = "Age unknown";

        if(cats[i].name) {
            catsName = cats[i].name;
        }

        html += `<div> 
                    <h5>${cats[i].name}</h5>
                    <p>${catsName}</p>
                </div>`
    }
    return html;
}

createCats(cats);
const newHtml = createCats(cats);

const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = newHtml;