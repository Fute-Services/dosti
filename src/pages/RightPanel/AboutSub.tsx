import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CalendarDays,
  Building2,
  Construction,
  Users,
  Handshake,
} from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    prefix: "Over ",
    value: 4,
    suffix: " decades in real estate",
  },
  {
    icon: Building2,
    value: 17,
    suffix: " mn. sq. ft. of development",
  },
  {
    icon: Construction,
    prefix: "Over ",
    value: 21,
    suffix: " mn. sq. ft. under construction",
  },
  {
    icon: Users,
    prefix: "Homes to ",
    value: 23500,
    suffix: " happy families",
  },
  {
    icon: Handshake,
    value: 143,
    suffix: "+ projects completed",
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ staggerChildren: 0.2 }}
      className="space-y-4 px-4 py-4  w-full"
    >
      {stats.map((stat, i) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.7 }}
            className="flex items-start gap-4  hover:scale-[1.02] transition"
          >
            <Icon className="text-gray-100 mt-1" size={23} />

            <p className="text-[15px] text-white/80">
              {stat.prefix}
<span className="animate-glow inline-block">
              <span className="text-red-500/90 text-[21px] transition float font-semibold drop-shadow-[0_0_6px_rgba(239,68,68,0.7)] ml-1 mr-1 font-semibold">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={7}
                    separator=","
                  />
                )}
              </span></span>

              {stat.suffix}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
