// const user = {
//     id: 339,
//     name: 'John',
//     age: 42,
//     education: {
//       degree: {
//         name: 'BCA'
//       }
//     }
//   };
  
//   const { education: {degree:{name}}} = user;

//   console.log(name)



const user = {
    id: 339,
    name: 'John',
    age: 42,
    subjects: ['HTML', 'CSS', 'Javascript'],
    education: {
      degree: {
        name: 'BCA'
      }
    }
  };
  
  const {
    name:fname, 
    education: {degree: {name:degreeName}},
    subjects:[sub1,,sub2]
  } = user;

  console.log(subjects[0])
 