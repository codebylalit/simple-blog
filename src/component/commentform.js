import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Heart,
  Globe,
  Users,
  PauseCircle,
  Award,
  ArrowLeft,
  ChevronRight,
  Maximize2,
  Activity,
  Calendar,
  Clock,
  Search,
  Share2,
  Star,
  Zap,
  Leaf,
  Trophy,
  Map,
  Battery,
} from "lucide-react";

const FeatureScreen = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [bloomScore, setBloomScore] = useState(0);
  const [mood, setMood] = useState("😊");
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [rippleCount, setRippleCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showTutorial, setShowTutorial] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBloomScore((prev) => Math.min(prev + 1, 100));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  
  const features = [
    {
      id: "ai-content",
      icon: Sparkles,
      title: "AI-Powered Content",
      description:
        "Create engaging video and static content with AI assistance",
      color: "purple",
      detailedScreen: () => (
        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Content Suggestions</h3>
            <div className="grid gap-4">
              {[
                "Share your story",
                "Create a meditation",
                "Document kindness",
                "Start journaling",
              ].map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => setAiSuggestion(suggestion)}
                  className="p-4 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
                    <span>{suggestion}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {aiSuggestion && (
            <div className="bg-purple-600/20 p-6 rounded-xl animate-fade-in">
              <h4 className="font-semibold mb-3">AI Generated Outline</h4>
              <div className="space-y-3">
                <p className="text-gray-300">• Introduction: {aiSuggestion}</p>
                <p className="text-gray-300">• Key points to cover</p>
                <p className="text-gray-300">• Suggested format</p>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <div className="flex-1 bg-gray-800/50 p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Analytics</h4>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-400" />
                <span>Content Performance</span>
              </div>
            </div>
            <div className="flex-1 bg-gray-800/50 p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Schedule</h4>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>Content Calendar</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "resonance",
      icon: Heart,
      title: "Resonance",
      description: "Experience content aligned with your emotional state",
      color: "pink",
      detailedScreen: () => (
        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-6">Current Mood</h3>
            <div className="text-6xl mb-6 animate-bounce">{mood}</div>
            <div className="grid grid-cols-5 gap-4">
              {["😊", "🥰", "😌", "✨", "💫"].map((m) => (
                <button
                  key={m}
                  onClick={() => setMood(m)}
                  className={`p-4 rounded-lg transition-all hover:bg-pink-600/20 ${
                    mood === m ? "bg-pink-600/20" : ""
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h4 className="font-semibold mb-4">Mood Tracker</h4>
              <div className="h-40 flex items-end gap-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-pink-600/20 rounded-t"
                    style={{ height: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>Mon</span>
                <span>Sun</span>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h4 className="font-semibold mb-4">Content Recommendations</h4>
              <div className="space-y-3">
                {["Meditation", "Journal", "Exercise", "Creative"].map(
                  (activity) => (
                    <div
                      key={activity}
                      className="flex items-center gap-3 p-2 hover:bg-gray-700/50 rounded"
                    >
                      <Heart className="w-4 h-4 text-pink-400" />
                      <span>{activity}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "journeys",
      icon: Leaf,
      title: "Growth Journeys",
      description: "Custom feeds based on your interests and goals",
      color: "green",
      detailedScreen: () => (
        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Your Active Journeys</h3>
            <div className="grid gap-4">
              {[
                "Personal Growth",
                "Creative Expression",
                "Mindfulness",
                "Leadership",
              ].map((journey) => (
                <div
                  key={journey}
                  className="p-4 bg-green-600/20 rounded-lg group hover:bg-green-600/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Leaf className="w-5 h-5 text-green-400 group-hover:rotate-12 transition-transform" />
                      <span>{journey}</span>
                    </div>
                    <div className="h-2 w-24 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-400 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.random() * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "bloomscore",
      icon: Trophy,
      title: "Bloomscore",
      description: "Track your positive platform engagement",
      color: "yellow",
      detailedScreen: () => (
        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-6">Your Bloomscore</h3>
            <div className="relative h-48 w-48 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400/20 animate-[spin_3s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400/40 animate-[spin_4s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-yellow-400 animate-pulse">
                  {bloomScore}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "sparks",
      icon: Zap,
      title: "Sparks",
      description: "Personalized prompts for inspiration and growth",
      color: "amber",
      detailedScreen: () => (
        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Daily Sparks</h3>
            <div className="grid gap-4">
              {[
                "What inspires you today?",
                "Share a moment of gratitude",
                "Set an intention",
                "Celebrate a small win",
              ].map((spark) => (
                <div
                  key={spark}
                  className="p-4 bg-amber-600/20 rounded-lg group hover:bg-amber-600/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-400 group-hover:scale-125 transition-transform" />
                    <span>{spark}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "mindful-pause",
      icon: PauseCircle,
      title: "Mindful Pause",
      description: "Intelligent breaks to enhance your well-being",
      color: "teal",
      detailedScreen: () => (
        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-6">Time Well Spent</h3>
            <div className="relative h-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <Clock className="w-16 h-16 text-teal-400 animate-pulse" />
              </div>
            </div>
            <button className="mt-4 px-6 py-3 bg-teal-600/20 rounded-lg hover:bg-teal-600/30 transition-all">
              Take a Mindful Break
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "empowerments",
      icon: Battery,
      title: "Empowerments",
      description: "Track your content's positive impact",
      color: "blue",
      detailedScreen: () => (
        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Impact Overview</h3>
            <div className="grid gap-4">
              {[
                { label: "Lives Touched", count: "1.2k" },
                { label: "Positive Reactions", count: "3.4k" },
                { label: "Shared Stories", count: "89" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-blue-600/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span>{stat.label}</span>
                    <span className="text-xl font-bold text-blue-400">
                      {stat.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "bloomsphere",
      icon: Map,
      title: "Bloomsphere",
      description: "Visualize our collective positive impact",
      color: "violet",
      detailedScreen: () => (
        <div className="space-y-8">
          <div className="relative h-96 bg-gray-800/50 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border border-violet-400/50 rounded-full animate-ping"
                    style={{
                      width: `${(i + 1) * 100}px`,
                      height: `${(i + 1) * 100}px`,
                      animationDuration: `${(i + 2) * 3}s`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
                <Map className="w-16 h-16 text-violet-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleBack = () => {
    setActiveFeature(null);
  };

  return (
        <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeFeature ? (
          <div className="space-y-6">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Features
            </button>

            <div className="flex items-center gap-4 mb-8">
              <activeFeature.icon
                className={`w-8 h-8 text-${activeFeature.color}-400`}
              />
              <h2 className="text-2xl font-bold">{activeFeature.title}</h2>
            </div>

            <activeFeature.detailedScreen />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all hover:scale-105 text-left group"
              >
                <div className="flex items-center justify-between mb-4">
                  <feature.icon
                    className={`w-8 h-8 text-${feature.color}-400`}
                  />
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureScreen;
