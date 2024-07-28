
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './component/UserContext.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
</UserProvider>
)
