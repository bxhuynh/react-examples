//1. state
//2. reducer
//3. store
const { createStore } = window.Redux;

const initialState = ['Reading novels'];

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY': {
      const newList = [...state];
      newList.push(action.payload);
      return newList;
    }
    default:
      return state;
  }
};

const store = createStore(hobbyReducer);

//-----------------
// RENDER HOBBY LIST

const renderHobbyList = (hobbyList) => {
  if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

  const ulElement = document.querySelector('#hobbyListId');
  if (!ulElement) return;

  //reset previous content of ul
  ulElement.innerHTML = '';
  for (const hobby of hobbyList) {
    const liElement = document.createElement('li');
    liElement.textContent = hobby;
    ulElement.appendChild(liElement);
  }
};

const initialHobbyList = store.getState();
console.log(initialHobbyList);
renderHobbyList(initialHobbyList);

//HANDLE FORM SUBMIT

const hobbyFormElement = document.querySelector('#hobbyFormId');
if (hobbyFormElement) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const hobbyTextElement = hobbyFormElement.querySelector('#hobbyTextId');
    if (!hobbyTextElement) return;

    const action = {
      type: 'ADD_HOBBY',
      payload: hobbyTextElement.value,
    };
    store.dispatch(action);

    //reset form
    hobbyFormElement.reset();
  };

  hobbyFormElement.addEventListener('submit', handleFormSubmit);
}

store.subscribe(() => {
  console.log('state updated: ', store.getState());
  const newHobbyList = store.getState();
  renderHobbyList(newHobbyList);
});
