import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/162721865?v=4"
          />
          <div className={styles.atuhorInfo}>
            <strong>Andrielli Bello</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title="12 de Junho às 15:00h" dateTime="2024-06-12">
          Publicado há 1h
        </time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p> 
        <p>👉 <a href="">jane.design/doctorcare</a></p>
        <p>#novoprojeto #nlw #rocketseat</p>
      </div>
    </article>
  );
}
