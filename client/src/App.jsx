import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { CreatePost, Home } from "./pages";

function App() {
	return (
		<Router>
			<header className="w-full flex justify-between items-center bg-white sm:px-10 px-5 py-4 border-b border-b[#e6ebf4]">
        <Link to='/'><img src={logo} alt="logo" className="w-28 object-contain " /></Link>
        <Link to='/create-post' className="font-inter font-medium bg-[#4a4fd9] text-white px-5 py-2 rounded-md hover:bg-[#383b91]">Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create-post" element={<CreatePost />}/>
        </Routes>
      </main>
		</Router>
	);
}

export default App;
