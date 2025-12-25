
        // Particle Animation untuk Start Screen
        const startCanvas = document.getElementById('start-canvas');
        const startCtx = startCanvas.getContext('2d');
        startCanvas.width = window.innerWidth;
        startCanvas.height = window.innerHeight;

        const startParticles = [];
        const startParticleCount = 80;

        class StartParticle {
            constructor() {
                this.x = Math.random() * startCanvas.width;
                this.y = Math.random() * startCanvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > startCanvas.width) this.x = 0;
                if (this.x < 0) this.x = startCanvas.width;
                if (this.y > startCanvas.height) this.y = 0;
                if (this.y < 0) this.y = startCanvas.height;
            }

            draw() {
                startCtx.fillStyle = `rgba(255, 77, 109, ${this.opacity})`;
                startCtx.beginPath();
                startCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                startCtx.fill();
            }
        }

        function initStartParticles() {
            for (let i = 0; i < startParticleCount; i++) {
                startParticles.push(new StartParticle());
            }
        }

        function animateStart() {
            startCtx.clearRect(0, 0, startCanvas.width, startCanvas.height);
            
            for (let i = 0; i < startParticles.length; i++) {
                startParticles[i].update();
                startParticles[i].draw();
                
                for (let j = i + 1; j < startParticles.length; j++) {
                    const dx = startParticles[i].x - startParticles[j].x;
                    const dy = startParticles[i].y - startParticles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        startCtx.strokeStyle = `rgba(255, 77, 109, ${0.15 * (1 - distance / 100)})`;
                        startCtx.lineWidth = 0.5;
                        startCtx.beginPath();
                        startCtx.moveTo(startParticles[i].x, startParticles[i].y);
                        startCtx.lineTo(startParticles[j].x, startParticles[j].y);
                        startCtx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animateStart);
        }

        initStartParticles();
        animateStart();

        // Particle Animation untuk Main Content
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = `rgba(255, 77, 109, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(255, 77, 109, ${0.15 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }

        // Button click handler
        document.getElementById('accessBtn').addEventListener('click', function() {
            const accessScreen = document.getElementById('accessScreen');
            const mainContent = document.getElementById('mainContent');
            const startCanvas = document.getElementById('start-canvas');
            const particleCanvas = document.getElementById('particle-canvas');
            
            accessScreen.classList.add('hidden');
            
            setTimeout(() => {
                startCanvas.style.display = 'none';
                particleCanvas.style.display = 'block';
                mainContent.classList.add('visible');
                init();
                animate();
            }, 800);
        });

        // Resize handler
        window.addEventListener('resize', () => {
            startCanvas.width = window.innerWidth;
            startCanvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    