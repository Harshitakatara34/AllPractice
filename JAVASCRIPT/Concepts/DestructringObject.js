let user = {
    firstName: 'Vivek',
    lastName: 'Agarwal',
    age: 38,
    posts: [
      {title: 'Post 1', comments: 10},
      {title: 'Post 2', comments: 11}
    ]
  }
  
  const { firstName:first, lastName, age=40, ...rest } = user;
  console.log(first, lastName, age, rest);
  
  // only the deepest keys become variables
  const { posts: [{ title }, {title: t2}] } = user;
  console.log(title, t2); 