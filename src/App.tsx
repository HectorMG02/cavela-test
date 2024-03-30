import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import QuotesScreen from './pages/QuotesScreen/QuotesScreen';

function App() {
    return (
        <>
            <Provider store={store}>
            <QuotesScreen />
            </Provider>
        </>
    );
}

export default App;
