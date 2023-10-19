import React, { useEffect } from "react";
import { useState } from "react";
import { Box,  Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const SearchFeed = () => {

  const {searchTerm}= useParams();
  
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data)=> setVideos(data.items))

  }, [searchTerm]);

  return (
    <Box
    p={2}
    sx={{
      overflowY: "auto",
      height: "90vh",
      flex: 2,
    }}
  >
    <Typography
      variant="h4"
      fontWeight="bold"
      mb={2}
      sx={{ color: "white" }}
    >
     Search Results for
      <span style={{ color: "#F31503" }}>&nbsp; {searchTerm}</span> Videos
    </Typography>

    <Videos videos={videos} />
  </Box>
  );
};

export default SearchFeed;
