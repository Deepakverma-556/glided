import GildedGames from "./components/GildedGames"
import Hero from "./components/Hero"
import Nft from "./components/Nft"
import PlayToEarn from "./components/PlayToEarn"
import './App.css'
import TokenInfo from "./components/TokenInfo"
import Roadmap from "./components/Roadmap"
import Uniswap from "./components/Uniswap"
import PoweredBy from "./components/PoweredBy"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import BackToTop from "./common/BackToTop"

function App() {
  return (
    <>
      <Hero />
      <Nft />
      <PlayToEarn />
      <GildedGames />
      <TokenInfo />
      <Roadmap />
      <Uniswap />
      <PoweredBy />
      <Faq />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App
