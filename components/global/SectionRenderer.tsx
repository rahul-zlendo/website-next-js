import Hero from './sections/Hero';
import Features from './sections/Features';
import Outcomes from './sections/Outcomes';
import LogoStrip from './sections/LogoStrip';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Comparison from './sections/Comparison';
import SocialProof from './sections/SocialProof';
import WhoItIsFor from './sections/WhoItIsFor';
import FinalCTA from './sections/FinalCTA';

interface SectionRendererProps {
  sections: any[];
}

const componentMap: Record<string, React.FC<any>> = {
  'globalHero': Hero,
  'globalFeatures': Features,
  'globalOutcomes': Outcomes,
  'globalLogoStrip': LogoStrip,
  'globalProblem': Problem,
  'globalSolution': Solution,
  'globalComparison': Comparison,
  'globalSocialProof': SocialProof,
  'globalWhoItIsFor': WhoItIsFor,
  'globalFinalCTA': FinalCTA,
};

const SectionRenderer: React.FC<SectionRendererProps> = ({ sections }) => {
  if (!sections || !Array.isArray(sections)) return null;

  return (
    <>
      {sections.map((section, index) => {
        const Component = componentMap[section._type];
        if (!Component) {
          console.warn(`No component found for section type: ${section._type}`);
          return null;
        }
        return <Component key={section._key || index} data={section} />;
      })}
    </>
  );
};

export default SectionRenderer;
