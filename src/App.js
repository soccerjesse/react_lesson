import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
    </>
  );
}

// const Name = (props) => {
//   return(
//     <p>hi,{props.name}</p>
//   )
// }

// const Profile = (props) => {
//   return(
//     <div>
//       <p>{props.age}</p>
//       <p>{props.country}</p>
//     </div>
//   )
// }

// const App = () => {
//   return( 
//     <div>
//       <Name name="jack  s" />
//       <Profile age="24" country="japan" />
//     </div>
//   )
// }

export default App;
