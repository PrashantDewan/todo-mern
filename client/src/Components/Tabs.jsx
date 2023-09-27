import { TABS } from "../redux/actions/type";
import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/actions/api";

const Tabs = ( { currentTab } ) => {
    const dispatch = useDispatch()

  return TABS.map((tab) => (
    <button className={tab === currentTab ? "button selected" : 'button'} key={tab} onClick={()=>dispatch(toggleTab(tab))}>
      {tab}
    </button>
  ));
}; 
export default Tabs;
