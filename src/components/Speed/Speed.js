import React from 'react';
import './Speed.css';


class Speed extends React.Component {

  timer = null
  state = {
    seconds: 0
  }

  componentDidMount() {
    this.timer = setInterval(() => {
        this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
        seconds: this.state.seconds + 1,
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {

    const currentSymbol = this.props.currentSymbolIndex;
    const secondsCount = this.state.seconds;
    const minCount = secondsCount / 60;
    const counterSpeed = minCount === 0 ? 0 : Math.round(currentSymbol / minCount);


    return (
      <div className="speedRoot">
        <h2>Скорость</h2>
        <div className="counterSpeed">
          {counterSpeed} зн/мин
        </div>
      </div>
    )
  }
}

export default Speed;