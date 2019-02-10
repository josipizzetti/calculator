import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LINE_OPTIONS } from '../../consts';
import CalcButtonRow from '../CalcButtonRow';
import ViewInput from '../ViewInput';
import './Calculator.scss';

class Calculator extends Component {
  state = {
    result: ''
  }

  componentDidMount() {
    const { lastOperationResult } = this.props;
    const { result } = this.state;

    lastOperationResult(result);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.operationsResult !== nextProps.operationsResult ||
      this.state.result !== nextState.result;
  }

  calculate = () => {
    const { result } = this.state;
    const { lastOperationResult } = this.props;
    const checkResult = result.includes('--') ? result.replace('--','+') : result;

    try {
      // eslint-disable-next-line
      const currentResult = eval(checkResult).toString();
      lastOperationResult(currentResult);
      this.setState({
        result: currentResult
      })
    } catch (err) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => this.setState({ result: '' });

  backspace = () => this.setState({ result: this.state.result.slice(0, -1) });

  handleClick = button => {
    const { lastOperationResult } = this.props;
    switch (button) {
      case '=':
        this.calculate();
        break;
      case 'C':
        this.reset();
        break;
      case '<':
        this.backspace();
        break;
      case 'root':
        const rootResult = Math.sqrt(this.state.result).toString()
        lastOperationResult(rootResult);
        this.setState({
          result: rootResult
        })
        break;
      case 'exp':
        const expResult = Math.pow(this.state.result, 2).toString();
        lastOperationResult(expResult);
        this.setState({
          result: expResult
        })
        break;
      default:
        this.setState({
          result: this.state.result + button
        })
        break;
    }
  };

  generateLines = () => {
    const lines = [];
    for(let line in LINE_OPTIONS) {
      lines.push(
        <CalcButtonRow
          key={line}
          options={LINE_OPTIONS[line]}
          handleClickButton={this.handleClick}
        />
      );
    }
    return lines;
  }

  render() {
    const { operationsResult } = this.props;

    return (
      <div className='calculator'>
        <div className='calculator-body'>
          <ViewInput lastResult={operationsResult} currentValue={this.state.result}/>
          {this.generateLines()}
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  operationsResult: PropTypes.string
}

export default (Calculator);