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
// import { Doughnut } from 'react-chartjs-2';


function App() {
	return (
		<>
			<Header />
			<Main>
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
			</Main>
		</>
	);
}

export default App;
