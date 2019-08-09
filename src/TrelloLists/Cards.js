import React from 'react';


class Cards extends React.Component {
  

  render() {
    return (
       <fieldset style={{backgroundColor:"ghostwhite"}}>
         {this.props.name}
       </fieldset>
    );
  }
}

export default Cards;
