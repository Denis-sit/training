let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let films = prompt('Один из просмотренных фильмов?'),
//     filmScore = prompt('На сколько оцените его?'),
//     films2 = prompt('Один из просмотренных фильмов?'),
//     filmScore2 = prompt('На сколько оцените его?');

// personalMovieDB.movies[films]= filmScore;
// personalMovieDB.movies[films2]= filmScore2;


for(let i = 0; i < 2; i++){

    let films = prompt('Один из просмотренных фильмов?', ''),
        filmScore = prompt('На сколько оцените его?','');

            while(films == null || filmScore == null || films.length >= 50 || filmScore.length >= 50 || films == '' || filmScore == ''){
                films = prompt('Один из просмотренных фильмов?', ''),
                filmScore = prompt('На сколько оцените его?','');
                if(films != null  && filmScore !== null && films.length <= 50 && filmScore.length <= 50 && films !== '' && filmScore != '') break;
            }

            personalMovieDB.movies[films]= filmScore;  

};

if(personalMovieDB.count <= 10){
    alert('Просмотрено довольно мало фильмов');
} else 
if(10 < personalMovieDB.count >= 30){
    alert('Вы классический зритель');
} else
if(personalMovieDB.count > 30){
    alert('Вы киноман');
} else{
    alert('Произошла ошибка')
}


console.log(personalMovieDB);