import React from 'react';
import Todo from './components/Todo';
import GlobalStyle from './styled/Global';

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Todo/>
    </div>
  );
};

export default App;