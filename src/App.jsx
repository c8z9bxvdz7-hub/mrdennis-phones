import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Phones from "./components/Phones";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Home />
        <Phones />
      </main>
    </div>
  );
}

export default App;
