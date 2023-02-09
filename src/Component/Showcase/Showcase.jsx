import './Showcase.scss';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import {useState} from 'react';

const Showcase = () =>{    
    const [modal, setModal] = useState(false);
    
    const showModal = (ans) =>{
        setModal(ans)
    }

    const closeModal = (close) =>{
        setModal(close)
    }


    return (
        <div className='showcase'>
             {modal ? <Modal closeModal={closeModal} /> :  null}
            <div className='container'>

            <Navbar showModal={ showModal }/>

            <div className="showTitle">
                <h1 >Exclusive Deals of Furniture Collection</h1>
                <p >Explore different categories. Find the best deals.</p>
            </div>
             
            <Button>{'Shop Now'}</Button>
             
            </div>
        </div>
    )
}

export default Showcase



