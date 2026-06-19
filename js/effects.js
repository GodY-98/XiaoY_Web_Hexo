// 飘带效果
(function() {
  const container = document.createElement('div');
  container.className = 'ribbon-container';
  document.body.appendChild(container);

  const colors = [
    '#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3',
    '#54a0ff', '#5f27cd', '#01a3a4', '#f368e0',
    '#ff6348', '#7bed9f', '#70a1ff', '#ffa502'
  ];

  function createRibbon() {
    const ribbon = document.createElement('div');
    ribbon.className = 'ribbon';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const height = Math.random() * 60 + 40;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 5;

    ribbon.style.cssText = `
      left: ${left}%;
      height: ${height}px;
      background: linear-gradient(180deg, ${color}, transparent);
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(ribbon);

    setTimeout(() => {
      ribbon.remove();
    }, (duration + delay) * 1000);
  }

  // 初始创建一批飘带
  for (let i = 0; i < 15; i++) {
    createRibbon();
  }

  // 持续生成飘带
  setInterval(createRibbon, 800);
})();

// 点击动效 - 爱心/星星
(function() {
  const emojis = ['❤️', '✨', '⭐', '💫', '🌟', '💖', '🎉', '🦋'];

  document.addEventListener('click', function(e) {
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        font-size: ${Math.random() * 16 + 12}px;
        pointer-events: none;
        z-index: 10000;
        animation: click-burst 0.8s ease-out forwards;
        --tx: ${(Math.random() - 0.5) * 120}px;
        --ty: ${Math.random() * -100 - 30}px;
      `;
      particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 800);
    }
  });

  // 添加动画样式
  const style = document.createElement('style');
  style.textContent = `
    @keyframes click-burst {
      0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translate(var(--tx), var(--ty)) scale(0);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
})();
