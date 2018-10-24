export default function(state = { foo: "bar" }, action) {
  switch (action.type) {
    case "SIMPLE":
      return [];
      break;

    default:
      return state;
  }
}
