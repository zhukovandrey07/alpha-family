// ========================================
// ALPHAFAMILY PRO - CORE SYSTEMS
// ========================================

// AUDIO SYSTEM
class AudioManager {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.masterVolume = 0.3;
    }

    wakeUp() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
    }

    playTone(frequency, type, duration, volume = 1) {
        this.wakeUp();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
        gain.gain.setValueAtTime(this.masterVolume * volume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    playSuccess() {
        this.playTone(523.25, 'sine', 0.1);
        setTimeout(() => this.playTone(659.25, 'sine', 0.1), 100);
        setTimeout(() => this.playTone(783.99, 'sine', 0.3), 200);
    }

    playPop() {
        this.playTone(800, 'sine', 0.05, 0.5);
    }

    playError() {
        this.playTone(150, 'sawtooth', 0.3, 0.4);
    }

    playClick() {
        this.playTone(600, 'sine', 0.05, 0.3);
    }
}

const audio = new AudioManager();

// PARTICLE SYSTEM
class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles');
    }

    createParticle(x, y, emoji, duration = 1000) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            font-size: 2rem;
            pointer-events: none;
            z-index: 1000;
            animation: particleRise ${duration}ms ease-out forwards;
        `;
        particle.textContent = emoji;
        this.container.appendChild(particle);

        setTimeout(() => particle.remove(), duration);
    }

    burst(x, y, count = 10) {
        const emojis = ['✨', '⭐', '🌟', '💫', '🎉', '🎊'];
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const emoji = emojis[Math.floor(Math.random() * emojis.length)];
                const offsetX = (Math.random() - 0.5) * 100;
                const offsetY = (Math.random() - 0.5) * 100;
                this.createParticle(x + offsetX, y + offsetY, emoji);
            }, i * 50);
        }
    }
}

const particles = new ParticleSystem();

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes particleRise {
        0% { opacity: 1; transform: translateY(0) scale(1); }
        100% { opacity: 0; transform: translateY(-100px) scale(0); }
    }
`;
document.head.appendChild(style);

// CONFETTI SYSTEM
class ConfettiSystem {
    constructor() {
        this.canvas = document.getElementById('confetti');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    fire() {
        this.particles = [];
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];

        for (let i = 0; i < 150; i++) {
            this.particles.push({
                x: this.canvas.width / 2,
                y: this.canvas.height / 2,
                vx: (Math.random() - 0.5) * 20,
                vy: (Math.random() - 0.5) * 20 - 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 8 + 4,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                life: 100
            });
        }

        this.animate();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.particles.length === 0) return;

        this.particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.5; // Gravity
            p.rotation += p.rotationSpeed;
            p.life--;

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation * Math.PI / 180);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            this.ctx.restore();

            if (p.life <= 0) this.particles.splice(i, 1);
        });

        requestAnimationFrame(() => this.animate());
    }
}

const confetti = new ConfettiSystem();
