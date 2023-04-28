import { useLocation } from "react-router-dom";
function Addtocart1() {
  const { state } = useLocation();
  return (
    <div>
      {state}
    </div>
  );
}
export default Addtocart1;