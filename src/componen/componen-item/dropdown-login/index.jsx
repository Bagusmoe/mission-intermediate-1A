import './dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp ,faUser , faStar , faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react';

function DropdownLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);    
  
  return (
        <div className="dropdown" ref={dropdownRef}>
            <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className=" cursor-pointer text-white p-1 inline-block " onClick={toggleDropdown} />
        {isOpen && (
        <ul className='absolute top-20 right-7 z-10 text-white bg-[#181A1C] overflow-auto border border-solid border-zinc-500 rounded px-2 pt-1 text-left cursor-pointer w-40 '>
            <li><FontAwesomeIcon icon={faUser} className='text-center pr-1.5' />Profil Saya</li>
            <li><FontAwesomeIcon icon={faStar} className='text-center pr-1.5' />Ubah Premium</li>
            <li onClick={() => window.location.href = '/'}><FontAwesomeIcon icon={faRightFromBracket} className='text-center pr-1.5' />Keluar</li>
        </ul>
        )}
    </div>
        
    )
}

export default DropdownLogin