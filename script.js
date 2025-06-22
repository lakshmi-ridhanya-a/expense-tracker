let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const historyBtn = document.getElementById("historyBtn");

const formPopup = document.getElementById("formPopup");
const historyPopup = document.getElementById("historyPopup");

const formTitle = document.getElementById("formTitle");
const transactionForm = document.getElementById("transactionForm");
const closeForm = document.getElementById("closeForm");
const closeHistory = document.getElementById("closeHistory");

const historyList = document.getElementById("historyList");
const netBalanceDisplay = document.getElementById("netBalanceDisplay");

let currentType = "income";

// Open form popup
incomeBtn.onclick = () => openForm("income");
expenseBtn.onclick = () => openForm("expense");
historyBtn.onclick = () => openHistory();

closeForm.onclick = () => {
  formPopup.style.display = "none";
  transactionForm.reset();
};

closeHistory.onclick = () => {
  historyPopup.style.display = "none";
};

transactionForm.onsubmit = (e) => {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value.trim();
  const amount = +document.getElementById("amount").value;
  const description = document.getElementById("description").value.trim();

  if (!amount || !category || !date) {
    alert("Please fill in all required fields.");
    return;
  }

  const transaction = {
    id: Date.now(),
    type: currentType,
    amount,
    category,
    description,
    date
  };

  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  transactionForm.reset();
  formPopup.style.display = "none";
  updateUI();
};

function openForm(type) {
  currentType = type;
  formTitle.innerText = `Add ${type.charAt(0).toUpperCase() + type.slice(1)}`;
  formPopup.style.display = "block";
}

function openHistory() {
  historyPopup.style.display = "block";
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  transactions.slice().reverse().forEach(tx => {
    const li = document.createElement("li");
    li.className = `history-item ${tx.type}`;
    li.classList.add(tx.type);

    li.innerHTML = `
      <div class="transaction-info">
        <span class="date">${tx.date}</span>
        <span class="desc">${tx.category}${tx.description ? " - " + tx.description : ""}</span>
      </div>
      <div class="transaction-amount ${tx.type}">$${tx.amount.toFixed(2)}</div>
    `;
    historyList.appendChild(li);
  });
}


function updateUI() {
  renderHistory();
  updateChart();
}

function updateChart() {
  const income = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
  const net = income - expense;

  netBalanceDisplay.innerText = `$${net.toFixed(2)}`;

  if (window.pieChart) window.pieChart.destroy();

  const ctx = document.getElementById("expenseChart").getContext("2d");
  window.pieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Income", "Expense"],
      datasets: [{
        data: [income, expense],
        backgroundColor: ["#28a745", "#dc3545"]
      }]
    },
    options: {
      cutout: "70%",
      plugins: {
        legend: {
          display: true,
          position: "bottom"
        }
      }
    }
  });
}

window.onload = updateUI;
