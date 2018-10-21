import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBook, updateBook, clearBook, deleteBook } from '../../actions';

 class EditBook extends PureComponent {
   state = {
     formdata:{
       _id:this.props.match.params.id,
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
    this.props.dispatch(updateBook(this.state.formdata));
    
   }
   deletePost = () =>{
    this.props.dispatch(deleteBook(this.props.match.params.id));
   }
   redirectUser  = () =>{
     setTimeout(()=>{
      this.props.history.push('/user/user-reviews');
     },1000)
   }

   handleInput = (event, name)=>{
    const newFormdata = {
      ...this.state.formdata
    }
    newFormdata[name] = event.target.value;
    this.setState({
      formdata:newFormdata
    });
   }; 
   
   componentWillMount(){
     this.props.dispatch(getBook(this.props.match.params.id));
   }

   componentWillReceiveProps(nextProps){
     console.log(nextProps);
      let book = nextProps.books.book;
      this.setState({
        formdata:{
          _id:book._id,
          name:book.name,
          author:book.author,
          review:book.review,
          pages:book.pages,
          rating:book.rating, 
          price:book.price,
        }

      })
   }
   componentWillUnmount(){
    this.props.dispatch(clearBook());
   }


  render() {
    let books = this.props.books;
    // console.log(books.updateBook);
    return (
      <div className="rl_container article">
        {
          books.updateBook ?
            <div className="edit_confirm">
              Post updated , <Link to={`/books/${books.book._id}`}>
                Click here to see your post
              </Link>
            </div>
          :null
        }
        {
         books.postDeleted ?
          <div className="red_tag">
            Post deleted
            {this.redirectUser()}
          </div>
         :null
        }
        <form onSubmit={this.submitForm}>
          <h2>Edit review</h2>
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
              <option value="5" >5</option>
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
          <button type="submit">Edit review</button>
            <div className="delete_post">
              <div className="button"
                onClick={this.deletePost}
              >
                Delete review
              </div>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(EditBook) ;
