import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import CustomersList from "./CustomersList";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/customers" exact element={<CustomersList />} />
            <Route path="/cart" exact element={<ShoppingCart />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
