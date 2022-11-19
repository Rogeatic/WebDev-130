const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

async function getApod(url){
    const response = await fetch(url);
    if(response.ok){
      const data = await response.json();
      
      console.log(data);
      return data;
    }
}

async function output() {
  const data = await getApod(apodUrl)
  console.log(data);
  document.body.querySelector("#images").insertAdjacentHTML("beforeend", `<p> Name: ${data.title}</p><img src="${data.url} id="SpacePic" alt="${data.explanation}">`);
  
}


output();

// async function getApod(url){
    
//     const response = await fetch(url);
//     console.log(response);
//     return (response);
// }
// function makePhoto(photo){
//     document.getElementById("#images").insertAdjacentHTML( "beforeend",`<img src=${photo.url} alt="${photo.title}">
//     <div>
//         <h2>${photo.title}</h2>
//         <h3>${photo.date}</h3>
//         <p>${photo.explanation}</p>
//     </div>`);
// }
// function init(){
//     makePhoto(getApod(apodUrl))
// }
// init();