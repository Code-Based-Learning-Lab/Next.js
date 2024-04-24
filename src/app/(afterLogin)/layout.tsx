import styles from "@/app/(afterLogin)/layout.module.css";
import Link from "next/link";
import Image from "next/image";
import zLogo from "@/../public/z-logo.png";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";
import TrendSection from "./_component/TrendSection";
import FollowRecommend from "./_component/FollowRecommend";
import { ReactNode } from "react";
import RightSearchZone from "./_component/RightSearchZone";

interface AfterLoginLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const AfterLoginLayout = ({ children, modal }: AfterLoginLayoutProps) => (
  <div className={styles.container}>
    <header className={styles.leftSectionWrapper}>
      <section className={styles.leftSection}>
        <div className={styles.leftSectionFixed}>
          <Link className={styles.logo} href="/home">
            <div className={styles.logoPill}>
              <Image src={zLogo} alt="z.com logo" width={40} height={40} />
            </div>
          </Link>
          <nav>
            <ul>
              <NavMenu />
              <Link href="/compose/tweet" className={styles.postButton}>
                게시하기
              </Link>
            </ul>
          </nav>
          <LogoutButton />
        </div>
      </section>
    </header>
    <div className={styles.rightSectionWrapper}>
      <div className={styles.rightSectionInner}>
        <main className={styles.main}>{children}</main>
        <section className={styles.rightSection}>
          <RightSearchZone />
          <TrendSection />
          <div className={styles.followRecommend}>
            <h3>팔로우추천</h3>
            <FollowRecommend />
            <FollowRecommend />
            <FollowRecommend />
          </div>
        </section>
      </div>
    </div>
    {modal}
  </div>
);

export default AfterLoginLayout;
