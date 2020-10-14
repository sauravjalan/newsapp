import React,{ Component} from 'react';



class Headline extends Component{
    constructor(props)
    {
        super(prop);
        this.state=
        {
            content_kicker:"Hello",
            kicker:"Morning",
            main:"Main headlines",
            name:"Saurav",
            print_headline:"Covid outbreak in India"
         }
        }
        print()
        {
            console.log(content_kicker)
            console.log(kicker)
            console.log(main)
            console.log(name)
            console.log(print_headline)
        }
    render()
    {
        return(
            <>
            <div>
            <input type="button" value="Headlines" onClick={this.print.blind()}/>
            </div>

            </>
        )
    }
}

export default Headline