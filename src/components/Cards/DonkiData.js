import React, { useState, useEffect } from "react";
import axios from "axios";
import DonkiDataCard from "./DonkiDataCard";
import { Container, Row } from 'reactstrap';

function DonkiData() {
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
        console.log("response from the DONKI", response);
        setData(response.data);
        setMedia(response.data.url);
        setLoading(false);
      })
      .catch(error => setLoading(false));
  };

  useEffect(effectCallbackFn, []);


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
      {loading ? <h3>Still Loading...</h3>: <DonkiDataCard
        
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

export default DonkiData;
