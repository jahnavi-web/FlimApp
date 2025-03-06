import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography, CardActionArea, Rating, Grid2 } from "@mui/material";

const movies = [
  {
    id: 1,
    name: "Srimanthudu",
    year: 2015,
    genre: "Family Drama",
    rating: 8.8,
    image: "https://th.bing.com/th/id/OIP.vJqa1YpzCQqR3slK-siIJgAAAA?rs=1&pid=ImgDetMain", 
  },
  {
    id: 2,
    name: "LoveStory",
    year: 2022,
    genre: "Rom-Com",
    rating: 9.2,
    image: "https://th.bing.com/th/id/OIP.Md9X5hVdFPcMQLhjvcjhrgHaKf?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    name: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
];

const ListMovies = () => {
  return (
    <Grid2 container spacing={3} justifyContent="center">
      {movies.map((movie) => (
          <Grid2 item xs={12} sm={6} md={4} key={movie.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="400" image={movie.image} alt={movie.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {movie.name} ({movie.year})
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Genre: {movie.genre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" >
                    Rating: ({movie.rating}/10)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
    </Grid2>
  );
};

export default ListMovies;