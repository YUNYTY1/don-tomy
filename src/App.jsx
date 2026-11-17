import Header from './sections/Header';
import Hero from './sections/Hero';
import Concept from './sections/Concept';
import Specialties from './sections/Specialties';
import Delivery from './sections/Delivery';
import Location from './sections/Location';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Specialties />
        <Delivery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
