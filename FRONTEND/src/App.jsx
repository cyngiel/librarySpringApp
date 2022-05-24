import { Route, Routes } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { Main } from './components/organisms/Main/Main';
import { HomeView } from './views/HomeView/HomeView';
import './App.css';
import { BooksView } from './views/BooksView/BooksView'
import { SingleBookView } from './views/SingleBookView/SingleBookView'
import { AddBookView } from './views/AddBookView/AddBookView'
import { SignInSignUpView } from './views/SignInSignUpView/SignInSignUpView';
import { UserBooksView } from './views/UserBooksView/UserBooksView';



function App() {
	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route path='/home' element={<HomeView />} />
					<Route path='/books' element={<BooksView />} />
					<Route path='/books/:id' element={<SingleBookView />} />
					<Route path='/add-book' element={<AddBookView />} />
					<Route path='/sign-in' element={<SignInSignUpView />} />
					<Route path='/user-book-list' element={<UserBooksView />} />
				</Routes>
			</Main>
		</>
	);
}

export default App;
