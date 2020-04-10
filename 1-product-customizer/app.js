(function () {
  "use strict";

  function SizeSelector(props) {
    function sizeOptions() {
      // var sizes = window.Inventory.allSizes;

      return props.sizes.map(function (num) {
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

  function ColorSelector(props) {
    function colorOptions() {
      return props.colors.map(function (name) {
        return (
          <option value={name} key={name}>
            {name}
          </option>
        );
      });
    }

    return (
      <div className="field-group">
        <label htmlFor="color-options">Color:</label>
        <select defaultValue={props.color} name="colorOptions" id="color-options">
          {colorOptions()}
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

  // ES5 createClass / React without ES6
  var ProductCustomizer = createReactClass({
    // When tracking state, we need to use Classes in React.
    getInitialState: function () {
      // getInitialState is for createReactClass. ES6 uses the Constructor.

      var sizes = window.Inventory.allSizes;
      var colors = window.Inventory.allColors;

      return {
        color: 'red',
        colors: colors,
        size: 8,
        sizes: sizes
      }
    },

    render: function () {
      return (
        <div className="customizer">
          <div className="product-image">
            <ProductImage color={this.state.color} />
          </div>
          <div className="selectors">
            <SizeSelector size={this.state.size} sizes={this.state.sizes} />
            <ColorSelector color={this.state.color} colors={this.state.colors} />
          </div>
        </div>
      );
    }
  });

  // function ProductCustomizer(props) {
  //   // return React.createElement(
  //   //   "div",
  //   //   { className: "customizer" },
  //   //   React.createElement(
  //   //     "div",
  //   //     { className: "product-image" },
  //   //     React.createElement(ProductImage)
  //   //   )
  //   // );
  //   return (
  //     <div className="customizer">
  //       <div className="product-image">
  //         <ProductImage color="green" />
  //       </div>
  //       <div className="selectors">
  //         <SizeSelector size={8} />
  //       </div>
  //     </div>
  //   );
  // }

  ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"));
})();
