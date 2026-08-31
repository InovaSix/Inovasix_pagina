'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Award, Target, Users, Lightbulb, Linkedin, ChevronRight, Briefcase, GraduationCap } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function AboutUs() {
  const [selectedMember, setSelectedMember] = useState(0)

  const team = [
    {
      name: 'Diógenes Jardim',
      role: 'Diretor | InovaSix',
      subtitle: 'QA Lead | Qualidade de Software | Automação de Testes',
      image: '/team/diogenes-jardim.jpg',
      linkedin: 'https://www.linkedin.com/in/diogenes-jardim',
      bio: {
        intro: 'Sou Diretor da InovaSix, empresa especializada em soluções de tecnologia, onde atuo na definição de estratégias, desenvolvimento de soluções digitais e fortalecimento da cultura de qualidade de software.',
        experience: [
          'Liderança em iniciativas de qualidade e estratégias de testes',
          'Promoção da melhoria contínua dos processos de desenvolvimento',
          'Gestão de ambientes de QA e acompanhamento de métricas',
          'Ampliação da cobertura automatizada e gestão de defeitos',
        ],
        expertise: [
          'Testes funcionais, exploratórios e regressivos',
          'Testes E2E e testes de contrato',
          'Automação Web, API e Mobile',
          'Metodologias ágeis',
        ],
        technologies: [
          'Selenium', 'Cypress', 'Appium', 'Postman', 'Newman',
          'SQL', 'Cucumber', 'JUnit', 'Azure DevOps',
        ],
        mission: 'Na InovaSix, nosso propósito é transformar ideias em soluções tecnológicas de alto impacto, entregando qualidade, inovação e resultados para empresas por meio do desenvolvimento de sistemas, sites, aplicativos, automações e serviços de tecnologia.',
      },
    },
    {
      name: 'Edson Miranda Gomes de Almeida',
      role: 'Diretor de Infraestrutura e Operações Cloud',
      subtitle: 'QA Cloud | DevOps | SRE',
      image: '/team/edson-miranda.jpg',
      linkedin: 'https://www.linkedin.com/in/edson-miranda',
      bio: {
        intro: 'Especialista em Qualidade de Software, Automação, Infraestrutura Cloud, DevOps e Site Reliability Engineering (SRE), com formação em Análise e Desenvolvimento de Sistemas e pós-graduação em Cibersegurança.',
        experience: [
          'Liderança em Cloud Computing e automação',
          'Implementação de observabilidade e monitoramento',
          'Gestão de ambientes e confiabilidade operacional',
          'Performance e alta disponibilidade',
        ],
        expertise: [
          'Infraestrutura em nuvem (AWS, Azure, GCP)',
          'DevOps e Site Reliability Engineering',
          'Observabilidade e monitoramento',
          'Automação de processos',
        ],
        technologies: [
          'Docker', 'Kubernetes', 'Terraform', 'Ansible',
          'Prometheus', 'Grafana', 'ELK Stack', 'CI/CD',
        ],
        mission: 'Acredito que qualidade e infraestrutura não devem ser vistas apenas como áreas de suporte, mas como pilares estratégicos para a transformação digital. Meu propósito é criar soluções que reduzam riscos, aumentem a eficiência operacional e permitam que empresas cresçam com segurança, estabilidade e excelência tecnológica.',
      },
    },
    {
      name: 'Bruno Avila',
      role: 'Software Quality & Security Consultant',
      subtitle: 'AppSec | DevSecOps | Quality Engineering',
      image: '/team/bruno-avila.jpg',
      linkedin: 'https://www.linkedin.com/in/bruno-avila',
      bio: {
        intro: 'Especialista em Qualidade, Automação e Segurança de Software, com formação em Análise e Desenvolvimento de Sistemas, pós-graduação em Engenharia de Software com ênfase em Qualidade e Testes, MBA em Gestão da Qualidade de Software e especialização em AppSec e DevSecOps.',
        experience: [
          'Estratégias de Quality Engineering',
          'Testes manuais e automatizados',
          'Validação de aplicações web e mobile',
          'Implementação de práticas AppSec e DevSecOps',
        ],
        expertise: [
          'Segurança de aplicações (AppSec)',
          'DevSecOps e SAST/DAST',
          'Quality Engineering',
          'Testes de APIs e Mobile',
        ],
        technologies: [
          'OWASP', 'SonarQube', 'Burp Suite', 'ZAP',
          'Jest', 'Pytest', 'RestAssured', 'Selenium',
        ],
        mission: 'Acredito que qualidade não é apenas identificar falhas, mas criar processos que reduzam riscos, acelerem entregas e aumentem a confiabilidade dos sistemas. Meu propósito é transformar qualidade e segurança em diferenciais estratégicos para o negócio, garantindo soluções de alto desempenho e excelência tecnológica.',
      },
    },
  ]

  const values = [
    {
      icon: Target,
      title: 'Estratégia',
      description: 'Definição de estratégias e desenvolvimento de soluções digitais',
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Cultura de qualidade de software e melhoria contínua',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Transformando ideias em soluções tecnológicas de alto impacto',
    },
    {
      icon: Users,
      title: 'Resultados',
      description: 'Entregando qualidade, inovação e resultados para empresas',
    },
  ]

  return (
    <section id="sobre-nos" className="relative py-32 overflow-hidden bg-[--color-bg-primary]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="blur-orb-blue w-96 h-96 top-1/4 left-1/4"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="blur-orb-purple w-96 h-96 bottom-1/4 right-1/4"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4">
            Sobre <span className="gradient-text">Nós</span>
          </h2>
          <p className="text-xl text-[--color-text-secondary] max-w-2xl mx-auto">
            Conheça a equipe de liderança da InovaSix
          </p>
        </motion.div>

        {/* Team Member Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedMember(index)}
              className={`relative glass-hover rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 group ${
                selectedMember === index
                  ? 'ring-2 ring-[--color-neon-blue] scale-105'
                  : 'hover:scale-102'
              }`}
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              
              {/* Photo */}
              <div className="relative aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-black mb-1 text-white">{member.name}</h3>
                <p className="text-[--color-neon-blue] font-semibold text-sm mb-1">
                  {member.role}
                </p>
                <p className="text-white/70 text-xs mb-3">{member.subtitle}</p>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/60">Clique para ver biografia</span>
                  <ChevronRight className="w-4 h-4 text-[--color-neon-blue]" />
                </div>
              </div>

              {/* Selected Indicator */}
              {selectedMember === index && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[--color-neon-blue] flex items-center justify-center z-20 shadow-lg"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Biography Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMember}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="glass-hover rounded-3xl p-8 md:p-12 mb-16"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Profile */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={team[selectedMember].image}
                      alt={team[selectedMember].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-black mb-2">{team[selectedMember].name}</h3>
                  <p className="text-[--color-neon-blue] font-semibold mb-1">
                    {team[selectedMember].role}
                  </p>
                  <p className="text-[--color-text-secondary] text-sm mb-6">
                    {team[selectedMember].subtitle}
                  </p>
                  
                  <a
                    href={team[selectedMember].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Conectar no LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Right Column - Biography */}
              <div className="lg:col-span-2 space-y-8">
                {/* Intro */}
                <div>
                  <h4 className="text-lg font-black mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[--color-neon-blue]" />
                    <span>Sobre</span>
                  </h4>
                  <p className="text-[--color-text-secondary] leading-relaxed">
                    {team[selectedMember].bio.intro}
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="text-lg font-black mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[--color-neon-purple]" />
                    <span>Experiência</span>
                  </h4>
                  <ul className="space-y-3">
                    {team[selectedMember].bio.experience.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-[--color-text-secondary]"
                      >
                        <div className="w-6 h-6 rounded-lg bg-[--color-neon-blue]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ChevronRight className="w-4 h-4 text-[--color-neon-blue]" />
                        </div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="text-lg font-black mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[--color-neon-blue]" />
                    <span>Especialidades</span>
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {team[selectedMember].bio.expertise.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-2 p-3 rounded-xl bg-white/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-[--color-neon-blue]" />
                        <span className="text-sm text-[--color-text-secondary]">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-black mb-4">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {team[selectedMember].bio.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.03 }}
                        className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[--color-neon-blue]/10 to-[--color-neon-purple]/10 border border-[--color-neon-blue]/30 text-sm font-semibold text-[--color-neon-blue]"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Mission */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[--color-neon-blue]/10 to-[--color-neon-purple]/10 border border-[--color-neon-blue]/20">
                  <h4 className="text-lg font-black mb-3 text-[--color-neon-blue]">Missão</h4>
                  <p className="text-white/90 leading-relaxed italic">
                    &ldquo;{team[selectedMember].bio.mission}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-2xl font-black mb-8 text-center">
            Nossos <span className="gradient-text">Valores</span>
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-hover rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[--color-neon-blue] to-[--color-neon-purple] flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold mb-2">{value.title}</h5>
                <p className="text-sm text-[--color-text-secondary]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
