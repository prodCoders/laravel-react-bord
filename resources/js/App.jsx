import React, {useState} from 'react';
import { createRoot } from 'react-dom/client'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";


export default function App(){

    const [ads, setAds] = useState(null);

    const updateData = (value) => {
        setAds(value);
    }

    return(
        <div className="container py-3">
        <Header updateData={updateData} />
        <Main ads={ads}/>
        <Footer/>
        </div>
    );
}

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<App />)
}
