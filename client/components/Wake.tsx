import { ChangeEvent, FormEvent, useState } from 'react'

function Wake() {
  let time = new Date().getTime()
  let display = false
  const cycle = 5400000
  const [wakeTime, setWakeTime] = useState('07:30')

  const C1 = new Date(time - cycle)
  const C2 = new Date(time - cycle * 2)
  const C3 = new Date(time - cycle * 3)
  const C4 = new Date(time - cycle * 4)
  const C5 = new Date(time - cycle * 5)
  const C6 = new Date(time - cycle * 6)

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault()
    time = new Date(`01-01-2020 00:${wakeTime}`).getTime()
    display = true
    console.log(time)
  }

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setWakeTime(evt.target.value)
  }

  return (
    <>
      <h1>WAKE UP</h1>
      <form onSubmit={submitHandler}>
        <div className="formdata">
          <label htmlFor="waketime">Wake time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={wakeTime}
            onChange={changeHandler}
          />
          <input type="submit" value="Calculate" />
        </div>
      </form>
    </>
  )
}

export default Wake
