import "./App.css";
import Images from "./components/images";
import Heading from "./components/Heading";

function App() {
  const images = [
    { id: "1", nameOfImage: "image-ID1.jpg" },
    { id: "2", nameOfImage: "image-ID2.jpg" },
    { id: "3", nameOfImage: "image-ID3.jpg" },
    { id: "4", nameOfImage: "image-ID4.jpg" },
    { id: "5", nameOfImage: "image-ID5.jpg" },
    { id: "6", nameOfImage: "image-ID6.jpg" },
    { id: "7", nameOfImage: "image-ID7.jpg" },
    { id: "8", nameOfImage: "image-ID8.jpg" },
    { id: "9", nameOfImage: "image-ID9.jpg" },
    { id: "10", nameOfImage: "image-ID10.jpg" },
    { id: "11", nameOfImage: "image-ID11.jpg" },
    { id: "12", nameOfImage: "image-ID12.jpg" },
    { id: "13", nameOfImage: "image-ID13.jpg" },
    { id: "14", nameOfImage: "image-ID14.jpg" },
    { id: "15", nameOfImage: "image-ID15.jpg" },
    { id: "16", nameOfImage: "image-ID16.jpg" },
    { id: "17", nameOfImage: "image-ID17.jpg" },
    { id: "18", nameOfImage: "image-ID18.jpg" },
    { id: "19", nameOfImage: "image-ID19.jpg" },
    { id: "20", nameOfImage: "image-ID20.jpg" },
    { id: "21", nameOfImage: "image-ID21.jpg" },
    { id: "22", nameOfImage: "image-ID22.jpg" },
  ];

  return (
    <>
      <center>
        <Heading/>
        <Images images = {images}/>
      </center>
    </>
  );
}

export default App;
