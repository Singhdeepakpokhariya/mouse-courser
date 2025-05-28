import { useRef } from 'react'
import './App.css'
import Circle from "./Circle.jsx"

function App() {
  const rootRef = useRef();
  const circleRef = useRef();

  const handleMouseMove = (e) => {
    const circle = circleRef.current
    setTimeout(() => {
      circle.style.left = `${e.clientX}px`
      circle.style.top = `${e.clientY}px`
    }, 100)


  }
  return (
    <div className='rootparent' ref={rootRef} onMouseMove={handleMouseMove} >
      <div className='h-screen'></div>
      <Circle ref={circleRef} />
    </div>
  )
}

export default App
