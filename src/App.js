import './App.css';
import {MonButton} from "./components/MonButton";
import styled from 'styled-components';
import {useEffect, useState} from "react";

function App() {

  const [imgSet, setImgSet] = useState(null);

  const getImages = async () => {
    let imgList = [];
    for(let i = 1; i < 500; i++) {
      let img = require(`./../assets/${i}.png`);
      imgList.push(<img key={i} src={img} />);
    }
    setImgSet(imgList)
  };

  const handleClick = () => {

  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <AppContainer className="App">
      {imgSet}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap; 
  
  > img {
    max-width: 200px;
    max-height: 200px;
  }
`;

export default App;
