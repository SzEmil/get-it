const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {children}
    </main>
  );
};

export default Layout;
