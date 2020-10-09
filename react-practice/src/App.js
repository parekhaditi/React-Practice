import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Sdata from './Data';

function wcard(val)
{
  return(
<Card
  imgsrc={val.imgsrc}
  title={val.title}
  name={val.name}
  link={val.links}>
</Card>
  );
}

function App() {
  return (
    <>

    <h1>FrontEnd Development</h1>
    {/* <Card imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
    title="Web Development"
    name="HTML"
    link="https://www.w3schools.com/html/">
    </Card> */}

    {Sdata.map(wcard)}

    
    </>
  );
}

export default App;
