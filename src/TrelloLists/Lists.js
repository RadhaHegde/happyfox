import React from 'react';
import Cards from './Cards';
import '../assets/trello.css'

class Lists extends React.Component {
  

  render() {
    if(this.props.cards.length===0){
      return null;
    }
    else{
      const card=this.props.cards.cards.filter(el=>{
        return el.idList===this.props.listID
      })
    return (
      <div>
      <fieldset className="fieldset">
        <header>
        {this.props.title}
      </header>
        {card.map(el=>{
          return <Cards key={el.id} name={el.name} />
        })}
      </fieldset>
      
      </div>
    );
  }
}
}

export default Lists;
