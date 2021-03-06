import videojs from 'video.js';

// Default options for the plugin.
const defaults = { title: undefined };

/**
 * Function to invoke when the player is ready.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
const onPlayerReady = (player, options) => {
  const videoEl = player.el();
  const div = document.createElement('div');

  player.addClass('vjs-title-bar');

  if (!options.title) {
    return;
  }

  div.innerHTML = options.title;
  div.classList.add('vjs-title-bar-content');

  videoEl.appendChild(div);
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function titleBar
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const titleBar = function(options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
videojs.plugin('titleBar', titleBar);

// Include the version number.
titleBar.VERSION = '__VERSION__';

export default titleBar;
