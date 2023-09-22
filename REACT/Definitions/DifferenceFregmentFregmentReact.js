// Both React.Fragment and <> </> serve the same purpose, which is to create fragments in React for grouping elements without adding an extra DOM element. The key difference is in the syntax:


// `<React.Fragment>` is an explicit way to create a fragment in React and allows you to add keys and attributes. `<>` and `</>` are shorthand syntax for creating fragments without keys or attributes.

//exp

// React.Fragment

// for Key
// <React.Fragment key="fragment-1">
//   <div className="item">Item 1</div>
//   <div className="item">Item 2</div>
// </React.Fragment>

// or
// Attribute

{/* <React.Fragment className="main">
  <div className="item">Item 1</div>
  <div className="item">Item 2</div>
</React.Fragment> */}


// Fragment
//We can't access key and attribute in fragment itself
{/* <>
  <div>Item 1</div>
  <div>Item 2</div>
</> */}

// 


