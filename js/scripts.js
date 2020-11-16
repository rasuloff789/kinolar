var moviesList = $_(".js-movies-list") ; 

var moviesSlice = kinolar.slice(0 , 200) ;
moviesSlice.forEach(movie => {
  
  
  var newMovie = createElement("li" , "list-group-item flex-shrink-0 d-flex flex-column overflow-hidden item-width my-2");
  var movieTitleBox = createElement("div" , "d-flex align-items-center") ;
  var textTitle = createElement("span" , "h5 mb-0 mr-2 flex-shrink-0" , "Kino nomi : ");
  var movieTitle = createElement('p' , "h5 text-dark mb-0 text-truncate" , movie.title );
  movieTitle.title = movie.title ;
  
  var yearBox= createElement("div" , "d-flex align-items-center");
  var yearText = createElement("span" , "mr-1" , "Sanasi : ");
  var yearNumber = createElement("p" , "small text-dark mb-0" , movie.year);
  
  var actorTitle = createElement("p" , "h3 text-dark" , "Actors");
  
  var actorsList= createElement("ul" , "list-group");
  for (actor of movie.cast){
    var actorsName = createElement("li" , "list-group-item text-truncate" , actor);
    actorsName.title = actor ; 
    actorsList.appendChild(actorsName);
  }
  
  moviesList.appendChild(newMovie);
  newMovie.appendChild(movieTitleBox);
  movieTitleBox.appendChild(textTitle);
  movieTitleBox.appendChild(movieTitle);
  newMovie.appendChild(yearBox);
  yearBox.appendChild(yearText);
  yearBox.appendChild(yearNumber);
  newMovie.appendChild(actorTitle);
  newMovie.appendChild(actorsList);
});
