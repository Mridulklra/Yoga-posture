import React from 'react';
import { Activity, ArrowRight, Upload, CheckCircle, Target, TrendingUp } from 'lucide-react';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
   
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">PostureAI</h1>
            </div>
            <button
              onClick={() => onNavigate('upload')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

   
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Perfect Your Posture with
            <span className="text-blue-600"> AI Analysis</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload your exercise videos and get instant feedback on your form. Our AI analyzes your posture and provides personalized recommendations.
          </p>
          <button
            onClick={() => onNavigate('upload')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            <Upload className="w-6 h-6" />
            Start Analysis
          </button>
        </div>
      </section>

   
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose PostureAI?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Accurate Analysis</h4>
              <p className="text-gray-600">Advanced AI algorithms analyze your posture with precision and provide detailed feedback.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Multiple Poses</h4>
              <p className="text-gray-600">Support for various exercise types including squats, desk posture, and more.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Instant Results</h4>
              <p className="text-gray-600">Get immediate feedback and recommendations to improve your form.</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Improve Your Posture?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who have improved their form with PostureAI
          </p>
          <button
            onClick={() => onNavigate('upload')}
            className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Analysis Now
          </button>
        </div>
      </section>
    </div>
  );
}