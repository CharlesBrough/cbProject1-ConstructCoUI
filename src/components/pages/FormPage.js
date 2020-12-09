import React, {useEffect} from 'react';

//functional component: destructure by passing object list of args
// function FormPage() {
function FormPage({ prop1, prop2 }) {
  //hook: useState
  const [state, setState] = React.useState(2); //initial state value as arg

  const incrementCounter = () => {
    setState(state + 1);
  }

  //hook: useEffect
  //only runs once (empty array passed)
  useEffect(() => {
    
  }, []);

  return (
    <div>
      <div>{state}</div>
      <button type="button" className="btn btn-primary" onClick={() => incrementCounter()}>Increment</button>
      {/* <Component prop1={1234} prop2="string" /> */}
    </div>
  )
}

export default FormPage
