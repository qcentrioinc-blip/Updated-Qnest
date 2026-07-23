import AIProduct from "../../components/AIOptimization/AIProduct/AIProduct"
import AINavbar from "../../components/AIOptimization/Navbar/AINavbar"
// import AIFooter from "../../components/HomePage/AIOptimization/AIFooter";
// import { Product } from "../../components/AIOptimization/HomePageAI/Product"
// import HeroAIOptimization from "../../components/HomePage/AIOptimization/HeroAIOptimization"

const AIOptimization = () => {
  return (
    <div>
      <AINavbar />

      {/* <HeroAIOptimization /> */}
      <main>
        <AIProduct />
      </main>
      {/* <Product/> */}

      {/* <AIFooter /> */}

    </div>
  )
}

export default AIOptimization
