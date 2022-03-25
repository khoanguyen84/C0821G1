// SPA : Single Page App
// MPA : Multiple Page App
// Element node
// Attribute node
// Text node
/* <h1 class="heading-1">Hello world</h1> */
// Element node: h1
// Attribute node: class
// Text node: Hello world
// const h1 = document.createElement("h1");
// h1.innerText = "Heading 1";
// // h1.style = "color:red; background-color:green;"
// Object.assign(h1.style, {
//     color:"red",
//     backgroundColor:"green"
// })
// h1.className = "heading-1"
const menuItems = [
    "Bún",
    "Phở",
    "Cháo",
    "Súp",
    "Miến lươn"
]
// const div = document.createElement("div");
// div.className = "menu";
// const ul = document.createElement("ul");
// const li_bun = document.createElement("li");
// li_bun.className = "menu_item";
// li_bun.innerText = "Bún";
// const li_pho = document.createElement("li");
// li_pho.className = "menu_item";
// li_pho.innerText = "Phở";
// const li_chao = document.createElement("li");
// li_chao.className = "menu_item";
// li_chao.innerText = "Cháo";
// ul.appendChild(li_bun)
// ul.appendChild(li_pho)
// ul.appendChild(li_chao)
// div.appendChild(ul)
// for(let item of menuItems){
//     const li = document.createElement("li");
//     li.className = "menu_item";
//     li.innerText = item;
//     ul.appendChild(li)
// }
// div.appendChild(ul)
{/* <div class="job">
        <label for="job">Job name</label>
        <input type="text" id="job"> 
        <button>Add</button>
    </div> */}

const jobs = [];
const div = document.createElement("div");
div.className = "job";
const label = document.createElement("label")
label.htmlFor = "job";
label.innerText = "Job name"
const input = document.createElement("input")
input.type = "text";
input.id = "job";
const button = document.createElement("button");
button.innerText = "Add"
const ol = document.createElement("ol");

// button.onclick = function(){
//     alert(document.querySelector("#job").value)
// }

button.addEventListener("click", function () {
    let input = document.querySelector("#job");
    jobs.push(input.value);
    input.value = "";
    renderJob();
})

div.appendChild(label)
div.appendChild(input)
div.appendChild(button)
div.appendChild(ol);
// document.body.appendChild(div);
let root = document.querySelector("#root");
root.appendChild(div)

function renderJob() {
    ol.innerHTML = "";
    for (let index in jobs) {
        const li = document.createElement("li");
        li.id = `li_${index}`;
        li.innerText = jobs[index];
        li.addEventListener("click", function(){
            document.querySelector(`#li_${index}`).remove();
            jobs.splice(index,1);
        })
        li.onclick = "abc"
        ol.appendChild(li)
    }
}