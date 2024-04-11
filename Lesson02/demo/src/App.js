// import logo from './logo.png';
import './App.css';
import Class_PhamCongHieu from './components/Class_PhamCongHieu';
import Func_JSX_PhamCongHieu from './components/Func_JSX_PhamCongHieu';
function App() {
  return (
    <section className="App">
        <h1>Demo JSX</h1>
        {/* function component demo  */}
        <Func_JSX_PhamCongHieu />
        <Func_JSX_PhamCongHieu fullName="Pham Cong Hieu EM" age="24" />

        <Class_PhamCongHieu />
        <hr/>
        <Class_PhamCongHieu info="Hoc ReactJS" time="11" />
    </section>
  );
}

export default App;
