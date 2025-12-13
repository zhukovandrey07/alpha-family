// ========================================
// ALPHAFAMILY PRO - MAIN APP
// ========================================

const app = {
    // State
    profile: '',
    lang: 'ru',
    level: 0,
    isMathMode: false,
    muted: false, // FIX: Added muted state

    // Progress
    progress: {
        junior: {
            ru: { lvl: 0, stars: [] },
            en: { lvl: 0, stars: [] },
            he: { lvl: 0, stars: [] },
            numbers: { lvl: 0, stars: [] }
        },
        senior: {
            ru: { lvl: 0, stars: [] },
            en: { lvl: 0, stars: [] },
            he: { lvl: 0, stars: [] }
        }
    },

    // Initialization
    init() {
        this.loadProgress();
        this.updateLocalization();
        this.hideLoading();
    },

    // Loading
    hideLoading() {
        setTimeout(() => {
            const loading = document.getElementById('loading-screen');
            loading.classList.add('hidden');
        }, 1500);
    },

    // Progress Management
    loadProgress() {
        const saved = localStorage.getItem('alphaFamilyPro');
        if (saved) {
            const data = JSON.parse(saved);
            if (data.progress) this.progress = data.progress;
            if (data.lang) this.lang = data.lang;
            if (data.muted !== undefined) this.muted = data.muted; // Load mute state
        }
        this.updateMuteIcon(); // Update icon on load
    },

    saveProgress() {
        localStorage.setItem('alphaFamilyPro', JSON.stringify({
            progress: this.progress,
            lang: this.lang,
            muted: this.muted // Save mute state
        }));
    },

    // Navigation
    go(screenId) {
        audio.playClick();
        document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
        document.getElementById(screenId).classList.remove('hidden');
    },

    goBackFromMap() {
        this.go('view-roles');
    },

    // Language
    toggleLang() {
        const langs = ['ru', 'en', 'he'];
        const currentIndex = langs.indexOf(this.lang);
        this.setLang(langs[(currentIndex + 1) % langs.length]);
    },

    setLang(lang) {
        this.lang = lang;
        document.documentElement.dir = (lang === 'he') ? 'rtl' : 'ltr';
        const flags = { ru: '🇷🇺', en: '🇺🇸', he: '🇮🇱' };
        document.querySelector('.lang-flag').textContent = flags[lang];
        this.updateLocalization();
        this.saveProgress();
    },

    updateLocalization() {
        const t = TRANS[this.lang];
        document.getElementById('lbl-subtitle').textContent = t.subtitle;
        document.getElementById('lbl-jun-title').textContent = t.jun_t;
        document.getElementById('lbl-jun-desc').textContent = t.jun_d;
        document.getElementById('lbl-sen-title').textContent = t.sen_t;
        document.getElementById('lbl-sen-desc').textContent = t.sen_d;
        document.getElementById('lbl-select-subj').textContent = t.sel_sub;
        document.getElementById('lbl-letters').textContent = t.l_let;
        document.getElementById('lbl-math').textContent = t.l_math;
        document.getElementById('lbl-map').textContent = t.map;
        document.getElementById('lbl-dict').textContent = t.dict;
        document.getElementById('lbl-find').textContent = t.find;

        // Syllable labels
        const lblSyllables = document.getElementById('lbl-syllables');
        if (lblSyllables) lblSyllables.textContent = t.l_syllables;
        const lblSylSelect = document.getElementById('lbl-syllable-select');
        if (lblSylSelect) lblSylSelect.textContent = t.select_mode;
        const lblSylBasic = document.getElementById('lbl-syl-basic');
        if (lblSylBasic) lblSylBasic.textContent = t.syl_basic;
        const lblSylAdv = document.getElementById('lbl-syl-advanced');
        if (lblSylAdv) lblSylAdv.textContent = t.syl_advanced;
        const lblNextWord = document.getElementById('lbl-next-word');
        if (lblNextWord) lblNextWord.textContent = t.next_word;
        const lblReset = document.getElementById('lbl-reset');
        if (lblReset) lblReset.textContent = t.reset;
    },

    // Audio Control
    toggleMute() {
        this.muted = !this.muted;
        this.updateMuteIcon();
        if (this.muted && window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        this.saveProgress();
    },

    updateMuteIcon() {
        const icon = document.getElementById('mute-icon');
        if (icon) icon.textContent = this.muted ? '🔇' : '🔊';
    },

    // Profile Selection
    setProfile(profile) {
        this.profile = profile;
        confetti.fire();

        if (profile === 'junior') {
            this.isMathMode = false;
            this.renderMap();
            setTimeout(() => this.go('view-map'), 600);
        } else {
            setTimeout(() => this.go('view-senior-menu'), 600);
        }
    },

    // FIX: Correctly handle subject selection
    startSubject(subject) {
        if (subject === 'letters') {
            this.isMathMode = false;
            this.renderMap();
            this.go('view-map');
        }
    },

    startSeniorLetters() {
        this.isMathMode = false;
        this.renderMap();
        this.go('view-map');
    },

    // FIX: Correctly route to Math Game
    goToMathMenu() {
        if (this.profile === 'junior') {
            MathGame.start('junior');
        } else {
            MathGame.start('senior');
        }
    },

    // Map Rendering
    renderMap() {
        const container = document.getElementById('map-container');
        container.innerHTML = '';

        let list, current, starsArr;
        if (this.isMathMode && this.profile === 'junior') {
            list = DB[this.lang].numbers;
            current = this.progress.junior.numbers.lvl;
            starsArr = this.progress.junior.numbers.stars;
        } else {
            list = DB[this.lang].letters;
            current = this.progress[this.profile][this.lang].lvl;
            starsArr = this.progress[this.profile][this.lang].stars;
        }

        list.forEach((item, idx) => {
            const node = document.createElement('div');
            node.textContent = item.l || item.v;

            if (idx < current) {
                node.className = 'level-node completed';
                node.onclick = () => this.startLevel(idx);

                const stars = starsArr[idx] || 0;
                let starsHTML = '<div class="level-stars">';
                for (let i = 0; i < 3; i++) {
                    starsHTML += `<div class="tiny-star ${i < stars ? 'gold' : ''}">★</div>`;
                }
                starsHTML += '</div>';
                node.innerHTML += starsHTML;
            } else if (idx === current) {
                node.className = 'level-node unlocked';
                node.onclick = () => this.startLevel(idx);
            } else {
                node.className = 'level-node locked';
            }

            container.appendChild(node);

            // Stagger animation
            setTimeout(() => {
                node.style.animation = 'fadeInUp 0.5s ease forwards';

                if (this.level === user.lvl) {
                    user.lvl++;
                    user.stars[this.level] = stars;
                } else if (this.level < user.lvl) {
                    if (!user.stars[this.level] || stars > user.stars[this.level]) {
                        user.stars[this.level] = stars;
                    }
                }

                this.saveProgress();

                // Speak praise
                const praises = TRANS[this.lang].yes;
                const praise = praises[Math.floor(Math.random() * praises.length)];
                this.speak(praise);

                // Next level or return to map
                setTimeout(() => {
                    const nextIdx = this.level + 1;
                    if (nextIdx < maxLvl) {
                        this.startLevel(nextIdx);
                    } else {
                        this.renderMap();
                        this.go('view-map');
                    }
                }, 2000);
            }, idx * 100);
        });
    },

    // Speech
    speak(text) {
        if (this.muted) return; // FIX: Respect mute state
        audio.wakeUp();
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = DB[this.lang].locale;
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    },

    // Delegate Syllable Methods
    goToSyllableMenu() { SyllableGame.goToMenu(); },
    startSyllableBasic() { SyllableGame.startBasic(); },
    startSyllableAdvanced() { SyllableGame.startAdvanced(); },
    nextSyllableWord() { SyllableGame.nextWord(); },

    // Dictionary placeholder
    showDictionary() {
        const container = document.getElementById('dict-container');
        if (!container) return;
        container.innerHTML = '';
        const list = DB[this.lang].letters;

        // Show all letters
        for (let i = 0; i < list.length; i++) {
            const lObj = list[i];
            const div = document.createElement('div');
            div.className = 'dict-item';

            let html = `<div class="dict-letter">${lObj.l}</div><div class="dict-words">`;
            lObj.ops.forEach(op => {
                html += `<span class="dict-word" onclick="app.speak('${op.s || op.w}')">${op.i} ${op.w}</span>`;
            });
            html += `</div>`;
            div.innerHTML = html;
            container.appendChild(div);
        }
        this.go('view-dict');
    },

    showPhilwordMenu() {
        const container = document.getElementById('phil-menu-container');
        if (!container) return;
        container.innerHTML = '';
        const list = DB[this.lang].letters;
        for (let i = 0; i < list.length; i++) {
            const node = document.createElement('div');
            node.className = 'level-node unlocked';
            node.innerText = list[i].l;
            node.onclick = () => PhilwordsGame.start(i);
            container.appendChild(node);
        }
        this.go('view-phil-menu');
    }
};

// ========================================
// START APP
// ========================================

window.addEventListener('load', () => {
    app.init();
});
