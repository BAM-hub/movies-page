import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { API_KEY } from "../constants";

const PopularMovies = ({ movie: { movies } }) => {
  return (
    <Grid2
      container
      lg={10}
      margin='auto'
      rowSpacing={4}
      padding={2}
      sx={{
        width: "100%",
        columnCount: 2,
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {movies?.map((movie) => (
        <Grid2
          item
          xs={12}
          sm={5}
          md={6}
          lg={6}
          display='flex'
          justifyContent='center'
          key={movie.id}
          onClick={() => translateTxt(movie.original_title)}
        >
          <Card sx={{ width: 500 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={`https://image.tmdb.org/t/p/original/${movie.poster_path}?api_key=${API_KEY}}`}
                alt='green iguana'
                loading='lazy'
                sx={{
                  objectFit: "cover",
                  minHeight: 450,
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {movie.original_title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});
export default connect(mapStateToProps)(PopularMovies);
