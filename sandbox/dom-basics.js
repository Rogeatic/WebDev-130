const newParagraph = document.createElement("p");
newParagraph.textContent = "Hello World!";
document.body.appendChild(newParagraph);

const myList = ["one", "two"]

const newList = document.createElement('ul');
newList.innerHTML = `<li>${myList[0]}</li><li>${myList[1]}</li>`;
document.body.appendChild(newList);