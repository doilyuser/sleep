function Now() {
  const time = new Date().getTime()
  const cycle = 5400000

  const T1 = new Date(time)
  const C1 = new Date(time + cycle)
  const C2 = new Date(time + cycle * 2)
  const C3 = new Date(time + cycle * 3)
  const C4 = new Date(time + cycle * 4)
  const C5 = new Date(time + cycle * 5)
  const C6 = new Date(time + cycle * 6)

  return (
    <>
      <h1>Time: {T1.toLocaleTimeString()}</h1>
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
    </>
  )
}

export default Now
