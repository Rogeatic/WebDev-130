// onmouseover("#Ed_title1")
// document.getElementById("#Ed_title1").onmouseover


function mousedOver(){
    document.getElementById("Ed_title1").style.color = "black";
}
function mousedAway(){
    document.getElementById("Ed_title1").style.color = "white";
}
document.querySelector("#Ed_title1").addEventListener('mouseover', mousedOver)
document.querySelector("#Ed_title1").addEventListener('mouseout', mousedAway)