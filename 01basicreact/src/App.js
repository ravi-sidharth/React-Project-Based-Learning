
import {Chai} from './chai'
import Welcome from './Welcome'
import Hello from './Hello'
import Message from './Message'
import Counter from './Counter'
import FunctionClick from './FunctionClick'
import ClassClick from './ClassClick'
import EventBind from './EventBind'
import ParentComponent from './ParentComponent'
import UserGreeting from './UserGreeting'
import NameList from './NameList'
import StyleSheet from './StyleSheet'
import Inline from './Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
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
       <p> I'm a good boy</p>
      </Hello>
      <Hello name="Sourabh" heroName="Batman"> 
          <button>Action</button>
      </Hello>
      <Hello name="Deepak" heroName="SpiderMan" /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary={true} /> */}
      <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    
    </>
  );
}

export default App;
