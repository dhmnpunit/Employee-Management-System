const employees = [
    {
      "id": 1,
      "firstname": "Punit",
      "email": "punit@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Fix Login Bug",
          "taskDescription": "Resolve the bug that causes login failures for some users.",
          "taskDate": "2024-12-20",
          "category": "Bug Fix",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update User Profile Page",
          "taskDescription": "Implement new design for the user profile page as per the latest design specs.",
          "taskDate": "2024-12-22",
          "category": "UI/UX",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Write Unit Tests",
          "taskDescription": "Write unit tests for the new authentication module.",
          "taskDate": "2024-12-23",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "firstname": "Ravi",
      "email": "ravi.patel@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Create API Documentation",
          "taskDescription": "Write clear and detailed API documentation for the latest backend endpoints.",
          "taskDate": "2024-12-20",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Optimize Database Queries",
          "taskDescription": "Optimize slow-running queries in the user management system.",
          "taskDate": "2024-12-21",
          "category": "Backend",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Write API Unit Tests",
          "taskDescription": "Create unit tests for the new API endpoints.",
          "taskDate": "2024-12-22",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "firstname": "Tejash",
      "email": "tejash@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 20,
        "completed": 31,
        "failed": 90
      },
      "tasks": [
        {
          "taskTitle": "Design New Marketing Banner",
          "taskDescription": "Create a new banner for the upcoming holiday sale campaign.",
          "taskDate": "2024-12-20",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Analyze User Engagement Data",
          "taskDescription": "Analyze the engagement metrics from the last campaign to identify trends.",
          "taskDate": "2024-12-21",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Prepare Social Media Content",
          "taskDescription": "Create engaging content for our social media platforms for next week's promotion.",
          "taskDate": "2024-12-22",
          "category": "Social Media",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "firstname": "Ananya",
      "email": "ananya.gupta@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Review and Approve Blog Post",
          "taskDescription": "Read and approve the draft for the new blog post on product features.",
          "taskDate": "2024-12-20",
          "category": "Content",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "SEO Optimization for Website",
          "taskDescription": "Optimize the website content for search engines to improve visibility.",
          "taskDate": "2024-12-21",
          "category": "SEO",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Coordinate with Sales Team",
          "taskDescription": "Work with the sales team to align marketing and sales strategies for the new product.",
          "taskDate": "2024-12-22",
          "category": "Sales",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "firstname": "Arjun",
      "email": "a@a.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Data Cleaning for Analytics",
          "taskDescription": "Clean and preprocess the dataset for the analytics team to use in the next report.",
          "taskDate": "2024-12-20",
          "category": "Data Processing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Build Data Dashboard",
          "taskDescription": "Develop an interactive dashboard for visualizing key business metrics.",
          "taskDate": "2024-12-21",
          "category": "Data Visualization",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Optimize ETL Pipeline",
          "taskDescription": "Improve the performance of the ETL pipeline to speed up data processing.",
          "taskDate": "2024-12-22",
          "category": "Backend",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "firstname": "Vikram",
      "email": "vikram.singh@example.com",
      "password": "123"
    }
  ];


  
  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  };
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
  
    return { employees, admin };
  };
  