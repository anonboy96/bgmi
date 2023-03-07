// Initialize Firebase
var config = {
    
    apiKey: "AIzaSyBJ71rWaeQa-1g4PDnNRSWuHOu5CwvcL6A",
  authDomain: "bgmi-94752.firebaseapp.com",
  databaseURL: "https://bgmi-94752-default-rtdb.firebaseio.com",
  projectId: "bgmi-94752",
  storageBucket: "bgmi-94752.appspot.com",
  messagingSenderId: "455548887686",
  appId: "1:455548887686:web:3cde5f6810622e9cf72707",
  measurementId: "G-0K5QQHR12J"
     
};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let dep = getInputVal('dep');
    let enl = getInputVal('enl');
    let name = getInputVal('name');
    let bgmi1 = getInputVal('bgmi1');
    let name2 = getInputVal('name2');
    let bgmi2 = getInputVal('bgmi2');
    let name3 = getInputVal('name3');
    let bgmi3 = getInputVal('bgmi3');
    let name4 = getInputVal('name4');
    let bgmi4 = getInputVal('bgmi4');
    let phone = getInputVal('phone');
    let ldr = getInputVal('ldr');
    
    

    //save message

    saveMessage(dep, enl, name, bgmi1, name2, bgmi2, name3, bgmi3, name4, bgmi4, phone, ldr);

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
function saveMessage(dep, enl, name, bgmi1, name2, bgmi2, name3, bgmi3, name4, bgmi4, phone, ldr){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({

        Department: dep,
        Enrollment: enl,
        name: name,
        bgmi1: bgmi1,
        name2: name2,
        bgmi2: bgmi2,
        name3: name3,
        bgmi3: bgmi3,
        name4: name4,
        bgmi4: bgmi4,
        phone: phone,
        ldrwhatsapp: ldr
    })
}