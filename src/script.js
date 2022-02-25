$(document).ready( function() {
    display();
});
function display() {
    var html = ''
     html += '<h1>Register new account</h1>'
     html += '<input type="text" id="input1" placeholder="Name">'
     html += '<input type="text" id="input2" placeholder="Last Name"><br>'
     html += '<input type="text" id="input3" placeholder="Name"><br>'
     html += '<input type="text" id="input4" placeholder="City"><br>'
     html += '<input type="text" id="input5" placeholder="Phone no"><br>'
     html += '<input type="text" id="input6" placeholder="Email"><br>'
     html += '<button type="submit" >Create Account</button>'

    document.getElementById('display').innerHTML = html;
}