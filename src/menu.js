const createMenuPage= () =>{
    const content= document.querySelector("#content");
    const pageContent= document.createElement('div');
    pageContent.classList.add("page-content");
    content.appendChild(pageContent);

    //create first pizza div
    const div1= document.createElement("div");
    const image= document.createElement("img");
    image.classList.add("img-style");
    image.src= "https://foodieinlagos.com/wp-content/uploads/2022/11/image0-1.jpeg"; 
    div1.classList.add("pizzas");
    div1.textContent= "lorem ipsum dolor sit ammem, lorem ipsum dolor sit ammem";
    pageContent.appendChild(div1);
    div1.appendChild(image);

}

export default createMenuPage;
