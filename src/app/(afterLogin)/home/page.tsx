import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import styles from "./home.module.css";

const HomePage = () => (
  <main className={styles.main}>
    <Tab />
    <PostForm />
  </main>
);

export default HomePage;
