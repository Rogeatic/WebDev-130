const adlibURL = "https://madlibz.herokuapp.com/api/random"
//https://madlibz.herokuapp.com/api
let inputList = []

async function getAdlib(url){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            
            console.log(data);
            return data;
        }
    }
    catch{
        const response = await fetch('adlib.json')
        if(response.ok){
            let data = await response.json();
            data = data['templates'][Math.floor(Math.random() * data['templates'].length)];
            
            console.log(data);
            return data;
        }        
    }
}

function generateAdlibHtml(valueList){
    let grabbed = ""
    for (i = 0; i < valueList.length-1; i++){
        grabbed += `${valueList[i]}`;
        if(i <= (inputList.length)-1){
            grabbed += `<a class="inputInsert"> ${inputList[i]} </a>`
        }
    }
    return grabbed
}
function generateWordHtml(wordsList){
    let words = ''
    let words1 = ''
    let words2 = ''
    for (i = 0; i < wordsList.length; i++){
        if(i < wordsList.length/2){
        words1 += `
        <a>${i+1}</a>
        <input type="text" id="name" name="name" class="Inputs" placeholder=${wordsList[i]}>
        <br>
        `;
        }
        else{
            words2 += `
            <a>${i+1}</a>
            <input type="text" id="name" name="name" class="Inputs" placeholder=${wordsList[i]}>
            <br>
            `;
        }

        words = `<div id="wordsLists">
            <div id="first">
            ${words1}
            </div>
            <div id="second">
            ${words2}
            </div>
        </div>
        `
    }
    return `${words}`
}

let dataGrabbed
async function output() {
    dataGrabbed = await getAdlib(adlibURL)
    

    document.body.querySelector("#wordsLocation").insertAdjacentHTML("afterbegin", `<p>${generateWordHtml(dataGrabbed.blanks)}</p>`);

}
function clickedFinished(){
    const inputs = document.getElementsByClassName("Inputs")
    let filledOut = true;
    
    if(document.querySelector("#adlibLocation")){
        document.body.querySelector("#adlibLocation").remove()
    }
    document.body.querySelector("#errors").innerHTML = ""

    for (i=0; i<inputs.length; i++){
        if(!inputs[i].value){
            filledOut = false;
        }
    }
    if(filledOut == true){
        
        for (i=0; i<inputs.length; i++){
            inputList.push(inputs[i].value)
        }
        document.body.querySelector("#Finished").remove()

        document.querySelector('#FinalAdlibLocation').insertAdjacentHTML("beforeend", `<section id="adlibLocation"><p id="name"> Story: ${dataGrabbed.title}` + `<p id="finalText" >${generateAdlibHtml(dataGrabbed.value)}</p>
        </section>`);

        let ResetBut = document.createElement("button");
        ResetBut.innerHTML = "Restart";
        ResetBut.id ="Reset"
        document.body.querySelector('#ResetButtonlocation').appendChild(ResetBut);
        ResetBut.addEventListener('click', resetAll)
    }
    else{
        
        document.body.querySelector("#errors").innerHTML = `<p>Not all answers are  filled out.</p>`
    }
}
function resetAll(){
    location.reload();
}


output();

document.body.querySelector("#Finished").addEventListener('click', clickedFinished)
