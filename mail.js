const firebaseConfig = {
  apiKey: "AIzaSyDEw_KLTqAVB2G7e-X9sQcZ7YORVROcwy8",
  authDomain: "projetbabs.firebaseapp.com",
  databaseURL: "https://projetbabs-default-rtdb.firebaseio.com",
  projectId: "projetbabs",
  storageBucket: "projetbabs.appspot.com",
  messagingSenderId: "335316060945",
  appId: "1:335316060945:web:78fefd8280883b579f9ab0"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("projetbabs");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
