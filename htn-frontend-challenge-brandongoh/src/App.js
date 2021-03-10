import logo from './logo.svg';
import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import GetUsers from "./Components/GetUsers";
const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors){
    graphqlErrors.map(({message, location, path }) => {
      alert(`Graphql error ${message}`);
    })
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "https://api.hackthenorth.com/v3/graphql"}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});



function App() {
  return (<ApolloProvider client={client}>
    {" "}
     <GetUsers/> 
    </ApolloProvider>
  );
}

export default App;
