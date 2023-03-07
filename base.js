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
    let idnumber = getInputVal('idnumber');
    let id2number = getInputVal('id2number');
    let fname = getInputVal('fname');
    let accountname = getInputVal('accountname');
    let whatsapp = getInputVal('whatsapp');
    let accountnumbe = getInputVal('accountnumber');
    let account2number = getInputVal('account2number');
   

    //save message

    saveMessage(idnumber, id2number, fname, accountname, whatsapp, accountnumber, account2number);

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
function saveMessage(idnumber, id2number, fname, accountname, whatsapp, accountnumber, account2number){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        idnumber: idnumber,
        id2number: id2number,
        fname: fname,
        accountname: accountname,
        whatsapp: whatsapp,
        accountnumber: accountnumber,
        account2number: account2number,
        
    })
}