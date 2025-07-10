# 🧍‍♂️ Posture Detection App – Realfy Assignment

A full-stack posture analysis app that allows users to upload a **video performing a squat or sitting at a desk**, and returns **rule-based feedback** with clear summaries.

---

## 🔧 Tech Stack

| Part       | Technology                       |
|------------|----------------------------------|
| Frontend   | React + Vite + Tailwind CSS      |
| Backend    | FastAPI + MediaPipe + OpenCV     |
| Deployment | Vercel (Frontend) + Render/Railway (Backend) |

---

## 🚀 Live Links

- 🔗 **Frontend**: yoga-posture.vercel.app
- 

---

## 📹 Demo Video

- 🎥 Watch here: https://www.loom.com/share/8bd8819b912247d4b2e05651a0883089?sid=14e3e365-7491-473f-b20e-43f304613230

---

## 🧠 Features

- 📤 Upload video file (squat or desk sitting posture)
- 🧠 Pose detection using MediaPipe
- ✅ Rule-based logic:
  - **Squat**: Flag if back angle < 150° or knee goes beyond toe
  - **Desk Sitting**: Flag if neck bends > 30° or back isn’t straight
- 📊 Feedback:
  - Frame-by-frame analysis
  - Grouped summary like:  
    `"Back angle < 150 from 2s to 5s"`
- 📁 Clean JSON output

---

## 🛠️ How to Run Locally

### 🧪 Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
