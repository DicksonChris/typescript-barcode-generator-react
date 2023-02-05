import { DrawerWrapper } from './components/drawer/DrawerWrapper'
import { Navbar } from './components/Navbar'
import { Content } from './components/Content'
import './styles/global.css'

const App = () => {
  return (
    <DrawerWrapper>
      <Navbar />
      <Content />
    </DrawerWrapper>
  )
}

export default App
