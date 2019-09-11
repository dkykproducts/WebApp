import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import { Mutation } from "react-apollo";
// import gql from "graphql-tag";
import {GET_GAMCHHA} from "../config/queries";
import {uri, key} from "../config/keys";
import { Query } from "react-apollo";

const client = new ApolloClient({
    uri,
    headers:{
        "x-hasura-admin-secret":key
    }
  });



class Test extends Component {
    render(){
        return(
            <div className="Test">
                <ApolloProvider client = {client}>
                <Query query={GET_GAMCHHA}>
                    {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    return(
                        <div>
                        {console.log(data)}
                        Testing inside apollo
                        </div>
                    )
                    }}
                </Query>
                </ApolloProvider>
            </div>
        )
    }
}

export default Test;
