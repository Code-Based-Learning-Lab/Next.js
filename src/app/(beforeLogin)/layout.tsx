import styles from "@/app/page.module.css";

interface BeforeLoginLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const BeforeLoginLayout = ({ children, modal }: BeforeLoginLayoutProps) => (
  <div className={styles.container}>
    {children}
    {modal}
  </div>
);

export default BeforeLoginLayout;
