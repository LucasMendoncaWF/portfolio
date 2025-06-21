import dynamic from 'next/dynamic';

const ClientSideSections = dynamic(
  () => import('@/components/HomeSections/ClientSideSections/ClientSideSections'),
);
const About = dynamic(() => import('@/components/HomeSections/About'));

const Portfolio = () => {
  return (
    <>
      <div id="about-section">
        <About />
      </div>
      <ClientSideSections />
    </>
  );
};

export default Portfolio;
