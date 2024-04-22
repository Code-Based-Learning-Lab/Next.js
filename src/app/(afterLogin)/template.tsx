const AfterLoginTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      After Login Layout
      <div>{children}</div>
    </div>
  );
};

export default AfterLoginTemplate;