import { gql } from "@apollo/client";

const ADD_BLOG = gql`
 mutation addBlog($title:String!, $description:String!){
    addBlog(title:$title, description:$description){
        id 
        title
        description
        created_at
    }
 }


`

const UPDATE_BLOG = gql `
 mutation updateBlog($id:ID!,$title:String!, $description:String!){
     updateBlog(id:$id,title:$title, description:$description){
        id 
        title
       description
     }

}

`

export{ADD_BLOG, UPDATE_BLOG}