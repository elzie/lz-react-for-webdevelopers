(function () {
  "use strict";

  // class component is ES6 syntax
  class Directory extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <h2>Company Directory</h2>
          <p>
            Learn more about each person at Leaf & Mortar in this company
            directory.
          </p>
        </div>
      );
    }
  }

  ReactDOM.render(<Directory />, document.getElementById("directory-root"));
})();
