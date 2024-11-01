document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('introCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configuração básica para partículas
    let particlesArray = [];
    const numberOfParticles = 100;

    class Particle {
        constructor(x, y, size, color, speed) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = color;
            this.speed = speed;
        }

        update() {
            this.x += this.speed.x;
            this.y += this.speed.y;

            // Reposiciona a partícula se sair da tela
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
            }
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    // Inicializa partículas
    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            const size = Math.random() * 2 + 1;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const color = '#ffffff';
            const speed = {
                x: Math.random() * 1 - 0.5,
                y: Math.random() * 1 - 0.5,
            };
            particlesArray.push(new Particle(x, y, size, color, speed));
        }
    }

    // Anima partículas
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    // Evento para redirecionar ao clicar no botão
    document.getElementById('enterButton').addEventListener('click', () => {
        window.location.href = 'auth.html'; // Redireciona para a página de login
    });

    // Atualiza o canvas em caso de redimensionamento
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });
});
