const React = require('react')
const ReactDom = require('react-dom')
const Redux = require('redux')
const { element: List, reducer: listReducer } = require('./components/list')



function appReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return [ ...state, { id: action.id, text: action.text } ]
    case 'REMOVE_ITEM':
      return [ ...state.slice(0, action.index), ...state.slice(action.index + 1) ]
    default:
      return state
  }
}

function render() {
  ReactDom.render(
    (
      <div className="container-fluid">
        <h1>Redux lab</h1>
          <List items={store.getState()} store={store} />
      </div>
    ),
    document.querySelector('[data-app]'))
}

const store = Redux.createStore(appReducer)

store.subscribe(render)
render()
