import { useState } from 'react'
import Card from './Component/Card'


import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let user={
    userName:'hitesh',
    age:21
  }

  return (
    <>
      <Card userName="shiva ojha " btnText="click-me" someObj={user}></Card>
      <Card userName="hitesh deshmukh" ></Card>
      <Card userName="priyanka chopara" btnText="hello"></Card>
    </>
  )
}

export default App
