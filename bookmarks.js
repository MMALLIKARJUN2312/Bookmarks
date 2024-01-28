// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

document.addEventListener("DOMContentLoaded",function(event){

let bookmarkFormElement = document.getElementById("bookmarkForm");

let siteNameInputElement = document.getElementById("siteNameInput");
let siteNameErrorElement = document.getElementById("siteNameErrMsg");

let siteUrlInputElement = document.getElementById("siteUrlInput");
let siteUrlErrorElement = document.getElementById("siteUrlErrMsg");

let submitButtonElement = document.getElementById("submitBtn");

let unorderedListElement = document.getElementById("bookmarksList");

siteNameInputElement.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrorElement.textContent = "Required*";
    }
})

siteUrlInputElement.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrorElement.textContent = "Required*";
    }
})

function siteName() {
    let userSiteNameValue = siteNameInputElement.value;
    if (userSiteNameValue === "") {
        siteNameErrorElement.textContent = "Required*";
    } else {
        siteNameErrorElement.textContent = "";
    }
}

function siteUrl() {
    let userSiteUrlValue = siteUrlInputElement.value;
    if (userSiteUrlValue === "") {
        siteUrlErrorElement.textContent = "Required*";
    } else {
        siteUrlErrorElement.textContent = "";
    }
}

function addListItem() {
    let userSiteInput = siteNameInputElement.value;
    let userSiteUrl = siteUrlInputElement.value;

    let listItem = document.createElement("li");
    listItem.textContent = userSiteInput;
    listItem.classList.add("list-item");

    let breakElement = document.createElement("br");

    let anchorElement = document.createElement("a");
    anchorElement.href = userSiteUrl;
    anchorElement.target = "_blank";
    anchorElement.textContent = userSiteUrl;

    unorderedListElement.appendChild(listItem);
    listItem.appendChild(breakElement);
    listItem.appendChild(anchorElement);

    siteNameInputElement.value = "";
    siteUrlInputElement.value = "";
}

bookmarkFormElement.addEventListener("submit", function(event) {
    event.preventDefault();
    siteName();
    siteUrl();
    addListItem();
});

});