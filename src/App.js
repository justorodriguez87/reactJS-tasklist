import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import Contact from './components/pure/contact';

function App() {

  const contactoPrueba = {
    name: 'Contacto1',
    surname: 'Apellido 1',
    email: 'contacto1@reactjs.com',
    connected: false,
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>
        {/* Componente de Contacto */}
        <Contact contact={contactoPrueba}/>
      </header>
    </div>
  );
}

export default App;
