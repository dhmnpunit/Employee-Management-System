# Employee Management System (EMS)

This project is a practice Employee Management System built with React. It provides a simple setup to manage tasks for employees and admins.

## Features

- **Admin Dashboard**: Admins can create tasks and view all tasks assigned to employees.
- **Employee Dashboard**: Employees can view their tasks, including new, active, completed, and failed tasks.
- **Authentication**: Simple login system for admin and employees.
- **Task Management**: Create, view, and manage tasks with different statuses.

## Project Structure

```
.gitignore
index.html
package.json
public/
README.md
src/
    App.jsx
    assets/
    components/
        Auth/
            Login.jsx
        Dashboard/
            AdminDashboard.jsx
            EmployeeDashboard.jsx
        other/
            AllTask.jsx
            CreateTask.jsx
            Header.jsx
            TaskListNumbers.jsx
        TaskList/
            AcceptTask.jsx
            CompleteTask.jsx
            FailedTask.jsx
            NewTask.jsx
    context/
        AuthProvider.jsx
    index.css
    main.jsx
    pages/
    utils/
        localStorage.jsx
vite.config.js
```

## Usage

### Admin Login

- Email: `admin@me.com`
- Password: `123`

### Employee Login

Use the email and password of any employee from the ```localStorage.jsx file``` file.