const myDiv = document.getElementById("myDiv");
const myListItem1 = document.getElementById("listItem1")

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
   document.createTextNode(myListItem1.textContent),

);
//this is interesting, I want to replace the text list item

const updateList1 = document.getElementById("listItem1").textContent = ""; //this is interesting, but is there a better way to do it?



// appending the checkbox
//and label to the div 

//myDiv.appendChild(checkbox);
//myDiv.appendChild(label);

myListItem1.appendChild(checkbox);
myListItem1.appendChild(label);




/*function ingredients(){
    const ingredientList = document.getElementsByTagName("ul");
    for(const ul of ingredientList){
        ul.classList.add("checked");
    }

    return ingredientList;

}
    ingredients();*/

//I want to adjust this so it is applying the checkbox to the ingredient list. 
//Can I adjust the code to loop through each child element and apply the checkbox? 

//what do we know so far?
//would I need to modify the text content of my list item to have the box in front of the text? 
//I will need to understand what each item is doing to modify it too. 




