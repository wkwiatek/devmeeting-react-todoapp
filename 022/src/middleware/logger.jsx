export default function logger(store) {
  return next => action => {
    const result = next(action);
    console.log("Action:", action, "State:", store.getState())
    return result;
  };
}
