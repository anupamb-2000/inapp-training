// have the params in json format to send it to the server via POST
var params = {
    "id": 6,
    "email": "testuser6@gmail.com",
    "password": "testpassword6",
    "first_name": "FirstName 6",
    "last_name": "LastName 6",
    "mobile_no": "6666666666",
    "date_of_joining": "06-06-2021" 
}

// Create a new XMLHttpRequest object
var request = new XMLHttpRequest();
// open the API end point url using the open() method
request.open("PUT", "http://localhost:5001/staff");
// set header content type to json
request.setRequestHeader('Content-type', 'application/json');
// converting to json string via stringify
request.send(JSON.stringify(params));
// after completing the request process, check the status
request.onload = getRest

// have the params in json format to send it to the server via POST
var params = {
    "email": "testuser99@gmail.com"
}

// Create a new XMLHttpRequest object
var request = new XMLHttpRequest();
// open the API end point url using the open() method
request.open("DELETE", "http://localhost:5001/staff/2");
// set header content type to json
request.setRequestHeader('Content-type', 'application/json');
// converting to json string via stringify
request.send();
// after completing the request process, check the status
request.onload = getRest

function getRest() {
    // Create a new XMLHttpRequest object
    var request = new XMLHttpRequest();
    // open the API end point url using the open() method
    request.open("GET", "http://localhost:5001/staff");
    // sending the request
    request.send();
    // after completing the request process, check the status
    request.onload=()=>{
        // checking if success
        if(request.status === 200){
            // printing the returned data to console
            console.log(JSON.parse(request.response));
            document.getElementById('restresponse').innerHTML = request.response;
        } else {
            console.log("Connot contact server");
        }
    }
}