import React, { useEffect, useState } from 'react';
import "./menu.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Menu(props) {
  const[isMenuClicked, setIsMenuClicked] = useState(false);
  const[clsName,setClsName] = useState("menu");
  const[contentClsName, setContentClsName] = useState("menu__content");
  const[closeClsName, setCloseClsName] = useState("menu__close")


  function expand() {
    setIsMenuClicked(true);
  }

  function contract() {
    setClsName((prev) => prev + " contract");
    setContentClsName((prev) => prev + " disappear");
    setCloseClsName((prev) => prev + " disappear");
    setTimeout(() => {
      setIsMenuClicked(false);
      setClsName("menu");
      setContentClsName("menu__content");
      setCloseClsName("menu__close");
    }, 900);
  }
  useEffect(() => {
    function handleKeyPress(e) {
      if(e.key === "Escape") {
        contract();
      }
    }
    isMenuClicked && document.addEventListener("keydown", handleKeyPress);
    return(() => document.removeEventListener("keydown", handleKeyPress));
  });

  return(
    isMenuClicked ? (
    <div className={clsName} style={props.menuStyle ? props.menuStyle : {color: props.color, backgroundColor: props.bgColor}}>
      <div className={contentClsName}>
        {props.children}
      </div>
      <div className={closeClsName}>
        <div className='menu__close__clickable' onClick={contract}>
          <CloseIcon />
        </div>
      </div>
      
    </div>
    ) :
    (
    <div className='menu_icon' onClick={expand}>
      <MenuIcon sx={props.iconStyle ? props.iconStyle : {width: props.size, height: props.size, color: props.iconColor}} />
    </div>
    )
  );
}

export default Menu;





