import React from 'react';

//Para que no se refresque la página con el cambio de url
import { Link } from "react-router-dom";


class ListMediosPago extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataListMedios: false,
            mediosPagos: []

        }
    }

    getListMedios() {
        fetch("http://localhost:81/reactjs/apicaja/getalmacenes.php")
            .then(response => response.json())
            .then((dataListMedios) => {

                console.log(dataListMedios);
                this.setState({ dataListMedios: true, mediosPagos: dataListMedios })

            })
            .catch(console.log)
    }

    componentDidMount() {
        this.getListMedios();
    }

    render() {

        const { dataListMedios, mediosPagos } = this.state;

        if (!dataListMedios) {
            return (<div>cargando...</div>);
        }
        else {

            return (

                <div className="container-fluid !direction !spacing">
                    <Link className="btn btn-primary btn-active" aria-current="page" to={"/mediospago/crear"}>Crear Medio de Pago</Link>
                    <table className="table table-inverse table-inverse table-responsive">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Id</th>
                                <th>MedioPago</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                mediosPagos.map(
                                    (medioPago) => (
                                        <tr key={medioPago.id}>
                                            <td >{medioPago.id}</td>
                                            <td>{medioPago.nombremediopago}</td>
                                            <td>
                                                <div className="btn-group" role="group" >
                                                    <Link to={"/mediospago/editar"} className="btn btn-primary">Editar</Link>
                                                    <Link to={"/mediospago/editar"} className="btn btn-danger">Borrar</Link>

                                                </div>

                                            </td>

                                        </tr>
                                    )

                                )

                            }



                        </tbody>
                    </table>

                </div>

            );
        }

    }
}

export default ListMediosPago;