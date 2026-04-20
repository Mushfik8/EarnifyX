"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card border border-white/5 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-bold">{question}</span>
        {isOpen ? <Minus className="text-primary flex-shrink-0" /> : <Plus className="text-primary flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-foreground/60 leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is EarnifyX?",
      answer: "EarnifyX is a decentralized, AI-powered task and earning protocol. It connects users who want to earn crypto by completing digital tasks with businesses that need verified engagement, data labeling, or social growth."
    },
    {
      question: "How do I start earning?",
      answer: "Simply connect your Web3 wallet (like MetaMask or Trust Wallet), browse the task marketplace, and follow the instructions for any task. Once you submit proof of completion, our AI engine verifies it and releases $EFX tokens to your wallet."
    },
    {
      question: "Is it free to join?",
      answer: "Yes! There are no upfront costs to join EarnifyX. However, you can choose to stake $EFX tokens to unlock reward multipliers and access higher-paying premium tasks."
    },
    {
      question: "What is $EFX and how do I use it?",
      answer: "$EFX is the native utility token of the protocol. It is used for reward distribution, staking for enhanced benefits, platform governance, and paying for task creation services."
    },
    {
      question: "How does the AI verification work?",
      answer: "Our proprietary AI engine uses computer vision, natural language processing, and behavioral analysis to verify task evidence in real-time. This prevents fraud and ensures that users are paid fairly for genuine contributions."
    },
    {
      question: "What are the withdrawal limits?",
      answer: "EarnifyX does not impose arbitrary withdrawal limits. Once your rewards are verified and settled on-chain, you can transfer them from your platform account to your personal wallet instantly."
    },
    {
      question: "Is the platform secure?",
      answer: "Security is our top priority. All smart contracts are audited by leading blockchain security firms. Additionally, the platform employs advanced anti-fraud and anti-bot mechanisms to protect the ecosystem's integrity."
    },
    {
      question: "Can I create tasks as a business?",
      answer: "Absolutely! Businesses can use the Dashboard to create task campaigns, set reward amounts, and target specific user demographics. Staking $EFX as a business provides significant discounts on task creation fees."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col gap-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-black mb-6">Frequently Asked <span className="neon-text">Questions</span></h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Everything you need to know about the EarnifyX protocol and how to maximize your earnings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto w-full space-y-4">
          <div className="relative mb-12">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/40" />
             <input 
               type="text" 
               placeholder="Search for answers..." 
               className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-6 focus:outline-none focus:border-primary/50 text-lg transition-all"
             />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} {...faq} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary/5 rounded-3xl p-12 border border-primary/20">
           <HelpCircle className="mx-auto text-primary w-12 h-12 mb-6" />
           <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
           <p className="text-foreground/60 mb-8">Join our Discord community or contact our support team for help.</p>
           <button className="btn-primary px-12">Contact Support</button>
        </div>
      </div>
    </div>
  );
}
