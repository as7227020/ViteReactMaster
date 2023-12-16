
import './App.css'
import { AccordionDemo } from '@/components/AccordionDemo'
import { ThemeProvider } from "@/components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AccordionDemo/>
    </ThemeProvider>
  )
}

export default App
