import { DrawerWrapper } from './components/drawer/DrawerWrapper'
import { Navbar } from './components/Navbar'
import { Content } from './components/Content'
import './styles/global.css'
import { WindowContainer } from './components/window/WindowContainer'
import { SelectContent } from './components/SelectContent'

const App = () => {
  return (
    <>
      <DrawerWrapper>
        <Navbar />
        <Content />
      </DrawerWrapper>
      <WindowContainer windowId="select-content">
        <SelectContent />
      </WindowContainer>
    </>
  )
}

export default App
