import { Route, Routes } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { Main } from './components/organisms/Main/Main';
import { HomeView } from './views/HomeView/HomeView';
import './App.css';
import { BooksView } from './views/BooksView/BooksView'
import { SingleBookView } from './views/SingleBookView/SingleBookView'


function App() {
	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route path='/home' element={<HomeView />} />
					<Route path='/books' element={<BooksView />} />
					<Route path='/books/:id' element={<SingleBookView />} />
				</Routes>
			</Main>
		</>
	);
}

export default App;
