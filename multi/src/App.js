import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import WoWDragons from "./pages/WoWDragons";
import DnDDragons from "./pages/DnDDragons";
import MonsterFetcher from "./pages/MonsterFetcher";
import RuneterraDragons from "./pages/RuneterraDragons";
import NoPage from "./pages/NoPage";

//runs here https://e017a654378b46f2805a63be44f076d3.vfs.cloud9.us-west-1.amazonaws.com/

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wowDragons" element={<WoWDragons />} />
          <Route path="dndDragons" element={<DnDDragons />} />
          <Route path="monsterFetcher" element={<MonsterFetcher />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);