// const hList = [ 
//     "Building testimonies of the restored gospel of Jesus Christ and fostering its principles in a wholesome academic, cultural, and social environment.",
//     "Providing a high-quality education that prepares students of diverse interests and abilities for lifelong learning and employment.",
//     "Serving as many students as possible within resource constraints.",
//     "Delivering education that is affordable for students and the Church."
// ]
// const newList = document.createElement("ul")
// newList.innerHTML = `<li>${hList[0]}</li><li>${hList[1]}</li><li>${hList[2]}</li><li>${hList[3]}</li>`
// document.body.appendChild(newList);
function changeTheme(){
    val = document.querySelector("#theme_selector").selectedIndex;
    console.log(val);

    if(val == 1){ //Dark
        if(!document.body.classList.contains("dark")){
            document.body.classList.add("dark");
            document.querySelector("#footPic").src = "byui-logo_white.png";
        }
    }
    else{ //should be Light
        if(document.body.classList.contains("dark")){
            document.body.classList.remove("dark");
            document.querySelector("#footPic").src = "byui-logo_blue.webp";
        }
    }
}

document.querySelector("#theme_selector").addEventListener("change", changeTheme)