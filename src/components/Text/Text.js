import React from 'react';
import './Text.css';


class Text extends React.Component {
  
  render() { 

    const symbolsArray = this.props.textArray;
    const currentSymbol = this.props.currentSymbolIndex;
    const isError = this.props.isError;
   
    return (
      <div className="text">
        {symbolsArray.map((symbol, index) => {
          return (
            <span 
              className={index === currentSymbol && isError
                          ? 'redBox'
                          : index === currentSymbol
                            ? 'greenBox'  
                            : index < currentSymbol
                              ? 'green'
                              : ''} 
              key={index}
            >
              {symbol}
            </span>
          )
        })}
      </div>
    );
  }
}

export default Text;