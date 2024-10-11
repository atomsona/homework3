import React from 'react';
import cardData from './data'; 
import Card from './components/card/Card'; 
import Button from './components/button/Button';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
     
      <Header/>
      
     
      <Button text="discover more about will animals" onClick={() => window.open('https://www.youtube.com/@discoveryrelaxation3457')} />
      
     
      <div className="card-container">
        {cardData.map(card => (
          <Card key={card.id} name={card.name} desc={card.desc} image={card.image} />
        ))}
      </div>

     
      <Footer />
    </div>
  );
}

export default App;