import {useState} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import FilesView from './FilesView'
import SideIcons from './SideIcons'
import {auth,provider} from './firebase'
function App() {
  const [user, setUser] = useState("");
  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }
  return (
    <div className="App">
    {
      user ? (
        <>
        <Header userPhoto={user.photoUrl} />
    <div className="app-main">
    <Sidebar />
    <FilesView />
    </div>
        </>
      ):(
        <div className='app__login'>
              <img className="img_aa" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_of_Google_Drive.svg/1024px-Logo_of_Google_Drive.svg.png" alt="Google Drive" />
             
              <button onClick={handleLogin}>Log in to Google Drive</button>
            </div>
      )
    }
   
    
    </div>
  );
}

export default App;
