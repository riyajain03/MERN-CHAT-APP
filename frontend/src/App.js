import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';


function App() {
  return (
    <div className="App">
      Hello
      <Route path='/' component={HomePage} exact/>
      <Route path='/chats' component={ChatPage}/>
      <Button colorScheme='blue'>Button</Button>
    </div>
  );
}

export default App;