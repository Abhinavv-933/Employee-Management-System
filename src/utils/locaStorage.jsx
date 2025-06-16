const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix login bug",
        description: "Resolve login issue on Firefox.",
        date: "2025-06-16",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update user docs",
        description: "Revise onboarding guide.",
        date: "2025-06-10",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Implement payment gateway",
        description: "Integrate Stripe into checkout.",
        date: "2025-06-14",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design landing page",
        description: "Create wireframes and final mockups.",
        date: "2025-06-16",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize images",
        description: "Reduce homepage image sizes.",
        date: "2025-06-15",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client feedback review",
        description: "Incorporate suggestions from latest UX test.",
        date: "2025-06-13",
        category: "Research"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare presentation",
        description: "Monthly product update slides.",
        date: "2025-06-16",
        category: "Management"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write unit tests",
        description: "Cover API module with tests.",
        date: "2025-06-16",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix nav bug",
        description: "Resolve dropdown issue on mobile.",
        date: "2025-06-12",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Set up CI/CD",
        description: "Configure GitHub Actions workflow.",
        date: "2025-06-16",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Load testing",
        description: "Analyze performance bottlenecks.",
        date: "2025-06-14",
        category: "Performance"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Check logs",
        description: "Inspect server logs for recent errors.",
        date: "2025-06-16",
        category: "Maintenance"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "API documentation",
        description: "Document the v2 endpoints.",
        date: "2025-06-16",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug triage",
        description: "Sort and label issues on GitHub.",
        date: "2025-06-15",
        category: "Project Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Implement 2FA",
        description: "Add two-factor authentication support.",
        date: "2025-06-14",
        category: "Security"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Daily report",
        description: "Submit today's work log.",
        date: "2025-06-16",
        category: "Administration"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design review",
        description: "Evaluate Figma designs for new feature.",
        date: "2025-06-16",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix scroll bug",
        description: "Repair infinite scroll on dashboard.",
        date: "2025-06-11",
        category: "Bugfix"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage =() =>{
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
    }
export const getLocalStorage =() =>{
    const employees =  JSON.parse(localStorage.getItem('employees'))
    const admin =  JSON.parse(localStorage.getItem('admin'))

    console.log(employees,admin);
    
}