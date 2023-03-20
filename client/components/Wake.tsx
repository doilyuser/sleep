import { ChangeEvent, FormEvent, useState } from 'react'

function Wake() {
  const cycle = 5400000
  const [wakeTime, setWakeTime] = useState('07:30')

  const C1 = new Date(new Date(`01-01-2020 ${wakeTime}:00`).getTime() - cycle)
  const C2 = new Date(
    new Date(`01-01-2020 ${wakeTime}:00`).getTime() - cycle * 2
  )
  const C3 = new Date(
    new Date(`01-01-2020 ${wakeTime}:00`).getTime() - cycle * 3
  )
  const C4 = new Date(
    new Date(`01-01-2020 ${wakeTime}:00`).getTime() - cycle * 4
  )
  const C5 = new Date(
    new Date(`01-01-2020 ${wakeTime}:00`).getTime() - cycle * 5
  )
  const C6 = new Date(
    new Date(`01-01-2020 ${wakeTime}:00`).getTime() - cycle * 6
  )

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setWakeTime(evt.target.value)
  }

  return (
    <>
      <form>
        <div className="formdata">
          <label htmlFor="waketime">Wake time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={wakeTime}
            onChange={changeHandler}
          />
        </div>
        {/* style={{ display: 'none', visibility: 'hidden' }} */}
        <div>
          <p>
            An hour & a half <strong>{`(short nap)`}</strong>:
          </p>
          <h1>1 Cycle: {C1.toLocaleTimeString()}</h1>
          <p>3 hours:</p>
          <h1>2 Cycle: {C2.toLocaleTimeString()}</h1>
          <p>4 & a half hours:</p>
          <h1>3 Cycle: {C3.toLocaleTimeString()}</h1>
          <p>6 hours:</p>
          <h1>4 Cycle: {C4.toLocaleTimeString()}</h1>
          <p>
            7 & a half hours <strong>{`(recommended)`}</strong>:
          </p>
          <h1>5 Cycle: {C5.toLocaleTimeString()}</h1>
          <p>9 hours:</p>
          <h1>6 Cycle: {C6.toLocaleTimeString()}</h1>
        </div>
      </form>
    </>
  )
}

export default Wake
