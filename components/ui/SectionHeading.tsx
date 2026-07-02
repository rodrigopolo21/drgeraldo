"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { cn } from "@/lib/utils";
import { fadeUp, fadeUpSmall, staggerContainer, viewportOnce } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowClassName?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowClassName,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.12)}
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span variants={fadeUpSmall} className={eyebrowClassName || "eyebrow"}>
          <span className={clsx(
            "h-1.5 w-1.5 rounded-full",
            eyebrowClassName === "eyebrow-danger" ? "bg-danger-light" : "bg-brand-light"
          )} />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={clsx(
          "font-display text-display-md font-medium text-white",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "font-body text-xl leading-relaxed text-slatey-light md:text-2xl",
            align === "center" ? "max-w-3xl" : "max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
