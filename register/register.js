function partHtml(){
    return `<section class="participant" id = ${"participants" + participantNum}>
            <p><b>${"Participant " + participantNum}</b></p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required="">
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity" type="text" name="activity">
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee" type="number" name="fee">
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date" type="date" name="date">
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected="" value="" disabled=""></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section> `
}

let participantNum = 0;
function AddedPart(){
    participantNum++;
    document.querySelector(".participants").insertAdjacentHTML("beforeend", partHtml());
}

function getTotalFees(){
    const fees = document.getElementsByName("fee");
    let amount = 0;
    for(let x = 0; x < fees.length; x++){
        amount += parseInt(fees[x].value);
    }
    console.log(amount)
    return amount;
}
function createFinalHtml(){
    return `<p>${document.querySelector("#adult_name").value} thank you, your total fees add up to: ${getTotalFees()}<p>`;
}

function submitForm(event) {
    event.preventDefault();
    document.querySelector(".testbox").style.display = "none";
    document.body.insertAdjacentHTML("beforeend", createFinalHtml());

}

document.querySelector("#add").addEventListener("click", AddedPart);

document.addEventListener("submit", submitForm)

AddedPart();