document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("loginButton");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Redirect to the sign-up page
    window.location.href = "login.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("loginButton-2");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Redirect to the sign-up page
    window.location.href = "login.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("signin");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Redirect to the sign-up page
    window.location.href = "signin.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("signin-2");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Redirect to the sign-up page
    window.location.href = "signin.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("signin-3");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Redirect to the sign-up page
    window.location.href = "signin.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("home");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Redirect to the sign-up page
    window.location.href = "index.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var logOutButton = document.getElementById("logout");

  logOutButton.addEventListener("click", function (event) {
    localStorage.removeItem('auth');
  
  // Redirect to the login page or perform any necessary actions
  
    window.location.href = "index.html";
  });
});
// document.addEventListener('DOMContentLoaded', function() {
//     var loginButton = document.getElementById('searchPage');

//     loginButton.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent default link behavior

//       // Redirect to the sign-up page
//       window.location.href = 'searchPage.html';
//     });
//   });

document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.getElementById("signin-form");

  signInForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const username = document.getElementById("username").value;
    const email = document.getElementById("email-address").value;
    const password = document.getElementById("register-password").value;
    const profile = document.getElementById("profile").value;
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(profile);
    // Perform API request to the backend server
    // You would need to replace the URL and method with your actual backend API endpoint
    fetch(`https://recruitment-solution-backend.onrender.com/api/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, profile }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
        if (data.message === "Registration successful") {
          // Sign-in successful, redirect to dashboard or another page

          window.location.href = "/login.html";
        } else {
          // Sign-in failed, display error message
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
        // Display a generic error message
        alert("An error occurred. Please try again later.");
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const logInForm = document.getElementById("login-form");

  logInForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const username = document.getElementById("username-email").value;

    const password = document.getElementById("password").value;

    // Perform API request to the backend server

    fetch(`https://recruitment-solution-backend.onrender.com/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
        if (data.user) {
          
          
          localStorage.setItem('auth', JSON.stringify(data.user)); // Store the token in local storage
console.log(JSON.parse(localStorage.getItem('auth'))); 

          // Log-in successful, redirect to searchPage

           window.location.href = "/searchPage.html";
        } else {
          // Log-in failed, display error message
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        // Display a generic error message
        alert("An error occurred. Please try again later.");
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("search-form");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    console.log("hey");
    // Get form inputs
    const role = document.getElementById("role").value;

    const location = document.getElementById("location").value;

    // Perform API request to the backend server

     fetch(`https://recruitment-solution-backend.onrender.com/api/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role, location }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
        if (data.candidates) {
          const searchResults = document.getElementById("candidate");
          // Iterate over the search results array
          data.candidates.forEach((candidate) => {
            // Create table row element
            const row = document.createElement("tr");

            // Set the content of the table cells using candidate information
            row.innerHTML = `
    <td class="cell">${candidate.name}</td>
    <td class="cell">${candidate.role}</td>
    <td class="cell">${candidate.location}</td>
    <td class="cell">${candidate.experience} years</td>
    <td class="cell">${candidate.skills.join(", ")}</td>
    <td class="cell"><a href="#services">View Profile</td>
  `;

            // Append the table row to the search results table body
            searchResults.appendChild(row);
          });
        } else {
          // Log-in failed, display error message
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Search error:", error);
        // Display a generic error message
        alert("An error occurred. Please try again later.");
      });
  });
});
