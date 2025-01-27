import { NavLink } from "react-router-dom";

export function Detail({detail}: {detail: Detail}) {
    return (
        <div className="detail">
            <NavLink to={`/task1/detail/${detail.id}`}>
                <h3 className="detail-title">Названия: {detail.name}</h3>
            </NavLink>
            <span className="detail-price">Цена: {detail.price}</span>
        </div>
    )
}