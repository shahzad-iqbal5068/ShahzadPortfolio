"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { FAQS } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Container id="faqs" className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="self-center">
          <Tag label="FAQs" />
        </div>
        <Typography variant="h3" className="max-w-xl text-center">
          Frequently asked questions
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-8 max-w-2xl space-y-4"
      >
        {FAQS.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="overflow-hidden rounded-xl border border-gray-200 bg-gray shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-100"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left text-gray-900 dark:text-gray-900"
            >
              <Typography variant="subtitle" className="font-semibold">
                {faq.question}
              </Typography>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-5 w-5 shrink-0 text-gray-600" />
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-200 px-6 pb-6 pt-2 dark:border-gray-700">
                    <Typography className="text-gray-600 dark:text-gray-600">
                      {faq.answer}
                    </Typography>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default FAQsSection;
