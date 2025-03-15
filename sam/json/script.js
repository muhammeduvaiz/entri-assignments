function data(){
    axios.get('https://jsonplaceholder.typicode.com/posts/100')
    .then(function(response){
        console.log(response.data);
    })
    .catch((err) =>{
        console.error(err);
    })
}

function adddata(){
    const newdata = {
        name: 'uvaiz',
        email: 'uvaiz@gmail.com',
        body: 'i am a new user'
    };
    axios.post('https://jsonplaceholder.typicode.com/posts', newdata, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function fetchdata(id){
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}` )
    .then(function(response){
        console.log(response.data);
    })
    .catch((err) =>{
        console.error(err);
    })

}

function update(id){
   const updateddata = {
        
        "title": "updated title",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      }
      axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updateddata, {
        headers: {
            'Content-Type': 'application/json'
        }
}) 
.then(function(response){
    console.log(response?.data);
})
.catch((err) =>{
    console.error(err);
})
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