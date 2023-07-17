import './App.css';
import NavBar from './components/NavBar';
import Section from './components/Section';

const data = [
  {
    id: 'bank-ms',
    title: "Bank Management System",
    erDiagram: '/images/Bank Management System ERD.png',
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
    images: []
  },
  {
    id: 'personal-expense-tracker',
    title: "Personal Expense Tracker",
    erDiagram: '/images/Personal Expense Tracker ERD.png',
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
    images: []
  },
  {
    id: 'blood-ms',
    title: "Blood Management System",
    erDiagram: '/images/Blood Management System ERD.png',
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
    images: []
  },
  {
    id: 'employee-ms',
    title: "Employee Management System",
    erDiagram: '/images/Employee Management System ERD.png',
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
    images: []
  },
  {
    id: 'inventory-ms',
    title: "Inventory Management System",
    erDiagram: '/images/Inventory Management System ERD.png',
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
    images: []
  },
  {
    id: 'library-ms',
    title: "Library Management System",
    erDiagram: '/images/Library Management System ERD.png',
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
    images: []
  },
  {
    id: 'parking-ms',
    title: "Parking Lot Management System",
    erDiagram: '/images/Parking Lot Management System ERD.png',
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
    images: []
  },
  {
    id: 'restaurant-ms',
    title: "Restaurant Management System",
    erDiagram: '/images/Restaurant Management System ERD.png',
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
    images: []
  },
  {
    id: 'room-ms',
    title: "Room Management System",
    erDiagram: '/images/Room Management System ERD.png',
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
    images: []
  },
  {
    id: 'school-ms',
    title: "School Management System",
    erDiagram: '/images/School Management System ERD.png',
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
    images: []
  },
  {
    id: 'tournament-ms',
    title: "Tournament Management System",
    erDiagram: '/images/Tournament Management System ERD.png',
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
    images: []
  },
]

function App() {
  return (
    <div className="App">
      <div class="container">
        <NavBar />
        <Section data={data}/>
      </div>
    </div>
  );
}

export default App;
