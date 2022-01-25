import Form from "./components/Form";
import Header from "./components/Header";
import Formulario from "./views/Formulario"
import EditForm from "./views/EditForm"
import ListaMat from "./views/ListaMat";

function App() {
  return (
    <div className="App">
      <Header></Header>
      App
      <Form></Form>
      <Formulario></Formulario>
      <EditForm></EditForm>
      <ListaMat></ListaMat>
    </div>
  );
}

export default App;
