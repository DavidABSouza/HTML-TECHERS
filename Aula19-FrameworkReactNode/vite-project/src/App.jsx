import "./App.css";
import { Post } from "./components/Post";

function App() {

  return (

    <main classsName="feed-container">
      <h1>VibeCheck!</h1>

      {/*O seu cartão do desafio entra aqui*/}
      <Post
        author = "DevTeen__01"
        vibe = "Explorando o React!"
        content = "Acabei de criar meu primeiro componente dinâmico!"      
      
      />

      <Post
        author = "JS-Ninja"
        vibe = "Focado!"
        content = "Entendendo como as props fluem de cima para baixo na árvore."      
      
      />
    </main>
  );
}

export default App