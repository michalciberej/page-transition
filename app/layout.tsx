import StyledComponentsRegistry from './lib/Registry';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
