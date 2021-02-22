
// pls import this line at the top of functional components as well
import React from 'react'

function Footer(props){
    /*
     props = {
         className: 'myClass
         title: "Hey footer"
          anotherTitle: "Star"
          diffrent: true
          children: <h1> OMG, I'm lost</h1>
     }
    */

    let classValue = props.diffrenet ?
      'someClass':'anotherClass'
    return(
        <footer>
        {props.title}
        {props.children} 
            <div className="title">React works!!!</div>
            <h1>{props.anotherTitle}</h1>
        </footer>
    )
}


export default Footer