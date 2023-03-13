import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./Assets/css/bootstrap.min.css"
import "./Assets/css/style.css"

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" exact element={<Index />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/booking" exact element={<Booking />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/upcomingmovies" exact element={<UpcomingMovie />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
