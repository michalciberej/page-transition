import Transition from './components/Transition';
import StyledComponentsRegistry from './lib/Registry';
import GlobalStyles from './styles/globalStyles';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Transition>{children}</Transition>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
