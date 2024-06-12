import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

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
