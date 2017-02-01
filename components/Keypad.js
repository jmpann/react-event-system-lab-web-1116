import React from 'react'

class Keypad extends React.Component{
  constructor(){
    super()
    this.keyUpHandler = this.keyUpHandler.bind(this)
  }

  keyUpHandler() {
         console.log('Entering password...');
     }

  render(){
    return(
        <div>
          <input type="password" onKeyUp={this.keyUpHandler} />
       </div>
     )
  }
}
module.exports = Keypad
