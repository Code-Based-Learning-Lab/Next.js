interface AfterLoginLayoutProps {
  children: React.ReactNode;
}

const AfterLoginLayout = ({ children }: AfterLoginLayoutProps) => (
  <div>
    After Login Layout
    <div>{children}</div>
  </div>
);

export default AfterLoginLayout;
