import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import Header from "./Components/Header"
import Body from "./Components/Body"


const API_KEY = "BunglmqsToUEiuibkGyeDiz98BBc3ugzRxAje8ft";
const URL = "https://api.nasa.gov/planetary"

function App() {

  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchAPOD = () => {
      axios.get(`${URL}/apod?api_key=${API_KEY}`)
      .then(res => {
        setPhoto(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
    }
    fetchAPOD()
  }, [])
  return (
    <div className="App">
      <Header title = {photo.title} date = {photo.date}/>
      <Body photo = {photo.url} explanation = {photo.explanation}/>
    </div>
  );
}

export default App;
