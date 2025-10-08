axios.post("https://jsonplaceholder.typicode.com/users", {
  name: "John Doe"
})
.then(res => console.log(res.data))
.catch(err => console.error(err));
