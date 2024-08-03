import react, { useState } from 'react'

function App() {

  return (<div>
  <WrapperComponent>Hi There!</WrapperComponent>
  <br></br>
  <WrapperComponent>Hello Back!</WrapperComponent>
  </div>
  )
}

function WrapperComponent({children}){
return (<div style={{border: '2px solid black'}}>
  {children}
</div>)
}

export default App