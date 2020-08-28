exports.list = () => {
  return `
    select * from games;
  `
}

exports.getById = (id) => {
  return `
    select * from games where id = '${id}'
  `
}

exports.createGame = (obj) => {
  return `
    insert into games (Place, Address, Mode, Players, DateTime) 
    values(
      '${obj.Place}', 
      '${obj.Address}', 
      '${obj.Mode}', 
      ${obj.Players}, 
      '${obj.DateTime}'
    )
  `
}

exports.editGame = (obj, id) => {
  return `
    update games
    set
    Place = '${obj.Place}', 
    Address = '${obj.Address}', 
    Mode = '${obj.Mode}', 
    Players = ${obj.Players}, 
    DateTime = '${obj.DateTime}'
    where id = ${id}
  `
}

exports.deleteGame = (id) => {
  return `
    delete from games
    where id = '${id}'
  `
}