import { Route, Routes } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { Main } from './components/organisms/Main/Main';
import './App.css';
import { SingleBookView } from './views/SingleBookView/SingleBookView'
import { AddBookView } from './views/AddBookView/AddBookView'
import { SignInSignUpView } from './views/SignInSignUpView/SignInSignUpView';
import { AdminBooksList } from './views/AdminBooksListView/AdminBooksList';
import { AdminBookReservedView } from './views/AdminBookReservedView/AdminBookReservedView';
import { AdminBookBorrowedView } from './views/AdminBookBorrowedView/AdminBookBorrowedView';
import { AdminAddNewsView } from './views/AdminAddNewsView/AdminAddNewsView';
import { AdminChartsView } from './views/AdminChartsView/AdminChartsView';
import { useSelector } from 'react-redux';


const AuthenticatedApp = () => {
	return (
		<Routes>
		<Route path='/' element={<AdminChartsView />} />
		<Route path='/books/:id' element={<SingleBookView />} />
		<Route path='/add-news' element={<AdminAddNewsView />} />
		<Route path='/add-book' element={<AddBookView />} />
		<Route path='/sign-in' element={<SignInSignUpView />} />
		<Route path='/admin-books-list' element={<AdminBooksList />} />
		<Route path='/admin-books-reserved' element={<AdminBookReservedView />} />
		<Route path='/admin-books-borrowed' element={<AdminBookBorrowedView />} />
		<Route path='/admin-charts' element={<AdminChartsView />} />
	</Routes>
	);
};

const UnauthenticatedApp = () => {
	return (
		<Routes>
			<Route path='/sign-in' element={<SignInSignUpView />} />
		</Routes>
	);
};

function App() {
	const { userStatus } = useSelector(state => state.user)
	console.log(userStatus)
	return (
		<>
			<Header />
			<Main>{ localStorage.getItem('Authorization') ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Main>
		</>
	);
}

export default App;
