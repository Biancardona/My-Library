import React from 'react';
import './Item.css';


class Item extends React.Component {
    constructor(props) {
        super(props);
        //Se necesita un estado para mostrar los elementos del rating
        this.state = {
            stars: []
        };

    }
    //Funcion que se ejecuta cuando el componente se crea y se añade al DOM
    componentDidMount() {
        //Se modifica el estado con set.state
        this.setState({
            //Se crea un array, despues con parseInt se transfomrar el rating en modo entero y con fill lo rellene.
            stars: Array(parseInt(this.props.rating)).fill(0)
        });
    }

    render() {
        return (
            //Para renderizar cada uno de los elementos
            <div className='item'>
                <div className='image'><img src={'img/' + this.props.image} width='100%' /></div>
                <div className='title'>{this.props.title}</div>
                <div className='rating'>
                    <p>
                        {
                            //Declaracion para hacer la iteracion (se hace referecnia al state y al objeto [stars]) que muestre el numero de veces que tiene el Array, por cada espacio crea una estrella)
                            this.state.stars.map(x =>
                                <img src='img/star.png' withh='32' />
                            )
                        }
                    </p>
                Rating:
                <select value={this.props.rating}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                    </select>
                </div>
            </div>

        );
    }
}
export default Item;