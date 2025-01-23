
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

/*const checkbox = document.getElementById("listitem1");

const textToCross = document.getElementById("item1");

checkbox.addEventListener("change", function(){
    if(this.checked){
        textToCross.style.textDecoration = "line-through";
    }
    else{
        textToCross.style.textDecoration = "none";
    }
});*/


const checkbox = document.getElementById("listitem1");

const textToCross = document.getElementById("item1");

checkbox.addEventListener("change", function(){
    if(this.checked){
        textToCross.style.textDecoration = "line-through";
    }
    else{
        textToCross.style.textDecoration = "none";
    }
});

//if we were to apply this to each item I think we can loop through them. Let's try that. 




