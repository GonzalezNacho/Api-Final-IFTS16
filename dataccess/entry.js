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
  },
  {
      "id":"5",
      "title":"Life Is Beautiful",
      "director":"Roberto Benigni",
      "year":"1997",
      "rating":"8.9"
  },
  {
      "id":"6",
      "title":"Inception",
      "director":"Christopher Nolan",
      "year":"2010",
      "rating":"8.4"
  },
  {
      "id":"7",
      "title":"Avengers: Endgame",
      "director":"Anthony Russo, Joe Russo",
      "year":"2019",
      "rating":"7.3"
  },
  {
      "id":"8",
      "title":"Scarface",
      "director":"Oliver Stone",
      "year":"1983",
      "rating":"8.6"
  },
  {
      "id":"9",
      "title":"Star Wars Episode IV - A New Hope",
      "director":"George Lucas",
      "year":"1977",
      "rating":"7.9"
  },
  {
      "id":"10",
      "title":"The Godfather",
      "director":"Francis Ford Coppola",
      "year":"1972",
      "rating":"9.2"
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
