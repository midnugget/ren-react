import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import PostList from './components/PostList'
import MainHeader from './components/MainHeader'

function App() {
  const [modalVisible, setmodalInvisible]= useState (true);

  function showModalhandler() {
    setmodalInvisible(true);
  }

  function hideModalhandler() {
    setmodalInvisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalhandler}/>
      <main>
        <PostList isPosting={modalVisible} 
        onStopPosting={hideModalhandler}/>
      </main>
    </>
  );
 }
//When using multiple elements, they should be --
//wrapped inside one root JSX element in this case it's <main> or an empty react element <></>
//because you can only return 1 single elemet in component fn
export default App;
