/**
 * Web Audio API synthesizer for playful, kid-friendly sound effects.
 * 100% offline, zero external sound files.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;
  private calmMode: boolean = false;

  constructor() {
    // AudioContext will be initialized on first user gesture
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.muted = muted;
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public setCalmMode(calm: boolean) {
    this.calmMode = calm;
  }

  public playTone(freq: number, type: OscillatorType, duration: number, gainVal = 0.15) {
    if (this.muted || this.calmMode) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Ignore audio errors gracefully
    }
  }

  public playCorrect() {
    if (this.muted || this.calmMode) return;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 arpeggio
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.18, 0.18);
      }, idx * 60);
    });
  }

  public playWrong() {
    if (this.muted || this.calmMode) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(180, this.ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch {
      // ignore
    }
  }

  public playClick() {
    this.playTone(700, 'sine', 0.04, 0.08);
  }

  public playFanfare() {
    if (this.muted || this.calmMode) return;
    const chords = [523.25, 659.25, 783.99, 1046.5];
    chords.forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.4, 0.2);
      }, i * 90);
    });
  }

  public playJump() {
    if (this.muted || this.calmMode) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch {
      // ignore
    }
  }

  public playPop() {
    this.playTone(880, 'sine', 0.08, 0.15);
  }
}

export const sound = new SoundEngine();
