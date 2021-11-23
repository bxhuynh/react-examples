import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css';

HobbyList.propTypes = {
  list: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};
HobbyList.defaultProps = {
  list: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const { list, activeId, onHobbyClick } = props;

  const handleClick = (hobby) => {
    if (!onHobbyClick) return;
    onHobbyClick(hobby);
  };

  return (
    <ul className='hobby-list'>
      {list.map((hobby) => (
        <li
          key={hobby.id}
          className={hobby.id === activeId ? 'active' : ''}
          onClick={() => {
            handleClick(hobby);
          }}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;
