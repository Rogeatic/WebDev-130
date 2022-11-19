import renderQuote from "./randomQuote.mjs";

renderQuote("#quoteContainer");

function resetQuote(){
    if(document.querySelector(".quote")){
        document.querySelector(".quote").remove();
    }
    renderQuote("#quoteContainer");
}

document.body.querySelector("#reset").addEventListener('click', resetQuote);
