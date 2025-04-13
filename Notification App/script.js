const success = document.getElementById("success");
const error = document.getElementById("error");
const invalid = document.getElementById("invalid");
let toastBox = document.getElementById("toastBox");

let successMsg="Successfull sumbittd...!";
let errorMsg="Please fix the error...!";
let invalidMsg="Invalid inuput,check again...!";

function showToast(msg) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML=msg;
    toastBox.appendChild(toast);
    setTimeout(() => {
        toastBox.removeChild(toast);
    }, 2000);
}   

