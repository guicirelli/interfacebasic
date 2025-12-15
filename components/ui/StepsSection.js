import * as Icons from 'react-icons/fi';

export default function StepsSection({ steps = [] }) {
  if (!steps.length) return null;
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((step, i) => {
        const Icon = Icons[step.icon] || Icons.FiCheckCircle;
        return (
          <div
            key={i}
            className="bg-white border border-surface-subtle rounded-xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <div className="text-brand text-3xl mb-3">
              <Icon />
            </div>
            <h4 className="font-bold text-lg mb-2">{step.title}</h4>
            <p className="text-text-secondary">{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}


