import './skill-card.css';

export default function SkillCard({ skill }) {
  const gradients = {
    'Web Development': 'linear-gradient(45deg, #3b82f6, #9333ea)',
    'Data Structures and Algorithms': 'linear-gradient(45deg,rgb(0, 0, 0),rgb(255, 255, 255),rgb(78, 78, 78))',
    'Machine Learning (learning)': 'linear-gradient(45deg,rgb(151, 151, 13),rgb(99, 147, 224))',
  };

  const gradient = gradients[skill] || 'linear-gradient(45deg, #3b82f6, #9333ea)'; // Default gradient

  return (
    <div className="cc bg-moving w-full sm:w-72 md:w-80 lg:w-96 h-72 sm:h-80 md:h-96" style={{ background: gradient }}>
      <div className="cc-1">
        <h3>{skill}</h3>
      </div>
    </div>
  );
}
