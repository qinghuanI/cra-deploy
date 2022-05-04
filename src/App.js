import { useRoutes } from "react-router-dom";
import routes from "./routes";

import "./styles/App.css";

function App() {
  const element = useRoutes(routes);

  return <div className="App">{element}</div>;
}

export default App;
