
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

//created text content selector query for Ul 
//append new item 
//query selected ul items list items (lis) 
//for loop through the length created an element input 
//label variable, for every label there is an id
//insert a check in front of of the ul then check next sibling 

/*function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

const checkbox = document.getElementById("listitem1");
const textToCross = document.getElementById("item");

checkbox.addEventListener("change", function(){
    if(this.checked){
        textToCross.style.textDecoration = "line-through";
    }
    else{
        textToCross.style.textDecoration = "none";
    }
});*/



//console.log(checkbox);
const item = document.querySelectorAll('#ingredientlist1 input[type="checkbox"], #ingredientlist2 input[type="checkbox"]');

//console.log(item);

for(let i = 0; i < item.length; i++){
    //console.log(item[i]);
    const label = item[i].nextElementSibling;

    item[i].addEventListener("change", function(event){
        if(item[i].checked){
            label.style.textDecoration = "line-through";

        }
        else{
            label.style.textDecoration = "none";
        }
    });
}

//selected checkbox
//next element next sibling 



//if we were to apply this to each item I think we can loop through them. Let's try that. 
//query selector for checkboxes, iterate through that 
//how would I write this out in plain english? 

//for any item with class = item, if it is check apply line through decoration
//I need to select the items with the check box 
//I need the if statement to check each class item to see if they are checked 

//will add an event listener to the button to display metric list

/*const metricBtn = document.getElementById("metricBtn");
const divMetric = document.getElementById("divMetric");
const metric2 = document.getElementById("metric2");
metric2.style.display="none"
divMetric.style.display="none";

metricBtn.addEventListener("click", function(){
    if(divMetric.style.display === "none"){
        divMetric.style.display = "block";
        metric2.style.display = "block";
        document.getElementById("ingredientlist1").style.display = "none";
        document.getElementById("ingredientlist2").style.display = "none";
        
    }
    else{
        divMetric.style.display = "none";
        metric2.style.display = "none";
        document.getElementById("ingredientlist1").style.display = "block";
        document.getElementById("ingredientlist2").style.display = "block";

        
    }

});

/*const hide = document.getElementById("hide");

hide.addEventListener("click", function(event){
    document.getElementById("divMetric").style.display = "none";




})*/




