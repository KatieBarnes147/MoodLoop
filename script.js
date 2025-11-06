const analyzeBtn = document.getElementById('analyzeBtn');
const songInput = document.getElementById('songInput');
const moodResult = document.getElementById('moodResult');

analyzeBtn.addEventListener('click', async () => {
  const song = songInput.value.trim();
  if (!song) return;

  // Fake mood analysis (for quick demo)
  const moods = [
    {name: 'Happy', colors: ['#00ffff','#ff00ff']},
    {name: 'Sad', colors: ['#0000ff','#8b00ff']},
    {name: 'Energetic', colors: ['#ff0000','#ffff00']},
    {name: 'Chill', colors: ['#00ff99','#3300ff']}
  ];

  // Pick random mood for demo purposes
  const mood = moods[Math.floor(Math.random() * moods.length)];
  
  // Update background gradient
  document.body.style.background = `linear-gradient(135deg, ${mood.colors[0]}, ${mood.colors[1]})`;
  
  // Show mood
  moodResult.textContent = `Mood: ${mood.name}`;
});
