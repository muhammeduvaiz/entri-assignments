//JSON: JavaScript Object Notation - JSON is a data-interchange format
/*
    {
        "name": "nijaskhan",
        "age": "26",
        "city": "Dhaka",
        "hobbies": ["reading", "painting", "cooking"]
    }
*/

// api calls can be done with
/*
    1. fetch
    2. ajax
    3. axios
*/

// what is query strings in api ?
// query strings are used to filter the data from the api.

//  what is query parameters in api ?
// query parameters are used to filter the data from the api.

function getDatas() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log("response: ", response?.data);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}

function getDataById(id) {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            console.log("response: ", response?.data);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}

function addData() {
    const newData = {
        title: "New Post",
        body: "This is a new post."
    }

    axios.post('https://jsonplaceholder.typicode.com/posts', newData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log("response: ", response);
    })
        .catch((error) => {
            console.error("Error: ", error);
        });

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify()
    // }).then(response => response.json())
    //     .then(data => console.log("Post Created:", data))
    //     .catch(error => console.error("Error:", error));
}

function updateData(targetId) {
    const updateData = {
        "title": "Nijas khan",
        "body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }

    axios.put(`https://jsonplaceholder.typicode.com/posts/${targetId}`, updateData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            console.log("response: ", response);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //         id: 1,
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1,
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
}