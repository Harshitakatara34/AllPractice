// Pass Props (then rerendering)

// import React,{ memo } from "react";

// function MemoChild({ state }) {
//   console.log('Memo Child App', {state});
//   return (
//     <div>
//       <h1>Memo Child </h1>
//     </div>
//   );
// }

// export default MemoChild

//======================
// without props
// without memo it will re render
import React, { memo } from "react";

function MemoChild() {
  // console.log('Memo Child App');
  return (
    <div>
      <p>Memo Child </p>
    </div>
  );
}

export default memo(MemoChild);
