"use client";

import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";

interface PostArticleProps {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
}

const PostArticle = ({ children, post }: PostArticleProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
};

export default PostArticle;
