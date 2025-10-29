document.addEventListener("DOMContentLoaded", function() {
  // Create a fake "ad box" to detect blockers
  var bait = document.createElement('div');
  bait.className = 'adsbox';
  bait.style.position = 'absolute';
  bait.style.height = '1px';
  bait.style.width = '1px';
  bait.style.top = '-100px';
  document.body.appendChild(bait);

  setTimeout(function() {
    // If the bait element is hidden or removed, an ad blocker is active
    if (bait.offsetParent === null || bait.offsetHeight === 0) {
      var overlay = document.createElement('div');
      overlay.style = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.9);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        z-index: 9999;
        font-family: Arial, sans-serif;
        padding: 20px;
      `;

      overlay.innerHTML = `
        <h2 style="font-size: 28px; margin-bottom: 15px;">🚫 Ad Blocker Detected</h2>
        <p style="font-size: 18px; max-width: 600px;">
          It looks like you're using an ad blocker.  
          Please disable it to support <strong>VORAKS</strong> and access our free presets.
        </p>
        <button id="reloadPage" style="
          margin-top: 25px;
          background: #ff3333;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        ">I’ve Disabled It – Reload</button>
      `;

      document.body.appendChild(overlay);

      // Reload button
      document.getElementById('reloadPage').addEventListener('click', function() {
        location.reload();
      });
    }

    bait.remove();
  }, 200);
});