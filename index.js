//put whole website inside inside a function
document.querySelector('button').addEventListener('click',function(){
var randomnum1 = Math.floor(6 * Math.random()) + 1;
if (randomnum1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.jpg");
} else if (randomnum1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.jpg");
} else if (randomnum1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.jpg");
} else if (randomnum1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.jpg");
} else if (randomnum1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.jpg");
} else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.jpg");
}

var randomnum2 = Math.floor(6 * Math.random()) + 1;
if (randomnum2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dicee1.jpg");
} else if (randomnum2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dicee2.jpg");
} else if (randomnum2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dicee3.jpg");
} else if (randomnum2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dicee4.jpg");
} else if (randomnum2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dicee5.jpg");
} else {
    document.querySelector(".img2").setAttribute("src", "./images/dicee6.jpg");
}
if (randomnum1 === 1) {
if (randomnum2 === 1) {
    document.querySelector("h2").innerHTML = "Try CowGirl on Terrace";
} else if (randomnum2 === 2) {
    document.querySelector("h2").innerHTML = "Try CowGirl on Staircase";
} else if (randomnum2 === 3) {
    document.querySelector("h2").innerHTML = "Try CowGirl in Car";
} else if (randomnum2 === 4) {
    document.querySelector("h2").innerHTML = "Try CowGirl in Bathroom";
} else if (randomnum2 === 5) {
    document.querySelector("h2").innerHTML = "Try CowGirl in Livingroom";
} else {
    document.querySelector("h2").innerHTML = "Try CowGirl in Kitchen";
}}
if (randomnum1 === 2) {
    
if (randomnum2 === 1) {
    document.querySelector("h2").innerHTML = "Try FaceOff on Terrace";
} else if (randomnum2 === 2) {
    document.querySelector("h2").innerHTML = "Try FaceOff on Staircase";
} else if (randomnum2 === 3) {
    document.querySelector("h2").innerHTML = "Try FaceOff in Car";
} else if (randomnum2 === 4) {
    document.querySelector("h2").innerHTML = "Try FaceOff in Bathroom";
} else if (randomnum2 === 5) {
    document.querySelector("h2").innerHTML = "Try FaceOff in Livingroom";
} else {
    document.querySelector("h2").innerHTML = "Try FaceOff in Kitchen";
}

}
if (randomnum1 === 3) {
    if (randomnum2 === 1) {
        document.querySelector("h2").innerHTML = "Try Doggy on Terrace";
    } else if (randomnum2 === 2) {
        document.querySelector("h2").innerHTML = "Try Doggy on Staircase";
    } else if (randomnum2 === 3) {
        document.querySelector("h2").innerHTML = "Try Doggy in Car";
    } else if (randomnum2 === 4) {
        document.querySelector("h2").innerHTML = "Try Doggy in Bathroom";
    } else if (randomnum2 === 5) {
        document.querySelector("h2").innerHTML = "Try Doggy in Livingroom";
    } else {
        document.querySelector("h2").innerHTML = "Try Doggy in Kitchen";
    }}
if (randomnum1 === 4) {
        if (randomnum2 === 1) {
            document.querySelector("h2").innerHTML = "Try TheStandingT on Terrace";
        } else if (randomnum2 === 2) {
            document.querySelector("h2").innerHTML = "Try TheStandingT on Staircase";
        } else if (randomnum2 === 3) {
            document.querySelector("h2").innerHTML = "Try TheStandingT in Car";
        } else if (randomnum2 === 4) {
            document.querySelector("h2").innerHTML = "Try TheStandingT in Bathroom";
        } else if (randomnum2 === 5) {
            document.querySelector("h2").innerHTML = "Try TheStandingT in Livingroom";
        } else {
            document.querySelector("h2").innerHTML = "Try TheStandingT in Kitchen";
        }}
if (randomnum1 === 5) {
            if (randomnum2 === 1) {
                document.querySelector("h2").innerHTML = "Try Missionary on Terrace";
            } else if (randomnum2 === 2) {
                document.querySelector("h2").innerHTML = "Try Missionary on Staircase";
            } else if (randomnum2 === 3) {
                document.querySelector("h2").innerHTML = "Try Missionary in Car";
            } else if (randomnum2 === 4) {
                document.querySelector("h2").innerHTML = "Try Missionary in Bathroom";
            } else if (randomnum2 === 5) {
                document.querySelector("h2").innerHTML = "Try Missionary in Livingroom";
            } else {
                document.querySelector("h2").innerHTML = "Try Missionary in Kitchen";
            }}
if (randomnum1 === 6) {
                if (randomnum2 === 1) {
                    document.querySelector("h2").innerHTML = "Try IronChef on Terrace";
                } else if (randomnum2 === 2) {
                    document.querySelector("h2").innerHTML = "Try IronChef on Staircase";
                } else if (randomnum2 === 3) {
                    document.querySelector("h2").innerHTML = "Try IronChef in Car";
                } else if (randomnum2 === 4) {
                    document.querySelector("h2").innerHTML = "Try IronChef in Bathroom";
                } else if (randomnum2 === 5) {
                    document.querySelector("h2").innerHTML = "Try IronChef in Livingroom";
                } else {
                    document.querySelector("h2").innerHTML = "Try IronChef in Kitchen";
                }}
            })
