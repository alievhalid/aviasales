const initialState = {
  tickets: [],
  loading: false,
  id: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "tickets/load/start":
      return {
        ...state,
        loading: true,
      };
    case "tickets/load/success":
      return {
        ...state,
        tickets: action.payload,
        loading: false,
      };
    case "id/load/start":
      return {
        ...state,
        loading: true,
      };
    case "id/load/success":
      return {
        ...state,
        loading: false,
        id: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
