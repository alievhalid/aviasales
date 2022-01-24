export const loadTickets = (id) => {
  return (dispatch) => {
    dispatch({
      type: "tickets/load/start",
    });
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      })
      .then((json) => {
        dispatch({
          type: "tickets/load/success",
          payload: json,
        });
      });
  };
};

export const loadId = () => {
  return (dispatch) => {
    dispatch({
      type: "id/load/start",
    });
    fetch("https://front-test.beta.aviasales.ru/search")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "id/load/success",
          payload: json,
        });
      });
  };
};
