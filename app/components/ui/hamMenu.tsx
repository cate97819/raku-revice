import React from 'react'

interface Props {
  toggle: boolean,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>,
}

const hamColor = 'bg-white';


const HamMenu = ({toggle, setToggle}: Props) => {
  if (toggle) {
    return (
      <button className='lg:hidden'>
        <div onClick={()=> setToggle(!toggle)} className="openbtn1 active bg-white"><span className="bg-[#E9452C]"></span><span className="bg-[#E9452C]"></span><span className="bg-[#E9452C]"></span></div>
      </button>
    );
  } else {
    return (
      <button className='lg:hidden'>
        <div onClick={()=> setToggle(!toggle)} className="openbtn1 bg-[#E9452C]"><span className={hamColor}></span><span className={hamColor}></span><span className={hamColor}></span></div>
      </button>
    );
  }
}

export default HamMenu