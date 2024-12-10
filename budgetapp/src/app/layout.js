import { AppProvider } from './context/AppContext'; // Import the AppProvider

// Root layout component
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
