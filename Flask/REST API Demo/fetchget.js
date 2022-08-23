var params = {
        "id": 55,
        "email": "testuser88@gmail.com",
        "password": "testpassword8",
        "first_name": "FirstName 8",
        "last_name": "LastName 8",
        "mobile_no": "8888888888",
        "date_of_joining": "08-08-2021"
}

fetch("http://localhost:5001/staff", {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
})
.then((response) => response.json())
.then((data => console.log(data))) // printing data to console
.catch((error) => console.log(error))