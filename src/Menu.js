import React from 'react';
import Search from './Search';
import PanelAdd from './PanelAdd';
import './Menu.css';

class Menu extends React.Component {
    //funcion para poder mostrar el panel para añadir un nuevo elemento
    constructor(props) {
        super(props);
        //Manejar el estado para mostrar panel con Valor booleando de falso para que este oculto, y cuando sea verdadero
        this.state = { newItemPanel: false }
        //Al usar el metodo add se debe agregar la funcion bind para el alcance del objeto ( o se usa arrow function)
        this.add = this.add.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }
    add() {
        //Variable con valor booleano true para mostrar el panel al dar click 
        this.setState({ newItemPanel: true });
        console.log('message');
    }
    onCancel(e) {
        e.preventDefault();
        this.setState({ newItemPanel: false });
    }

    render() {
        return (
            <div className='container'>
                <div className='subcontainer'>
                    <div className='logo'>
                        {this.props.title}

                    </div>
                    <div className='search'>
                        <Search />

                    </div>
                    <div className='actions'>

                        <button onClick={this.add} className='button btn-blue'> + Add Book </button>
                    </div>
                </div>
                {
                    //If declarativo en caso de ser verdadero que muestre el panel, sino ''string vacio
                    (this.state.newItemPanel) ?
                        <PanelAdd onCancel={this.onCancel} onadd={this.props} />
                        :
                        ''
                }
            </div>

        );
    }

}
export default Menu;