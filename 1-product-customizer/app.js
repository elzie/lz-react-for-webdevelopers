(function () {
  "use strict";

  function SizeSelector(props) {
    function sizeOptions() {
      var sizes = window.Inventory.allSizes;

      return sizes.map(function (num) {
        return (
          <option value={num} key={num}>
            {num}
          </option>
        );
      });
    }

    return (
      <div className="field-group">
        <label htmlFor="size-options">Size:</label>
        <select defaultValue={props.size} name="sizeOptions" id="size-options">
          {sizeOptions()}
        </select>
      </div>
    );
  }

  function ProductImage(props) {
    // return React.createElement("img", {
    //   src: "./assets/red.jpg",
    //   alt: "Product Image",
    // });
    // Converted to JSX
    // return <img src={"./assets/" + props.color + ".jpg"} alt="Product Image" />;
    // Converted to ES6
    return <img src={`./assets/${props.color}.jpg`} alt="Product Image" />;
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
          <ProductImage color="green" />
        </div>
        <div className="selectors">
          <SizeSelector size={8} />
        </div>
      </div>
    );
  }

  ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"));
})();
