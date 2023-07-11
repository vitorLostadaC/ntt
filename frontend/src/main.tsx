import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.scss"
import { Header } from "./layout/Header/Header.tsx"
import { Footer } from "./layout/Footer/Footer.tsx"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./libs/queryClient.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <App />
      <Footer />
    </QueryClientProvider>
  </React.StrictMode>
)
