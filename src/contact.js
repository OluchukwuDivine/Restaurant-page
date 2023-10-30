const createContactPage= () => {
    const content= document.querySelector("#content");
    const pageContent= document.createElement('div');
    pageContent.classList.add("page-content");
    content.appendChild(pageContent);
    
    //create phone number paragraph
    const numberParagraph= document.createElement("p");
    numberParagraph.classList.add("p-contact");
    numberParagraph.textContent= "Call us on: 123 456 789";
    pageContent.appendChild(numberParagraph);

    //create address info
    const addressParagraph= document.createElement("p");
    addressParagraph.classList.add("p-contact");
    addressParagraph.textContent= "Visit us at: Hollywood Boulevard 42, Los Angeles, USA";
    pageContent.appendChild(addressParagraph);
}

export default createContactPage;