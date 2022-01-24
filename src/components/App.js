import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadId, loadTickets } from "../redux/actions";
import Main from "./Main";
import { useSelector } from "react-redux";
function App() {
  const id = useSelector(state => state.reducer?.id.searchId)
  const loading = useSelector(state => state.reducer.loading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadId())
  },[dispatch])
  useEffect(() => {
    if (id) {
      dispatch(loadTickets(id))
    }
  }, [id, dispatch]);
  return (
    <div className="App">
      <Main />  
    </div>
  );
}

export default App;
