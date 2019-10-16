import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

const Statistics = ({ good, neutral, bad, all }) => {

  return (
    <table>
      <tbody>
        <Statistic text='Good' value={good} />
        <Statistic text='Neutral' value={neutral} />
        <Statistic text='Bad' value={bad} />
        <Statistic text='All' value={all} />
        <Average text='Average' good={good} neutral={neutral} bad={bad} all={all} />
        <Positive text='Positive' good={good} all={all} />
      </tbody>
    </table>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text} : {value}
      </td>
    </tr>
  )
}

const Average = ({ good, neutral, bad, all, text }) => {
  let average = (((good * 1) + (neutral * 0) + (bad * -1)) / all)

  return (
    <tr>
      <td>
        {text} : {average}
      </td>
    </tr>
  )
}

const Positive = ({ good, text, all }) => {
  return (
    <tr>
      <td>
        {text} {(good / all) * 100} %
    </td>
    </tr>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)


  const setToGood = (newValue) => {
    setGood(newValue)
    setAll(all + 1)
  }
  const setToNeutral = (newValue) => {
    setNeutral(newValue)
    setAll(all + 1)
  }
  const setToBad = (newValue) => {
    setBad(newValue)
    setAll(all + 1)
  }

  return (
    <div>
      {all > 0 ? (
        <div>
          <h1>Give feedback</h1>
          <Button onClick={() => setToGood(good + 1)} text='Good' />
          <Button onClick={() => setToNeutral(neutral + 1)} text='Neutral' />
          <Button onClick={() => setToBad(bad + 1)} text='Bad' />
          <p>statistics:</p>
          <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        </div>
      ) : (
          <div>
            <h1>Give feedback</h1>
            <Button onClick={() => setToGood(good + 1)} text='Good' />
            <Button onClick={() => setToNeutral(neutral + 1)} text='Neutral' />
            <Button onClick={() => setToBad(bad + 1)} text='Bad' />
            <h1>Statistics:</h1>
            <p>No statistic to show</p>
          </div>
        )
      }
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)