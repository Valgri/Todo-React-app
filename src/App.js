import React from 'react';
import './App.css';
import Layout from './todoLoyout/layout'
import Layout2 from './todoLoyout/todoItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import todosData from './todoItems'



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      items: [],
      currentItem: {
        title: '',
        key: '',
        done: false,
      },
    }
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }
    // componentDidMount() {
    //   for ( let key in localStorage){
    //     const rememberMe = JSON.parse(localStorage.getItem(key));
    //     this.setState({
    //       items: rememberMe,
    //     });
    //   }
  //}
  
  handleChange = key => {
    const index = this.state.items.map(item => item.key).indexOf(key);
    
    this.setState( state => {
      let { items } = this.state;
      items[index].done = true;
      return items;
    })
  }
  addItem = () => {
    const newItem = this.state.currentItem;
    let { items, currentItem } = this.state;
    if(newItem.title !== ''){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          title: '',
        }
      })
      localStorage.setItem(newItem.key, JSON.stringify(newItem));
    }
   
  }

  editField(title, key){
    const items = this.state.items;
    items.map(item => {
      if(item.key === key ){
        item.title = title;
      }
    })
    this.setState({
      items: items
    })
  }

  handleInput(e){
    this.setState({
      currentItem: {
          title: e.target.value,
          key: Date.now(),
          done: false
        }
    })
  }
  deleteItem(key){
      const filteritems = this.state.items.filter(item => item.key !== key);
      this.setState({
        items: filteritems
      })
      // localStorage.removeItem('todo');
  }
  render() {
    const {items} = this.state;
    const activeTasks = items.filter(item => item.done == false);
    const completedTask = items.filter(item => item.done == true);


    const finalTask = items.map(item => {
      return (
        <Layout2
          key={item.key}
          done={item.done}
          title={item.title}
          deleteItem = {() => this.deleteItem(item.key)}
         handleChange = {() => this.handleChange(item.key)}
          editField={(e) => this.editField(e.target.value, item.key)}
        />
      )
    });
     
  
    return (
      <div className="App">
        <Layout  
          title={this.state.currentItem.title}
          handleAdd={(e) => this.addItem(e)} 
          handleInput={(e) => this.handleInput(e)}
         />
        <div className='items container'>
          {finalTask}
        </div>

      </div>
    );
  }
 
}

export default App;
