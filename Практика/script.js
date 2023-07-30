let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let films = prompt('Один из просмотренных фильмов?'),
    filmScore = prompt('На сколько оцените его?'),
    films2 = prompt('Один из просмотренных фильмов?'),
    filmScore2 = prompt('На сколько оцените его?');

personalMovieDB.movies[films]= filmScore;
personalMovieDB.movies[films2]= filmScore2;


console.log(personalMovieDB);