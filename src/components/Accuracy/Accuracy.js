import React from 'react';
import './Accuracy.css';


class Accuracy extends React.Component {
  render() {

    const countErrorFromProps = this.props.countError;
    const textArrayLengthFromProps = this.props.textArrayLength;

    const counterAccuracy = 100 - (Math.round(countErrorFromProps / textArrayLengthFromProps * 100));
    return (
      <div className="accuracyRoot">
        <h2>Точность</h2>
        <div className="counterAccuracy">
          {counterAccuracy} %
        </div>

      </div>
    )
  }
}

export default Accuracy;