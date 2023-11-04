import React from "react";
import PropTypes from 'prop-types'; 

export const Section = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);


Section.propTypes = {
  title: PropTypes.string.isRequired, 
  children: PropTypes.node.isRequired,
};