import React, { useState, useEffect } from "react";
import axios from "axios";
import FetchDataCard from "./FetchDataCard";
import { Container, Row } from 'reactstrap';

function FetchData() {
  const [data, setData] = useState({});

  const [requestedDate, setRequestedDate] = useState("");

  const [media, setMedia] = useState("");

  const [loading, setLoading] = useState(false);


  const effectCallbackFn = () => {
    setLoading(true);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=6zJ3shxdlDhYcyemR9JSStgFlU31KXZy4NM5MZRf&date=${requestedDate}`
      )
      .then(response => {
        console.log("response from the api", response);
        setData(response.data);
        setMedia(response.data.url);
        setLoading(false);
      })
      .catch(error => setLoading(false));
  };

  useEffect(effectCallbackFn, [requestedDate]);


  const onDateChange = (e)=>{
    setRequestedDate(e.target.value)
    // console.log(e.target.value)
  }

  const picHandler = () => {
    //console.log(e.target.value)
    setLoading(true);
    setMedia(data.hdurl)
    console.log(media, data.hdurl)
    setLoading(false);
    
  }

  return (
    <Container className= "mb-5">
      <Row>
      {loading ? <h3>Still Loading...</h3>: <FetchDataCard
        
        picHandler ={picHandler}
        mediaSource={media}
        copyright={data.copyright}
        date={data.date}
        title={data.title}
        description={data.explanation}
        mediaType={data.media_type}
        onDateChange={onDateChange}
        requestedDate ={requestedDate}
      />}
      
      </Row>
    </Container>
  );
}

export default FetchData;
