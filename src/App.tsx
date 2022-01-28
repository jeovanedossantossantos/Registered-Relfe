import Form from "./components/Form";
import Header from "./components/Header";
import Formulario from "./views/Formulario"
import EditForm from "./views/EditForm"
import Rotas from "./routes"
import { Provider } from 'react-redux'
import ContextProvider, { QuemChamouContext } from "./hooks/global";

// import store from "./store";

function App() {
  return (
    <>
    
        <ContextProvider>
       
          <Rotas />
        </ContextProvider>

    </> 
    
  );
}

export default App;
