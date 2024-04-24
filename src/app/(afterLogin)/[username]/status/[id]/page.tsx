import BackButton from "@/app/(afterLogin)/_component/BackButton";
import styles from "./single-post.module.css";
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "./_component/CommentForm";

const DetailBoardPage = () => (
  <div className={styles.main}>
    <div className={styles.header}>
      <BackButton />
      <h3 className={styles.headerTitle}>게시하기</h3>
    </div>
    <Post />
    <CommentForm />
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
);

export default DetailBoardPage;
