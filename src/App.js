// import logo from './logo.svg';
import './App.css';
// Medios de Pago
import ListMediosPago from "./components/mediospago/ListMediosPago";
import CreateMediosPago from "./components/mediospago/CreateMediosPago";
import EditMediosPago from "./components/mediospago/EditMediosPago";

import { Route, BrowserRouter as Router } from "react-router-dom";

//Para que no se refresque la página con el cambio de url
import { Link } from "react-router-dom";


function App() {
  return (

    <Router>
      <nav className="navbar navbar-expand-sm navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>primary</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarID">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
              <Link className="nav-link active" aria-current="page" to={"/mediopago"}>Medios de Pago</Link>


            </div>
          </div>
        </div>
      </nav>
      <br />
      <div className="container">



        <h1>Hey</h1>
        <Route exact path="/mediopago" component={ListMediosPago}></Route>
        <Route exact path="/mediospago/crear" component={CreateMediosPago}></Route>
        <Route exact path="/mediospago/editar" component={EditMediosPago}></Route>
      </div>


    </Router >

  );
}

export default App;
