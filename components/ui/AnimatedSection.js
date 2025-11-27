import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../lib/useIntersectionObserver';

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  staggerChildren: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

export default function AnimatedSection({
  children,
  animation = 'fadeIn',
  delay = 0,
  className = '',
  once = true,
  threshold = 0.1
}) {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold,
    triggerOnce: once
  });

  const shouldAnimate = once ? hasIntersected : isIntersecting;

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={shouldAnimate ? "animate" : "initial"}
      variants={animations[animation]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Componente para animações em lista de itens
export function AnimatedList({ children, animation = 'staggerChildren', itemAnimation = 'slideUp' }) {
  return (
    <motion.div
      variants={animations[animation]}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={animations[itemAnimation]}
          transition={{ delay: index * 0.1 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

