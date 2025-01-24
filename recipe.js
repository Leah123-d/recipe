//to show and dropdown list
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}


//to add strike through each list item
const item = document.querySelectorAll('#ingredientlist1 input[type="checkbox"], #ingredientlist2 input[type="checkbox"]');

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



//to display metric list
const metricBtn = document.getElementById("metricBtn");
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




