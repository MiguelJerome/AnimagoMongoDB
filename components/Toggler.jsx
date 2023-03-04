import { useState } from 'react';

export default function Toggler({ titre, visible, children }) {
  const [visibleState, setVisible] = useState(visible);

  const toggler = () => {
    setVisible(!visibleState);
    console.log(visibleState);
  };

  return (
    <>
      <div onClick={toggler}></div>
      {visibleState && <div>{children}</div>}
    </>
  );
}
