import './App.css';
import NavBar from './components/NavBar';
import Section from './components/Section';

const datas = [
  {
    id: 'bank-ms',
    title: "Bank Management System",
    erDiagram: '/images/erd/Bank Management System ERD.png',
    entities: ['Customer', 'Account', 'Transaction', 'Branch', 'Employee'],
    relations: [
      {
        relationTitle: "Cutomer - Account",
        relation: "One to Many"
      },
      {
        relationTitle: "Account - Transaction",
        relation: "One to Many"
      },
      {
        relationTitle: "Account - Branch",
        relation: "Many to One"
      },
      {
        relationTitle: "Branch - Employee",
        relation: "One to Many"
      }
    ],
    images: [
      '/images/schemas/bank-management-system/bms-account-ss.png',
      '/images/schemas/bank-management-system/bms-branch-ss.png',
      '/images/schemas/bank-management-system/bms-customer-ss.png',
      '/images/schemas/bank-management-system/bms-employee-ss.png',
      '/images/schemas/bank-management-system/bms-transaction-ss.png',
    ],
    queryFile: 'https://github.com/sandarva/erd-showcase/tree/main/sql/bank-management-system'
  },
  {
    id: 'personal-expense-tracker',
    title: "Personal Expense Tracker",
    erDiagram: '/images/erd/Personal Expense Tracker ERD.png',
    entities: ['User', 'Report', 'Account', 'Income', 'Expense', 'Categories', 'Sub-Categories'],
    relations: [
      {
        relationTitle: "User - Report",
        relation: "One to Many"
      },
      {
        relationTitle: "User - Account",
        relation: "One to Many"
      },
      {
        relationTitle: "Account - Expense",
        relation: "One to Many"
      },
      {
        relationTitle: "Account - Income",
        relation: "One to Many"
      },
      {
        relationTitle: "Income - Categories",
        relation: "One to One"
      },
      {
        relationTitle: "Income - Sub-Categories",
        relation: "One to One"
      },
      {
        relationTitle: "Expense - Categories",
        relation: "One to One"
      },
      {
        relationTitle: "Expense - Sub-Categories",
        relation: "One to One"
      },
    ],
    images: [
      '/images/schemas/personal-expense-tracker/pet-account-ss.png',
      '/images/schemas/personal-expense-tracker/pet-user-ss.png',
      '/images/schemas/personal-expense-tracker/pet-income-ss.png',
      '/images/schemas/personal-expense-tracker/pet-expense-ss.png',
      '/images/schemas/personal-expense-tracker/pet-categories-ss.png',
      '/images/schemas/personal-expense-tracker/pet-sub_categories-ss.png',
    ],
    queryFile: 'https://github.com/sandarva/erd-showcase/tree/main/sql/personal-expense-tracker'
  },
  {
    id: 'blood-ms',
    title: "Blood Bank Management System",
    erDiagram: '/images/erd/Blood Bank Management System ERD.png',
    entities: ['Doner', 'Receipent', 'Blood', 'Blood Type', 'Employee'],
    relations: [
      {
        relationTitle: "Receipent - Blood",
        relation: "One to Many"
      },
      {
        relationTitle: "Donor - Blood",
        relation: "One to One"
      },
      {
        relationTitle: "Employee - Blood",
        relation: "One to Many"
      },
      {
        relationTitle: "Blood - Blood Type",
        relation: "Many to One"
      }
    ],
    images: [],
    queryFile: ''
  },
  {
    id: 'employee-ms',
    title: "Employee Management System",
    erDiagram: '/images/erd/Employee Management System ERD.png',
    entities: ['Department', 'Payroll', 'Qualification', 'Leave', 'Employee'],
    relations: [
      {
        relationTitle: "Department - Employee",
        relation: "One to Many"
      },
      {
        relationTitle: "Employee - Qualification",
        relation: "One to One"
      },
      {
        relationTitle: "Employee - Leave",
        relation: "One to One"
      },
      {
        relationTitle: "Employee - Payroll",
        relation: "One to One"
      }
    ],
    images: [],
    queryFile: ''
  },
  {
    id: 'inventory-ms',
    title: "Inventory Management System",
    erDiagram: '/images/erd/Inventory Management System ERD.png',
    entities: ['Admin', 'Inventory', 'User', 'Item', 'Category', 'Vendor'],
    relations: [
      {
        relationTitle: "Admin - Employee",
        relation: "One to Many"
      },
      {
        relationTitle: "Admin - Inventory",
        relation: "One to One"
      },
      {
        relationTitle: "Inventory - Item",
        relation: "Many to One"
      },
      {
        relationTitle: "User - Item",
        relation: "One to Many"
      },
      {
        relationTitle: "Item - Category",
        relation: "One to One"
      },
      {
        relationTitle: "Item - Vendor",
        relation: "One to One"
      }
    ],
    images: [],
    queryFile: ''
  },
  {
    id: 'library-ms',
    title: "Library Management System",
    erDiagram: '/images/erd/Library Management System ERD.png',
    entities: ['Admin', 'Book', 'Author', 'Member', 'Employee'],
    relations: [
      {
        relationTitle: "Admin - Employee",
        relation: "One to Many"
      },
      {
        relationTitle: "Employee - Book",
        relation: "Many to Many"
      },
      {
        relationTitle: "Member - Employee",
        relation: "Many to Many"
      },
      {
        relationTitle: "Author - Book",
        relation: "One to Many"
      },
      {
        relationTitle: "Admin - Book",
        relation: "One to Many"
      }
    ],
    images: [],
    queryFile: ''
  },
  {
    id: 'parking-ms',
    title: "Parking Lot Management System",
    erDiagram: '/images/erd/Parking Lot Management System ERD.png',
    entities: ['Parking Lot', 'Floor', 'Slot', 'user'],
    relations: [
      {
        relationTitle: "Parking Lot - Floor",
        relation: "One to Many"
      },
      {
        relationTitle: "Floor - Slot",
        relation: "One to Many"
      },
      {
        relationTitle: "Slot - user",
        relation: "One to One"
      }
    ],
    images: [],
    queryFile: ''
  },
  {
    id: 'restaurant-ms',
    title: "Restaurant Management System",
    erDiagram: '/images/erd/Restaurant Management System ERD.png',
    entities: ['Customer', 'Admin', 'Food', 'Order', 'Employee', 'Bill'],
    relations: [
      {
        relationTitle: "Admin - Food",
        relation: "One to Many"
      },
      {
        relationTitle: "Admin - Employee",
        relation: "One to Many"
      },
      {
        relationTitle: "Employee - Bill",
        relation: "One to One"
      },
      {
        relationTitle: "Customer - Order",
        relation: "Many to Many"
      },
      {
        relationTitle: "Employee - Order",
        relation: "One to Many"
      },
      
    ],
    images: [],
    queryFile: ''
  },
  {
    id: 'room-ms',
    title: "Room Management System",
    erDiagram: '/images/erd/Room Management System ERD.png',
    entities: ['Customer', 'Room', 'Item', 'Admin', 'Employee'],
    relations: [
      {
        relationTitle: "Admin - Room",
        relation: "One to Many"
      },
      {
        relationTitle: "Room - Item",
        relation: "Many to Many"
      },
      {
        relationTitle: "Room - Employee",
        relation: "One to One"
      },
      {
        relationTitle: "Room - Customer",
        relation: "One to One"
      }
    ],
    images: [],
    queryFile: ''
  },
  {
    id: 'school-ms',
    title: "School Management System",
    erDiagram: '/images/erd/School Management System ERD.png',
    entities: ['Admin', 'Student', 'Teacher', 'Admin', 'Class', 'Course', 'Employee'],
    relations: [
      {
        relationTitle: "Admin - Student",
        relation: "One to Many"
      },
      {
        relationTitle: "Admin - Employee",
        relation: "One to Many"
      },
      {
        relationTitle: "Admin - Techer",
        relation: "Many to One"
      },
      {
        relationTitle: "Teacher - Class",
        relation: "One to Many"
      },
      {
        relationTitle: "Student - Class",
        relation: "One to One"
      },
      {
        relationTitle: "Class - Course",
        relation: "One to Many"
      }
    ],
    images: [],
    queryFile: ''
  },
  {
    id: 'tournament-ms',
    title: "Tournament Management System",
    erDiagram: '/images/erd/Tournament Management System ERD.png',
    entities: ['Tournament', 'Team', 'Player'],
    relations: [
      {
        relationTitle: "Tournament - Team",
        relation: "One to Many"
      },
      {
        relationTitle: "Team - Player",
        relation: "One to Many"
      }
    ],
    images: [],
    queryFile: ''
  }
]

function App() {
  return (
    <div className="App">
      <div class="container">
        <NavBar />
        {datas.map((data, dataIndex) => {
          return <Section data={data} key={dataIndex}/>
        })}
      </div>
    </div>
  );
}

export default App;
