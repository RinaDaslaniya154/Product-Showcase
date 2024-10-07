import React from 'react';
import './mystyle.css';
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mydata : [],
        }
    }
     componentDidMount =()=>{
         fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e69c1a39665040bb87b329bc4fd69a75")
        .then(response => response.json())
        .then(response => {
       
        this.setState({mydata:response.articles});
        })
     }
     render(){
        return (<React.Fragment>
               <h3 class="heading"> Product Grid</h3>
               <div class="container">
                     <div class="row product">
                         {this.state.mydata.map(productdata => {
                     return (
                <div class="col-md-4">
                    <div class="card">
                <div class="ccc">
                <p class="text-center"><img src={productdata.urlToImage} class="imw" width={100} /></p>
                </div>
                <div class="card-body">
                <h5 class="text-center">Name :{productdata.source.name}</h5>
                <h5 class="text-center">Title :{productdata.title}</h5>
                <p class="text-center"> {productdata.description}</p>
                <p class="text-center"><input type="submit" name="Save" value="Buy" class=" cc1" /></p>
                          </div>
                     </div>
               </div>
            )
            }
            )}
            </div>
            </div>
            </React.Fragment>)
     }  
}
export default App;

                   
