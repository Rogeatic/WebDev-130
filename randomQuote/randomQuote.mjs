/*
    fetch quote
    output quote
    */
const baseUrl = "https://api.quotable.io/";


function templateHtml(quote){
    return `
    <section class="quote">
        <p><span class="quoteMark">&ldquo;</span>
            ${quote.content}
        <span class="quoteMark">&rdquo;</span></p>
    <p class = "author">-- ${quote.author}</p>
    </section>`
    ;
}

async function getQuote(url){
    try{
        //fetch
        const response = await fetch(url+"random");
        if (response.ok){
            const data = await response.json();
            return data;
        }
    }
    catch(error){
        console.log(error)
    }
}

export default async function renderQuote(selector){
    const quote = await getQuote(baseUrl);
    const element = document.querySelector(selector);
    const html = templateHtml(quote)
    element.innerHTML = html;
}

