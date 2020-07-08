import React from 'react';

class PanelAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Al utilizar formularios hay que utilizar el estado para manejar los cambios, cuando un campo cambia de valor ese valor se actualiza en el state y el a su vez ese campo recibe la informacion del state para mostrar ese valor
            title: '',
            image: '',
            rating: 1
        };
    }
    onChangeTitle = (e) => {
        this.setState({ title: e.target.value })
    }
    onChangeImage = (e) => {
        this.setState({ image: e.target.value })
    }
    onChangeRating = (e) => {
        this.setState({ rating: e.target.value })
        const rating = parseInt(e.target.value);
        this.setState({ rating: rating });
    }
    onSubmit = (e) => {

        e.preventDefault();
        //Referencia a cada uno de los elemntos del Array, 
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;
        //Se manda llamar un propr, el cual manda llamar la funcion onadd, y se le manda como parametro el objeto {title, image, rating}
        this.props.onadd({ title: title, image: image, rating: rating });
        this.props.onCancel();
    }
    render() {

        return (
            <div className='new-item-panel-container' >
                <div className='new-item-panel'>
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Book's Name</label><br />
                            <input onChange={this.onChangeTitle} type='text' name='title' className='input' />
                        </p>
                        <p>
                            <label>Picture's Name</label><br />
                            <input onChange={this.onChangeImage} type='text' name='image' className='input' />
                        </p>
                        <p>
                            <label>Rating</label><br />
                            <select onChange={this.onChangeRating}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </p>
                        <input type='submit' className='button btn-blue' value='Register Book' />
                        <button onClick={this.props.onCancel} className='button btn-normal' > Cancel</button>

                    </form>
                </div>
            </div>


        );
    }
}
export default PanelAdd;