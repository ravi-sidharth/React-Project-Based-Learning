
import {Chai} from './chai'
import Welcome from './Welcome'
import Hello from './Hello'
import Message from './Message'
import Counter from './Counter'
import FunctionClick from './FunctionClick'
import ClassClick from './ClassClick'
import EventBind from './EventBind'
function App() {
  return (
    <>
      {/* <h1>
        Hello World!
      </h1> */}
      {/* <Chai/> */}
      {/* <Welcome name="Ravi" heroName="Superman" />
      <Welcome name="Sourabh" heroName="Spiderman" />
      <Welcome name="Monu" heroName="Hi man" /> */}
      {/* <Hello name="Ravi" heroName="Superman">
      <h1>I'm a good boy</h1>
        I'm a good boy
      </Hello>
      <Hello name="Sourabh" heroName="Batman"> 
          <button>Action</button>
      </Hello>
      <Hello name="Deepak" heroName="SpiderMan" /> */}
      {/* <Message /> */}
      <Counter />
      <FunctionClick />
      <ClassClick/>
      <EventBind/>
    
    </>
  );
}

export default App;
