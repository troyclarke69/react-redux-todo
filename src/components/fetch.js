import React from 'react';
//import ReactDOM from 'react-dom';
//import axios from 'axios';
//import {render} from "react-dom"

export default class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loading: true,
      error: null
    };
  }

	buildList =(data)=>{
        //console.log(data);
        this.setState({list: data})
    }
	
  componentDidMount() {
		//console.log('did mount')
		//let url = 'https://prof3ssorst3v3.github.io/media-sample-files/products.json'
		
		let url = 'https://cors.io/?http://triosdevelopers.com/~T.Clarke/ReactJS/sample_data.json'
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error => {
            this.setState({error});
        })
  }

 render(){
        //console.log('render')
        return (
            <div>
                <h4>Fetch json</h4>
                <ul>
                {
                    this.state.list.length === 0 &&
                    <li>Sorry No data available {this.state.list.length}</li>
                }
                { this.state.list.length > 0 &&
                    this.state.list.map( (i) => (
                        <li key={i.id} id={i.id}>{i.title + "      $" + i.price}</li>
                    ))
                }
                </ul>
                {this.state.error &&
                    <h3>{this.state.error}</h3>
                }
            </div>
        )
    }
}

