

# Recruitment Solution Frontend

This repository contains the frontend code for the Recruitment Solution application, which is a web-based platform for finding and hiring talent. The application allows users to register, login, search for candidates based on their requirements, and connect with potential candidates.

## Features

- User registration: Users can create an account by providing their username, email address, and password. They can also select their profile type, either as a company or an individual.
- User login: Registered users can log in to the application using their username/email and password.
- Search for candidates: Users can search for candidates based on job roles and optionally specify a location. The application fetches and displays a list of candidates that match the search criteria.
- Candidate details: The search results show relevant details about each candidate, including their name, profession, location, experience, and skills.
- Connect and hire: Users can connect with candidates by clicking on the "Connect and Hire" link. This feature allows them to view the candidate's complete profile and initiate the hiring process.

## Technologies Used

- HTML
- CSS (styles.css)
- JavaScript (script.js)
- Font Awesome (for icons)

## Getting Started

To run the frontend application locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Open the index.html file in a web browser:

   ```shell
   cd Recruitment_solution_frontend
   open index.html
   ```

3. The application should now open in your web browser, allowing you to interact with the various features.

## Configuration

The frontend application interacts with a backend API to handle user authentication, candidate search, and other functionalities. To configure the backend API endpoint, open the `script.js` file and update the `fetch` URLs with the appropriate API URLs.

```javascript
// Example: Update API endpoint URLs
const signInURL = 'http://localhost:8000/api/signin';
const loginURL = 'http://localhost:8000/api/login';
const searchURL = 'http://localhost:8000/api/search';
```

Make sure the backend API is running and accessible at the specified URLs.

## Contributing

Contributions to the Recruitment Solution Frontend are welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.



Feel free to update the README file with additional information, installation instructions, or any other relevant details specific to your project.
