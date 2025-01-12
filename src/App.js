import React, { useState, useEffect, useCallback } from "react";
import {
  Sparkles,
  Heart,
  Globe,
  Users,
  PauseCircle,
  Award,
} from "lucide-react";
import FeatureScreen from "./component/commentform";

const BloomLandingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mood, setMood] = useState("😊");
  const [bloomScore, setBloomScore] = useState(0);
  const [showMindfulReminder, setShowMindfulReminder] = useState(false);
  const [rippleCount, setRippleCount] = useState(0);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [particleCount, setParticleCount] = useState(0);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    setCursorPosition({ x: clientX, y: clientY });
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
          if (entry.isIntersecting) {
            setParticleCount((prev) => prev + 1);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMindfulReminder(true);
      setTimeout(() => setShowMindfulReminder(false), 5000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleStartJourney = () => {
    setIsZooming(true);
    setBloomScore((prev) => prev + 10);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      setJourneyStarted(true);
      document.getElementById("features-section")?.scrollIntoView({
        behavior: "instant",
      });
      setIsZooming(false);
      document.body.style.overflow = "auto";
    }, 1000);
  };

  const handleFeatureHover = (index) => {
    setActiveFeature(index);
    createParticleEffect();
  };

  const handleAIContent = () => {
    const suggestions = [
      "Share your journey of personal growth",
      "Create a mindfulness meditation video",
      "Document acts of kindness in your community",
      "Start a gratitude journal series",
    ];
    setAiSuggestion(
      suggestions[Math.floor(Math.random() * suggestions.length)]
    );
    setBloomScore((prev) => prev + 5);
  };

  const handleMoodChange = () => {
    const moods = ["😊", "🥰", "😌", "✨", "💫"];
    setMood(moods[Math.floor(Math.random() * moods.length)]);
    setBloomScore((prev) => prev + 2);
  };

  const createRippleEffect = () => {
    setRippleCount((prev) => prev + 1);
    setBloomScore((prev) => prev + 3);
  };

  const createParticleEffect = () => {
    setParticleCount((prev) => prev + 5);
  };

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Content",
      description:
        "Create engaging video and static content with AI assistance",
      action: handleAIContent,
      color: "purple",
      content: aiSuggestion && (
        <div className="mt-4 p-3 bg-purple-600/20 rounded-lg transform hover:scale-105 transition-all duration-500">
          <p className="text-sm">AI Suggestion: {aiSuggestion}</p>
        </div>
      ),
    },
    {
      icon: Heart,
      title: "Resonance",
      description: "Experience content aligned with your emotional state",
      action: handleMoodChange,
      color: "pink",
      content: (
        <div className="mt-4 text-center transform hover:scale-110 transition-all duration-300">
          <span className="text-4xl animate-bounce">{mood}</span>
        </div>
      ),
    },
    {
      icon: Globe,
      title: "Orbits",
      description: "Explore dimensional communities in a visual universe",
      color: "blue",
      content: (
        <div className="mt-4 relative h-24">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-purple-400/50"
              style={{
                animation: `orbit ${(i + 2) * 4}s linear infinite`,
                transform: `scale(${0.5 + i * 0.2})`,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      icon: Users,
      title: "Ripple Effects",
      description: "Track positive chain reactions across the platform",
      action: createRippleEffect,
      color: "indigo",
      content: rippleCount > 0 && (
        <div className="mt-4 text-center">
          <p>You've created {rippleCount} positive ripples! 🌊</p>
          <div className="relative h-12 mt-2">
            {[...Array(rippleCount > 5 ? 5 : rippleCount)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-blue-400/50"
                style={{
                  animation: `ripple 2s linear infinite ${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: PauseCircle,
      title: "Mindful Pause",
      description: "Smart nudges that encourage real-life engagement",
      color: "teal",
      content: showMindfulReminder && (
        <div className="mt-4 p-3 bg-purple-600/20 rounded-lg animate-pulse">
          <p className="text-sm">
            Time for a mindful break! Take a deep breath. 🌱
          </p>
        </div>
      ),
    },
    {
      icon: Award,
      title: "Bloomscore",
      description: "Measure your positive impact and contributions",
      color: "amber",
      content: (
        <div className="mt-4 text-center">
          <div className="text-2xl font-bold animate-pulse">{bloomScore}</div>
          <div className="text-sm text-purple-300">Bloom Points</div>
          <div className="h-2 bg-gray-700 rounded-full mt-2">
            <div
              className="h-full bg-purple-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(bloomScore, 100)}%` }}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Particle Effect System */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${
                Math.random() * 3 + 2
              }s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      {/* Hero Section */}
      {!journeyStarted && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-6 transition-all duration-1000 transform
            ${isZooming ? "scale-[5] opacity-0" : "scale-100 opacity-100"}`}
        >
          <div
            className="absolute inset-0 opacity-30 transition-all duration-300 ease-out"
            style={{
              background: `radial-gradient(circle 400px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(147, 51, 234, 0.3), transparent)`,
            }}
          />

          <div className="max-w-4xl text-center relative z-10">
            <div className="mb-6 relative inline-block group">
              <Sparkles className="absolute -top-8 -right-8 text-purple-400 animate-pulse w-8 h-8" />
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text transition-all duration-300 group-hover:scale-105">
                Bloom
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              A new kind of digital platform designed to help people feel more
              connected, inspired, and aligned in their daily lives.
            </p>
            <button
              onClick={handleStartJourney}
              className="px-8 py-4 bg-purple-600 rounded-full text-lg font-medium hover:bg-purple-500 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Start Your Journey
            </button>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full bg-purple-400/20 transition-transform duration-1000
                  ${
                    isZooming ? "scale-[20] opacity-0" : "scale-100 opacity-100"
                  }`}
                style={{
                  width: `${Math.random() * 60 + 40}px`,
                  height: `${Math.random() * 60 + 40}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 5 + 10}s infinite linear`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
      <div
        id="features-section"
        className={`relative z-10 transition-all duration-1000 transform 
        ${
          journeyStarted
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full"
        }`}
      >
        {/* Header Section */}
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Core Features
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover powerful tools designed to enhance your digital
              experience
            </p>
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
        <FeatureScreen />
      </div>
  
      {/* Vision Section - Only show after journey starts */}
      {journeyStarted && (
        <div className="relative py-24 px-6" data-animate>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Our Vision
            </h2>
            <blockquote className="text-lg md:text-xl text-gray-300 italic leading-relaxed">
              "The task is not to invent something new but to find our way back
              to what is eternally true. To design technologies and systems not
              as masters but as stewards—tools that do not deplete our humanity
              but amplify our capacity to love, to connect, to create, and to
              serve the whole."
            </blockquote>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) rotate(-5deg);
          }
        }
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        @keyframes feature-entrance {
          0% {
            transform: scale(0.8) translateY(50px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-feature-entrance {
          animation: feature-entrance 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BloomLandingPage;
