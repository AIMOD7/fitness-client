import React, { useState, useRef } from 'react';
import './workout.css';

const Workout = () => {
  const [activeTimers, setActiveTimers] = useState({});
  const [timerIntervals, setTimerIntervals] = useState({});
  const videoRefs = useRef({});

  
  const workouts = [
    {
      id: 1,
      title: "Push-ups",
      duration: 30,
      videoId: "IODxDxX7oi4",
      description: "Classic push-ups for upper body strength"
    },
    {
      id: 2,
      title: "Squats",
      duration: 45,
      videoId: "YaXPRqUwItQ",
      description: "Proper squat technique for leg development"
    },
    {
      id: 3,
      title: "Plank",
      duration: 60,
      videoId: "BQu26ABuVS0",
      description: "Core strengthening exercise"
    },
    {
      id: 4,
      title: "Jumping Jacks",
      duration: 40,
      videoId: "UpH7rm0cYbM",
      description: "Full body cardio exercise"
    },
    {
      id: 5,
      title: "Lunges",
      duration: 50,
      videoId: "QOVaHwm-Q6U",
      description: "Lower body strength and balance"
    },
    {
      id: 6,
      title: "Burpees",
      duration: 45,
      videoId: "dZgVxmf6jkA",
      description: "Full body explosive movement"
    }
  ];

  const startTimer = (workoutId, duration) => {
    
    if (activeTimers[workoutId]) return;
    
   
    setActiveTimers(prev => ({
      ...prev,
      [workoutId]: duration
    }));

   
    const interval = setInterval(() => {
      setActiveTimers(prev => {
        if (prev[workoutId] <= 1) {
          clearInterval(interval);
          const newTimers = { ...prev };
          delete newTimers[workoutId];
          
        
          setTimerIntervals(prevIntervals => {
            const newIntervals = { ...prevIntervals };
            delete newIntervals[workoutId];
            return newIntervals;
          });
          
          return newTimers;
        }
        return {
          ...prev,
          [workoutId]: prev[workoutId] - 1
        };
      });
    }, 1000);
    
    
    setTimerIntervals(prev => ({
      ...prev,
      [workoutId]: interval
    }));
  };

  const stopTimer = (workoutId) => {
    if (timerIntervals[workoutId]) {
      clearInterval(timerIntervals[workoutId]);
      
      setTimerIntervals(prev => {
        const newIntervals = { ...prev };
        delete newIntervals[workoutId];
        return newIntervals;
      });
      
      // Remove from active timers
      setActiveTimers(prev => {
        const newTimers = { ...prev };
        delete newTimers[workoutId];
        return newTimers;
      });
    }
  };

  
  const toggleVideo = (workoutId) => {
    const video = videoRefs.current[workoutId];
    if (video) {
      if (video.paused) {
        video.play().catch(error => {
          console.log("Video play failed:", error);
        });
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className="workout-page">
      <header className="workout-header">
        <h1>WORKOUT PROGRAMS</h1>
        <p>Select an exercise and start your workout journey</p>
      </header>
      
      <div className="workout-container">
        {workouts.map(workout => (
          <div key={workout.id} className="workout-item">
            <div className="workout-video-container">
              <iframe
                src={`https://www.youtube.com/embed/${workout.videoId}?modestbranding=1&rel=0`}
                title={workout.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-overlay">
                <h3>{workout.title}</h3>
              </div>
            </div>
            
            <div className="workout-content">
              <p>{workout.description}</p>
              
              <div className="workout-controls">
                <div className="timer-section">
                  <p>Duration: {workout.duration} seconds</p>
                  
                  {!activeTimers[workout.id] ? (
                    <button 
                      className="timer-button start-button"
                      onClick={() => startTimer(workout.id, workout.duration)}
                    >
                      <span className="button-icon">▶</span> Start Timer
                    </button>
                  ) : (
                    <button 
                      className="timer-button stop-button"
                      onClick={() => stopTimer(workout.id)}
                    >
                      <span className="button-icon">⏹</span> Stop Timer
                    </button>
                  )}
                  
                  {activeTimers[workout.id] && (
                    <div className="timer-display">
                      <div className="timer-circle">
                        <svg className="timer-svg" viewBox="0 0 100 100">
                          <circle className="timer-circle-bg" cx="50" cy="50" r="45"></circle>
                          <circle 
                            className="timer-circle-progress" 
                            cx="50" cy="50" r="45"
                            style={{
                              strokeDashoffset: 283 - (283 * activeTimers[workout.id] / workout.duration)
                            }}
                          ></circle>
                        </svg>
                        <span className="timer-text">{activeTimers[workout.id]}s</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workout;