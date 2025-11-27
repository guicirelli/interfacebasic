import { FiStar } from 'react-icons/fi';

export default function TestimonialCard({ name, role, rating, text, avatar }) {
  const firstLetter = name ? name.charAt(0).toUpperCase() : '?';
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative">
      <div className="absolute top-4 left-4 text-6xl text-gray-200">"</div>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg mr-3">
          {firstLetter}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 relative z-10">{text}</p>
    </div>
  );
}

