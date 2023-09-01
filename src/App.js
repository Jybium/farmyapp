import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landingpage from "./Pages/Landingpage";
import "./App.css";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import MyProfile from "./Pages/MyProfile";
import FarmUpload from "./Components/FarmUpload";
import StoreUpload from "./Components/StoreUpload";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";
import FarmPEdit from "./Components/FarmPEdit";

function App() {
  // axios.defaults.baseURL = 'https://farmyapp.onrender.com';
  axios.defaults.baseURL = "http://127.0.0.1:3500";
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" exact element={<Landingpage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/uploadfarmproduct" element={<FarmUpload />} />
            <Route path="/uploadstoreproduct" element={<StoreUpload />} />
            <Route path="/editfarmproduct/:id" element={<FarmPEdit />} />
            {/* <Route path='/faculty' element={<Faculty/>}/>
            <Route path='/publications' element={<Publications/>} />
            <Route path='/publications/publication/:publicationid' element={<PublicationDetails/> } />
            <Route path="/publicationpost" element={<PublicationForm/>} />
            <Route path='/jigsaws' element={<Jigsaw/>} />
            <Route path='/jigsaws/jigsaw/:jigsawid' element={<JigsawDetails/> } />
            <Route path="/jigsawpost" element={<JigsawForm/>} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/"/>} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} /> */}

            <Route path="/" component={<Landingpage />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
