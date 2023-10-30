const createRestaurantHomePage= () => {
    const content= document.querySelector("#content");
    const pageContent= document.createElement('div');
    pageContent.classList.add("page-content");
    content.appendChild(pageContent);

    //create and append header "Raspadoriatto"
    const pageContentSpan= document.createElement("span");
    pageContentSpan.classList.add("page-content-span");
    pageContentSpan.textContent= "Raspadoriatto";
    pageContent.appendChild(pageContentSpan);

    //create and append paragraphs
    const paragraph1= document.createElement("p");
    const paragraph2= document.createElement("p");
    const paragraph3= document.createElement("p");
    paragraph1.textContent= "We offer you the best pizza in your country, with top notch customer services";
    paragraph2.textContent= "Made with passion since 1908";
    paragraph3.textContent= "Order online or visit us!";
    pageContent.appendChild(paragraph1);
    pageContent.appendChild(paragraph2);
    pageContent.appendChild(paragraph3);
}

export default createRestaurantHomePage;