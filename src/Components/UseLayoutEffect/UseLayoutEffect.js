import React from 'react'
import { useState, useLayoutEffect , useEffect } from "react";

function UseLayoutEffect() {
  const [showContent, setShowContent] = useState(false);

  /*useLayoutEffect(() => {
    setShowContent(true);
  }, []);*/
    
  useLayoutEffect(() => {
    setShowContent(true);
  }, []);
  return (
    <div className='container text-center'>
      {showContent && <p>This content is only shown after the first render</p>}
    </div>
  );
}

export default UseLayoutEffect;