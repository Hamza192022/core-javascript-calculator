const elements = document.getElementsByTagName("l1")
const screen = document.querySelectorAll("p")[0]
const clear = document.getElementsByClassName("clear")[0]


// alert("hi");
for(const i=0 ; i< elements.length ; i+=1){
    alert("hi");
    if(elements[i].innerHTML=== "="){
        elements[i].addEventListener("click" , calculator())
    }else{
        elements[i].addEventListener("click" ,addCurrentValue(i))
    }
}

function addCurrentValue(i){
    return function(){
        screen.innerHTML += elements[i].innerHTML
    }
} 

// function calculate(i){
//     return function(){
//         screen.innerHTML = eval(screen.innerHTML)
//     }
// } 
