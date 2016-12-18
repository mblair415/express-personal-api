# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Personal API - Weekend Lab

A JSON API for data about me and my projects!

One to many relationship

## data

### Projects
- title
- image
- date assigned
- team members

### Previous Experience
- title
- job responsibilities

## API Endpoints:
{method: "GET", path: "/api", description: "Describes all available endpoints"},
{method: "GET", path: "/api/profile", description: "Profile"},
{method: "GET", path: "/api/projects", description: "Project List"},
{method: "POST", path: "/api/projects", description: "Project Addition"},
{method: "GET", path: "/api/pets", description: "My Pets"},
{method: "GET", path: "/api/networking", description: "Networking Event"},
{method: "POST", path: "/api/networking", description: "Networking Event Addition"},

### RESTful routes for main page
GET/api              description of all available endpoints
GET/profile          description of personal profile

### RESTful routes for projects
- 'GET/api/project'         Display a list of all projects
- 'POST/api/project'        Create a new project
  - request body should include:
    - title
    - date assigned
    - team members
    - gitHub link
    - hosted site link
- 'GET/project/1'           Display a specific project
- 'GET/project/1/edit'      Edit a project
- 'PUT/project/1'           Update a specific project
- 'DELETE/project/1'        Delete a specific project

1. Reference vs Embedded?
  - Embedded because the data won't be repeated.

2. Leaning towards profile first
  - GET / profile / projects



#### Minimum Requirements
Consume the Personal API you just created, and use it to build your own personal dashboard.

* Create an `index.html` **homepage** that's linked to your main JavaScript and CSS files.
* Use **jQuery** and **AJAX** to consume your Personal API.
* Use **Handlebars** templating to render data to the page.
* Display **at least one image/gif** that you retrieved from your Personal API.
* Create **at least one form**, so you can CRUD at least one of your resources.
* Get rid of that ugly blue background. Style it up!

#### Possible Challenge

If your data includes locations, add a google map to show pins of those places.

<br>
<br>

<img src="https://media.giphy.com/media/mWUuD8qPSi5B6/giphy.gif" width="400">
