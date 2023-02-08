import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)
  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(2)
        }}
      >
        asdasd
      </button>
    </h1>
  )
}
function Countdown() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>Countdown: {activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <p>Olá</p>
        <p>Olá</p>
        <p>Olá</p>
        <p>Olá</p>

        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
