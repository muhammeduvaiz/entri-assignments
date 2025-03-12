function ele (elements){
    for (let i=0; i<elements.length; i++){
        elements[i].style.color = "violet";
        elements[i].style.fontSize = "24px";
    }
}

const elements = document.querySelectorAll('h1');
console.log(elements);

const ele1= document.querySelector('h1');
console.log(ele1);

const ele2= document.getElementById('btn');
console.log(ele2);
btn.innerText = "Hello World";
btn.style.color = "red";
btn.style.backgroundColor = "green";

const ele3 = document.getElementsByClassName("heading")
console.log(ele3);
console.log(ele3.length);
console.log(ele3[0].textContent);
console.log(ele3[2]);
ele3[1].style.color = "blue";

const ele4 = document.getElementsByTagName("li")
console.log(ele4);
console.log(ele4.length);
ele4[2].style.color = "yellow";

const ele5 = document.getElementsByName("gender")
console.log(ele5);

ele(ele3);
ele(ele4);

// onclick event
function change(color){
    if(elements[1].style.color=="red"){
        elements[1].style.color = color;
    }else{
        elements[1].style.color = "red";
    }
    console.log(elements[1].style.color);
}
function cars(){
    let ca = document.getElementById("car").value;
    document.getElementById("c").innerHTML = "You selected: " + ca;
    alert("You selected: " + ca);
}

// event listener
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click",function(){
    alert("Button clicked");
})

btn2.addEventListener("mouseover",function(){
    alert("Mouse over me");
    
})

// Form Validation

let form = document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("pass").value;
    if(username.trim().length>0 && password.trim().length>0){
        alert("Form Submitted");
        console.log("Form submitted");
    } else{
        alert("Please enter username and password");
    }
})

//event listener
const bt2 = document.getElementById("bt2");

bt2.addEventListener("click",function(){
    alert("Button clicked");
})
