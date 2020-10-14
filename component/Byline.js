import React,{ Component} from 'react';
import Person from './Person';



class Byline extends Component{
    constructor(props)
    {
        super(prop);
        this.state=
        {
           
            organization:"Hello",
            original:"Morning",
            Person:"Main headlines",
         }
         print()
         {
             console.log(organization)
             console.log(original)
             console.log(Person)
         }
        }
    render()
    {
        return(
            <>
            <div>
                <input type="button" value="Byline" onClick={this.print.blind()}/>
            </div>

            </>
        )
    }

}
export default Byline