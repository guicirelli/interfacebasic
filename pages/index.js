import { useState } from 'react';
import { FiPlay, FiStar, FiPlus, FiCheck, FiEdit, FiTrash2, FiClock, FiFileText, FiZap, FiCalendar, FiTag, FiX } from 'react-icons/fi';
import Layout from '../components/layout/Layout';
import PageSection from '../components/ui/PageSection';
import TopRibbon from '../components/ui/TopRibbon';
import CtaButton from '../components/ui/CtaButton';
import FeatureCard from '../components/ui/FeatureCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import PricingCard from '../components/ui/PricingCard';
import Counter from '../components/ui/Counter';
import LogosStrip from '../components/ui/LogosStrip';
import StepsSection from '../components/ui/StepsSection';
import IntegrationsGrid from '../components/ui/IntegrationsGrid';
import FAQAccordion from '../components/ui/FAQAccordion';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import DemoModal from '../components/ui/DemoModal';
import AnimatedSection from '../components/ui/AnimatedSection';
import LazyImage from '../components/ui/LazyImage';

export default function Home({ settings }) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <Layout settings={settings}>
      {settings.sections.topRibbon.enabled && (
        <TopRibbon
          message={settings.sections.topRibbon.message}
          closeable={settings.sections.topRibbon.closeable}
        />
      )}

      {/* HERO */}
      <PageSection id="hero" bgColor="bg-[#8B3A3A] text-white" vPadding="py-16">
        <AnimatedSection animation="slideUp">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Conteúdo Principal */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading leading-tight">
                  Pare de se perder em
                  <span className="block text-red-200">
                    listas infinitas
                  </span>
                </h1>
                
                <p className="text-lg mb-8 opacity-90 max-w-lg mx-auto lg:mx-0">
                  O Flowly usa <strong>inteligência artificial</strong> para organizar suas tarefas automaticamente, 
                  priorizar o que realmente importa e fazer você <strong>produzir 3x mais</strong> em menos tempo.
                </p>

                {/* CTAs */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <button 
                    onClick={() => setDemoModalOpen(true)}
                    className="px-8 py-4 bg-transparent text-white border-2 border-white hover:bg-white hover:text-red-600 transition-colors font-bold rounded-lg"
                  >
                    <FiPlay className="inline mr-2" /> Ver em ação (30s)
                  </button>
                </div>

                {/* Prova social */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-red-300 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-green-300 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-yellow-300 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="opacity-90">+1.2k usuários ativos</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="text-yellow-300 fill-current" size={16} />
                      ))}
                    </div>
                    <span className="opacity-90">4.8/5 avaliação</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Premium - Versão Final Profissional */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 overflow-hidden shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                    {/* Dashboard Premium - Funcional e Prático */}
                    <div className="w-full p-5" style={{ height: '580px', overflow: 'hidden' }}>
                      {/* Header Funcional */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-gray-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-red-800 rounded-xl flex items-center justify-center shadow-md">
                            <span className="text-white font-bold">F</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">Dashboard Flowly</h3>
                            <p className="text-xs text-gray-500">15 de Dezembro, 2024</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-50 rounded-lg border border-green-200">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-700 font-semibold">Sincronizado</span>
                        </div>
                      </div>

                      {/* BLOCO 1: Métricas Rápidas - Layout Horizontal Prático */}
                      <div className="mb-4">
                        <div className="grid grid-cols-5 gap-3">
                          {/* Concluídas */}
                          <div className="bg-white rounded-lg p-3 border-l-4 border-green-500 shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <FiCheck className="text-green-500" size={18} />
                              <span className="text-xs text-gray-500">Hoje</span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">12</div>
                            <div className="text-xs text-gray-600 font-medium">Concluídas</div>
                          </div>

                          {/* Em Andamento */}
                          <div className="bg-white rounded-lg p-3 border-l-4 border-yellow-500 shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <FiClock className="text-yellow-500" size={18} />
                              <span className="text-xs text-gray-500">Ativo</span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">3</div>
                            <div className="text-xs text-gray-600 font-medium">Em andamento</div>
                          </div>

                          {/* Pendentes */}
                          <div className="bg-white rounded-lg p-3 border-l-4 border-red-500 shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <FiFileText className="text-red-500" size={18} />
                              <span className="text-xs text-gray-500">Aguardando</span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">5</div>
                            <div className="text-xs text-gray-600 font-medium">Pendentes</div>
                          </div>

                          {/* Urgentes */}
                          <div className="bg-white rounded-lg p-3 border-l-4 border-orange-500 shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <FiZap className="text-orange-500" size={18} />
                              <span className="text-xs text-orange-600 font-semibold">Urgente</span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">2</div>
                            <div className="text-xs text-gray-600 font-medium">Urgentes</div>
                          </div>

                          {/* Produtividade */}
                          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-3 border-l-4 border-purple-500 shadow-md">
                            <div className="flex items-center justify-between mb-1">
                              <FiZap className="text-purple-600" size={18} />
                              <span className="text-xs text-purple-600 font-semibold">↑ +127%</span>
                            </div>
                            <div className="text-2xl font-bold text-purple-700">+127%</div>
                            <div className="text-xs text-gray-600 font-medium">Produtividade</div>
                          </div>
                        </div>
                      </div>

                      {/* BLOCO 2: Lista de Tarefas - Layout Prático e Funcional */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-bold text-gray-900">Tarefas do dia</h4>
                          <div className="flex items-center gap-2">
                            <div className="text-xs text-gray-500">3 de 5 concluídas</div>
                            <div className="px-3 py-1.5 bg-red-700 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5">
                              <FiPlus size={14} /> Nova tarefa
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                          {/* Tarefa 1: Concluída */}
                          <div className="bg-white rounded-lg p-3 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3 flex-1">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <FiCheck className="text-green-600" size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h5 className="text-sm font-bold text-gray-900">Reunião com cliente</h5>
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">Concluída</span>
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    <span>Finalizada</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center flex-shrink-0">
                                <div className="p-1.5 text-gray-400 hover:text-red-600 rounded cursor-pointer">
                                  <FiEdit size={14} />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Tarefa 2: Em Andamento */}
                          <div className="bg-white rounded-lg p-3 border-l-4 border-yellow-500 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3 flex-1">
                                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <FiClock className="text-yellow-600" size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h5 className="text-sm font-bold text-gray-900">Relatório mensal</h5>
                                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">Em andamento</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center flex-shrink-0">
                                <div className="p-1.5 text-gray-400 hover:text-red-600 rounded cursor-pointer">
                                  <FiEdit size={14} />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Tarefa 3: Agendada */}
                          <div className="bg-white rounded-lg p-3 border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3 flex-1">
                                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <FiCalendar className="text-red-600" size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h5 className="text-sm font-bold text-gray-900">Apresentação para diretoria</h5>
                                    <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">Agendada</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1 flex-shrink-0">
                                <div className="p-1.5 text-gray-400 hover:text-red-600 rounded cursor-pointer">
                                  <FiEdit size={14} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Elementos flutuantes */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-3 py-1.5 rounded-full text-xs font-bold animate-bounce shadow-lg">
                  <FiZap className="inline mr-1" size={12} /> IA Ativa
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </PageSection>

      {/* LOGOS */}
      <PageSection id="logos" bgColor="bg-gray-50" vPadding="py-16">
        <LogosStrip logos={settings.sections.logos.items} />
      </PageSection>

      {/* ABOUT */}
      <PageSection id="about" vPadding="py-20">
        <AnimatedSection animation="fadeIn">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-heading text-gray-900">
                {settings.sections.about.title}
              </h2>
              <div className="prose prose-lg mb-8 text-gray-600">
                {settings.sections.about.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
                ))}
              </div>
              {settings.sections.about.bullets && (
                <ul className="space-y-4">
                  {settings.sections.about.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-brand rounded-full mr-4 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative">
              {/* Atalhos Rápidos - Movidos para cá */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-red-700 rounded-full"></div>
                  Atalhos Rápidos
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center p-5 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border-2 border-red-200 shadow-lg">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                      <FiPlus className="text-white" size={24} />
                    </div>
                    <span className="text-sm font-bold text-red-700">Nova tarefa</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 shadow-lg">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-3 shadow-md">
                      <FiFileText className="text-white" size={24} />
                    </div>
                    <span className="text-sm font-bold text-green-700">Novo projeto</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 shadow-lg">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-3 shadow-md">
                      <FiFileText className="text-white" size={24} />
                    </div>
                    <span className="text-sm font-bold text-purple-700">Gerar relatório</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-5 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl border-2 border-yellow-200 shadow-lg">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-3 shadow-md">
                      <FiCalendar className="text-white" size={24} />
                    </div>
                    <span className="text-sm font-bold text-yellow-700">Agenda do dia</span>
                  </div>
                </div>
              </div>

              {/* Insights da IA - Movido para cá */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-purple-600 rounded-full"></div>
                  Insights da IA
                </h3>
                <div className="bg-gradient-to-br from-purple-100 via-indigo-50 to-purple-100 rounded-2xl p-5 border-2 border-purple-300 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-200 rounded-full -mr-12 -mt-12 opacity-20"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <FiZap className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-purple-700 bg-purple-200 px-2 py-1 rounded-full">🤖 IA</span>
                        <span className="text-sm font-semibold text-purple-600">Recomendação inteligente</span>
                      </div>
                      <p className="text-sm text-gray-800 font-semibold leading-relaxed">
                        "Focar nas tarefas urgentes aumenta sua eficiência em 32% hoje."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </PageSection>

      {/* FEATURES */}
      <PageSection id="features" bgColor="bg-gray-50" vPadding="py-20">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              {settings.sections.features.title}
            </h2>
            <p className="text-xl text-gray-600">
              {settings.sections.features.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {settings.sections.features.items.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                microBenefits={feature.microBenefits}
              />
            ))}
          </div>
        </AnimatedSection>
      </PageSection>

      {/* HOW AI WORKS */}
      <PageSection id="how-ai-works" vPadding="py-20">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Como nossa IA funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa inteligência artificial aprende seus padrões e prioriza automaticamente suas tarefas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <FiCalendar className="text-4xl mb-4 text-red-600" size={40} />
              <h3 className="font-bold text-lg mb-2">Prioriza pelo prazo</h3>
              <p className="text-gray-600 text-sm">
                Tarefas com prazos próximos aparecem primeiro automaticamente
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <FiZap className="text-4xl mb-4 text-yellow-600" size={40} />
              <h3 className="font-bold text-lg mb-2">Analisa urgência</h3>
              <p className="text-gray-600 text-sm">
                Identifica tarefas críticas baseado no contexto e importância
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <FiTag className="text-4xl mb-4 text-purple-600" size={40} />
              <h3 className="font-bold text-lg mb-2">Classifica por tipo</h3>
              <p className="text-gray-600 text-sm">
                Agrupa tarefas similares e sugere a melhor ordem de execução
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <FiZap className="text-4xl mb-4 text-indigo-600" size={40} />
              <h3 className="font-bold text-lg mb-2">Aprendizado semanal</h3>
              <p className="text-gray-600 text-sm">
                Melhora suas sugestões a cada semana baseado nos seus hábitos
              </p>
            </div>
          </div>
        </AnimatedSection>
      </PageSection>

      {/* HOW IT WORKS */}
      <PageSection id="how-it-works" vPadding="py-20">
        <StepsSection steps={settings.sections.howItWorks.steps} />
      </PageSection>

      {/* INTEGRATIONS */}
      <PageSection id="integrations" bgColor="bg-gray-50" vPadding="py-20">
        <IntegrationsGrid integrations={settings.sections.integrations.items} />
      </PageSection>

      {/* DEMO */}
      <PageSection id="demo" vPadding="py-20">
        <AnimatedSection animation="scaleIn">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              {settings.sections.demo.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {settings.sections.demo.subtitle}
            </p>
            <CtaButton
              variant="primary"
              onClick={() => setDemoModalOpen(true)}
            >
              {settings.sections.demo.button}
            </CtaButton>
          </div>
        </AnimatedSection>
      </PageSection>

      {/* TESTIMONIALS */}
      <PageSection id="testimonials" bgColor="bg-gray-50" vPadding="py-20">
        <TestimonialSlider testimonials={settings.sections.testimonials.items} />
      </PageSection>

      {/* PRICING */}
      <PageSection id="pricing" vPadding="py-20">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              {settings.sections.pricing.title}
            </h2>
            <p className="text-xl text-gray-600">
              {settings.sections.pricing.subtitle}
          </p>
        </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {settings.sections.pricing.plans.map((plan, i) => (
              <PricingCard
                key={i}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                cta={plan.cta}
                featured={plan.featured}
              />
            ))}
          </div>
        </AnimatedSection>
      </PageSection>

      {/* PRICING COMPARISON TABLE */}
      <PageSection id="pricing-comparison" bgColor="bg-gray-50" vPadding="py-20">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Compare os planos
            </h2>
            <p className="text-xl text-gray-600">
              Veja todas as diferenças em um só lugar
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-red-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Funcionalidade</th>
                  <th className="px-6 py-4 text-center font-bold">Grátis</th>
                  <th className="px-6 py-4 text-center font-bold bg-yellow-400 text-gray-900">Profissional</th>
                  <th className="px-6 py-4 text-center font-bold">Empresarial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Tarefas</td>
                  <td className="px-6 py-4 text-center">Até 50</td>
                  <td className="px-6 py-4 text-center bg-yellow-50 font-semibold">Ilimitadas</td>
                  <td className="px-6 py-4 text-center">Ilimitadas</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Projetos</td>
                  <td className="px-6 py-4 text-center">3</td>
                  <td className="px-6 py-4 text-center bg-yellow-50 font-semibold">Ilimitados</td>
                  <td className="px-6 py-4 text-center">Ilimitados</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">IA de Priorização</td>
                  <td className="px-6 py-4 text-center text-gray-400"><FiX size={18} /></td>
                  <td className="px-6 py-4 text-center bg-yellow-50 font-semibold text-green-600"><FiCheck size={18} /></td>
                  <td className="px-6 py-4 text-center text-green-600"><FiCheck size={18} /></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Relatórios Avançados</td>
                  <td className="px-6 py-4 text-center text-gray-400">Básicos</td>
                  <td className="px-6 py-4 text-center bg-yellow-50 font-semibold text-green-600"><FiCheck size={18} /></td>
                  <td className="px-6 py-4 text-center text-green-600"><FiCheck size={18} /></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Integrações</td>
                  <td className="px-6 py-4 text-center text-gray-400"><FiX size={18} /></td>
                  <td className="px-6 py-4 text-center bg-yellow-50 font-semibold text-green-600"><FiCheck size={18} /></td>
                  <td className="px-6 py-4 text-center text-green-600"><FiCheck size={18} /></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Usuários</td>
                  <td className="px-6 py-4 text-center">1</td>
                  <td className="px-6 py-4 text-center bg-yellow-50">1</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">Até 10</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Dashboard Admin</td>
                  <td className="px-6 py-4 text-center text-gray-400"><FiX size={18} /></td>
                  <td className="px-6 py-4 text-center bg-yellow-50 text-gray-400"><FiX size={18} /></td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600"><FiCheck size={18} /></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Suporte</td>
                  <td className="px-6 py-4 text-center">Email</td>
                  <td className="px-6 py-4 text-center bg-yellow-50">Email</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">Prioritário 24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </PageSection>

      {/* FAQ */}
      <PageSection id="faq" bgColor="bg-gray-50" vPadding="py-20">
        <FAQAccordion faqs={settings.sections.faq.items} />
      </PageSection>

      {/* LOGIN SECTION */}
      <PageSection
        id="login"
        bgColor="bg-[#8B3A3A] text-white"
        vPadding="py-20"
      >
        <AnimatedSection animation="scaleIn">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              Pronto para ser mais produtivo?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a milhares de usuários que já transformaram sua produtividade com IA.
            </p>
            
            {/* Login Form */}
            <div className="max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">
                  Criar conta grátis
                </h3>
                
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-white/70 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                  <input
                    type="password"
                    placeholder="Crie uma senha"
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-white/70 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    🚀 Começar grátis agora
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm opacity-75 mb-4">
                    Não é necessário cartão de crédito
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-red-300 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-green-300 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-yellow-300 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="opacity-90">+1.2k usuários ativos</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="text-yellow-300 fill-current" size={16} />
                        ))}
                      </div>
                      <span className="opacity-90">4.8/5 avaliação</span>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </div>
        </AnimatedSection>
      </PageSection>

      {/* Demo Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = {
    business: require('../content/settings/business.json'),
    general: require('../content/settings/general.json'),
    theme: require('../content/settings/theme.json'),
    sections: require('../content/settings/sections.json')
  };

  return { props: { settings } };
}