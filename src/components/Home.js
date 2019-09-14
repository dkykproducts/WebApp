import React, { Component } from 'react';
import Items from './Items';
import Carousel from './Carousel';


import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import {GET_GAMCHHA} from "../config/queries";
import {uri, key} from "../config/keys";
import { Query } from "react-apollo";

const client = new ApolloClient({
    uri,
    headers:{
        "x-hasura-admin-secret":key
    }
  });



class Home extends Component {
    constructor(){
        super();
        this.state={};
    }
    
    render(){
        return(
            <div className="Home">
                <div className="card-desk">
                    <Carousel/>
                    <br/><br/><br/>
                    <div className="card-group">
                        {/* <Item data={{Gname:"Something", price:1200}}/> */}


                        <ApolloProvider client = {client}>
                        <Query query={GET_GAMCHHA}>
                            {({ loading, error, data }) => {
                            if (loading) return "Loading...";
                            if (error) return `Error! ${error.message}`;
                            if(data)
                            return(
                                <div>
                                    <Items data={data.Gamchha} />
                                </div>
                            )
                            }}
                        </Query>
                        </ApolloProvider>


                    </div>
                </div>
                
                <br/><br/><br/>
            </div>
        )
    }
}

export default Home;
