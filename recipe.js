addEventListener("load",(event) => {
    //I have to make sure my function are at the top of the page to run? I need to review and think about order or functions.

const myDiv = document.getElementById("myDiv");

//creating checkbox element
const checkbox = document.createElement("input"); //can I have this copy text of the ingredient and that reassign the text content? 

// assigning the attributes 
//to created checkbox 
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

//creating label for checkbox 
const label = document.createElement("label");

//assigning the created text to 
//the created label tag

label.htmlFor = "id"

//appending the created text to
//the created label tag 

label.appendChild(
    document.createTextNode("this creates the label for checkbox.")
);

// appending the checkbox
//and label to the div 

myDiv.appendChild(checkbox);
myDiv.appendChild(label);


});

//will add an on-click event listener to this function 
function ingredients(){
    const ingredientList = document.getElementsByTagName("ul");
    for(const ul of ingredientList){
        ul.classList.add("checked");
    }

    return ingredientList;

}
    ingredients();

//I want to adjust this so it is applying the checkbox to the ingredient list. 
//Can I adjust the code to loop through each child element and apply the checkbox? 




