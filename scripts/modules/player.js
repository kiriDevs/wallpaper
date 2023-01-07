const embedbaseurl = "https://youtube.com/embed/";
const doAutoplay = true;

const embedsizefactor = 20;

const allMultis = document.querySelectorAll(MARKERS["mod:player:multi"]);

MODULES.player = {
  videoMap: {},
  initPlayer: (element) => {
    MODULES.player.videoMap[element.id] = [];

    // Discover and save videoIDs in the element
    const vidListLines = element.innerHTML.split("\n");
    vidListLines.forEach((vidlistline) => {
      const trimmed = vidlistline.trim();

      // Ignore the line if there is nothing in there
      if (trimmed === "") { return; }

      // Only add the first "word" of every line to the list
      const words = trimmed.split(" ");
      MODULES.player.videoMap[element.id].push(words[0]);
    });

    // Reset element innerHTML and generate the actual player
    element.innerHTML = "";

    const embedframe = document.createElement("iframe");
    embedframe.classList.add(MARKERS["mod:player:multi:embedframe"]);
    embedframe.width = 16 * embedsizefactor;
    embedframe.height = 9 * embedsizefactor;
    embedframe.frameBorder = 0;
    element.appendChild(embedframe);

    const buttonlist = document.createElement("div");
    buttonlist.classList.add(MARKERS["mod:player:multi:buttonlist"]);

    // Generate a button for each video
    MODULES.player.videoMap[element.id].forEach((videoId) => {
      const i = MODULES.player.videoMap[element.id].indexOf(videoId);
      const handler = () => {MODULES.player.handleVideoButton(element.id, i)}

      const videoButton = document.createElement("button");
      videoButton.classList.add(MARKERS["mod:player:multi:button"]);
      videoButton.onclick = handler;
      videoButton.innerHTML = `Video ${i+1}`;

      buttonlist.append(videoButton);
    });

    element.appendChild(buttonlist);
  },
  handleVideoButton: (playerid, videoindex) => {
    // Get elements
    const player = document.querySelector(`#${playerid}`);
    const videoFrame = player.children[0];
    const buttonList = player.children[1];

    // Collect data
    const videoId = MODULES.player.videoMap[playerid][videoindex];
    const embedUrl = embedbaseurl + videoId + `?autoplay=${doAutoplay?1:0}`;

    // Update the iframe src
    videoFrame.src = embedUrl;

    // Enable all buttons; Disable clicked ones to indicate playing video
    const buttonsCollection = buttonList.children;
    const buttons = Array.from(buttonsCollection);
    buttons.forEach((button) => {
      const i = buttons.indexOf(button);
      button.disabled = (i === videoindex);
    });
  },
  __init: () => {
    // Initialize elements
    allMultis.forEach((multiElem) => {
      MODULES.player.initPlayer(multiElem);
    });
  }
}

MODULES.player.__init();
