import { motion } from 'framer-motion';
import { VantaBackground } from '../widgets/VantaBackground';
import { AnimatedCounter } from '../widgets/AnimatedCounter';
import { personalInfo } from '../../data/index';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <VantaBackground effect="waves" color={0x0000ff} />
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mb-4 text-4xl font-bold text-white"
        >
          Hi, I'm {personalInfo.name}
        </motion.h1>
        <motion.p
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mb-6 text-xl text-lg text-gray-300 max-w-2xl"
        >
          {personalInfo.bio}
        </motion.p>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-gray-600 hover:bg-gray-800/20 text-white"
          >
            Contact Me
          </motion.button>
        </div>
        <div className="mt-12 flex justify-center space-x-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatedCounter
              start={0}
              end={10}
              duration={2}
              suffix="+"
              prefix=""
            />
            <p className="mt-2 text-sm text-gray-400">Years Experience</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatedCounter
              start={0}
              end={50}
              duration={2}
              suffix=""
              prefix=""
            />
            <p className="mt-2 text-sm text-gray-400">Projects Completed</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}