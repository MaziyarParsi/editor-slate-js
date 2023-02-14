import { useState, useEffect } from 'react';

// This hook returns if the click was inside the popUp ref or outside it .
function usePopup(popupRef:any) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (e:any) => {
      const clickedComponent = e.target;
      if (!popupRef?.current?.contains(clickedComponent)) {
        setShowPopup(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return [showPopup, setShowPopup];
}

export default usePopup;
