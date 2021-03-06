/**
 * Configure for track.
 */
class TrackConfig {
  /**
   * Initialize
   */
  static initialize() {
    global.TrackConfigs = {};
  }

  /**
   * Execute function with configure.
   * @param {function} func configure function.
   */
  static configure(func) {
    func(this);
  }

  /**
   * Get application loader.
   * @return {function} Application loader.
   */
  static get loader() {
    return global.TrackConfigs.loader;
  }

  /**
   * Set application loader.
   * @param {function} value Application loader.
   */
  static set loader(value) {
    global.TrackConfigs.loader = value;
  }
}

TrackConfig.initialize();
module.exports = TrackConfig;
