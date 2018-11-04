import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Selected = styled.div`
  padding: 10px;
  border-radius: 2px;
  background: white;
  max-width: 150px;
  cursor: pointer;
  border: 0.5px solid gray;
`;

const Option = styled.div`
  padding: 10px;
  border-radius: 2px;
  background: white;
  max-width: 150px;
  cursor: pointer;
  border: 0.5px solid gray;

  &:hover {
    background: lightgray;
  }
`;

const DropDown = ({ options, selectedOption }) => {
  const [isOpen, onToggle] = useState(false);
  const [selected, onSelect] = useState(selectedOption);

  const selectOption = option => {
    onSelect(option);
    onToggle(!isOpen);
  };

  return (
    <div>
      <Selected onClick={() => onToggle(!isOpen)}> {selected.text} </Selected>
      {isOpen && (
        <div>
          {options.map(({ id, text }) => (
            <Option key={id} onClick={() => selectOption({ id, text })}>
              {text}
            </Option>
          ))}
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.object
};

DropDown.defaultProps = {
  options: [
    { id: 1, text: "one" },
    { id: 2, text: "two" },
    { id: 3, text: "three" }
  ],
  selectedOption: { id: 1, text: "one" }
};

export default DropDown;
