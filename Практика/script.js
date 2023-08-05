'use strict'


let numberOfFilms; 

function start(){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
};

start();

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function recordMyMovies(){
    for(let i = 0; i < 2; i++){

        let films = prompt('Один из просмотренных фильмов?', ''),
            filmScore = prompt('На сколько оцените его?','');
    
                while(films == null || filmScore == null || films.length >= 50 || filmScore.length >= 50 || films == '' || filmScore == ''){
                    films = prompt('Один из просмотренных фильмов?', ''),
                    filmScore = prompt('На сколько оцените его?','');
                    if(films != null  && filmScore !== null && films.length <= 50 && filmScore.length <= 50 && films !== '' && filmScore != '') break;
                }
    
            personalMovieDB.movies[films]= filmScore;  
    }
}

recordMyMovies();

function statusAssignment() {
    if(personalMovieDB.count <= 10){
        alert('Просмотрено довольно мало фильмов');
    } else 
    if(10 < personalMovieDB.count <= 30){
        alert('Вы классический зритель');
    } else
    if(personalMovieDB.count > 30){
        alert('Вы киноман');
    } else{
        alert('Произошла ошибка');
    }
}

statusAssignment();

function showMyDB(privat){
    if(!privat){
        console.log(personalMovieDB)
    };
};

showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        let favoriteGenre = prompt('Ваш любимый жанр под номером ' + i + '?', '');
        personalMovieDB.genres.push(favoriteGenre);
    };
};

writeYourGenres();