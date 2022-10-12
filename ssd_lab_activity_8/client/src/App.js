
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

const BACKEND_URI = "http://localhost:3100/";
let LOGGEDIN = false;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="signup" element={<SignUp />}/>
            <Route path="student" element={<Student />}/>
            <Route path="login" element={<Login />}/>
            <Route path="query" element={<Query />}/>
            {/* <Route path="profile" element={<Profile />}/> */}
        </Routes>
        </BrowserRouter>
    </div>
  );
}

function Login(){
  const navigate = useNavigate();
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");

  const navigateToStudent = () => {
    navigate('/student');
  }

  async function handleLogin(e){
    const requestOptions = {
      credentials : 'include',
      method : 'POST',
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify({ roll,password })
    };

    var res = await fetch(BACKEND_URI+ "login", requestOptions);
    alert((await res.json())["msg"]);
    setRoll("");
    setPassword("");
    if(res.status == 200) {
      sessionStorage.setItem("ROLL", roll);
      LOGGEDIN = true;
      navigateToStudent();
    }
  }  

  return(
    <div className = "container">
    <h1 className="header">Re-Eval Portal</h1>
    <p className = "inputRowIndex">
        <label name="roll" className="label"><b>Roll Number</b></label>
        <input type="text" className="ip"  id="roll" placeholder="Roll Number" value={roll} onChange={(e) => setRoll(e.target.value)}/>

        <label name="psw" className="label"><b>Password</b></label>
        <input type="password" className="ip"  id="pswd" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button className="btn" onClick={handleLogin}>Login</button>
        <button className="btn" onClick={() => navigate('/signup')}>Sign Up</button>
    </p>
  </div>
  );
}

function SignUp(){
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STD");

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  }

  async function handleSignup(e){
      // send fetch (POST) request to server
      const requestOptions = {
          credentials : 'include',
          method : 'POST',
          headers: {'Content-Type': 'application/json'},
          body : JSON.stringify({ roll,password,role })
      };

      var res = await fetch(BACKEND_URI+ "signup", requestOptions);
      alert((await res.json())["msg"]);
      setRoll("");
      setPassword("");
      if(res.status == 200) {
          // sessionStorage.setItem("ROLL", roll);
          navigateToLogin();
      }
  }

  return(
    <div className = "container">
    <h1 className="header">Re-Eval Portal</h1>
    <p className = "inputRowIndex">
        <label name="roll" className="label"><b>Roll Number</b></label>
        <input type="text" className="ip"  id="roll" placeholder="Roll Number" value={roll} onChange={(e) => setRoll(e.target.value)}/>

        <label name="psw" className="label"><b>Password</b></label>
        <input type="password" className="ip"  id="pswd" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <label name="psw" className="label" ><b>Select Role</b></label>
        <select name="tlead" id="tlead" className="ip" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="TA" className="ip">TA</option>
            <option value="STD" className="ip">Student</option>
        </select>
        <br/>
        <button className="btn" onClick={handleSignup}>Sign Up</button>
    </p>
  </div>
  );
}

function Student(){
  const navigate = useNavigate();
  useEffect(()=>{
    if(!LOGGEDIN){
      navigate('/login');
      alert("Please login first!")
    }
  },[])

  
  return(
    <div className='box'>
      <div className='wrap'>
        <h1>FEEDBACK</h1>
        <button className='btn' onClick={() => navigate("/query")}>Add new query</button>
      </div>
      
    </div>
  );
}

function Query(){
  const navigate = useNavigate();
  const [exam,setExam] = useState("");
  const [course,setCourse] = useState("");
  const [qNo,setQNo] = useState("");
  const [comment,setComment] = useState("");
  const roll = sessionStorage.getItem("ROLL");
  async function  handleQuery(){
    // send fetch (POST) request to server
    const requestOptions = {
    credentials : 'include',
    method : 'POST',
    headers: {'Content-Type': 'application/json'},
    body : JSON.stringify({ exam,course,qNo,comment,std_roll:roll })
    };

    var res = await fetch(BACKEND_URI+ "query", requestOptions);
    alert((await res.json())["msg"]);
    setExam("");
    setCourse("");
    setQNo("");
    setComment("");

    if(res.status == 200) {
    navigate('/student')
    }
  }
  return (
  <div className='container'>
    <h1>QUERY FORM</h1>
     <div className='wrap' >
     <p className = "inputRowIndex">
          <label name="roll" className="label"><b>Exam Name</b></label>
          <input type="text" className="ip"  id="exam" placeholder="Exam" value={exam} onChange={(e) => setExam(e.target.value)}/>

          <label name="psw" className="label"><b>Course Name</b></label>
          <input type="text" className="ip"  id="course" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)}/>

          <label name="psw" className="label"><b>Question No</b></label>
          <input type="text" className="ip"  id="ques" placeholder="Question No" value={qNo} onChange={(e) => setQNo(e.target.value)}/>

          {/* <label name="psw" className="label" ><b>Select TA</b></label>
          <select name="tlead" id="tlead" className="ip" value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="TA" className="ip">TA</option>
              <option value="STD" className="ip">Student</option>
          </select> */}

          <label name="psw" className="label"><b>Comments</b></label>
          <input type="password" className="ip"  id="comment" placeholder="Comments" value={comment} onChange={(e) => setComment(e.target.value)}/>

          <br/>
          <button className="btn" onClick={handleQuery}>Post</button>
      </p>
          
      </div>
  </div>
  );
}


export default App;
