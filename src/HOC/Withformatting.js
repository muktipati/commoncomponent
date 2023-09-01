import React from "react";
 const withFormatting = (WrappedComponent) => {
    return class extends React.Component {
      bold = (string) => {
        return <strong>{string}</strong>;
      };
      italic = (string) => {
        return <em>{string}</em>;
      };
      render() {
        return <WrappedComponent bold={this.bold} italic={this.italic} />;
      }
    };
  };

  export default withFormatting;