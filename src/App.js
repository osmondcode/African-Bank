import './App.css';
import Home from './components/Home';
import {  useRef, useState } from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import SignUp from './components/LogIns/SignUp';
import TransactionPage from './components/Pages/TransactionPage';
import Dashboard from './components/Dashboard';
import BudgetPage from './components/Pages/BudgetPage';
import LoanPage from './components/Pages/LoanPage';
import SubscriptionPage from './components/Pages/SubscriptionPage';
import ReportPages from './components/Pages/ReportPages';


function App() {

  


  const [sideBarWidth, setSideBarWidth] = useState(true)
  const sideBarWidthHandle = () => {
    setSideBarWidth(!sideBarWidth)
  }
  

  const firstname = useRef()
  const lastname = useRef()
  const email = useRef()
  const password = useRef()
  const firstnameS = useRef()
  const lastnameS = useRef()
  const emailS = useRef()
  const passwordS = useRef()
  
    

    const [signUpMessage, setSignUpMessage] = useState('')

  const handleSignUp = (e) =>{
    if (firstname.current.value.length >= 3 && lastname.current.value.length >= 3 && email.current.value.length >= 10 && password.current.value.length >= 6) {
      localStorage.setItem('firstname', firstname.current.value);
      localStorage.setItem('lastname', lastname.current.value);
      localStorage.setItem('email', email.current.value);
      localStorage.setItem('password', password.current.value);
    } else {
      setSignUpMessage('Please fill all the informations correct and complete')
    }
  }
  const handleSignUpSmall = () =>{
    if (firstnameS.current.value.length >= 3 && lastnameS.current.value.length >= 3 && emailS.current.value.length >= 10 && passwordS.current.value.length >= 6) {
      localStorage.setItem('firstname', firstnameS.current.value);
      localStorage.setItem('lastname', lastnameS.current.value);
      localStorage.setItem('email', emailS.current.value);
      localStorage.setItem('password', passwordS.current.value);
    } else {
      setSignUpMessage('Please fill all the informations correct and complete')
    }
  }
  const LSUsername = localStorage.getItem('firstname')
    const [preLoader, setPreLoader] = useState(false)


    const [adding, setAdding] = useState(false)

    const addingModalHandle = () => {
        setAdding(!adding)
    }


    const [allPages, setAllPages] = useState({
      activePage: null,
      pages: [
        {
          id: 1,
          name: 'Dashboard',
          page: <Dashboard sideBarWidthHandle={sideBarWidthHandle}/>
        },
        {
          id: 2,
          name: 'Budget',
          page: <BudgetPage LSUsername={LSUsername} sideBarWidthHandle={sideBarWidthHandle} addingModalHandle={addingModalHandle} adding={adding}/>
        },
        {
          id: 3,
          name: 'Transactions',
          page: <TransactionPage LSUsername={LSUsername} sideBarWidthHandle={sideBarWidthHandle}/>
        },
        {
          id: 4,
          name: 'Subscription',
          page: <SubscriptionPage LSUsername={LSUsername} sideBarWidthHandle={sideBarWidthHandle}/>
        },
        {
          id: 5,
          name: 'Loans',
          page: <LoanPage LSUsername={LSUsername} sideBarWidthHandle={sideBarWidthHandle}/>
        },
        {
          id: 6,
          name: 'Report',
          page: <ReportPages LSUsername={LSUsername} sideBarWidthHandle={sideBarWidthHandle}/>
        },
        {
          id: 7,
          name: 'Savings',
          page: 7
        },
        {
          id: 8,
          name: 'Account',
          page: 8
        },
        {
          id: 9,
          name: 'Settings',
          page: 9
        },
      ],
      
})
    const togglePage = (index) => {
      setAllPages({...allPages, activePage: allPages.pages[index]})
    }
    const activePageHandle = (index) => {
      if (allPages.pages[index] === allPages.activePage) {
        return (
          <div>
            {allPages.activePage.page}
          </div>
        )
      }
    }
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp email={email} password={password} handleSignUp={handleSignUp} firstnameS={firstnameS} lastnameS={lastnameS} emailS={emailS} passwordS={passwordS} handleSignUpSmall={handleSignUpSmall} firstname={firstname} lastname={lastname} signUpMessage={signUpMessage} preLoader={preLoader} setPreLoader={setPreLoader} setAllPages={setAllPages} allPages={allPages}
          />} />

          <Route path='/home' element={<Home togglePage={togglePage} sideBarWidthHandle={sideBarWidthHandle} sideBarWidth={sideBarWidth} LSUsername={LSUsername} preLoader={preLoader} setPreLoader={setPreLoader} activePageHandle={activePageHandle} allPages={allPages} addingModalHandle={addingModalHandle} adding={adding}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
