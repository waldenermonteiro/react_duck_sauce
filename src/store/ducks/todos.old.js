export const types = {
  ADD: "todos/ADD",
  TOGGLE: "todo/TOGGLE",
  REMOVE: "todo/REMOVE",
};

const INITIAL_STATE = [];
export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD:
      return [...state, { id: Math.random(), text: action.payload.text, complete: false }];
    case types.TOGGLE:
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, complete: !todo.complete } : todo));
    case types.REMOVE:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

export const creators = {
  addTodo: (text) => {
    return {
      type: types.ADD,
      payload: {
        text,
      },
    };
  },

  toggleTodo: (id) => {
    return {
      type: types.TOGGLE,
      payload: {
        id,
      },
    };
  },

  removeTodo: (id) => {
    return {
      type: types.REMOVE,
      payload: {
        id,
      },
    };
  },
};
