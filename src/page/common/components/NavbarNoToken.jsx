import { useNavigate } from "react-router-dom";

export default function NavbarNoToken() {

  let navigateLogin = useNavigate();
    const routeChange = () => {
      let path = "/login";
      navigateLogin(path);
    };

  return(
    <button
    onClick={routeChange}
    id="loginbutton"
    type="button"
    className="btn btn-outline-primary"
  >
    Log in
  </button>
  )  
    

}