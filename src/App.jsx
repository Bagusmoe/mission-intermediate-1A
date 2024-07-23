import './App.css'
import Footer from './componen/footer'

import Header from './componen/header/index'
import Main from './componen/main/index'

const App = () => {
    
    return (
        <div className="w-full">
        { /* Header */ }
        <Header />
        { /* Main */ }
        <Main />
        <Footer />
        </div>
        
    ) 
}


export default App
