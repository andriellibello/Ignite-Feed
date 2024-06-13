import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://avatars.githubusercontent.com/u/162721865?v=4",
      name: 'Andrielli',
      role: 'Dev'
    },
    content: [
      {type: 'paragrap', content: 'Fala galeraa 👋', },
      {type: 'paragrap', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2002-13-06 17:00:00'),
  }
]
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolor laudantium et. Beatae porro natus maiores reprehenderit? Sed nulla laboriosam voluptas quisquam necessitatibus illo. Quas asperiores repudiandae quam. Fugit, maxime?"
          />
          <Post
            author="Gabriel"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolor laudantium et. Beatae porro natus maiores reprehenderit? Sed nulla laboriosam voluptas quisquam necessitatibus illo. Quas asperiores repudiandae quam. Fugit, maxime?"
          />
        </main>
      </div>
    </div>
  );
}
