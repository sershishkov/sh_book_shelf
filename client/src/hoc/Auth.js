import React, { Component } from 'react';
import { auth } from '../actions'
import { connect } from 'react-redux';

export default function(ComposedClass){
  class AuthenticationCheck extends Component {
    state ={
      loading:true
    }

    componentWillMount(){
      this.props.dispatch(auth());
    }
 
    componentWillReceiveProps(nextProps){
      this.setState({loading:false});
      if(!nextProps.user.login.isAuth){

      }else{
        
      }
    }

    render(){
      if(this.state.loading){
        return <div className="loader">Loading...</div>
      }
      return(
       <ComposedClass {...this.props} user=""/>
      )
    }
  }
  const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user
    }
  };

  return connect(mapStateToProps)(AuthenticationCheck);
}