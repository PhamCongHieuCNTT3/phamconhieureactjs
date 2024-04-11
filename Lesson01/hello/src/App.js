import logo from './logo.png';
import './App.css';
import Pch from './components/Pch';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>TRƯỜNG ĐẠI HỌC NGUYỄN TRÃI</h2>
      </header>
      <div>
        <Pch email="phamhieu13062001@gmail.com" phone="0879779103"/>
        <Pch email="buianhvuong@gmail.com" phone="0812117828"/>
      </div>
    </section>
  );
}

export default App;
