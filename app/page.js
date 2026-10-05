import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import AnimatedLogoFooter from '../components/AnimatedLogoFooter';
import BodyExtras from '../components/BodyExtras';
import AnimationInit from '../components/AnimationInit';



export default function Home() {
  return (
    <>
      <AnimationInit />
      <Navbar />
      <MainContent />
      <Footer />
      <AnimatedLogoFooter />
      <BodyExtras />
    </>
  );
}
