import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component{
  render(){
    //console.log(this.props.book);
    if(!this.props.book){
      return <div>Select a book</div>;
    }


    return (
      <div>
        Book Details
        <div>{this.props.book.title}</div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
     book: state.activeBook
   };
}

export default connect(mapStateToProps)(BookDetails);
