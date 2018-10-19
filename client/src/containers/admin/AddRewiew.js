import React, { Component } from 'react';

 class AddBook extends Component {
   state = {
     formdata:{
      name:'',
      author:'',
      review:'',
      pages:'',
      rating:'', 
      price:'',

     }
   }
   submitForm =(e)=>{
    e.preventDefault();
    
   }

   handleInput = (event, name)=>{
    const newFormdata = {
      ...this.state.formdata
    }
    newFormdata[name] = event.target.value;
    this.setState({
      formdata:newFormdata
    });
   }
  render() {
    console.log(this.props);
    return (
      <div className="rl_container article">
        <form onSubmit={this.submitForm}>
          <h2>Add a review</h2>
          <div className="form_element">
            <input 
              type="text"
              placeholder="Enter your name"
              value= {this.state.formdata.name}
              onChange={(event)=>this.handleInput(event,'name')}
            />          
          </div>
          <div className="form_element">
            <input 
              type="text"
              placeholder="Enter author"
              value= {this.state.formdata.author}
              onChange={(event)=>this.handleInput(event,'author')}
            />          
          </div>
          <textarea 
            value={this.state.formdata.review}
            onChange={(event)=>this.handleInput(event,'review')}
          />
          <div className="form_element">
            <input 
              type="number"
              placeholder="Enter pages"
              value= {this.state.formdata.pages}
              onChange={(event)=>this.handleInput(event,'pages')}
            />          
          </div>
          <div className="form_element">
            <select
              value={this.state.formdata.rating} 
              onChange={(event)=>this.handleInput(event,'rating')}
            >
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>         
          </div>
          <div className="form_element">
            <input 
              type="number"
              placeholder="Enter Price"
              value= {this.state.formdata.price}
              onChange={(event)=>this.handleInput(event,'price')}
            />          
          </div>
          <button type="submit">Add review</button>
         
        </form>
      </div>
    )
  }
}

export default AddBook ;
