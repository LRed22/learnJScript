function message(msg){
    document.getElementById('output').innerHTML=msg + " event";
}

function displayDate(){
    document.getElementById("demo").innerHTML=Date()

}

function closeMe(){
    // find the element
    x=document.getElementById("demo");
    //option 1: change the style attribute directly 
    x.style.display="none";

    //option 2: Change the class 
    // x.className="closed"
}

function openMe(){
    // Find the element
    x.style.display="block";

    //Option 2: change the class 
    //x.className="open";
}
