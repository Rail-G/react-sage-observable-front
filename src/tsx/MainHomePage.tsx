import { NavLink } from "react-router-dom";
import IMAGES from "../img/images";

export function MainHelloPage() {
    return (
        <div className="hello__block">
            <img src={`${IMAGES.citizen}`} alt="witnes" />
            <p><i>Каждая кнопка это две разных задач.В каком то из задач такое оформления уже была, ну да и ладно :-) </i></p>
            <div className='btns'>
                <NavLink to='/task1' className='task__btn t1'>Задача номер один</NavLink>
                <NavLink to='/task2' className='task__btn t2'>Задача номер два</NavLink>
            </div>
        </div>
    )
}