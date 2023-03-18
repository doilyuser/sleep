import { useEffect, useState } from 'react'

function Clock() {
  const [date, setDate] = useState(new Date())

  const refreshClock = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  return <>{date.toLocaleTimeString()}</>
}

export default Clock
