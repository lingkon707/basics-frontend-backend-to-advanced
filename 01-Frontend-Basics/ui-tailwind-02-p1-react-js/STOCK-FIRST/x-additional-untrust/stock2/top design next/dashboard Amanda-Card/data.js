const content = {
  header: {
    greeting: "Good Morning, Amanda Kay!",
    balance: "$7,209.00",
    cardNumber: "VISA ** 6271",
  },
  transactions: [
    { title: "Spotify Music", amount: "$560.00", date: "July 23, 2025" },
    { title: "Shopify", amount: "$150.00", date: "July 22, 2025" },
    { title: "Paypal", amount: "$119.99", date: "July 21, 2025" },
  ],
  totalSpend: [
    { category: "Transfers", amount: "$590.00" },
    { category: "Shopping", amount: "$150.00" },
    { category: "Café & Restaurant", amount: "$120.00" },
    { category: "Entertainment", amount: "$120.00" },
    { category: "Transportation", amount: "$320.00" },
    { category: "Vacation", amount: "$650.00" },
    { category: "Healthcare", amount: "$860.00" },
  ],
  savings: [
    { title: "My Dream Device", goal: "$2,500.00", current: "$1,200.00" },
    { title: "Emergency Fund", goal: "$5,000.00", current: "$2,800.00" },
  ],
};

export default content;
