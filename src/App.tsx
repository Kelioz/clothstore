import {QueryClientProvider} from "./app/providers";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./app/router/AppRouter.tsx";
import '../src/app/styles/styles.scss'
import HeaderPromo from "./components/HeaderPromo/HeaderPromo.tsx";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation.tsx";
import Context from "./context.tsx";


function App() {
  return (
      <Context>
        <QueryClientProvider>
            <BrowserRouter>
                <HeaderPromo />
                <HeaderNavigation />
                <AppRouter />
            </BrowserRouter>
        </QueryClientProvider>
      </Context>
  )
}

export default App
