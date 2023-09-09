import styles from "./style";
import { Billing, Content, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
 

    <div className={`bg-primary mt-0 pt-0  bg-hero-pattern w-full h-full object-cover  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Navbar />
        <Hero />
      </div>  
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Content />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
