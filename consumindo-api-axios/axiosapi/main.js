const url = "http://localhost:5500/api";
const newUser = {
  name: "Roberto Ramirez",
  avatar: "http://lorempixel.com.br/400/200",
  city: "Macaé"
}
const UpdateUser = {
  name: "Amanda Ramirez",
  avatar: "http://lorempixel.com.br/400/200",
  city: "Lima"
} 
function getUser() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      renderResults.textContent = JSON.stringify(data);
    })
    .catch((err) => console.log(err));
}
// getUser();

function addNewUser() {
  axios.post(url, newUser)
  .then(response => {
    // console.log(response.data)
    alert(JSON.stringify(response.data))
  })
  .catch(err => console.log(err))
}
//  addNewUser()

function updateUser() {
  axios.put(`${url}/2`, UpdateUser)
    .then(response => {
      alert(JSON.stringify(response.data))
    })
    .catch(err => console.log(err))
}
// updateUser()

function deleteUser() {
  axios.delete(`${url}/6`)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(err => console.log(err))
}
// deleteUser()

function getOneUser() {
  axios.get(`${url}/4`)
  .then(response => {
    const data = response.data
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(err => console.log(err))
}
getOneUser()