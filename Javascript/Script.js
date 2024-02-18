"use strict";
const namef = document.getElementById("fname");
const namel = document.getElementById("lname");
const gmail = document.getElementById("email");
const telefon = document.getElementById("tel");
const password = document.getElementById("Pword");
const countrys = document.getElementById("country");
const date = document.getElementById("date");
const male = document.getElementById("male");
const female = document.getElementById("female");
const url = document.getElementById("url");
const file = document.getElementById("file");
const checkbox = document.getElementById("Chbox");

const data = {};

const callback = (e) => {
  const { name, value } = e.target;
  data[name] = value;
};
const callbackFile = (e) => {
  const { name, files } = e.target;
  data[name] = files[0];
};

const callbackCheckbox = (e) => {
  const { name, checked } = e.target;
  
  data[name] = checked;
};

namef.addEventListener("change", callback);
namel.addEventListener("change", callback);
gmail.addEventListener("change", callback);
telefon.addEventListener("change", callback);
password.addEventListener("change", callback);
countrys.addEventListener("change", callback);
date.addEventListener("change", callback);
url.addEventListener("change", callback);
file.addEventListener("change", callbackFile);
male.addEventListener("change", callback);
female.addEventListener("change", callback);
checkbox.addEventListener("change", callbackCheckbox);

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(data);
};

// function onSubmit() {
//   const namef = document.getElementById("fname").value;
//   const namel = document.getElementById("lname").value;
//   const gmail = document.getElementById("email").value;
//   const telefon = document.getElementById("tel").value;
//   const password = document.getElementById("Pword").value;
//    const countrys = document.getElementById("country").value;
//   const datetime = document.getElementById("date").value;

//   // console.log({
//   //   fname: namef,
//   //   lname: namel,
//   //   date: datetime,
//   //   email: gmail,
//   //   tel: telefon,
//   //   Pword: password,
//   // });
// }
