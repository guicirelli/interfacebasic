import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlusCircle, FiCheckCircle, FiCalendar, FiBarChart2 } from 'react-icons/fi';
import { useLanguage } from '../../src/contexts/LanguageContext';

export default function DemoWidget({ buttonLabel }) {
  const [running, setRunning] = useState(false);
  const [steps, setSteps] = useState([]);
  const { t } = useLanguage();
  const copy = t('demoWidget') || {};
  const label = buttonLabel || copy.button || 'Rodar demonstração';
  const runningLabel = copy.running || 'Executando...';
  const emptyTemplate = copy.empty || 'Clique em "{button}" para ver como funciona.';
  const emptyMessage = emptyTemplate.replace('{button}', label);

  const icons = [FiPlusCircle, FiCalendar, FiCheckCircle, FiBarChart2];
  const sequenceTexts = copy.steps || [
    'Adicionando tarefa: "Revisar relatório mensal"',
    'Agendando para amanhã às 10h',
    'Marcando como prioridade alta',
    'Visualizando progresso no dashboard'
  ];

  const runDemo = async () => {
    if (running) return;
    setRunning(true);
    setSteps([]);

    const sequence = sequenceTexts.map((text, index) => {
      const Icon = icons[index] || FiPlusCircle;
      return { icon: <Icon />, text };
    });

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
          {running ? runningLabel : label}
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
          <p className="text-center text-gray-500">{emptyMessage}</p>
        )}
      </div>
    </div>
  );
}
