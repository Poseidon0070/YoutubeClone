import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RootLayout, Home, Channel, Error, SearchFeed,VideoDetail } from './pages';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3', 
      },
      secondary: {
        main: '#f50057', 
      },
    },
  });

  let router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement : <Error />,
      children: [
        { index: true, element: <Home /> },
        { path : 'channel/:channelId', element : <Channel />},
        { path : 'search/:searchTerm', element : <SearchFeed />},
        { path : 'video/:videoId', element : <VideoDetail />}
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
