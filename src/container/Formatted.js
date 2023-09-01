
import React from "react";
import withFormatting from "../HOC/Withformatting";
const FormattedComponent = withFormatting(({ bold, italic }) => (
    <div>
      This text is {bold('bold')} and {italic('italic')}.
    </div>
  ));
  export default FormattedComponent