import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import styles from "./home.module.css";

const HomePage = () => (
  <main className={styles.main}>
    <Tab />
    <PostForm />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </main>
);

export default HomePage;
