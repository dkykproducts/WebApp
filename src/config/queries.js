import gql from "graphql-tag";

export const GET_GAMCHHA = gql`
    {
        Gamchha {
          Name
          id
          price
        }
      }
    `
export const GET_PHOTOS= gql`
    {
        Photos(where: {Gamchha_ID: {_eq: 1}}) {
          Photo1
          Photo2
        }
      }
      
    `
