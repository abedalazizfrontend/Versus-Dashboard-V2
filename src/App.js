import { AuthProvider } from './components/auth/AuthContext';
import Router from './routes';
import ThemeProvider from './theme';
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import './App.css';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
}
