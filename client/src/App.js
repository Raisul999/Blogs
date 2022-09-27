import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Blogs from './Pages/Blogs';
import Header from './components/Header';
import AddBlog from './Pages/AddBlog';
import UpdateBlog from './Pages/UpdateBlog';
const App = () => {
    // Setup your client
    const client = new ApolloClient({
        uri: 'http://localhost:5000/blogs',
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />

                <Routes>
                    <Route path='/' element={<Blogs />} />
                    <Route path='/addBlog' element={<AddBlog />} />
                    <Route path='/editBlog/:id' element={<UpdateBlog />} />

                </Routes>

            </Router>
        </ApolloProvider>
    )
}

export default App
