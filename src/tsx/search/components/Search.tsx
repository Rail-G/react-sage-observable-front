import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../MainStore";
import { changeSearchField } from "../redux/reducer/searchReducer";

export default function Search() {
    const { items, loading, error, search } = useSelector(
      (state: {search: SearchStateData}) => state.search
    );
    const dispatch = useDispatch<AppDispatch>()
  
    const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = evt.target;
      dispatch(changeSearchField({search: value}));
    }
  
    const hasQuery = search.trim() !== ""

    return (
      <main>
        <div>
          <input type="search" value={search} onChange={handleSearch} />
        </div>
        {hasQuery && loading && <div>searching...</div>}
        {error && <div>Error occured</div>}
        {(items && hasQuery)
        ? <ul>
            {items.map((o) => (
              <li key={o.id}>{o.name}</li>
            ))}
          </ul>
        : <div>Type something to search</div>
        }
      </main>
    );
  }