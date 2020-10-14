import React,{ Component} from 'react';



class Search extends Component{
    constructor()
    {
        super()
        this.state={
            searchData:null
        }
    }
    componentDidMount() {
        fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q={query}&fq={filter}")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render()
    {
        return(
            <>
            <div>
            <h1>Search</h1>
            <input type="text" onChange={(event)=>this.search(event.target.value)}/>
            </div>
            const { error, isLoaded, items } = this.state;
             f (error) {
              return <div>Error: {error.message}</div>;
              } else if (!isLoaded)
               {
                 return <div>Loading...</div>;
              } else {
              return (
            <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.count}
            </li>
          ))}
        </ul>
            </>
        )
    }
}

export default Search