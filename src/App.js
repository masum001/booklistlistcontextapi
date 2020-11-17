
import './App.css';
import BookList from './components/BookList';
import Header from './components/Header';
import BookContextProvider from './context/BookContext';
import { Grid } from '@material-ui/core'
import AddBooks from './components/AddBooks';

function App() {
  return (
    <div className="App">

     <BookContextProvider>
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid sm={2} xs={false}/>
            <Grid sm={8} xs={12}>
              <AddBooks />
               <BookList />
            </Grid>
          <Grid sm={2} xs={false}/>
        </Grid>
      </Grid>
     </BookContextProvider>

    </div>
  );
}

export default App;
