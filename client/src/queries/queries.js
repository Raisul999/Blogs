import { gql } from '@apollo/client';

const GET_BLOGS = gql`
 query blogs{
    blogs{
    id 
    title
    description
    created_at
    updated_at
    }
  }

`
const GET_BLOG = gql`
 query blog($id:ID!){
    blog(id: $id){
    id 
    title
    description
    created_at
    }
 }

`
export {GET_BLOGS, GET_BLOG}