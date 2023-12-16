
import './App.css'
import { AccordionDemo } from '@/components/AccordionDemo'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle/>
    <AccordionDemo/>
    </ThemeProvider>
  )
}

export default App
