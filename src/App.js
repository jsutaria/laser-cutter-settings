import React from 'react';
import Title from './content/Title';
import CardHolder from './content/CardHolder';
import Selectors from './content/Selectors';
import SettingType from './content/SettingType';
import Footer from './content/Footer';

function App() {
  return (
    <div>
      <Title />
      <SettingType />
      <Selectors />
      <CardHolder />
      <Footer />
    </div>
  );
}

export default App;
