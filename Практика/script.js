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
    privat: false,
    start: function(){
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    recordMyMovies: function (){
        for(let i = 0; i < 2; i++){
    
            let films = prompt('Один из просмотренных фильмов?', ''),
                filmScore = prompt('На сколько оцените его?','');
                if(films == null || filmScore == null || films.length >= 50 || filmScore.length >= 50 || films == '' || filmScore == ''){
                    i--;
                };
                personalMovieDB.movies[films]= filmScore;  
        }
    },
    statusAssignment: function () {
        if(personalMovieDB.count <= 10){
            alert('Просмотрено довольно мало фильмов');
        } else 
        if(10 < personalMovieDB.count  && personalMovieDB.count <= 30){
            alert('Вы классический зритель');
        } else
        if(personalMovieDB.count > 30){
            alert('Вы киноман');
        } else{
            alert('Произошла ошибка');
        }
    },
    showMyDB: function showMyDB(){
        personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
    },
    writeYourGenres: function (){
        for(let i = 1; i <= 3; i++){
            let favoriteGenre = prompt('Ваш любимый жанр под номером ' + i + '?', '');
            if(favoriteGenre == '' || favoriteGenre == null ){
                i--;
            }else{
                personalMovieDB.genres.push(favoriteGenre);
            }
        };

        personalMovieDB.genres.forEach(function(elemet, i){
            console.log(`Любимый жанр ${i + 1} - это ${elemet} `);
        });
    },
    toggleVisibleMyDB: function (privat){
        if(privat == false){
            privat = true;
        } else{
            privat = false;
            console.log(personalMovieDB);
        }
    }
};

personalMovieDB.start();
personalMovieDB.recordMyMovies();
personalMovieDB.statusAssignment();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
