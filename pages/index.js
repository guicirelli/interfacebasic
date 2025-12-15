import { useMemo, useState } from 'react';
import { FiPlay, FiStar, FiPlus, FiCheck, FiEdit, FiClock, FiFileText, FiZap, FiCalendar, FiTag, FiX } from 'react-icons/fi';
import Layout from '../components/layout/Layout';
import PageSection from '../components/ui/PageSection';
import TopRibbon from '../components/ui/TopRibbon';
import CtaButton from '../components/ui/CtaButton';
import FeatureCard from '../components/ui/FeatureCard';
import PricingCard from '../components/ui/PricingCard';
import LogosStrip from '../components/ui/LogosStrip';
import StepsSection from '../components/ui/StepsSection';
import IntegrationsGrid from '../components/ui/IntegrationsGrid';
import FAQAccordion from '../components/ui/FAQAccordion';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import DemoModal from '../components/ui/DemoModal';
import AnimatedSection from '../components/ui/AnimatedSection';
import { useLanguage } from '../src/contexts/LanguageContext';
import { loadLanguageConfig } from '../lib/utils';

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const { settings, t } = useLanguage();

  if (!settings) return null;

  const sections = settings.sections || {};
  const hero = sections.hero || {};
  const heroTranslation = t('hero') || {};
  const heroMetrics = heroTranslation.metrics || {};
  const heroTasksCopy = heroTranslation.tasks || {};
  const heroListTitle = heroTranslation.listTitle || t('demoModal.listTitle') || 'Your tasks';
  const shortcutsCopy = t('shortcuts') || {};
  const insightsCopy = t('insights') || {};
  const howIntro = t('howItWorksIntro') || {};
  const aiCopy = t('aiSection') || {};
  const comparisonCopy = t('pricingComparison') || {};
  const loginCopy = t('loginSection') || {};
  const pricingPlans = sections.pricing?.plans || [];
  const comparisonRows = Object.entries(comparisonCopy.rows || {});
  const comparisonHeaders = [
    comparisonCopy.headers?.free || pricingPlans[0]?.name,
    comparisonCopy.headers?.pro || pricingPlans[1]?.name,
    comparisonCopy.headers?.enterprise || pricingPlans[2]?.name,
  ];

  const aiIconMap = useMemo(
    () => ({
      FiCalendar,
      FiZap,
      FiTag,
      FiCheck
    }),
    []
  );
  const aiColors = ['text-brand', 'text-accent', 'text-brandDark', 'text-accent'];

  const renderComparisonValue = (value) => {
    if (!value) {
      return <FiX size={18} className="mx-auto text-slate-400" />;
    }
    if (value === '—') {
      return <FiX size={18} className="mx-auto text-slate-400" />;
    }
    const normalized = value.toString().toLowerCase();
    if (['disponível', 'disponiveis', 'disponíveis', 'available'].includes(normalized)) {
      return <FiCheck size={18} className="mx-auto text-accent" />;
    }
    return value;
  };

  return (
    <Layout>
      {sections.topRibbon?.enabled && (
        <TopRibbon
          message={sections.topRibbon.message}
          closeable={sections.topRibbon.closeable}
        />
      )}

      {/* HERO */}
      <PageSection id="hero" bgColor="bg-brand text-white" vPadding="py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24 2xl:py-28">
        <AnimatedSection animation="slideUp">
          <div className="max-w-6xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
              {/* Conteúdo Principal */}
              <div className="text-center lg:text-left space-y-4 sm:space-y-4 md:space-y-5 lg:space-y-5">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-heading leading-tight tracking-tight" style={{ 
                  color: '#FFFFFF',
                  WebkitTextStroke: '0.5px #000000',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(0, 0, 0, 0.8), 1px -1px 2px rgba(0, 0, 0, 0.8), -1px 1px 2px rgba(0, 0, 0, 0.8)',
                  letterSpacing: '-0.02em'
                }}>
                  {hero.title}
                </h1>

                {hero.description && (
                  <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    {hero.description}
                  </p>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 sm:gap-4">
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-10 xl:py-4 text-sm sm:text-base md:text-base lg:text-base bg-white text-brand font-semibold rounded-xl shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                  >
                    <FiPlay className="text-brandDark" /> {hero.ctaPrimary || 'Ver demonstração'}
                  </button>
                  {hero.ctaSecondary && (
                    <a
                      href="#login"
                      className="px-6 py-3 sm:px-8 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-10 xl:py-4 text-sm sm:text-base md:text-base lg:text-base rounded-xl border border-white/35 text-white font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-colors duration-200 text-center"
                    >
                      {hero.ctaSecondary}
                    </a>
                  )}
                </div>

                {/* Prova social */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/80 text-sm md:text-base pt-2">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border border-white/60 bg-white/15 backdrop-blur-sm"></div>
                      <div className="w-8 h-8 rounded-full border border-white/60 bg-white/15 backdrop-blur-sm"></div>
                      <div className="w-8 h-8 rounded-full border border-white/60 bg-white/15 backdrop-blur-sm"></div>
                    </div>
                    <span>{hero.social?.users}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiStar className="text-accentLight" />
                    <span>{hero.social?.rating}</span>
                  </div>
                </div>
              </div>

              {/* Dashboard de alta visibilidade */}
              <div className="relative mt-8 lg:mt-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 overflow-hidden shadow-2xl">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-white">
                    <div className="w-full p-4 sm:p-6 md:p-8" style={{ minHeight: '400px', height: 'auto', maxHeight: '580px', overflow: 'hidden' }}>
                      {/* Header Funcional */}
                      <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-slate-100">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand rounded-xl flex items-center justify-center shadow-md">
                            <span className="text-white font-bold text-sm sm:text-base">F</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 text-sm sm:text-base md:text-lg">Dashboard Flowly</h3>
                            <p className="text-xs text-slate-500">15 de Dezembro, 2024</p>
                          </div>
                        </div>
                      </div>

                      {/* BLOCO 1: Métricas Rápidas - Layout Horizontal Prático */}
                      <div className="mb-3 sm:mb-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                          {/* Concluídas */}
                          <div className="bg-white rounded-lg p-2 sm:p-3 border-l-4 border-accent shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <FiCheck className="text-accent" size={16} style={{ minWidth: '16px' }} />
                              <span className="text-xs text-slate-900 truncate ml-1">{heroMetrics.completed?.timestamp}</span>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold text-slate-900">{heroMetrics.completed?.value}</div>
                            <div className="text-xs text-slate-900 font-medium truncate">{heroMetrics.completed?.label}</div>
                          </div>

                          {/* Em Andamento */}
                          <div className="bg-white rounded-lg p-2 sm:p-3 border-l-4 border-brand shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <FiClock className="text-brand" size={16} style={{ minWidth: '16px' }} />
                              <span className="text-xs text-slate-900 truncate ml-1">{heroMetrics.inProgress?.timestamp}</span>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold text-slate-900">{heroMetrics.inProgress?.value}</div>
                            <div className="text-xs text-slate-900 font-medium truncate">{heroMetrics.inProgress?.label}</div>
                          </div>

                          {/* Pendentes */}
                          <div className="bg-white rounded-lg p-2 sm:p-3 border-l-4 border-accent shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <FiFileText className="text-accent" size={16} style={{ minWidth: '16px' }} />
                              <span className="text-xs text-slate-900 truncate ml-1">{heroMetrics.pending?.timestamp}</span>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold text-slate-900">{heroMetrics.pending?.value}</div>
                            <div className="text-xs text-slate-900 font-medium truncate">{heroMetrics.pending?.label}</div>
                          </div>

                          {/* Urgentes */}
                          <div className="bg-white rounded-lg p-2 sm:p-3 border-l-4 border-brand shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <FiZap className="text-brand" size={16} style={{ minWidth: '16px' }} />
                              <span className="text-xs text-slate-900 truncate ml-1">{heroMetrics.urgent?.timestamp}</span>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold text-slate-900">{heroMetrics.urgent?.value}</div>
                            <div className="text-xs text-slate-900 font-medium truncate">{heroMetrics.urgent?.label}</div>
                          </div>
                        </div>
                      </div>

                      {/* BLOCO 2: Lista de Tarefas - Layout Prático e Funcional */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-bold text-slate-900">{heroListTitle}</h4>
                          <div className="flex items-center gap-2">
                            <div className="text-xs text-text-secondary">{heroTasksCopy.progress}</div>
                            <div className="px-3 py-1.5 bg-brand text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5">
                              <FiPlus size={14} /> {heroTasksCopy.addButton}
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                          {/* Tarefa 1: Concluída */}
                          <div className="bg-white rounded-lg p-3 border-l-4 border-accent shadow-sm hover:shadow-md transition">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3 flex-1">
                                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <FiCheck className="text-accent" size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h5 className="text-sm font-bold text-slate-900">{heroTasksCopy.completed?.title}</h5>
                                    <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded">
                                      {heroTasksCopy.completed?.badge}
                                    </span>
                                  </div>
                                  {heroTasksCopy.completed?.detail && (
                                    <div className="text-xs text-text-secondary">
                                      <span>{heroTasksCopy.completed.detail}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center flex-shrink-0">
                                <div className="p-1.5 text-slate-400 hover:text-brand rounded cursor-pointer">
                                  <FiEdit size={14} />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Tarefa 2: Em Andamento */}
                          <div className="bg-white rounded-lg p-3 border-l-4 border-brand shadow-sm hover:shadow-md transition">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3 flex-1">
                                <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <FiClock className="text-brand" size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h5 className="text-sm font-bold text-slate-900">{heroTasksCopy.inProgress?.title}</h5>
                                    <span className="px-2 py-0.5 bg-brand/10 text-brand text-xs font-semibold rounded">
                                      {heroTasksCopy.inProgress?.badge}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center flex-shrink-0">
                                <div className="p-1.5 text-slate-400 hover:text-brand rounded cursor-pointer">
                                  <FiEdit size={14} />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Tarefa 3: Agendada */}
                          <div className="bg-white rounded-lg p-3 border-l-4 border-accent shadow-sm hover:shadow-md transition">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3 flex-1">
                                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <FiCalendar className="text-accent" size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h5 className="text-sm font-bold text-slate-900">{heroTasksCopy.scheduled?.title}</h5>
                                    <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded">
                                      {heroTasksCopy.scheduled?.badge}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1 flex-shrink-0">
                                <div className="p-1.5 text-slate-400 hover:text-brand rounded cursor-pointer">
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
              </div>
            </div>
          </div>
        </AnimatedSection>
      </PageSection>

      {/* COMO FUNCIONA */}
      <PageSection
        id="how-it-works"
        bgColor="bg-surface-subtle"
        vPadding="py-16 md:py-20"
      >
        <AnimatedSection animation="fadeIn">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
              {howIntro.title || sections.howItWorks?.title}
            </h2>
            <p className="text-lg md:text-xl text-text-secondary">
              {howIntro.description}
            </p>
          </div>
          <StepsSection steps={sections.howItWorks.steps} />
        </AnimatedSection>
      </PageSection>

      {/* LOGOS */}
      <PageSection id="logos" bgColor="bg-surface-subtle" vPadding="py-16">
        <LogosStrip logos={sections.logos.items} />
      </PageSection>

      {/* ABOUT */}
      <PageSection id="about" vPadding="py-20">
        <AnimatedSection animation="fadeIn">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-heading text-gray-900">
                {sections.about.title}
              </h2>
              <div className="prose prose-lg mb-8 text-gray-600">
                {sections.about.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
                ))}
              </div>
              {sections.about.bullets && (
                <ul className="space-y-4">
                  {sections.about.bullets.map((bullet, i) => (
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
                  <div className="w-1 h-6 bg-brand rounded-full"></div>
                  {shortcutsCopy.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center p-5 bg-brand/10 rounded-2xl border border-brand/30 shadow-lg">
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center mb-3 shadow-md">
                      <FiPlus className="text-white" size={24} />
                    </div>
                    <span className="text-sm font-bold text-brand">{shortcutsCopy.items?.newTask}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-5 bg-accent/10 rounded-2xl border border-accent/30 shadow-lg">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-3 shadow-md">
                      <FiFileText className="text-white" size={24} />
                    </div>
                    <span className="text-sm font-bold text-accent">{shortcutsCopy.items?.newProject}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-5 bg-accent/10 rounded-2xl border border-accent/30 shadow-lg">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-3 shadow-md">
                      <FiFileText className="text-white" size={24} />
                    </div>
                    <span className="text-sm font-bold text-accent">{shortcutsCopy.items?.generateReport}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-5 bg-brand/10 rounded-2xl border border-brand/30 shadow-lg">
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center mb-3 shadow-md">
                      <FiCalendar className="text-white" size={24} />
                    </div>
                    <span className="text-sm font-bold text-brand">{shortcutsCopy.items?.daySchedule}</span>
                  </div>
                </div>
              </div>

              {/* Insights da IA - Movido para cá */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-accent rounded-full"></div>
                  {insightsCopy.title}
                </h3>
                <div className="bg-white rounded-2xl p-5 border border-accent/20 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accentLight/40 rounded-full -mr-12 -mt-12 opacity-20"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <FiZap className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-accent bg-accent/20 px-2 py-1 rounded-full">{insightsCopy.badge}</span>
                        <span className="text-sm font-semibold text-accent">{insightsCopy.label}</span>
                      </div>
                      <p className="text-sm text-gray-800 font-semibold leading-relaxed">
                        {insightsCopy.quote}
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
      <PageSection id="features" bgColor="bg-surface-subtle" vPadding="py-20">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              {sections.features.title}
            </h2>
            <p className="text-xl text-gray-600">
              {sections.features.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.features.items.map((feature, i) => (
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
              {aiCopy.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {aiCopy.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {(aiCopy.cards || []).map((card, index) => {
              const Icon = aiIconMap[card.icon] || FiZap;
              const colorClass = aiColors[index % aiColors.length];
              return (
                <div key={card.title} className="bg-white p-6 rounded-lg shadow-lg border border-surface-subtle hover:shadow-xl transition">
                  <Icon className={`text-4xl mb-4 ${colorClass}`} size={40} />
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </PageSection>

      {/* INTEGRATIONS */}
      <PageSection id="integrations" bgColor="bg-surface-subtle" vPadding="py-20">
        <IntegrationsGrid integrations={sections.integrations.items} />
      </PageSection>

      {/* DEMO */}
      <PageSection id="demo" vPadding="py-20">
        <AnimatedSection animation="scaleIn">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              {sections.demo.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {sections.demo.subtitle}
            </p>
            <CtaButton
              variant="primary"
              onClick={() => setDemoModalOpen(true)}
            >
              {sections.demo.button}
            </CtaButton>
          </div>
        </AnimatedSection>
      </PageSection>

      {/* TESTIMONIALS */}
      <PageSection id="testimonials" bgColor="bg-surface-subtle" vPadding="py-20">
        <TestimonialSlider testimonials={sections.testimonials.items} />
      </PageSection>

      {/* PRICING */}
      <PageSection id="pricing" vPadding="py-20">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              {sections.pricing.title}
            </h2>
            <p className="text-xl text-gray-600">
              {sections.pricing.subtitle}
          </p>
        </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sections.pricing.plans.map((plan, i) => (
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
      <PageSection id="pricing-comparison" bgColor="bg-surface-subtle" vPadding="py-20">
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
              <thead className="bg-brand text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">
                    {comparisonCopy.featureLabel || 'Funcionalidade'}
                  </th>
                  <th className="px-6 py-4 text-center font-bold">{comparisonHeaders[0]}</th>
                  <th className="px-6 py-4 text-center font-bold bg-accent text-white">{comparisonHeaders[1]}</th>
                  <th className="px-6 py-4 text-center font-bold">{comparisonHeaders[2]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonRows.map(([key, row]) => (
                  <tr key={key} className="hover:bg-surface-subtle transition-colors">
                    <td className="px-6 py-4 font-medium">{row.label}</td>
                    {[0, 1, 2].map((index) => (
                      <td key={index} className="px-6 py-4 text-center">
                        {renderComparisonValue(row.values?.[index] ?? '—')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </PageSection>

      {/* FAQ */}
      <PageSection id="faq" bgColor="bg-surface-subtle" vPadding="py-20">
        <FAQAccordion faqs={sections.faq.items} />
      </PageSection>

      {/* LOGIN SECTION */}
      <PageSection id="login" bgColor="bg-brand text-white" vPadding="py-20">
        <AnimatedSection animation="scaleIn">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              {loginCopy.title || 'Ready to become more productive?'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {loginCopy.description || 'Join thousands of people who already transformed their productivity with AI.'}
            </p>
            
            {/* Login Form */}
            <div className="max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">
                  {loginCopy.formTitle || 'Create a free account'}
                </h3>
                
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder={loginCopy.emailPlaceholder || 'Your best email'}
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-white/70 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                  <input
                    type="password"
                    placeholder={loginCopy.passwordPlaceholder || 'Create a password'}
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-white/70 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-white text-brand font-bold rounded-lg hover:bg-white/90 transition-colors"
                  >
                    {loginCopy.submit || '🚀 Start for free now'}
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm opacity-75 mb-4">
                    {loginCopy.benefits?.noCard || 'No credit card required'}
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full border border-white/40"></div>
                        <div className="w-6 h-6 bg-white/20 rounded-full border border-white/40"></div>
                        <div className="w-6 h-6 bg-white/20 rounded-full border border-white/40"></div>
                      </div>
                      <span className="opacity-90">{loginCopy.benefits?.users || '+1.2k active users'}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="text-accentLight fill-current" size={16} />
                        ))}
                      </div>
                      <span className="opacity-90">{loginCopy.benefits?.rating || '4.8/5 rating'}</span>
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
  const language = loadLanguageConfig();
  return { props: { language } };
}