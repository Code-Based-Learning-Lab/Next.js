import styles from "@/app/(beforeLogin)/_component/main.module.css";

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
