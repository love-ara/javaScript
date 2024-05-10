
const apiUrls = {
  user: 'http://localhost:9091/user',
  quiz: 'http://localhost:9091/quiz',
  start: 'http://localhost:9091/start'
}
const form = document.forms["form"];


document.addEventListener('DOMContentLoaded', () => {
  submitEventListener('registerForm', registerUser);
  submitEventListener('loginForm', loginUser);
  clickEventListener('logoutNavItem', logoutUser);
  submitEventListener('view-quiz', viewQuiz);
  submitEventListener('take-quiz', takeQuiz);

  initializeUserDetails();
  getAllQuiz();
});

function submitEventListener(formId, event){
  const form = document.getElementById(formId);
  if(form){
    form.addEventListener('submit', event);
  }
}

function clickEventListener(elementId, handler){
  const element = document.getElementById(elementId);
  if(element){
    element.addEventListener('click', handler);
  }
}

async function makeApiCallWith(url, method, requestData){
  try{
    const response = await fetch(url, {
      method: method,
      headers:{
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(requestData)
    });
    return await response.json();
  }catch(error){
    console.log('Error making API call to ${url:', error);
    throw new Error('Failed to make Api call to ${url}');
  }
}

// form.addEventListener("submit", (e) =>{
//     e.preventDefault();

//     const username = document.querySelector('.username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const obj= {
//         username : username, 
//         email : email,
//         password : password
//     }

//     const divTag = document.createElement("div");
//     const pTag = document.createElement("p");
//     divTag.appendChild(pTag); 

    // async function postJSON(data) {
    //     try {
    //       const response = await fetch("http://localhost:9091/user/register", {
    //         method: "POST", // or 'PUT'
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //       });
      
    //       const result = await response.json();
        
    //       pTag.textContent = "Registration successful! " +  result.successful;
    //     //   alert(result);
    //     } catch (error) {
    //         pTag.textContent = error.getMessage;
    //         // alert(error.getMessage());
    //         }

    //   }
      
    //   postJSON(obj);
    //   form.appendChild(divTag);
    //   form.reset();
    //})
    async function registerUser(event){
      event.preventDefault();

      const formData = new FormData(this);
      const requestData = {
          username: formData.get('username'),
          email: formData.get('email'),
          password: formData.get('password')
      };

      try{
        const response = await makeApiCallWith('${apiUrls.user}/register', 'POST', requestData);

        if(response.successful){
          handleRegistrationSuccess(response.data);
        }else {
          handleRegistrationFailure();
        }
      }catch (error) {
        console.log('Registration failed:', error);
        alert('Registration failed. Please try again.')
      }
    }

    function handleRegistrationSuccess(userData){
      alert('Registration successful!');
      redirectToUsersPage(userData);
    }

    function handleRegistrationFailure(){
      alert('Registration failed!. Please try again');
    }

    async function loginUser(event){
      event.preventDefault();

      const formData = new FormData(this);
      const requestData = {
        username: formData.get('username'),
        password: formData.get('password')
      };
      try {
        const response = await makeApiCallWith('${apiUrls.user}', 'POST', requestData);
        
        if (response.successful){
          handleLoginSuccess(response.data);
        }else {
          handleLoginFailure();
        }
      }catch (error){
        console.error('Login failed:', error);
        alert('Login failed. Please try again')
      }
    }

    function handleLoginSuccess(userData){
      alert('Login Successful!');
      redirectToUsersPage(userData);
    }

    function handleLoginFailure(){
      alert('Login failed. Incorrect Password or username')
    }

    async function logoutUser(event){
      event.preventDefault();

      const username = sessionStorage.getItem('username').replace('Username: ', '');
      if(!username){
        console.error('usernamee not found in session storage');
        alert('username not found.');
        return;
      }

      const requestData = {
        username: username
      };

      try{
        const response = await makeApiCallWith('${apiUrl.user}/logout', 'PATCH', requestData);

        if (response.successful){
          handleLogoutSuccess();
        }else {
          handleLogoutFailure();
        }
      }catch (error){
        console.error('Logout failed:', error);
        alert('Logout failed. Please try again');
      }
    }

    function handleLogoutSuccess(){
      alert('Logout successful!');
      window.location.href = 'login-page.html';
    }

    function handleLogoutFailure(){
      alert('Logout failed')
    }


    async function viewQuiz(event){
      event.preventDefault();

      const formData = new FormData(this);
      const requestData = {
        quizPin: formData.get('quizPin')
      };

      try {
        const response = await makeApiCallWith('${apiUrls.start}/display', 'GET', requestData);

        if (!response.successful) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const aQuiz = response.data.quiz;
        displayQuiz(aQuiz);
      }catch (error){
        console.error('Failed to fetch quiz', error);
        alert('Try again');
      }
    }

    function displayQuiz(aQuiz){
      const quizList = document.getElementById('quiz');
      quizList.innerHTML = '';

      aQuiz.forEach(quiz => {
        const quizItem = document.createElement('div');
        quizItem.classList.add('quiz-quest');
        quizItem.innerHTML = `
        <p class="content">${quiz.content}</p>
        <p class="option">${quiz.option}</p>`;        
        quizList.appendChild(quizItem);
      });
    }


    async function takeQuiz(event){
      event.preventDefault();

      
    const username = sessionStorage.getItem('username').replace('Username: ', '');
    if (!username) {
      console.error('Username not found in session storage');
      alert('Username not found. Please try logging in again.');
      return;
    }

    const formData = new FormData(this);
    const requestData = {
      quizPin: formData.get('quizPin'),
      username: username,
      answers: formData.get('answer')

    };
  
    }

