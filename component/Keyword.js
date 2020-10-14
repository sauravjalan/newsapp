import React,{ Component} from 'react';



class Keyword extends Component{
    constructor(props)
    {
        super(prop);
        this.state=
        {
           
            major:"Captain",
            name:"Saurav",
            value:2,
            rank:3,


         }
         print()
         {
             console.log(major)
             console.log(name)
             console.log(value)
             console.log(rank)
         }
        }
    render()
    {
        return(
            <>
            <div>
            <h1>Keyword</h1>
            <input type="button" value="Keyword" onClick={this.print.blind()}/>
            </div>

            </>
        )
    }
}

export default Keyword