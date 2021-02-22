// pls import this line at the top of functional components as well
import React,{ Component} from 'react'


class FooterClass extends Component {
    render()
{
    /*
    this.props = {
        title: "Hey footer"
    }
    */
   return(
    <div>
           {this.props.title}
    </div>
   )
}       
}


export default FooterClass