const adlibURL = "http://madlibz.herokuapp.com/api/random"
//https://madlibz.herokuapp.com/api
let inputList = []

async function getAdlib(url){
    const response = await fetch(url);
    if(response.ok){
      const data = await response.json();
      
      console.log(data);
      return data;
    }
}

function generateAdlibHtml(valueList){
    let grabbed = ""
    for (i = 0; i < valueList.length-1; i++){
        grabbed += `${valueList[i]}`;
        if(i <= inputList.length){
            grabbed += `<p class="inputInsert"> ${inputList[i]} </p>`
        }
    }
    console.log(grabbed)
    return`
        <p>
            ${grabbed}
        </p>
    `
}
function generateWordHtml(wordsList){
    let words = ''
    for (i = 0; i < wordsList.length; i++){
        words += `
        <input type="text" id="name" name="name" class="Inputs">
        <label for ${i}>${wordsList[i]}</label>
        <br>
        `;
    }
    console.log(words)
    return `${words}`
}

let dataGrabbed
async function output() {
    dataGrabbed = await getAdlib(adlibURL)
    console.log(dataGrabbed);
    

    document.body.querySelector("#wordsLocation").insertAdjacentHTML("afterbegin", generateWordHtml(dataGrabbed.blanks));

    // document.body.querySelector("#adlibLocation").insertAdjacentHTML("beforeend", `<p> Name: ${data.title}`);

    // document.body.querySelector("#adlibLocation").insertAdjacentHTML("beforeend", generateAdlibHtml(data.value));
    
}
function clickedFinished(){
    const inputs = document.getElementsByClassName("Inputs")
    for (i=0; i<inputs.length; i++){
        inputList.push(inputs[i].value)
    }
    console.log(inputList)

    document.body.querySelector("#adlibLocation").insertAdjacentHTML("beforeend", `<p> Name: ${dataGrabbed.title}` + generateAdlibHtml(dataGrabbed.value));
}

output();

document.body.querySelector("#Finished").addEventListener('click', clickedFinished)