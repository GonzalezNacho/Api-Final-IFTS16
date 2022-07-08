let Movies = [
  {
      "id":"1",
      "title":"Alien",
      "director":"James Cameron",
      "year":"1986",
      "rating":"8.5"
  },
  {
      "id":"2",
      "title":"The Dark Knight",
      "director":"Cristopher Nolan",
      "year":"2008",
      "rating":"9"
  },
  {
      "id":"3",
      "title":"Pulp Fiction",
      "director":"Quentin Tarantino",
      "year":"1994",
      "rating":"8.6"
  },
  {
      "id":"4",
      "title":"Schindler's List",
      "director":"Steven Spielberg",
      "year":"1993",
      "rating":"9.4"
  }
];

const getAll = () => { return Movies };

const getAllAlphabetically = () => { return Movies.sort((a, b) => a.title.localeCompare(b.title)) };

const getOne = (id) => { return Movies.find((registro) => registro.id == id);}

const save = (body) => { Movies.push(body);}

const borrar = (id) => {
  const index = Movies.findIndex((registro) => registro.id == id);
  if (index > 0) {
    Movies.splice(index, 1);
    return true
  }
  return false
}

const update = (id) => { 
  const index = Movies.findIndex((registro) => registro.id == id);
  if (index >= 0) {
    Movies[index] = req.body;
    return true
  } 
  return false
}

module.exports = { getAll, getAllAlphabetically, getOne, save, borrar, update};
