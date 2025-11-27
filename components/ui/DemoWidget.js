import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlusCircle, FiCheckCircle, FiCalendar, FiBarChart2 } from 'react-icons/fi';

export default function DemoWidget({ buttonLabel = 'Rodar demonstração' }) {
  const [running, setRunning] = useState(false);
  const [steps, setSteps] = useState([]);

  const runDemo = async () => {
    if (running) return;
    setRunning(true);
    setSteps([]);

    const sequence = [
      { icon: <FiPlusCircle />, text: 'Adicionando tarefa: "Revisar relatório mensal"' },
      { icon: <FiCalendar />, text: 'Agendando para amanhã às 10h' },
      { icon: <FiCheckCircle />, text: 'Marcando como prioridade alta' },
      { icon: <FiBarChart2 />, text: 'Visualizando progresso no dashboard' },
    ];

    for (const step of sequence) {
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, 800));
      setSteps((prev) => [...prev, step]);
    }

    setRunning(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-center mb-6">
        <button onClick={runDemo} className="btn btn-primary" disabled={running}>
          {running ? 'Executando...' : buttonLabel}
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
        <AnimatePresence>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 py-2"
            >
              <span className="text-brand text-xl">{step.icon}</span>
              <span className="text-gray-800">{step.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        {steps.length === 0 && (
          <p className="text-center text-gray-500">Clique em "{buttonLabel}" para ver como funciona.</p>
        )}
      </div>
    </div>
  );
}
