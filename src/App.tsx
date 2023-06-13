import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Router } from "./Router";

import { PostListProvider } from "@/contexts/PostsContext";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <PostListProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PostListProvider>
    <GlobalStyle />
  </ThemeProvider>
)
