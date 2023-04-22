import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //Executes when the component is mounted
  constructor(props) {
    console.log("constructor-Shopping Cart");
    super(props); //calling super class"s constructor

    //initialization of the state
    this.state = {
      products: [
        { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
        { id: 2, productName: "Sony Camera", price: 4500, quantity: 0 },
        { id: 3, productName: "Samsung QLED TV", price: 7745, quantity: 0 },
        { id: 4, productName: "iPad Pro", price: 12400, quantity: 0 },
        { id: 5, productName: "Xbox", price: 7780, quantity: 0 },
        { id: 6, productName: "Dell Monitor", price: 880, quantity: 0 },
      ],
    };
  }

  render() {
    console.log("render-Shopping Cart");
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //render ends here

  //Executes after constructor and render method (includes life cycles of child components, if any) of t current component.
  componentDidMount() {
    //fetch data from data source
    console.log("componentDidmount-Shopping Cart");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdtae-Shopping Cart",
      prevProps,
      prevState,
      this.props,
      this.state
    );
    if (prevProps.x != this.props.x) {
      //make http call
      //it's advisable to make conditionl http call to avoid performance issues from the server orr database
    }
  }
  //executes when the user clicks on + button
  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      //update the state of the current component
      this.setState({ products: allProducts });
    }
  };
  //executes when user clicks on - button.
  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      //update the state of the current component
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      //delete product based on index
      allProducts.splice(index, 1);
    }

    //update the state of the current component
    this.setState({ products: allProducts });
  };
}
