console.log("It worked!");

const FavoriteFoodsList = ["WaterMelon", "Pizza", "BBQ chips", "Icecream"];
const indList = document.createElement('FoodList');
indList.innerHTML = `<br><br><p1>Favorite Foods:</p1> <li>${FavoriteFoodsList[0]} </li>
    <li>${FavoriteFoodsList[1]} </li> <li>${FavoriteFoodsList[2]} </li><li>${FavoriteFoodsList[3]} </li>`;
document.body.appendChild(indList);

const today = new Date();
console.log(today.getDay());

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];
document.getElementById('displayToday').innerHTML += weekday[today.getDay()] + ".";