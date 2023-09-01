import React from "react";
import withFormatting from "../HOC/Withformatting";
const Article = withFormatting(({ bold, italic }) => (
    <div>
        {bold("Higher Order Components")} (or HOC or HOCs for short) were, 
        and still are, a central concept in React. They allow you 
        to {italic("implement components with reusable logic and are loosely")} 
        tied to Higher Order Functions from functional programming. 
        These kind of functions take a function as a parameter and 
        return another function. In terms of React, this principle is
         applied to components. Higher Order Components derive their 
         name from those Higher Order Functions.
      
    </div>
  ));
  export default Article