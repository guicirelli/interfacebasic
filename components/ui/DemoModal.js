import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlusCircle, FiCheckCircle, FiCalendar, FiBarChart2, FiPlay, FiPause } from 'react-icons/fi';

export default function DemoModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tasks, setTasks] = useState([]);

  const demoSteps = [
    {
      title: "Adicionando uma nova tarefa",
      description: "Clique no botão + para criar uma tarefa",
      action: "add-task",
      icon: <FiPlusCircle className="w-8 h-8" />
    },
    {
      title: "Definindo detalhes da tarefa",
      description: "Dê um nome e defina a prioridade",
      action: "task-details",
      icon: <FiCheckCircle className="w-8 h-8" />
    },
    {
      title: "Agendando no calendário",
      description: "Escolha uma data e horário",
      action: "schedule",
      icon: <FiCalendar className="w-8 h-8" />
    },
    {
      title: "Visualizando no dashboard",
      description: "Acompanhe o progresso das suas tarefas",
      action: "dashboard",
      icon: <FiBarChart2 className="w-8 h-8" />
    }
  ];

  const runDemo = async () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    setTasks([]);

    for (let i = 0; i < demoSteps.length; i++) {
      setCurrentStep(i);

      if (demoSteps[i].action === 'add-task') {
        await new Promise(r => setTimeout(r, 1000));
        setTasks([{ id: 1, title: "Revisar relatório mensal", priority: "alta", status: "pending" }]);
      } else if (demoSteps[i].action === 'task-details') {
        await new Promise(r => setTimeout(r, 1000));
        setTasks([{ id: 1, title: "Revisar relatório mensal", priority: "alta", status: "in-progress" }]);
      } else if (demoSteps[i].action === 'schedule') {
        await new Promise(r => setTimeout(r, 1000));
        setTasks([{ id: 1, title: "Revisar relatório mensal", priority: "alta", status: "scheduled", date: "Amanhã, 10:00" }]);
      } else if (demoSteps[i].action === 'dashboard') {
        await new Promise(r => setTimeout(r, 1000));
        setTasks([{ id: 1, title: "Revisar relatório mensal", priority: "alta", status: "completed", date: "Amanhã, 10:00" }]);
      }

      await new Promise(r => setTimeout(r, 2000));
    }

    setIsPlaying(false);
    setCurrentStep(demoSteps.length);
  };

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setIsPlaying(false);
      setTasks([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white bg-opacity-90"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">
              Demonstração Interativa
            </h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left side - Steps */}
              <div>
                <div className="mb-6">
                  <button
                    onClick={runDemo}
                    className="btn btn-primary flex items-center gap-2"
                    disabled={isPlaying && currentStep < demoSteps.length}
                  >
                    {isPlaying ? <FiPause className="w-4 h-4" /> : <FiPlay className="w-4 h-4" />}
                    {isPlaying ? 'Executando...' : 'Iniciar Demonstração'}
                  </button>
                </div>

                <div className="space-y-4">
                  {demoSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0.5 }}
                      animate={{
                        opacity: index <= currentStep ? 1 : 0.5,
                        scale: index === currentStep ? 1.02 : 1
                      }}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        index === currentStep
                          ? 'border-brand bg-brand bg-opacity-5'
                          : index < currentStep
                          ? 'border-green-300 bg-green-50 dark:bg-green-900 dark:bg-opacity-20'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${
                          index === currentStep
                            ? 'bg-brand text-white'
                            : index < currentStep
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {step.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {step.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right side - Mock interface */}
              <div>
                <div className="bg-gray-50 rounded-lg p-4 h-96 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Suas Tarefas</h4>
                    <div className="text-sm text-gray-600">
                      {tasks.length} tarefa{tasks.length !== 1 ? 's' : ''}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <AnimatePresence>
                      {tasks.map((task) => (
                        <motion.div
                          key={task.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`p-3 rounded-lg border transition-all ${
                            task.status === 'completed'
                              ? 'border-green-300 bg-green-50 dark:bg-green-900 dark:bg-opacity-20'
                              : task.status === 'scheduled'
                              ? 'border-red-300 bg-red-50 dark:bg-red-900 dark:bg-opacity-20'
                              : 'border-gray-300 bg-white dark:bg-gray-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                task.status === 'completed'
                                  ? 'bg-green-500 border-green-500'
                                  : task.status === 'in-progress'
                                  ? 'border-red-600'
                                  : 'border-gray-300'
                              }`}>
                                {task.status === 'completed' && (
                                  <FiCheckCircle className="w-3 h-3 text-white m-0.5" />
                                )}
                              </div>
                              <span className={`font-medium ${
                                task.status === 'completed'
                                  ? 'line-through text-gray-500'
                                  : 'text-gray-900'
                              }`}>
                                {task.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {task.priority === 'alta' && (
                                <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
                                  Alta
                                </span>
                              )}
                              {task.date && (
                                <span className="text-xs text-gray-500">
                                  {task.date}
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {tasks.length === 0 && (
                      <div className="text-center text-gray-500 py-8">
                        <FiPlusCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>Clique em "Iniciar Demonstração" para ver como funciona</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

