import './style.css';
import React, { useState ,useRef, useEffect} from 'react';
import bgImg from '../assets/images/bg-sidebar-desktop.svg';
import PersonalInfo from '../pages/personalInfo/PersonalInfo';
import PlanPage from '../pages/planPage/PlanPage';
import AddOnsPage from '../pages/addOnsPage/AddOnsPage';
import FinishPage from '../pages/finishPage/FinishPage';
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';
import LastPage from '../pages/lastPage/LastPage';

export const Context = React.createContext();
function AppContent() {
  const [addOns, setAddOns] = useState([
    { id: 1, title: 'Online Service', description: 'Access to multiplayer games', price: 1, selected: false },
    { id: 2, title: 'Larger Storage', description: 'Extra 1TB of cloud save', price: 2, selected: false },
    { id: 3, title: 'Customizable Profile', description: 'Custom theme on your profile', price: 2, selected: false }
  ]);
  const [plans, setPlans] = useState([
    { id: 1, title: 'Arcade', icon:arcadeIcon, price: 9, description: 'Access to multiplayer games', selected: false },
    { id: 2, title: 'Advanced',icon:advancedIcon, price: 12, description: 'Extra 1TB of cloud save', selected: false },
    { id: 3, title: 'Pro',icon:proIcon, price: 15, description: 'Custom theme on your profile', selected: false }
  ]);
  let [selected, setSelected] = useState(1);
  const [paymentType, setPaymentType] = useState('monthly');

  return (
    
    <Context.Provider value={[selected, setSelected,paymentType, setPaymentType,addOns,setAddOns,plans,setPlans]} >
      <div className="app">
        <div className="sideBar">
          <img src={bgImg} alt="" />
          <ul>
            <li>
              <div className={`listNumber ${selected === 1 ? 'active':''}`}> 1</div>
              <div className="listContent">
                <div  className="step">STEP 1</div>
                <h3>YOUR INFO</h3>
              </div>
                
            </li>
            <li>
            <div className={`listNumber ${selected === 2 ? 'active':''}`}> 2</div>
              <div className="listContent">
                <div  className="step">STEP 2</div>
                <h3>SELECT PLAN</h3>
              </div>
                
              
            </li>
            <li>
            <div className={`listNumber ${selected === 3 ? 'active':''}`}> 3</div>
              <div className="listContent">
                <div   className="step">STEP 3</div>
                <h3>ADD-ONS</h3>
              </div>
                
              
            </li>
            <li>
            <div className={`listNumber ${selected === 4 || selected=== 5? 'active':''}`}> 4</div>
              <div className="listContent">
                <div className="step">STEP 4</div>
                <h3>SUMMARY</h3>
              </div>
                
               
              
            </li>
          </ul> 
        </div>

        <div className="appContent">
          
          {selected === 1 && <PersonalInfo />}
          {selected === 2 && <PlanPage />}
          {selected === 3 && <AddOnsPage />}
          {selected === 4 && <FinishPage />}
          {selected === 5 && <LastPage />}
          
        </div>  
    </div>
    </Context.Provider>
    );
}
export default AppContent;