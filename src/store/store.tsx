import { init, RematchRootState, RematchDispatch } from "@rematch/core";
import todos from "./models/todos";

const models = {
  todos
};

const store = init({
  models,
});

export default store;

export type RootState = RematchRootState<typeof models>
export type RootDispatch = RematchDispatch<typeof models>