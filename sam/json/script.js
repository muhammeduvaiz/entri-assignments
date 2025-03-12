function data(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
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