// Initialize Firebase
var config = {
    apiKey: "AIzaSyDbOhPZEqFLpg5bP87D4zriA1vvRz2IQUk",
    authDomain: "contact-ead06.firebaseapp.com",
    databaseURL: "https://contact-ead06-default-rtdb.firebaseio.com",
    projectId: "contact-ead06",
    storageBucket: "contact-ead06.appspot.com",
    messagingSenderId: "1014984889405",
    appId: "1:1014984889405:web:f5e645007635cb47fc0654",
    measurementId: "G-W5W3EJ3L2Z"
};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    //save message

    saveMessage(name, company, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, company, email, phone, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        Department: company,
        email: email,
        phone: phone,
        message: message
    })
}