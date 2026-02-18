import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const OmdbSearchMovieDetail = () => {
   const { id } = useParams();
   const [movie, setMovie] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchMovie = async () => {
         try {
            setLoading(true);
            setError(null);
            const res = await axios.get(
               `http://www.omdbapi.com/?apikey=fa6a901a&i=${id}`,
            );
            console.log(res.data);

            if (res.data.Response === "True") {
               setMovie(res.data);
            } else {
               setError(res.data.Error || "Movie not found");
            }
         } catch (err) {
            console.error("Error fetching movie:", err);
            setError("Failed to fetch movie details. Please try again.");
         } finally {
            setLoading(false);
         }
      };

      if (id) {
         fetchMovie();
      }
   }, [id]);

   if (loading) {
      return (
         <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Loading movie details...</h1>
         </div>
      );
   }

   if (error) {
      return (
         <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Error: {error}</h1>
         </div>
      );
   }

   if (!movie) {
      return (
         <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>No movie found</h1>
         </div>
      );
   }

   return (
      <div style={{ backgroundColor: "rgba(112, 111, 111, 0.8)", color: "#fff", minHeight: "100vh" }}>
         {/* Hero Section */}
         <div
            style={{
               background:
                  "linear-gradient(90deg, rgba(112, 111, 111, 0.8) 0%, rgba(112, 111, 111, 0.8) 100%), url('https://images.unsplash.com/photo-1489599735734-79b4d4c4b5a?w=1200')",
               backgroundSize: "cover",
               backgroundPosition: "center",
               padding: "40px 20px",
               position: "relative",
            }}
         >
            <div
               style={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                  display: "flex",
                  gap: "40px",
                  alignItems: "flex-start",
               }}
            >
               {/* Poster */}
               <div style={{ flexShrink: 0 }}>
                  <img
                     src={
                        movie.Poster !== "N/A"
                           ? movie.Poster
                           : "https://via.placeholder.com/300x450?text=No+Image"
                     }
                     alt={movie.Title}
                     style={{
                        width: "300px",
                        height: "450px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "0 8px 32px rgba(133, 133, 133, 0.5)",
                     }}
                  />
               </div>

               {/* Movie Info */}
               <div style={{ flex: 1, paddingTop: "20px" }}>
                  <h1
                     style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                     }}
                  >
                     {movie.Title}
                  </h1>

                  <div
                     style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        marginBottom: "20px",
                        flexWrap: "wrap",
                     }}
                  >
                     <div
                        style={{
                           backgroundColor: "#f5c518",
                           color: "#000",
                           padding: "4px 12px",
                           borderRadius: "4px",
                           fontWeight: "bold",
                           fontSize: "1.2rem",
                        }}
                     >
                        {movie.imdbRating}/10
                     </div>
                     <span style={{ fontSize: "1.1rem" }}>
                        {movie.imdbVotes} votes
                     </span>
                     <span style={{ fontSize: "1.1rem" }}>{movie.Year}</span>
                     <span style={{ fontSize: "1.1rem" }}>{movie.Rated}</span>
                     <span style={{ fontSize: "1.1rem" }}>{movie.Runtime}</span>
                  </div>

                  <div
                     style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        marginBottom: "20px",
                     }}
                  >
                     {movie.Genre.split(", ").map((genre, index) => (
                        <span
                           key={index}
                           style={{
                              backgroundColor: "#333",
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "0.9rem",
                           }}
                        >
                           {genre}
                        </span>
                     ))}
                  </div>

                  <p
                     style={{
                        fontSize: "1.2rem",
                        lineHeight: "1.6",
                        marginBottom: "30px",
                        maxWidth: "600px",
                     }}
                  >
                     {movie.Plot}
                  </p>

                  {/* Key Crew */}
                  <div
                     style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "20px",
                     }}
                  >
                     <div>
                        <h3 style={{ color: "#f5c518", marginBottom: "8px" }}>
                           Director
                        </h3>
                        <p>{movie.Director}</p>
                     </div>
                     <div>
                        <h3 style={{ color: "#f5c518", marginBottom: "8px" }}>
                           Writers
                        </h3>
                        <p>{movie.Writer}</p>
                     </div>
                     <div>
                        <h3 style={{ color: "#f5c518", marginBottom: "8px" }}>Stars</h3>
                        <p>{movie.Actors}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Details Section */}
         <div
            style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}
         >
            <div
               style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "40px",
               }}
            >
               {/* Movie Details */}
               <div>
                  <h2
                     style={{
                        color: "#f5c518",
                        marginBottom: "20px",
                        fontSize: "1.5rem",
                     }}
                  >
                     Movie Details
                  </h2>
                  <div style={{ display: "grid", gap: "15px" }}>
                     <div
                        style={{
                           display: "flex",
                           justifyContent: "space-between",
                           borderBottom: "1px solid #333",
                           paddingBottom: "8px",
                        }}
                     >
                        <span style={{ color: "#ccc" }}>Release Date</span>
                        <span>{movie.Released}</span>
                     </div>
                     <div
                        style={{
                           display: "flex",
                           justifyContent: "space-between",
                           borderBottom: "1px solid #333",
                           paddingBottom: "8px",
                        }}
                     >
                        <span style={{ color: "#ccc" }}>Country</span>
                        <span>{movie.Country}</span>
                     </div>
                     <div
                        style={{
                           display: "flex",
                           justifyContent: "space-between",
                           borderBottom: "1px solid #333",
                           paddingBottom: "8px",
                        }}
                     >
                        <span style={{ color: "#ccc" }}>Language</span>
                        <span>{movie.Language}</span>
                     </div>
                     <div
                        style={{
                           display: "flex",
                           justifyContent: "space-between",
                           borderBottom: "1px solid #333",
                           paddingBottom: "8px",
                        }}
                     >
                        <span style={{ color: "#ccc" }}>Box Office</span>
                        <span>{movie.BoxOffice}</span>
                     </div>
                     <div
                        style={{
                           display: "flex",
                           justifyContent: "space-between",
                           borderBottom: "1px solid #333",
                           paddingBottom: "8px",
                        }}
                     >
                        <span style={{ color: "#ccc" }}>Metascore</span>
                        <span>{movie.Metascore}</span>
                     </div>
                  </div>
               </div>

               {/* Ratings */}
               <div>
                  <h2
                     style={{
                        color: "#f5c518",
                        marginBottom: "20px",
                        fontSize: "1.5rem",
                     }}
                  >
                     Ratings
                  </h2>
                  <div style={{ display: "grid", gap: "15px" }}>
                     {movie.Ratings &&
                        movie.Ratings.map((rating, index) => (
                           <div
                              key={index}
                              style={{
                                 backgroundColor: "#111",
                                 padding: "15px",
                                 borderRadius: "8px",
                                 display: "flex",
                                 justifyContent: "space-between",
                                 alignItems: "center",
                              }}
                           >
                              <span style={{ fontWeight: "bold" }}>{rating.Source}</span>
                              <span
                                 style={{
                                    color: "#f5c518",
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                 }}
                              >
                                 {rating.Value}
                              </span>
                           </div>
                        ))}
                  </div>
               </div>

               {/* Awards */}
               <div>
                  <h2
                     style={{
                        color: "#f5c518",
                        marginBottom: "20px",
                        fontSize: "1.5rem",
                     }}
                  >
                     Awards
                  </h2>
                  <div
                     style={{
                        backgroundColor: "#111",
                        padding: "20px",
                        borderRadius: "8px",
                        lineHeight: "1.6",
                     }}
                  >
                     {movie.Awards}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};