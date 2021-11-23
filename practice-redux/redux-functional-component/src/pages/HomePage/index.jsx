import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import HobbyList from '../../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../../actions/hobby';

HomePage.propTypes = {};

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    //random a hobby object: id + title
    const newId = randomNumber();
    const newHobbby = {
      id: newId,
      title: `Hobby ${newId}`,
    };
    //Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobbby);
    dispatch(action);
  };

  const handleHobbyList = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };

  return (
    <div className='home-page'>
      <h1>REDUX HOOKS - Home Page</h1>
      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList
        list={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyList}
      ></HobbyList>
    </div>
  );
}

export default HomePage;
