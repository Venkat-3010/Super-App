import React from 'react'
import music from '../assets/Music.png';
import romance from '../assets/Romance.png'
import action from '../assets/Action.png';
import drama from '../assets/Drama.png';
import western from '../assets/Western.png';
import fiction from '../assets/Fiction.png';
import thriller from '../assets/Thriller.png';
import horror from '../assets/Horror.png';
import fantasy from '../assets/Fantasy.png';
import MovieBox from '../components/MovieBox';

const genre = [
    {
        id: "Action",
        color: "#FF5209",
        image: <img src={action} style={{width: '160px', height: '120px'}} alt="action genre" />
    },
    {
        id: "Drama",
        color: "#D7A4FF",
        image: <img src={drama} style={{width: '160px', height: '120px'}} alt="action genre" />
    },
    {
        id: "Romance",
        color: "#11B800",
        image: <img src={romance} style={{width: '160px', height: '120px'}} alt="action genre" />
    },
    {
        id: "Thriller",
        color: "#84C2FF",
        image: <img src={thriller} style={{width: '160px', height: '120px'}} alt="action genre" />
    },
    {
        id: "Western",
        color: "#902500",
        image: <img src={western} style={{width: '160px', height: '120px'}} alt="action genre" />
    },
    {
        id: "Horror",
        color: "#7358FF",
        image: <img src={horror} style={{width: '160px', height: '120px'}} alt="action genre" />
    },
    {
        id: "Fantasy",
        color: "#FF4ADE",
        image: <img src={fantasy} style={{width: '160px', height: '120px'}} alt="action genre" />
    },
    {
        id: "Music",
        color: "#E61E32",
        image: <img src={music} style={{width: '160px', height: '120px'}} alt="action genre" />
    },
    {
        id: "Fiction",
        color: "#6CD061",
        image: <img src={fiction} style={{width: '160px', height: '120px'}} alt="action genre" />
    },
];

const Movies = () => {
  return (
    <>
        {genre.map((genre) => (
            <MovieBox key={genre} data={genre} />
        ))}
    </>
  )
}

export default Movies