import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/pure/contact';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx*/}
        {/* <Greeting name={"Justo"}></Greeting> */}
        {/*<GreetingF name="Justo"></GreetingF> */}

        {/* Componente de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>

        {/* Componente de Contacto */}
        <ContactListComponent></ContactListComponent>

      </header>
    </div>
  );
}

export default App;
