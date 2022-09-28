const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLInt,
    GraphQLID,
    GraphQLString,

} = require('graphql')

const pool = require('../db/db')

const BlogType = new GraphQLObjectType({
    name: 'Blog',
    fields:()=>({
        id:{type: GraphQLID},
        title:{type: GraphQLString},
        description:{type: GraphQLString},
        created_at: {type: GraphQLString},
        updated_at: {type: GraphQLString}

    })
})


// Query

const RootQuery =  new GraphQLObjectType({
    name: 'RootQuery',
    fields:{
        blogs: {
            type: new GraphQLList(BlogType),
            async resolve(parent, args){
            const data = await pool.query(`SELECT * FROM blogsList`)
            return data.rows;
            }
        },
        blog:{
            type: BlogType,
            args:{
                id: {type: GraphQLID}
            },
            async resolve(parent, args){
                const data = await pool.query(`SELECT * FROM blogsList WHERE id=$1`, [args.id])
                return data.rows[0];
            }
        }
    }
})

// Mutations

const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields:{
        addBlog: {
            type: BlogType,
            args:{
                title: {type: GraphQLString},
                description: {type: GraphQLString},
                created_at: {type: GraphQLString}    
                
            },
            async resolve(parent,args){
                await pool.query(`INSERT INTO blogsList(title, description) VALUES($1, $2)`,
                [args.title, args.description]);

                const data = await pool.query(`SELECT * FROM blogsList`)

                return data.rows[0];
            }
        },

        updateBlog:{
            type: BlogType,
            args:{
                id:{type:GraphQLID},
                title: {type: GraphQLString},
                description: {type: GraphQLString}
            },
            async resolve(parent, args){
                // console.log(args)
                await pool.query(`UPDATE blogsList SET title=COALESCE (NULLIF($1, ''), title), description=COALESCE (NULLIF($2, ''), description) WHERE id=$3`,
                [ args.title, args.description,args.id,]);

                const data = await pool.query(`SELECT * FROM blogsList WHERE id=$1`, [args.id])
                return data.rows[0]
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
})