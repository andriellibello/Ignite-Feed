import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";


//author
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/162721865?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Andrielli Bello</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title="12 de Junho às 15:00h" dateTime="2024-06-12">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
        
      </div>
    </article>
  );
}
