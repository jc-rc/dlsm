import Header from './Components/Header';
import TermList from './Components/TermList';
import Pills from './Components/Pills';
import Offcanvas from './Components/Offcanvas';


function App() {
  return (
    <div className="container-fluid pt-4 ">
     <div className="row justify-content-center" >
      <Header />
      <div className="" style={{maxWidth: 1000}}>
        <Pills />
        <TermList />
      </div>
     </div>
     <Offcanvas />
    </div>
  );
}

export default App;
