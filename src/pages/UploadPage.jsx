
import React from 'react';
import { Activity, BarChart3, AlertCircle } from 'lucide-react';
import UploadForm from '../components/UploadForm';

export default function UploadPage({ onNavigate, result, setResult }) {
  return (
    <div className="min-h-screen bg-gray-50">
    
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">PostureAI Dashboard</h1>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </header>

     
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
        
          <div className="lg:col-span-1">
            <UploadForm onResult={setResult} />
          </div>

        
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Analysis Results</h2>
                  <p className="text-gray-600">Your posture analysis will appear here</p>
                </div>
              </div>

              {result ? (
                <div className="bg-gray-50 rounded-lg p-6">
                  <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
                    {result}
                  </pre>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-12 text-center">
                  <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No Analysis Yet</h3>
                  <p className="text-gray-500">Upload a video to see your posture analysis results</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
