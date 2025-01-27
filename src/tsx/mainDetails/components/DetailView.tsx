import { useSelector } from "react-redux"
import { Error } from "./Error"
import { AppDispatch, RootState } from "../../MainStore"
import { useDispatch } from "react-redux"
import { searchDetail } from "../redux/toolkit"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export function DetailView() {
    const params = useParams()
    const { item, loading, error } = useSelector((state: RootState) => state.details)
    const dispatch = useDispatch<AppDispatch>()
    const onError = () => dispatch(searchDetail({id: +params.id!}))
    useEffect(() => {
        dispatch(searchDetail({id: +params.id!}))
    }, [dispatch, params.id])
    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <Error onError={onError}/>}
            {(item && !loading) && <div className="detail-view">
                <h3 className="detail-title">Названия: {item!.name}</h3>
                <span className="detail-price">Цена: {item!.price}</span>
                <p className="detail-content">Описания: {item!.content}</p>
            </div>}
        </>
    )
}