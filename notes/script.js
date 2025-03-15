let a;
let b;
a = 1;
b = 2;  
c = a + b;
console.log(c);

let x=10;
if(x>15){
    console.log('x is geater than 5')
}
else{
    console.log('x is less than 5')
}

let mark=30;
if(mark>=70){
    console.log('Grade A');
}else if(mark>=40){
    console.log('Grade B');
}else{
    console.log('Grade C');
}

let n=5;
let s=2;
output = n*s;
console.log(output);

const arr=["1","2","3","4","5"];
for (let i=0; i<arr.length; i++){
    console.log("array values: ",arr[i]);
}


let j=0;

while(j<=10){
    console.log("value of j",j);
    j++;
}

for (let j=0; j<=10;j++){
    console.log(`value of for j ${j}`,j);
}

let k=0;
do{
    console.log(`value of k${k}`,k);
    k++;
}while(k==10);

//call back fuction
function greet(name="uv"){
    console.log("Hello",name);
} 
function greetuser(callback){
    console.log("hi uvaiz")
    callback("uvaiz");
    callback("aaa");
}

greetuser(greet);

// setTimeout
setTimeout(()=>{
    console.log("hello uvaiz");
},2000);

console.log("hello 1");

//callbackHellExample

function setTimeoutExample(){
    setTimeout(()=>{
        console.log("Step 1");
            setTimeout(()=>{
                console.log("Step 2");
                setTimeout(()=>{
                    console.log("Step 3");
                },2000);
            },2000);
    },1000);

}

//promise
function fetchdataa(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("success");
            }else{
                reject("failure");
            }
        }, 2000);
    });
}

fetchdataa()
.then((result) =>{
    console.log(result);
})
.catch((error) =>{
    console.error(error);
});

//async/await

async function fetchdata(){
    try{
        console.log("fetching data");
        let result = await new Promise((resolve) =>
        setTimeout(() =>
            resolve("success1")
        ,2000)
);
        console.log(result);
        console.log("did data receved");
    }catch(error){
        console.error(error);
    }
}
fetchdata();