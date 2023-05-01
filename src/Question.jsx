import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// const Question = ({ title, info  }) => {
// in order to show info of any card and show as much as I want, i need to use useState in each card
//   const [showInfo, setShowInfo] = useState(false);
//   return (
//     <article className="question">
//       <header>
//         <h5>{title}</h5>
//         <button className="btn" onClick={() => setShowInfo(!showInfo)}>
//           {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
//         </button>
//       </header>
//       {showInfo && <p>{info}</p>}
//     </article>
//   );
// };

//   In order to show only one card at a time, I need to use useState in App.jsx

const Question = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default Question;
