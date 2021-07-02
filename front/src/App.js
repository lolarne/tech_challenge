import './App.css';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Form from './components/form/form.jsx';
import List from './components/warriors-list/list.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <List />
      <Footer />
    </div>
  );
}

export default App;
