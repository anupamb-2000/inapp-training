function samplepost() {
    // have the params in json format to send it to the server via POST
    var params = {
        email: document.getElementById("myemail").value,
        firstname: document.getElementById("myfirstname").value,
        lastname: document.getElementById("mylastname").value,
        password: document.getElementById("mypassword").value,
        mobile: document.getElementById("mymobile").value,
        doj: document.getElementById("mydoj").value
    }

    // Create a new XMLHttpRequest object
    var request = new XMLHttpRequest();
    // open the API end point url using the open() method
    request.open("POST", "http://localhost:5001/staff");
    // set header content type to json
    request.setRequestHeader('Content-type', 'application/json');
    // converting to json string via stringify
    request.send(JSON.stringify(params));
    // after completing the request process, check the status
    request.onload = getRest
}

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