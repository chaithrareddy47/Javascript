// https://api.github.com/users/chaithrareddy47

function getGitHubUser(userName) {
     return fetch("https://api.github.com/users/chaithrareddy47");
   
}

getGitHubUser("chaithrareddy47")
    .then((res) => {
    res.json()
    })
    .then((data) => {
    console.log(data);
    
})
