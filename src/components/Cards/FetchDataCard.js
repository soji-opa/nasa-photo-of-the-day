import React from "react";
import {
  Card,
  CardText,
  CardBody,
  
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Player } from 'video-react';

const FetchDataCard = ({
  mediaSource,
  title,
  copyright,
  date,
  description,
  mediaType,
  onDateChange,
  requestedDate,
  picHandler, 
  mediaSource2
}) => {
  return (
    <div>
    
      <Card className= "mt-5" >
        <CardBody>
          <CardTitle className="font-weight-bolder"><h1>Title: {title}</h1></CardTitle>
          <CardSubtitle className="font-weight-bold"><h4>Copyright: {copyright}</h4></CardSubtitle>
        </CardBody>
        {mediaType ==="image"? 
        <img width="95%" className="rounded mx-auto d-block" src={mediaSource === mediaSource ? mediaSource : mediaSource2} alt=" from Nasa APOD API" /> : <Player>
        <source src={mediaSource} />
      </Player>}
        <CardBody>
          <CardText className="text-justify"><span className="font-weight-bold" >Description:</span> {description}</CardText>
          <CardText className="text-left font-weight-bold">Date: {date}</CardText>
          <CardText><input type="date" value={requestedDate} onChange={onDateChange}></input></CardText>
          <Button outline color="primary" onClick={picHandler}>HD pic</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default FetchDataCard;

// const FetchDataCard = ({imgUrl, right, date, description})=>{
//     return(
//       <div>
//         <h2>Image from Nasa</h2>
//         <img src={imgUrl}></img>
//         <h4>Description: {description}</h4>
//         <p>Date: {date}</p>
//         <h3>Copyright: {right}</h3>

//       </div>
//     )
//   }
