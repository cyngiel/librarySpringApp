import { Route, Routes } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { Main } from './components/organisms/Main/Main';
import { HomeView } from './views/HomeView/HomeView';
import './App.css';
import { SingleBookView } from './views/SingleBookView/SingleBookView'
import { SignInSignUpView } from './views/SignInSignUpView/SignInSignUpView';

import { BooksView } from './views/BooksView/BooksView';
import { UserBookReservedView } from './views/UserBookReservedView/UserBookReservedView';
import { UserBookBorrowedView } from './views/UserBookBorrowedView/UserBookBorrowedView';



function App() {
	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route path='/' element={<HomeView />} />
					<Route path='/books' element={<BooksView />} />
					<Route path='/books/:id' element={<SingleBookView />} />
					<Route path='/sign-in' element={<SignInSignUpView />} />
					<Route path='/user-reserved-book' element={<UserBookReservedView />} />
					<Route path='/user-borrowed-book' element={<UserBookBorrowedView />} />
				</Routes>
			</Main>
		</>
	);
}

export default App;
