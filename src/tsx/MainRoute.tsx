import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "./mainDetails/components/Details";
import { DetailView } from "./mainDetails/components/DetailView";
import Search from "./search/components/Search";
import { MainHelloPage } from "./MainHomePage";

export function MainRoute() {
    return (
        <BrowserRouter basename="/react-sage-observable-front">
            <Routes>
                <Route path="/" element={<MainHelloPage />} />
                <Route path="/task1" element={<Details />} />
                <Route path="/task1/detail/:id" element={<DetailView />} />
                <Route path="/task2" element={<Search/>}/>
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}