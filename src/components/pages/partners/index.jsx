import './style.css'
import PartnershipHero from './layout/hero';
import CurrentPartners from './layout/currentpartner';
import Opportunity from './layout/opprtunity';
import SuccessStories from './layout/successstories';
import ContactForPartner from './layout/contact';

const Partners = () => {
  return (
    <>
      <PartnershipHero />
      <CurrentPartners />
      <Opportunity />
      <SuccessStories />
      <ContactForPartner />
    </>
  );
}

export default Partners;