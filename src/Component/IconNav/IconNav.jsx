
import './IconNav.scss';

export default function IconNav({showModal}){
    return (
        <div className='icon'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i onClick={() => showModal(true)} class="fa-regular fa-user"></i>
        </div>
    )
}   

