import './Modal.scss';
import Button from '../Button/Button'

export default function Modal({closeModal}){
   
    return (
        <div className="modalBg">
        <div className='modal'>
            <div className='login'>
                <p>Login</p>
                <i onClick={()=> closeModal(false)} class="fa-solid fa-x"></i>
            </div>
            <input type="text" name="" id="" placeholder=' Use Name' />
            <input type="password" name="" id="" placeholder='Password' />
            <Button style={{width: '100%'}} className='mdBtn'>{'Login In'}</Button>
        </div>
        </div>
    )
}

