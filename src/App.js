import React from 'react';
import Menu from './Menu';
import List from './List';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: 0, rating: 5, title: 'Cien años de soledad', image: 'cien.jpg' },
        { id: 1, rating: 5, title: 'Los hermanos Karamazov', image: 'karamazov.jpg' },
        { id: 2, rating: 5, title: 'Crimen y castigo', image: 'crimen.jpg' },
        { id: 3, rating: 5, title: '1984', image: '1984.jpg' },
        { id: 4, rating: 5, title: 'Don quijote de la mancha', image: 'quijote.jpg' },
        { id: 5, rating: 5, title: 'Dialogos Socraticos', image: 'socrates.jpg' },
        { id: 6, rating: 5, title: 'El gran gastby', image: 'gastby.jpg' },
        { id: 7, rating: 5, title: 'Cuentos de muerte y demecia', image: 'poe.jpg' },
      ],
      copyBooks: []
    }
  }
  componentDidMount() {
    this.initBooks();
  }
  initBooks = () => {

  }


  onAdd = (item) => {
    let temp = [...this.state.books];
    //Acceder al ultimo elemento +1
    const id = temp[temp.length - 1].id++;
    item['id'] = id;
    temp.push(item);

    this.setState({ books: [...temp] });


  }
  render() {
    return (
      <div className='app' >
        <Menu title='My Fav Books' onadd={this.onAdd} />
        <List items={this.state.books} />

      </div>
    );
  }
}

export default App;
