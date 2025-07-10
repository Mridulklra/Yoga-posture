

import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';

export default function UploadForm({ onResult }) {
  const [file, setFile] = useState(null);
  const [poseType, setPoseType] = useState('squat');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select a video');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('pose_type', poseType);
    formData.append('use_webcam', false);

    onResult('Processing...');

    try {
      const res = await fetch('http://localhost:8000/analyze/', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      let output = '';
      if (data.pose_label) {
        output += `Pose Detected: ${data.pose_label}\n\n`;
      }
      if (data.feedback) {
        output += 'Feedback:\n' + data.feedback.join('\n') + '\n\n';
      }
      if (data.summary) {
        output += `Summary:\nBad Posture Count: ${data.summary.bad_posture_count}\nTotal Frames: ${data.summary.total_frames}`;
      }

      onResult(output);
    } catch (err) {
      onResult('Error analyzing posture. Is the backend running?');
    }
  };

  return (
    
 <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
      <div className="text-center mb-6">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Upload className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload Video</h2>
        <p className="text-gray-600">Select a video file to analyze your posture</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Video File
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pose Type
          </label>
          <select
            value={poseType}
            onChange={(e) => setPoseType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="squat">Squat</option>
            <option value="desk">Desk Sitting</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <Camera className="w-5 h-5" />
          Check Posture
        </button>
      </div>
    </div>
  );
}
