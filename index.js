// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };

const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch('http://localhost:3000/dogs', configurationObject)
  .then(res => res.json())
  .then(res => console.log(res))
  //ADD CATCH AFTER
  .catch(err => {
    alert("Bad things! Ragnarok!")
    console.log('error')
  })

const nameObject ={
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
        "First Name": "Jhon",
        "Last Name" : "Marcelo"
    })
}
  fetch('http://localhost:3000/users', nameObject)
  .then(response => response.json())
  .then(Name => console.log(Name))
  .catch(err => {
    console.log('ERROR')
  })