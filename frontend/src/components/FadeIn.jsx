import { motion, useReducedMotion } from 'framer-motion';

const MotionDiv = motion.div;

/**
 * Aparece al entrar en pantalla (una sola vez).
 * Sustituye al IntersectionObserver manual que teníamos antes.
 */
export default function FadeIn({ children, delay = 0, y = 30, className = '' }) {
    const reduceMotion = useReducedMotion();

    return (
        <MotionDiv
            className={className}
            initial={reduceMotion ? false : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay }}
        >
            {children}
        </MotionDiv>
    );
}
