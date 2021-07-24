import { Fragment, useEffect, useState } from 'react'

export function App() {
  const [arr, setArr] = useState<Array<any>>([])
  useEffect(() => {
    window.Main.on('asynchronous-reply', (_: any, data: any) => {
      setArr(arr => [...arr, data])
    })
  }, [])

  console.log(arr)

  return (
    <Fragment>
      {arr.map((item, i) => {
        return <span key={i}>{item}</span>
      })}
      <button onClick={() => window.Main.sendMessage('ping')}>
        Send Messages
      </button>
    </Fragment>
  )
}
