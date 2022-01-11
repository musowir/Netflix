import {API_KEY} from '../Constants/constants'

//home
export const trendingall =`trending/all/day?api_key=${API_KEY}&language=en-US`
//movies
export const Trendingmovie =`trending/movie/day?api_key=${API_KEY}&language=en-US`

export const Nowplayingmovie =`movie/now_playing?api_key=${API_KEY}&region=US`

export const Topratedmovie =`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`

export const Upcoming =`/movie/upcoming?api_key=${API_KEY}&region=US`

export const ComedyMovies= `discover/movie?api_key=${API_KEY}&with_genres=35`

export const HorrorMovies= `discover/movie?api_key=${API_KEY}&with_genres=27`

export const ActionMovies= `discover/movie?api_key=${API_KEY}&with_genres=28`

export const RomanceMovies= `discover/movie?api_key=${API_KEY}&with_genres=10749`

export const Documentaries= `discover/movie?api_key=${API_KEY}&with_genres=99`

//tv

export const trendingtv =`trending/tv/day?api_key=${API_KEY}&language=en-US`

export const TopratedTv =`tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`

export const popularTv =`tv/popular?api_key=${API_KEY}&language=en-US&page=1` 

export const Onair =`tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`

export const AiringToday =`tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`

export const originals =`discover/tv?api_key=${API_KEY}&with_networks=213`
