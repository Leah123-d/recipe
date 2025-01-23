
/*1.implement 2 other DOM manipulation methods 

2.back to basics, look up 2 resources how to style check boxes and crossing them off 
3. Very last adds Jumbotron with bootstrap 

To do List: 
1/ work on figuring out how to convert each list item to checkbox
maybe if we get one working then we can apply to the rest 
2/use DOM manipulation to cross out words of text box 
3/implement additional DOM manipulation: 2. convert ingredients to metric 3. update nav bar to move simliar recipes to nav bar drop down
4/prepare for presentation 
additional DOM ideas, jump to recipe, jump to video? */

function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

/*window.onclick = function(event){
    if(!event.target.matches('.nav-link dropdown-toggle')){
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for(let i = 0; i < dropdowns.length; i++){
            const openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}


/*





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
//I will need to understand what each item is doing to modify it too. */




