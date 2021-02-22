//console.log('Webpack works!!')
// import { age , friend} from './data.js'

// import someValue from './data.js'

// console.log(someValue)

import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import 'bulma/css/bulma.css'
import Header from './components/Header.js'// import from header.js file
import Footer from './components/Footer.js'// import from footer.js file
import FooterClass from './components/FooterClass.js'
class App extends React.Component{
render(){
    return (
        <React.Fragment>
        <FooterClass title= "Hey Footer"/>
        <div class="buttons">
          <button class="button is-primary">Primary</button>
           <button class="button is-link">Link</button>
         </div>
          <Header className="myClass"/>
          <Footer>
              <h1> OMG, I'm lost</h1>
          </Footer>
          <Footer title="Hey footer" diffrent />
          <Footer title="Copyrights" 
              anotherTitle="Star" />
       </React.Fragment>
    )
  }
}
ReactDOM.render(<App/>, document.querySelector('#myApp'))

