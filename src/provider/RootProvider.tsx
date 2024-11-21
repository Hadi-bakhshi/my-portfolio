import type { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/defaultTheme';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import Footer from '@/components/Footer/Footer';

const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationBar />
        {children}
        <Footer />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default RootProvider;
