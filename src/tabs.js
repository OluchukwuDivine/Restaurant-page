import createContactPage from "./contact";
import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";

const navTabs= () => {
const homeTab= document.querySelector("#home-tab");
const menuTab= document.querySelector("#menu-tab");
const contactTab= document.querySelector("#contact-tab");


homeTab.addEventListener("click", () => {
    clearContent();
    createRestaurantHomePage();

});

menuTab.addEventListener("click", () => {
    clearContent();
    createMenuPage();
})

contactTab.addEventListener("click", () => {
    clearContent();
    createContactPage();

})

}

function clearContent(){
    const content= document.querySelector("#content");
    const pageContent= document.querySelector(".page-content");
    if(pageContent){
        content.removeChild(pageContent);
    }
}


export default navTabs;