
import {useNavigate} from 'react-router-dom'
export default function ClassExp() {
 
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add",{state                                                                             
      
      
      
      :'hanu'});
  };

  return (
    <button
      type="submit"
      className="btn"
      onClick={() => {
        handleClick();
      }}
    >
      Join Chat
    </button>
  );
}