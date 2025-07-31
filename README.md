# 🎤 Speaker API - Islamic Scholars Information Hub

A RESTful API that provides detailed information about prominent Islamic speakers and scholars. Simply enter a speaker's name and get comprehensive biographical and professional details instantly. Perfect for Islamic education platforms, researcher tools, or anyone wanting to learn more about influential Muslim voices.

**Link to project:** https://simple-speaker-api-a75778eda629.herokuapp.com/

## How It's Made:

**Tech used:** Node.js, Express.js, HTML, CSS, JavaScript, Heroku

This project started as a way to centralize information about Islamic speakers in an easily accessible format. I built a RESTful API using Express.js that serves JSON data about prominent Muslim scholars and speakers. The backend handles route parameters, converts names to lowercase for consistent matching, and provides detailed biographical information.

The frontend features a clean, web interface where users can a basic information on how to easily use the API. 

For data storage, I used a JavaScript object structure containing comprehensive details like birth information, current residence, preaching style, occupation, and more. The API includes proper CORS configuration for cross-origin requests and handles both successful responses and "speaker not found" scenarios gracefully.

## API Endpoints:

- `GET /` - Web interface for searching speakers
- `GET /api/:name` - Get speaker information by name

**Available Speakers:**
- Omar Suleiman
- Nouman Ali Khan  
- Yasir Qadhi

**Example API Usage:**
GET /api/omar suleiman
GET /api/nouman ali khan
GET /api/yasir qadhi

## Usage Examples:

**Postman/API Testing:** 
Use a get request on https://simple-speaker-api.herokuapp.com/api/omar suleiman

**Response Format:**

json{
  - "age": 39,
  - "birthName": "Omar Suleiman",
  - "birthDate": "June 3, 1986",
  - "birthLocation": "New Orleans, Louisiana",
  - "residing": "Valley Ranch Islamic Center, Irving TX",
  - "preachingStyle": "Soft, emotionally geared, but efficient",
  - "occupation": "Imam, Civil Rights Activist, Author",
  - "yearsActive": "2005-present",
  - "Origin": "Palestine",
  - "children": 3
}

**Optimizations**
Initially, I had case-sensitivity issues where "Omar Suleiman" wouldn't match "omar suleiman" in the database keys. I solved this by implementing automatic lowercase conversion on the backend while preserving the original formatting in the displayed data. 
Next time, I also add proper URL encoding handling to manage spaces in speaker names, converting them to %20 for reliable API requests. I'll also implement client-side input validation and loading states to improve user experience. 
The error handling was refactored to provide more meaningful responses - instead of generic 404 errors, users now get helpful messages suggesting available speakers. 

**Lessons Learned:**
This project taught me so much about building full-stack applications! The biggest "aha moment" was understanding how URL parameters work with spaces and special characters - I spent hours debugging 403 errors before realizing the issue was URL encoding.
I also learned the importance of consistent data structure design. My initial approach had mismatched keys between my data object and API calls, which taught me to be more methodical about naming conventions.
Working with Heroku deployment was another major learning experience. Understanding environment variables, the Procfile, and how Heroku assigns ports dynamically was crucial. The difference between development (localhost:8000) and production (process.env.PORT) became very clear!
Most importantly, this project showed me how APIs can make information more accessible. Having structured data about Islamic speakers that developers can easily integrate into educational apps or websites feels like contributing something meaningful to the community.

**Examples:**
Take a look at these couple examples that I have in my own portfolio:
Hair-Salon-Client-Website: https://github.com/virgilhg/Hair-Salon-Client-Website
Random-Advice-Generator: https://github.com/virgilhg/Random-Advice-Generator
Remote-Tech-Jobs-Radar: https://github.com/virgilhg/Remote-Tech-Jobs-Radar
