const form = document.forms["form"];

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const username = document.querySelector('.username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const obj= {
        username : username, 
        email : email,
        password : password
    }

    const divTag = document.createElement("div");
    const pTag = document.createElement("p");
    divTag.appendChild(pTag); 

    async function postJSON(data) {
        try {
          const response = await fetch("http://localhost:9091/user/register", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
        
          pTag.textContent = "Registration successful! " +  result.successful;
        //   alert(result);
        } catch (error) {
            pTag.textContent = error.getMessage;
            // alert(error.getMessage());
            }

      }
      
      postJSON(obj);
      form.appendChild(divTag);
      form.reset();
    

})