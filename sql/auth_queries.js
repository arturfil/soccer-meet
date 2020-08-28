exports.list = () => {
   return `
    select * from users
   `;
}

exports.getUser = (id) => {
  return `
    select * from users where id = '${id}';
  `
}