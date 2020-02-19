const CreateUser = document.querySelector('.CreateUser')
const Result = document.querySelector('.result')

CreateUser.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = CreateUser.querySelector('.username').value
  const password = CreateUser.querySelector('.password').value
  //post('/createUser', { username, password })

  axios.post('http://ec2-3-15-157-217.us-east-2.compute.amazonaws.com:3000/createUser',{
    "username" : username,
    "password" : password
 })
 .then(response =>{
  console.log(response.data)
  $('#result').text(response.data)
   });

})




