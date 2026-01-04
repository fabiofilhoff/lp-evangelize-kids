"use client";

import { Heart, Star, Users, Shield, Check, ChevronRight, Play, BookOpen, Sparkles, Gift, Clock, Award, Smile, Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const benefits = [
    {
      icon: Heart,
      title: "Forte Conexão Familiar",
      description: "Crie laços inquebráveis com seus filhos enquanto ensinam sobre a fé.",
      color: "purple"
    },
    {
      icon: Sparkles,
      title: "Crescimento Espiritual",
      description: "Ajude seus filhos a desenvolverem uma relação genuína com Deus desde cedo.",
      color: "yellow"
    },
    {
      icon: Smile,
      title: "Diversão Garantida",
      description: "Cada história e atividade garantem risadas e aprendizado ao mesmo tempo.",
      color: "purple"
    },
    {
      icon: Star,
      title: "Praticidade",
      description: "Acesso à programação de histórias e atividades de onde quer que esteja, a qualquer hora!",
      color: "yellow"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Histórias Bíblicas Ilustradas",
      description: "Cada semana, novas histórias que prenderão a atenção dos seus pequenos.",
      color: "purple"
    },
    {
      icon: Play,
      title: "Atividades Práticas e Criativas",
      description: "Exercícios que permitem um aprendizado dinâmico e envolvente.",
      color: "yellow"
    },
    {
      icon: Gift,
      title: "Atualizações Contínuas",
      description: "Conteúdos novos e frescos todo o mês.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Suporte ao Usuário",
      description: "Nossa equipe está à disposição para te ajudar!",
      color: "yellow"
    }
  ];

  const testimonials = [
    {
      name: "Ana",
      role: "Mãe de duas crianças",
      text: "Depois que começamos a usar o Evangelize Kids, as crianças não param de falar sobre as histórias da Bíblia! É uma bênção ter essa ferramenta em casa!"
    },
    {
      name: "Carlos",
      role: "Pai de um menino",
      text: "Meu filho adora as atividades e, mais importante, está interessado em aprender sobre Deus. O Evangelize Kids fez toda a diferença!"
    }
  ];

  const faqs = [
    {
      question: "E se meus filhos não gostarem?",
      answer: "Temos uma garantia de satisfação! Se não ficarem interessados, você pode cancelar rapidamente."
    },
    {
      question: "Posso usar o app em diferentes dispositivos?",
      answer: "Sim! O Evangelize Kids pode ser acessado em qualquer smartphone ou tablet, onde quiser."
    },
    {
      question: "É fácil de usar?",
      answer: "Absolutamente! O aplicativo foi projetado para ser amigável e acessível a todas as idades."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Decorative floating elements */}
      <div className="fixed top-20 left-10 w-16 h-16 bg-purple-300 rounded-full opacity-30 blur-xl animate-bounce pointer-events-none"></div>
      <div className="fixed top-40 right-20 w-20 h-20 bg-yellow-300 rounded-full opacity-30 blur-xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-40 left-1/4 w-24 h-24 bg-purple-400 rounded-full opacity-20 blur-2xl animate-bounce pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="fixed bottom-20 right-1/3 w-16 h-16 bg-yellow-400 rounded-full opacity-25 blur-xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Hero Section */}
      <section className="relative px-4 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Decorative stars */}
          <div className="flex justify-center gap-4 mb-6">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            <Star className="w-10 h-10 text-purple-500 fill-purple-500 animate-bounce" />
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 animate-spin" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight px-2">
            Transforme a fé dos seus filhos em uma{" "}
            <span className="text-purple-600">aventura inesquecível</span>
            <span className="inline-block ml-2">✨</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto px-4 font-semibold">
            Descubra o Evangelize Kids e ensine sobre Deus de forma divertida!
          </p>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto px-4">
            Desperte o amor pela Bíblia nas crianças com histórias ilustradas e atividades interativas — tudo em um aplicativo fácil de usar!
          </p>

          <button className="group relative inline-flex items-center justify-center px-12 sm:px-16 py-5 sm:py-6 text-lg sm:text-xl font-bold text-white uppercase bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-2xl shadow-2xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300 border-4 border-white/20 hover:border-white/40 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              Começar Agora - 7 Dias Grátis 🎉
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>

          {/* Decorative elements */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-700">Diversão</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-700">Amor</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-700">Aprendizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Text Section */}
      <section className="px-4 py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
            Você já se perguntou como pode conseguir que seus filhos se conectem verdadeiramente com a fé? Com o Evangelize Kids, você não só tem acesso a um guia digital completo, mas também a uma nova forma de vivenciar momentos especiais em família.
          </p>
          <p className="text-lg sm:text-xl text-purple-700 leading-relaxed font-bold">
            Dê aos seus filhos a chance de entenderem e amarem as histórias da Bíblia de maneira envolvente e leve.
          </p>
        </div>
      </section>

      {/* Connection Section */}
      <section className="px-4 py-12 sm:py-16 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 shadow-2xl transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-800 rounded-full opacity-30 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                Transforme o Aprendizado em Diversão! 🎉
              </h2>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed text-center mb-4">
                Você sabe que a educação espiritual é fundamental, mas como fazer isso de maneira que as crianças queiram participar? As histórias muitas vezes passam despercebidas ou se tornam maçantes.
              </p>
              <p className="text-lg sm:text-xl text-yellow-300 leading-relaxed text-center font-bold">
                O Evangelize Kids foi criado justamente para mudar isso! Vamos juntos transformar o aprendizado em diversão, fortalecer laços familiares e, mais importante, fazer com que seus filhos sintam o amor de Deus em cada atividade!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-lg sm:text-xl mb-8 shadow-lg">
            <Sparkles className="w-6 h-6" />
            <span>A Solução Perfeita</span>
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Seu Guia Digital de Fé na Palma da Mão!
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Explore histórias bíblicas ilustradas e participe de atividades práticas que tornam o aprendizado sobre Deus uma experiência emocionante. Não é só um aplicativo; é uma ferramenta que transforma momentos comuns em experiências eternas.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-12 sm:py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 text-center mb-4">
            Benefícios Incríveis para Sua Família
          </h2>
          <p className="text-xl text-purple-600 text-center mb-12 sm:mb-16 font-semibold">💖 Tudo que você precisa para uma jornada especial</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isPurple = benefit.color === "purple";
              return (
                <div
                  key={index}
                  className={`${isPurple ? 'bg-purple-600' : 'bg-yellow-400'} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Decorative element */}
                  <div className={`absolute top-0 right-0 w-24 h-24 ${isPurple ? 'bg-purple-700' : 'bg-yellow-500'} rounded-full opacity-50 blur-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`${isPurple ? 'bg-white' : 'bg-purple-600'} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                      <Icon className={`w-10 h-10 ${isPurple ? 'text-purple-600' : 'text-yellow-400'}`} />
                    </div>
                    <h3 className={`text-2xl font-bold ${isPurple ? 'text-white' : 'text-gray-900'} mb-4`}>
                      {benefit.title}
                    </h3>
                    <p className={`text-base ${isPurple ? 'text-purple-100' : 'text-gray-800'} leading-relaxed`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 text-center mb-4">
            O Que Você Vai Receber
          </h2>
          <p className="text-xl text-yellow-600 text-center mb-12 sm:mb-16 font-semibold">🎁 Tudo que você precisa em um só lugar!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isPurple = feature.color === "purple";
              return (
                <div
                  key={index}
                  className={`${isPurple ? 'bg-purple-600' : 'bg-yellow-400'} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex gap-6 group relative overflow-hidden`}
                >
                  {/* Decorative element */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 ${isPurple ? 'bg-purple-700' : 'bg-yellow-500'} rounded-full opacity-40 blur-2xl`}></div>
                  
                  <div className={`${isPurple ? 'bg-white' : 'bg-purple-600'} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300 shadow-lg relative z-10`}>
                    <Icon className={`w-8 h-8 ${isPurple ? 'text-purple-600' : 'text-yellow-400'}`} />
                  </div>
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold ${isPurple ? 'text-white' : 'text-gray-900'} mb-3`}>
                      {feature.title}
                    </h3>
                    <p className={`text-base ${isPurple ? 'text-purple-100' : 'text-gray-800'} leading-relaxed`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-12 sm:py-20 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 text-center mb-4">
            O Que Famílias Estão Dizendo
          </h2>
          <p className="text-xl text-purple-600 text-center mb-12 sm:mb-16 font-semibold">⭐ Veja como estamos transformando vidas!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-purple-200"
              >
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-800 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-base text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="px-4 py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-3xl sm:rounded-[3rem] p-10 sm:p-12 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-green-300 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-600 rounded-full opacity-30 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-8 shadow-xl">
                <Shield className="w-12 h-12 text-green-500" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Garantia de Risco Zero! 🛡️
              </h2>
              <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                Experimente o Evangelize Kids por <span className="font-bold underline">7 dias, completamente grátis!</span> Se não ficar satisfeito, cancele a assinatura sem complicações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section - CARD FUTURISTA COM EFEITO DE VIDRO */}
      <section className="px-4 py-12 sm:py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          {/* Container Principal com Gradiente Animado */}
          <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* Gradientes em Movimento - Background Animado */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Grid de pontos decorativos */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>

            {/* Badge de Bônus Animado */}
            <div className="relative z-10 text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-bold text-lg sm:text-xl shadow-2xl animate-pulse border-2 border-white/30">
                <Gift className="w-6 h-6 animate-bounce" />
                <span>🎁 BÔNUS EXCLUSIVO 🎁</span>
                <Gift className="w-6 h-6 animate-bounce" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Layout em Grid - Responsivo */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Lado Esquerdo - Texto Principal */}
              <div className="text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Ganhe um eBook Grátis!
                </h2>
                
                <p className="text-xl sm:text-2xl text-purple-100 mb-8 leading-relaxed">
                  Se você se inscrever agora, receberá um <span className="font-bold text-yellow-300 underline">eBook exclusivo com 10 ideias de atividades</span> para fazer com seus filhos sobre a fé!
                </p>

                {/* Contador de Tempo */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-xl mb-8">
                  <Clock className="w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                  <div className="text-left">
                    <p className="text-sm text-purple-200 font-semibold">Oferta Limitada</p>
                    <p className="text-xl font-bold text-white">Válida por Tempo Limitado!</p>
                  </div>
                </div>
              </div>

              {/* Lado Direito - Card de Vidro com Bônus */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group max-w-md w-full">
                  {/* Efeito de Brilho Externo */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                  
                  {/* Card Principal com Efeito de Vidro */}
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border-2 border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
                    {/* Reflexo de Vidro */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                    
                    {/* Conteúdo do Card */}
                    <div className="relative z-10">
                      {/* Ícone do eBook */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
                            <BookOpen className="w-16 h-16 text-white" />
                          </div>
                          {/* Badge de "Grátis" */}
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                            GRÁTIS
                          </div>
                        </div>
                      </div>

                      {/* Título do Bônus */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
                        eBook Exclusivo
                      </h3>
                      <p className="text-lg text-purple-200 text-center mb-6">
                        10 Atividades Práticas de Fé
                      </p>

                      {/* Divisor com Gradiente */}
                      <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>

                      {/* Lista de Benefícios do eBook */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-white text-sm sm:text-base">
                            <span className="font-bold">Atividades práticas</span> para toda família
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-white text-sm sm:text-base">
                            <span className="font-bold">Ilustrações coloridas</span> e envolventes
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-white text-sm sm:text-base">
                            <span className="font-bold">Acesso imediato</span> após inscrição
                          </p>
                        </div>
                      </div>

                      {/* Badge de Valor */}
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 text-center">
                        <p className="text-sm text-purple-900 font-semibold mb-1">Valor Real</p>
                        <p className="text-3xl font-bold text-white line-through opacity-75">R$ 47,00</p>
                        <p className="text-2xl font-bold text-purple-900 mt-1">GRÁTIS HOJE! 🎉</p>
                      </div>
                    </div>

                    {/* Partículas Flutuantes */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos Decorativos Flutuantes */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 right-1/3 w-4 h-4 bg-purple-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-purple-600 text-center mb-12 sm:mb-16 font-semibold">💬 Tire suas dúvidas antes de começar!</p>
          
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-50 to-yellow-50 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2 border-purple-200"
              >
                <button
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-300"
                >
                  <span className="text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                      activeQuestion === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {activeQuestion === index && (
                  <div className="px-8 pb-6 pt-2 bg-white">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Card Futurista */}
      <section className="px-4 py-12 sm:py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          {/* Card Futurista Principal */}
          <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Efeitos de fundo decorativos */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-10 blur-3xl"></div>

            {/* Grid de pontos decorativos */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Lado Esquerdo - CTA Principal */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-6 py-2 rounded-full font-bold text-sm sm:text-base mb-6 shadow-lg animate-pulse">
                  <Sparkles className="w-5 h-5" />
                  <span>OFERTA LIMITADA</span>
                  <Sparkles className="w-5 h-5" />
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Não Perca Esta Oportunidade! 🚀
                </h2>
                
                <p className="text-xl sm:text-2xl text-purple-100 mb-8 leading-relaxed">
                  Transforme a vida espiritual da sua família! Acesse o Evangelize Kids agora e comece essa jornada divertida de fé!
                </p>

                {/* Botão Futurista */}
                <button 
                  className="group relative inline-flex items-center justify-center px-10 sm:px-12 py-5 text-lg sm:text-xl font-bold text-white uppercase bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 shadow-2xl hover:shadow-pink-500/60 hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white/50 overflow-hidden mb-8"
                  style={{
                    clipPath: 'polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)'
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Começar Minha Jornada Agora 🎉
                  </span>
                </button>

                {/* Benefícios Rápidos */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-white text-sm sm:text-base">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="font-semibold">7 dias grátis</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="font-semibold">Cancele quando quiser</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="font-semibold">Suporte dedicado</span>
                  </div>
                </div>
              </div>

              {/* Lado Direito - Card de Garantia */}
              <div className="flex justify-center lg:justify-end">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border-2 border-white/20 shadow-2xl max-w-md w-full transform hover:scale-105 transition-all duration-300">
                  {/* Número Grande de Garantia */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-2xl mb-4 relative">
                      <span className="text-6xl font-bold text-purple-900">7</span>
                      <div className="absolute inset-0 bg-yellow-300 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Dias de Garantia
                    </h3>
                    <p className="text-purple-200 text-base sm:text-lg">
                      Teste sem compromisso
                    </p>
                  </div>

                  {/* Divisor */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>

                  {/* Lista de Garantias */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white text-sm sm:text-base">
                        <span className="font-bold">Acesso completo</span> a todas as funcionalidades
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white text-sm sm:text-base">
                        <span className="font-bold">Cancele a qualquer momento</span> sem burocracia
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white text-sm sm:text-base">
                        <span className="font-bold">Suporte prioritário</span> durante o período de teste
                      </p>
                    </div>
                  </div>

                  {/* Badge de Confiança */}
                  <div className="mt-6 pt-6 border-t border-white/20 text-center">
                    <div className="inline-flex items-center gap-2 text-yellow-400">
                      <Shield className="w-5 h-5" />
                      <span className="text-sm font-semibold">100% Seguro e Confiável</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos decorativos flutuantes */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 right-1/3 w-4 h-4 bg-pink-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>

      {/* Price Card Section - FINAL */}
      <section className="px-4 py-12 sm:py-16 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl sm:rounded-[3rem] p-10 sm:p-14 shadow-2xl text-center relative overflow-hidden border-8 border-yellow-400">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-900 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>

            {/* Stars decoration */}
            <div className="flex justify-center gap-4 mb-6">
              <Star className="w-10 h-10 text-yellow-400 fill-yellow-400 animate-pulse" />
              <Star className="w-12 h-12 text-yellow-400 fill-yellow-400 animate-bounce" />
              <Star className="w-10 h-10 text-yellow-400 fill-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="relative z-10">
              <div className="inline-block bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-bold text-lg mb-6 shadow-lg animate-pulse">
                🎉 OFERTA ESPECIAL 🎉
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comece Sua Jornada Hoje!
              </h3>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <p className="text-lg text-yellow-300 mb-2 font-semibold">Por apenas</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-6xl sm:text-7xl font-bold text-white">R$27</span>
                  <div className="text-left">
                    <span className="text-3xl font-bold text-white">,90</span>
                    <p className="text-xl text-yellow-300 font-semibold">/mês</p>
                  </div>
                </div>
                <p className="text-base text-white/90 mt-4">
                  Cancele quando quiser • Sem compromisso
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white text-lg justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-purple-900" />
                  </div>
                  <span className="font-semibold">7 dias de teste grátis</span>
                </div>
                <div className="flex items-center gap-3 text-white text-lg justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-purple-900" />
                  </div>
                  <span className="font-semibold">Acesso ilimitado a todas as histórias</span>
                </div>
                <div className="flex items-center gap-3 text-white text-lg justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-purple-900" />
                  </div>
                  <span className="font-semibold">Atividades práticas toda semana</span>
                </div>
                <div className="flex items-center gap-3 text-white text-lg justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-purple-900" />
                  </div>
                  <span className="font-semibold">eBook exclusivo de bônus</span>
                </div>
              </div>

              {/* Botão Futurista com bordas chanfradas */}
              <button 
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-white uppercase bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 shadow-2xl hover:shadow-pink-500/60 hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white/50 overflow-hidden"
                style={{
                  clipPath: 'polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)'
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Garantir Minha Vaga Agora! 🎯
                </span>
              </button>

              <p className="text-yellow-200 text-sm mt-6 font-semibold">
                ⏰ Vagas limitadas • Garanta a sua agora!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="px-4 py-12 sm:py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
            A diferença entre um momento comum e um momento especial é a conexão que criamos. 💝
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-6">
            Faça de cada dia uma oportunidade para ensinar e aprender!
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-purple-700 leading-relaxed">
            Junte-se ao Evangelize Kids e veja a graça de Deus fluir na sua casa!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <Heart className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Evangelize Kids</h3>
          <p className="text-purple-200 text-base mb-4">
            © 2024 Evangelize Kids. Todos os direitos reservados.
          </p>
          <p className="text-purple-300 text-sm">
            Transformando vidas através da fé e do amor ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
