import React, { useState, useEffect } from "react";
import axios from "axios";
import FetchDataCard from "./FetchDataCard";
import { Container, Row } from 'reactstrap';

function FetchData() {
  const [data, setData] = useState({});

  const [requestedDate, setRequestedDate] = useState("");

  const [hdpic, setHDPic] = useState("")

  const effectCallbackFn = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=6zJ3shxdlDhYcyemR9JSStgFlU31KXZy4NM5MZRf&date=${requestedDate}`
      )
      .then(response => {
        console.log("response from the api", response);
        setData(response.data);
        setHDPic(response.data.hdUrl);
        //setPetData(response.data.message)
      })
      .catch(error => console.log(error));
  };

  useEffect(effectCallbackFn, [requestedDate, setHDPic]);

  const onDateChange = (e)=>{
    setRequestedDate(e.target.value)
    // console.log(e.target.value)
  }
  const picHandler = () => {
    //console.log(e.target.value)
    setHDPic(data.hdurl)
    console.log(data.hdurl)
  }

  return (
    <Container className= "mb-5">
      <Row>
      <FetchDataCard
        mediaSource2 = {hdpic}
        picHandler ={picHandler}
        mediaSource={data.hdurl}
        copyright={data.copyright}
        date={data.date}
        title={data.title}
        description={data.explanation}
        mediaType={data.media_type}
        onDateChange={onDateChange}
        requestedDate ={requestedDate}
      />
      </Row>
    </Container>
  );
}

export default FetchData;
