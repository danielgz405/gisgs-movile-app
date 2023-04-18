import ApolloClient from 'apollo-boost'

const createApolloClient = () => {
    const client = new ApolloClient({
        uri: 'http://localhost:5050/'
    })
}