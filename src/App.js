import React, { useState } from 'react'
import { data } from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  const clickHandler = () => {
    setPeople([])
  }

  const [names, setNames] = useState('')
  const [ages, setAges] = useState(0)
  const changeNameHandler = (event) => {
    setNames(event.target.value)
  }
  const changeAgeHandler = (event) => {
    setAges(event.target.value)
  }

  const submitHandler = () => {
    if (ages <= 0) {
      alert('Please enter age greater than 0')
    } else if (names && ages) {
      const newData = { id: people.length + 1, name: names, age: ages }

      setPeople([...people, newData])
      setNames('')
      setAges('')
    } else alert('Please Enter Both Name and Age')
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday's Today</h3>

        <List people={people} />

        <button onClick={clickHandler}>Clear All</button>
      </section>
      <section className="container">
        <h3>Enter New Member</h3>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          value={names}
          onChange={changeNameHandler}
        />
        <br />
        <label htmlFor="age">Age : </label>
        <input
          type="number"
          id="age"
          value={ages}
          onChange={changeAgeHandler}
        />

        <button onClick={submitHandler}>Submit</button>
      </section>
    </main>
  )
}

export default App
