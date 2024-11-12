import Footer from "./components/footer";
import Header from "./components/header";

function Wrapper({ children }) {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Wrapper;
