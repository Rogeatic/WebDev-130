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
  document.body.querySelector("#images").insertAdjacentHTML("beforeend", `<p> Name: ${data.title}</p><img src="${data.url}" alt="${data.explanation}">`);
  
}


output();