import { Todo } from "../../common/types";

type State = ReadonlyArray<Todo>;

const todos = {
  state: [] as State,
  reducers: {
    add: (state: State, payload: Todo) => {
      return {
        ...state,
        payload,
      };
    },

    remove: (state: State, payload: Todo) => {
      let currentState = [...state];

      return state.map((todo) => {
        return todo.id === payload.id
          ? currentState.splice(state.indexOf(todo), 1)
          : null;
      });
    },

    complete: (state: State, payload: Todo) => {
      return state.map((todo) => {
        return todo.id === payload.id
          ? { ...todo, completed: !payload.completed }
          : null;
      });
    },
  },
};

export default todos;
