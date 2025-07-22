document.getElementById('generateBtn').addEventListener('click', () => {
  const prompt = document.getElementById('prompt').value;
  const scene = document.getElementById('scene').value;
  const dialogue = document.getElementById('dialogue').value;
  const style = document.getElementById('style').value;

  const output = `
🧵 Prompt:
${prompt}

🎬 Scene:
${scene}

🗣️ Dialogue:
${dialogue}

✍️ Style Notes:
${style}

📘 Final Chapter:
${scene}

${dialogue}

*Stylistic Tone: ${style}*
  `;
  
  document.getElementById('output').textContent = output;
});