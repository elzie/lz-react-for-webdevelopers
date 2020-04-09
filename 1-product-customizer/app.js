(function () {
  "use strict";

  function ProductImage(props) {
    // return React.createElement("img", {
    //   src: "./assets/red.jpg",
    //   alt: "Product Image",
    // });
    // Converted to JSX
    return <img src="./assets/red.jpg" alt="Product Image" />;
  }

  function ProductCustomizer(props) {
    // return React.createElement(
    //   "div",
    //   { className: "customizer" },
    //   React.createElement(
    //     "div",
    //     { className: "product-image" },
    //     React.createElement(ProductImage)
    //   )
    // );
    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage />
        </div>
      </div>
    );
  }

  ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"));
})();
