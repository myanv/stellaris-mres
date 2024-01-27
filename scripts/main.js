
let getHeader = document.querySelector("h2.xeno-header");
let getScroller = document.getElementsById(scroller);

const topPosScroller = getScroller.offsetTop;

if (topPosScroller > 0) {
    alert('Alert');
}

const myImage = document.querySelector("img");

myImage.onclick = function() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/bg.jpg") {
        myImage.setAttribute("src",
        "images/showreel-bg.jpg");
    } else {
        myImage.setAttribute("src", "images/bg.jpg");
    }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name: "); // input
    if (!myName) {
        alert("Nickname cannot be empty! Try again.")
        setUserName()
    } else {
        localStorage.setItem("name", myName);

    // calls an API localStorage, allowing us to store data in the browser and retrieve later
    // used localStorage's setItem function to create and store
    // data item called 'name', with value myName variable

        myHeading.textContent = `Welcome to Xeno Comics, ${myName}`; 
    }
    // changes content of header
}

if (!localStorage.getItem("name")) { // checks if localStorage doesn't have name
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Xeno Comics, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};

*/