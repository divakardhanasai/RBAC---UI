<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
 -->


What is Role-Based Access Control (RBAC)?
Role-Based Access Control (RBAC) is a method for managing and restricting access to resources within a system based on a user's role. In an RBAC system, roles are predefined and assigned to users, each role having specific permissions that determine what actions the user can perform. This approach simplifies user management, enhances security, and reduces administrative overhead by grouping permissions.

How This Project Implements RBAC
This project provides an intuitive admin dashboard to manage users, roles, and permissions using a simulated backend. Here's how the key concepts of RBAC are handled:
--Users: Individual accounts that can be managed within the system. Each user can have a role that defines their level of access.
--Roles: A set of permissions grouped under a unique name. For example, "Admin" or "Editor". Each role can have one or more permissions.
--Permissions: Specific rights or access levels (like Read, Write, Delete) that are assigned to roles. These determine what actions a user assigned to a role can perform.

Project Structure and Workflow
--User Management:
  --The admin can view a list of users in the system.
  --Users can be created, edited, or deleted via a simple form.
  --Each user is assigned a role, which dictates their permissions within the application.
--Role Management:
  --Roles define the level of access within the application.
  --New roles can be created, edited, or removed.
  --The admin can configure permissions for each role dynamically, allowing for flexible access control.
--Permissions Assignment:
  --The admin can assign permissions (like Read, Write, Delete) to roles.
  --These permissions control what users associated with those roles are allowed to do.
  --Permissions are displayed clearly in a checklist format for ease of assignment.
--Core Components
  --UserForm: A form component that allows administrators to add or edit users. It captures user details such as name, status (active/inactive), and role.
  --UserTable: Displays a list of users, with options to edit or delete them. It provides an overview of user roles and statuses.
  --RoleForm: A form for adding or editing roles. It includes the ability to assign a set of permissions to each role.
  --RoleTable: Displays a list of roles in the system, along with the permissions associated with each role. It allows the admin to modify or delete roles.

Why Use JSON Server?
JSON Server is a tool for mocking a RESTful API using a JSON file as a database. It's helpful in this project to simulate the backend environment without setting up a real server. JSON Server handles CRUD (Create, Read, Update, Delete) operations, providing endpoints to manage users and roles efficiently. This setup helps validate the UI and its interactions without depending on an actual backend implementation.

Key Decisions & Design Choices
--React and Material-UI: Chosen for their component-based structure and modern design capabilities. Material-UI provides a clean and responsive layout, making the UI look polished and professional.
--JSON Server: Provides a quick and straightforward way to simulate backend behavior. It mimics how a real server would work, allowing for a realistic testing environment.
--CSS Modules: CSS modules are used for scoped styling, preventing styles from affecting other components unintentionally. This makes the codebase more maintainable and modular.

Challenges Addressed
--Dynamic Permissions: Handling dynamic permissions for each role can become complex, especially when dealing with multiple roles and a large number of permissions. This project provides an easy-to-use checklist for permissions assignment.
--User-Friendly Interface: The admin interface is designed to be intuitive, with clear options for managing users and roles. The focus is on simplicity, ensuring administrators can perform tasks quickly.
--Flexibility: The code is modular, allowing future expansions like integrating a real backend or adding more sophisticated permission controls.

Future Enhancements
Here are a few ideas for expanding the project's functionality:
--Integrate with a Real Backend: Replace JSON Server with a real database and backend framework (e.g., Node.js, Express, MongoDB).
--Authentication: Implement user authentication (e.g., using JWT) for secure access to the admin dashboard.
Role Hierarchies: Add support for hierarchical roles (e.g., Manager roles that inherit permissions from subordinate roles).
--Search and Filter: Implement search and filtering functionality to make managing large datasets easier.
--Audit Logs: Track changes made to users and roles for better monitoring and accountability.