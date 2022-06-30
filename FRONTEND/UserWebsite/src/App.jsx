import { Route, Routes } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { Main } from './components/organisms/Main/Main';
import { HomeView } from './views/HomeView/HomeView';
import './App.css';
import { SingleBookView } from './views/SingleBookView/SingleBookView';
import { SignInSignUpView } from './views/SignInSignUpView/SignInSignUpView';
import { BooksView } from './views/BooksView/BooksView';
import { UserBookReservedView } from './views/UserBookReservedView/UserBookReservedView';
import { UserBookBorrowedView } from './views/UserBookBorrowedView/UserBookBorrowedView';
import { useSelector } from 'react-redux';

const AuthenticatedApp = () => {
	return (
		<Routes>
			<Route path='/' element={<HomeView />} />
			<Route path='/books' element={<BooksView />} />
			<Route path='/books/:id' element={<SingleBookView />} />
			<Route path='/sign-in' element={<SignInSignUpView />} />
			<Route path='/user-reserved-book' element={<UserBookReservedView />} />
			<Route path='/user-borrowed-book' element={<UserBookBorrowedView />} />
		</Routes>
	);
};

const UnauthenticatedApp = () => {
	return (
		<Routes>
			<Route path='/' element={<HomeView />} />
			<Route path='/books' element={<BooksView />} />
			<Route path='/books/:id' element={<SingleBookView />} />
			<Route path='/sign-in' element={<SignInSignUpView />} />
		</Routes>
	);
};

function App() {
	const { userStatus } = useSelector(state => state.user)
	if (userStatus) {}
	return (
		<>
			<Header />
			<Main>{localStorage.getItem('Authorization') ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Main>
		</>
	);
}

export default App;
