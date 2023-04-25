import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //Executes when the component is mounted
  constructor(props) {
    //console.log("constructor-ShoppingCart");
    super(props); //calling super class"s constructor

    //initialization of the state
    this.state = {
      products: [],
    };
  }

  render() {
    // console.log("render-ShoppingCart");
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
  componentDidMount = async () => {
    //fetch data from data source

    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();

    this.setState({ products: prods });
    console.log(prods);
    // console.log("componentDidmount-ShoppingCart");
  };

  componentDidUpdate(prevProps, prevState) {
    //console.log(
    //"componentDidUpdate-ShoppingCart",
    //prevProps,
    //prevState,
    //this.props,
    //this.state
    //);
    //if (prevProps.x != this.props.x) {
    //make http call
    //it's advisable to make conditionl http call to avoid performance issues from the server orr database
    //}
  }

  //Executes when the insance of current component is being deleted from memory
  componentWillUnmount() {
    // console.log("ComponentWillUnmount-ShoppingCart");
  }

  componentDidCatch(error, info) {
    //console.log("ComponentDidCatch-ShoppingCart");
    //console.log(error, info);
    //localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
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
    //get index of selected product s
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
