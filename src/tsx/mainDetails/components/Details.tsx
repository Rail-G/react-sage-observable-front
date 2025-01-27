import { useSelector } from "react-redux"
import { AppDispatch } from "../../MainStore"
import { Detail } from "./Detail"
import { Error } from "./Error"
import { useDispatch } from "react-redux"
import { searchDetailsData } from "../redux/toolkit"
import { useEffect } from "react"

export function Details() {
    const { items, loading, error } = useSelector((state: {details: DetailsStateData}) => state.details)
    const dispatch = useDispatch<AppDispatch>()
    const onError = () => dispatch(searchDetailsData())
    useEffect(() => {
        dispatch(searchDetailsData())
    }, [dispatch])

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <Error onError={onError} />}
            {(!loading && items) && <div className="details">
                <ul>
                    {items.map(detail => (
                        <li key={detail.id}>
                            <Detail detail={detail} />
                        </li>
                    ))}
                </ul>
            </div>}
        </>
    )
}