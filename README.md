# Expense Tracker Web Application

This project is a web-based application designed to manage personal finances through income and expense tracking. It provides users with the ability to log financial transactions, categorize them, view real-time summaries, and visualize their net balance via an interactive pie chart.

---

## Objective

The goal of this project is to provide a streamlined and intuitive platform for:

- Individuals to add and manage their income and expenses.
- Categorize transactions for better financial understanding.
- View summarized financial data including total income, expenses, and net balance.

The application is designed to be responsive, user-friendly, and visually engaging to make personal finance tracking accessible and simple.

---

## Features

### Authentication (optional for future enhancement)
- Login and register with email and password.
- Role support: Admin or User (for future extension).

### Income & Expense Management
- Add income or expense transactions through modal popups.
- Input fields include: amount, date, category, and description (optional).
- Separate forms for income and expense.
- Role-based forms to simplify user interaction.

### Data Summary & Visualization
- View total income, total expenses, and net balance.
- Interactive pie chart with net balance displayed at the center.
- Chart dynamically updates with each transaction.

### Transaction History
- View all past transactions in a dedicated popup modal.
- Filter transactions by type (optional future enhancement).
- Transaction details include amount, category, date, and description.
- Color-coded tags for income (green) and expenses (red).

---

## Technologies Used

- HTML5, CSS3, JavaScript (ES6)
- Chart.js (for pie chart visualization)
- LocalStorage (for data persistence across sessions)

---

## Setup and Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge)
- Internet connection (for Chart.js CDN)

### Steps
1. Clone or download the repository.
2. Open the `index.html` file in your browser.
3. All transactions will be saved locally using your browser’s localStorage.

---

## File Structure

ExpenseTracker/
│
├── index.html # Main entry point with layout and modals
├── style.css # Styling for layout, forms, and animations
├── script.js # Handles logic for forms, storage, and charts
└── README.md # Project documentation


---

## How the System Works

- Users interact via three primary buttons: Add Income, Add Expense, and Transaction History.
- Each action opens a modal form where transactions are logged.
- Transactions are saved in the browser's local storage for persistence.
- Calculations for total income, total expense, and net balance are performed on the fly.
- A real-time pie chart shows financial proportions with a central label for net balance.

---

## Evaluation Criteria

| Component     | Description |
|---------------|-------------|
| Code Quality  | Modular, readable, well-commented |
| Storage       | Data saved using localStorage |
| UI/UX         | Clean, minimal, user-friendly layout |
| Visualization | Pie chart dynamically updates with data |
| Responsiveness| Adapts across devices and screen sizes |
| Validation    | Input validation with error messaging |

---

## Future Enhancements

- Authentication using Firebase
- Filter transactions by category or date
- Edit and delete transaction functionality
- Export data to CSV
- Add dark mode support
- Sync data to cloud (Firebase or other)

---

## License

This project is open for educational and personal use. You are free to use and modify the code with proper attribution. Commercial use is not permitted without permission.

---

## Author

**Lakshmi Ridhanya A**  
B.Tech Computer Science and Engineering  
Amrita Vishwa Vidyapeetham
