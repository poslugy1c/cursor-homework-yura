import AUTOR_IMAGE from './img/autor.jpg';
import POST_IMAGE from './img/mypost.jpg';
import Post from './components/Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <Post author={{
        name: "Khmelevskyi Yurii",
        photo: AUTOR_IMAGE,
        nickname: "@yurko_khmelevskyi"
      }}
        content="Як я робив цю домашку )"
        image={POST_IMAGE}
        date={"20 жовтня"}
      />
    </div>
  );
}

export default App;
