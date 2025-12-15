import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlusCircle, FiCheckCircle, FiCalendar, FiBarChart2, FiPlay, FiPause } from 'react-icons/fi';
import { useLanguage } from '../../src/contexts/LanguageContext';

export default function DemoModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tasks, setTasks] = useState([]);
  const { t } = useLanguage();

  const demoCopy = t('demoModal') || {};
  const stepsCopy = demoCopy.steps || [];
  const stepIcons = [FiPlusCircle, FiCheckCircle, FiCalendar, FiBarChart2];

  const demoSteps = stepsCopy.length
    ? stepsCopy.map((step, index) => {
        const Icon = stepIcons[index] || FiPlusCircle;
        return {
          ...step,
          action: ['add-task', 'task-details', 'schedule', 'dashboard'][index] || 'dashboard',
          icon: <Icon className="w-8 h-8" />
        };
      })
    : [
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

  const initialTaskTitle = demoCopy.tasks?.initial || "Revisar relatório mensal";
  const scheduledDateText = demoCopy.tasks?.scheduledDate || "Amanhã, 10:00";

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
        setTasks([{ id: 1, title: initialTaskTitle, priority: "high", status: "pending" }]);
      } else if (demoSteps[i].action === 'task-details') {
        await new Promise(r => setTimeout(r, 1000));
        setTasks([{ id: 1, title: initialTaskTitle, priority: "high", status: "in-progress" }]);
      } else if (demoSteps[i].action === 'schedule') {
        await new Promise(r => setTimeout(r, 1000));
        setTasks([{ id: 1, title: initialTaskTitle, priority: "high", status: "scheduled", date: scheduledDateText }]);
      } else if (demoSteps[i].action === 'dashboard') {
        await new Promise(r => setTimeout(r, 1000));
        setTasks([{ id: 1, title: initialTaskTitle, priority: "high", status: "completed", date: scheduledDateText }]);
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
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b-2 border-slate-200 bg-slate-50">
            <h3 className="text-2xl font-bold text-slate-900">
              {demoCopy.title || 'Demonstração Interativa'}
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
                    {isPlaying
                      ? (demoCopy.play?.running || 'Executando...')
                      : (demoCopy.play?.idle || 'Iniciar Demonstração')}
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
                          ? 'border-brand bg-brand/10'
                          : index < currentStep
                          ? 'border-accent bg-accent/10'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${
                          index === currentStep
                            ? 'bg-brand text-white'
                            : index < currentStep
                            ? 'bg-accent text-white'
                            : 'bg-slate-200 text-slate-600'
                        }`}>
                          {step.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {step.title}
                          </h4>
                          <p className="text-sm text-slate-700">
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
                <div className="bg-slate-50 rounded-lg p-4 h-96 border-2 border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-slate-900">{demoCopy.listTitle || 'Suas Tarefas'}</h4>
                    <div className="text-sm text-slate-700 font-medium">
                      {tasks.length}{' '}
                      {tasks.length === 1
                        ? (demoCopy.taskCount?.singular || 'tarefa')
                        : (demoCopy.taskCount?.plural || 'tarefas')}
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
                          className={`p-3 rounded-lg border-2 transition-all ${
                            task.status === 'completed'
                              ? 'border-accent bg-accent/10'
                              : task.status === 'scheduled'
                              ? 'border-brand bg-brand/10'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-4 h-4 rounded-full border-2 ${
                                  task.status === 'completed'
                                    ? 'bg-accent border-accent'
                                    : task.status === 'in-progress'
                                    ? 'border-brand bg-brand/10'
                                    : 'border-slate-400 bg-white'
                                }`}
                              >
                                {task.status === 'completed' && (
                                  <FiCheckCircle className="w-3 h-3 text-white m-0.5" />
                                )}
                              </div>
                              <span className={`font-medium ${
                                task.status === 'completed'
                                  ? 'line-through text-slate-500'
                                  : 'text-slate-900'
                              }`}>
                                {task.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {['high', 'alta'].includes(task.priority) && (
                                <span className="px-2 py-1 text-xs bg-brand/10 text-brand rounded">
                                  {demoCopy.priorityLabel || 'Alta'}
                                </span>
                              )}
                              {task.date && (
                                <span className="text-xs text-slate-600 font-medium">
                                  {task.date}
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {tasks.length === 0 && (
                      <div className="text-center text-slate-700 py-8">
                        <FiPlusCircle className="w-12 h-12 mx-auto mb-2 text-slate-400" />
                        <p className="font-medium">{demoCopy.empty || 'Clique em "Iniciar Demonstração" para ver como funciona'}</p>
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

