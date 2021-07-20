var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
//   var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    console.log('Submitted')
    form.reset()
  }).catch(error => {
    console.log("Oops Couldn't Submit")
  });
}
form.addEventListener("submit", handleSubmit)