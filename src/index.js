import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import axios from 'axios'

axios.defaults.baseURL = "https://oliva-trends-backend.herokuapp.com/"


ReactDOM.render(
    <>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </>,
    document.getElementById('root')
)