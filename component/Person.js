import React,{ Component} from 'react';
import { Last } from 'react-bootstrap/esm/PageItem';



class Person extends Component{
    constructor(props)
    {
        super(prop);
        this.state=
        {
           
            firstname:"Saurav",
            Lastname:"jalan",
            middlename:"kumar",
            qualifer:"CSE",
            rank:3,


         }
         print()
         {
             console.log(firstname)
             console.log(Lastname)
             console.log(middlename)
             console.log(qualifer)
             console.log(rank)
         }
        }
    
    render()
    {
        return(
            <>
            <div>
            <input type="button" value="Person" onClick={this.print.blind()}/>
            </div>

            </>
        )
    }
}

export default Person