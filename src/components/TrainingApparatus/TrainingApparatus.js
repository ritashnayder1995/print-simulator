import React from 'react';
import './TrainingApparatus.css';
import Text from '../Text/Text';
import Accuracy from '../Accuracy/Accuracy';
import Speed from '../Speed/Speed';

//const text = "Несмотря на то, что клуб существует меньше месяца, участники уже добились определенных успехов. Помогли начинающим мемуаристам первые занятия, на которых сотрудники Главного архивного управления Москвы дали участникам ценные советы и новые знания. Елена Болдина, главный хранитель фондов Главархива, и Марьям Кустова, глава экспертной группы по истории Москвы, рассказали участникам, как описывать события из своего детства, мемуары каких известных людей стоит почитать и раскрыли секреты поиска предков по метрическим книгам.";

class TrainingApparatus extends React.Component {

  state = {
    textArray: [],
    currentSymbolIndex: 0,
    isError: false,
    countError: 0
  };

  async componentDidMount() {

    const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler', {
      method: 'GET'
    });

    const textArray = await response.json();
    const textString = textArray.join(' ');

    const textResult = textString.split('');  //"ав" -> ['a', "в"]

    this.setState({
      textArray: textResult
    });

    document.addEventListener('keypress', this.onKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeypress);
  }

  onKeypress = (evt) => {
    const userSymbol = evt.key;
    const userCode = userSymbol.charCodeAt(0);

    const textArrayFromState = this.state.textArray;
    const currentSymbolIndexFromState = this.state.currentSymbolIndex;

    const currentSymbol = textArrayFromState[currentSymbolIndexFromState];
    const currentCode = currentSymbol.charCodeAt(0);

    const currentCountError = this.state.countError;
    const currentIsError = this.state.isError;

    if (userCode === currentCode) {
      this.setState({
        currentSymbolIndex: currentSymbolIndexFromState + 1,
        isError: false
      });
    } else {
      this.setState({
        isError: true,
        countError: currentIsError 
                      ? currentCountError
                      : currentCountError + 1
      });
    }

  }

  render() {
    const textArrayFromState = this.state.textArray;
    const currentSymbolIndexFromState = this.state.currentSymbolIndex;
    const isErrorFromState = this.state.isError;
    const currentCountError = this.state.countError;

    return (
      <div className="trainingApparatusRoot">
        <Text textArray={textArrayFromState} currentSymbolIndex={currentSymbolIndexFromState} isError={isErrorFromState}/>
        <Speed currentSymbolIndex={currentSymbolIndexFromState} />
        <Accuracy countError={currentCountError} textArrayLength={textArrayFromState.length}/>
      </div>
    );
  }
}

export default TrainingApparatus;