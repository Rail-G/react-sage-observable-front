export function Error({onError}: {onError: () => void}) {
    return (
        <div className="error-block">
            <h3 className="error-title">Oopss... Ошибочка!</h3>
            <button onClick={onError}>Повторить запрос</button>
        </div>
    )
}