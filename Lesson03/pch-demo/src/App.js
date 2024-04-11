import './App.css';
import PCH_ClassComp from './components/PCH_ClassComp';
import PCH_FuncDemo from './components/PCH_FuncDemo';

function App() {

  // Khai báo biến đối tượng
  const users = {
    userName:"k22cnt3",
    password:"123456a@",
    fistName:"Phạm Công",
    lastName:"Hiếu"
  }

  // Khai báo đối tượng hàm
  function formatName(user){
    return <h2>Xin chào, {user.fistName} {user.lastName}</h2>;
  }
  return (
    <div className="App">
      {/* Biểu thức jsx  */}
      <div>
          <p> FullName: {users.fistName} {users.lastName}</p>
          {formatName(users)}
      </div>

      {/* Sử dụng functiono component  */}
      <div>
        <PCH_FuncDemo />
        {/* Sử dung Func_Comp có props  */}
        <PCH_FuncDemo userName="PCH" fullName="Phạm Công Hiếu" age="24" />
      </div>

      {/* Sử dụng class component  */}
      <div>
        {/* dùng không sử dụng props */}
        <PCH_ClassComp /> 
        {/* Sử dụng props  */}
        <PCH_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs" />
        <PCH_ClassComp company="Fit-NTU - K22CNT4" course="ReactJs 1" />
        <PCH_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs 2" />
        <PCH_ClassComp company="Fit-NTU - K22CNT6" course="ReactJs 3" />
      </div>
    </div>
  );
}

export default App;
