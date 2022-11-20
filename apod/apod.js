const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

async function getApod(url){
    const response = await fetch(url);
    if(response.ok){
      const data = await response.json();
      
      console.log(data);
      return data;
    }
    else{
      
    }
}

async function outputDateApod(){
  const date = document.querySelector("#dateInput").value;
  const data = await getApod(apodUrl + `&date=${date}`);
  // console.log(data);
  document.body.querySelector("#planetIMG").remove();
  document.body.querySelector("#ImageTxt").remove();
  document.body.querySelector("#images").insertAdjacentHTML("beforeend", 
  `<div id="planetIMG">
  <img src="${data.url}" alt="${data.explanation}">
  </div>
  <div id="ImageTxt">
  <h2>${data.title}</h2>
  <p>${data.date}</p>
  <p>${data.explanation}</p>
  </div> 
  `
  );
}

async function output() {
  const data = await getApod(apodUrl)
  // console.log(data);
  document.body.querySelector("#images").insertAdjacentHTML("beforeend", 
  `<div id="planetIMG">
  <img src="${data.url}" alt="${data.explanation}">
  </div>
  <div id="ImageTxt">
  <h2>${data.title}</h2>
  <p>${data.date}</p>
  <p>${data.explanation}</p>
  </div> 
  `
  );
  
}



document.querySelector("#getImgButton").addEventListener('click', outputDateApod)


output();