const link = document.getElementById("select");
const select = document.getElementById("select_1")

function entrou() {
    select.innerHTML = '<div id="hover"><button><img src="Assets/Spense_Icon.svg" alt=""><p id="select-Ti">spense</p><p id="select-Tx">Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts</p></button><button><img src="Assets/Fiber_Icon.svg" alt=""><p id="select-Ti">Fiber Landing Page</p><p id="select-Tx">An online portifolio generator. Great to practice flex/grid layouts, and absolute positioning</p></button><button><img src="Assets/Gradie_Icon.svg" alt=""><p id="select-Ti">Gradie Sign Up Page</p><p id="select-Tx">Gradie is a simple sign up page, great to practice centering layouts</p></button></div>'
    link.style.color = "orange"
}

function saio() {
    select.innerHTML = '<div id="select_1"></div>'
    link.style.color = "black"
}

link.addEventListener("mouseenter", entrou)
select.addEventListener("mouseleave", saio)