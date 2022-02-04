import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      onClick={() => onClickHandler(index)}
      className={isSelected ? "green" : "red"}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState();
  useEffect(() => {
    setSelectedIndex(null);
  }, []);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul className='list'>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
          key={item.id}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number
    })
  )
};
WrappedListComponent.defaultProps = {
  items: [
    { text: "Abhishek", id: 1 },
    { text: "Astha", id: 2 }
  ]
};

const List = memo(WrappedListComponent);
export default List;
