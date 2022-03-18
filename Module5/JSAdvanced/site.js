// function render(resource){
//     fetch(`https://jsonplaceholder.typicode.com/${resource}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(posts){
//         let htmls = posts.map(function(post){
//             return `<li>${post.title ?? post.body}</li>`
//             // return `<li>${post.title != undefined ? post.title : post.body}</li>`
//             // return `<li>${post.title ? post.title : post.body}</li>`

//         })
//         document.querySelector('#content').innerHTML = htmls.join("");
//     })
// }
// render("posts")
const apiURL = "https://62344f62c47cffbb870bd0aa.mockapi.io/api/job-manager/jobs"

fetch(apiURL,
    {
        method: "GET",
        mode: 'cors',
        headers: { 'Content-Type': 'application/json', }
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (jobs) {
        console.log(jobs)
        let htmls = jobs.map(function (job) {
            // return `<img style="width:100px; height:100px;" src='${job.avatar}'/>`
            return `<h5>${job.jobName}</h5>`
        })
        document.write(htmls.join(""))
    })

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(posts => {
//         let htmls = posts.map(post => `<li>${post.title}</li>`);
//         document.write(htmls.join(""))
//     })

// truthy - falsy

let number = 5;
let object = {}
if (object) {

}
