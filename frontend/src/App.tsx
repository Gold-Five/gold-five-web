import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail';
import PaymentScreen from './Payment/Payment';
import CheckoutSteps from './Payment/CheckoutSteps';
import './style.css';

const fulfillmentData = [
  { id: 1, customer: "Alice Smith", item: "Pants", status: "Shipped" },
  { id: 2, customer: "Bob Jones", item: "Pants", status: "Pending" },
  { id: 3, customer: "Chris Green", item: "Shirt", status: "Shipped" },
  { id: 4, customer: "Dana White", item: "Pants", status: "Pending" },
  { id: 5, customer: "Dustin First", item: "Shirt", status: "Pending" },
];

function Fulfillment() {
  return (
    <div className="main">
      <h2>Fulfillment Status</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {fulfillmentData.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.item}</td>
              <td
                style={{
                  color: order.status === "Pending" ? "red" : "green",
                  fontWeight: "bold",
                }}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <Router>
      <div className="grid-container">

        {/* <link rel="stylesheet" href="style.css" /> */}
        {/*<title>Gold Five</title>*/}

        {/*<div>*/}
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>&#9776;</button>
              <a href="/">Gold Five</a>
            </div>
            <div className="header-links">
              <Link to="/">Home</Link>
              <Link to="/catalog">Catalog</Link>
              <Link to="/orders">Orders</Link>
              <Link to ="/payment">Payment</Link>
              <Link to="/fulfillment">Fulfillment</Link>

            </div>
          </header>
          <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}> x </button>
            <ul>
              <li>
                <a href="index.html">Pants</a>
              </li>

              <li>
                <a href="index.html">Shirts</a>
              </li>
            </ul>
          </aside>

          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/order/:id" element={<OrderDetail />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/fulfillment" element={<Fulfillment />} />
            </Routes>
          </main>
          <footer className="footer">
            &copy; 2025 Gold Five
          </footer>
        </div>
      {/*</div>*/}
    </Router>
  );
}

export default App;
