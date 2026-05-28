import "./styles.css";

const boards = [
  {
    code: "b",
    title: "Aleatorio",
    category: "underground",
    icon: "B",
    accent: "#8d3f4d",
    desc: "Caos rapido, memes estranhos, confissoes anonimas e energia de forum sem filtro.",
    posts: "312k",
    members: "88k",
    tags: ["chaos", "anon", "fast"],
  },
  {
    code: "g",
    title: "Tecnologia",
    category: "tech",
    icon: "G",
    accent: "#4f7d35",
    desc: "Setups, software livre, hardware, scripts e opinioes fortes sobre ferramentas.",
    posts: "134k",
    members: "46k",
    tags: ["code", "linux", "gear"],
  },
  {
    code: "v",
    title: "Jogos",
    category: "games",
    icon: "V",
    accent: "#a36f2f",
    desc: "Games novos, nostalgia, mods, tier lists e brigas que viram thread lendaria.",
    posts: "208k",
    members: "71k",
    tags: ["games", "mods", "retro"],
  },
  {
    code: "mu",
    title: "Musica",
    category: "cultura",
    icon: "M",
    accent: "#6f5b8d",
    desc: "Albuns, mixes, listas, raridades e recomendacoes para ouvir de madrugada.",
    posts: "48k",
    members: "19k",
    tags: ["albums", "noise", "mixes"],
  },
  {
    code: "ic",
    title: "Arte/Critica",
    category: "criacao",
    icon: "I",
    accent: "#8f4d70",
    desc: "Sketchbooks, pintura digital, estudos, feedback cru e progresso real.",
    posts: "32k",
    members: "12k",
    tags: ["draw", "wip", "critique"],
  },
  {
    code: "diy",
    title: "Faca Voce Mesmo",
    category: "criacao",
    icon: "D",
    accent: "#5d7f40",
    desc: "Projetos de bancada, reparos, eletronica, ferramentas e gambiarra bonita.",
    posts: "27k",
    members: "9k",
    tags: ["maker", "repair", "tools"],
  },
  {
    code: "x",
    title: "Paranormal",
    category: "underground",
    icon: "X",
    accent: "#4f6f95",
    desc: "Relatos estranhos, ARGs, arquivos liminais e misterio com gosto de madrugada.",
    posts: "64k",
    members: "22k",
    tags: ["liminal", "arg", "mystery"],
  },
  {
    code: "fit",
    title: "Condicionamento",
    category: "vida",
    icon: "F",
    accent: "#9a5a38",
    desc: "Rotina, progresso, comida simples e motivacao com sinceridade de vestiario.",
    posts: "41k",
    members: "15k",
    tags: ["routine", "health", "logs"],
  },
  {
    code: "lit",
    title: "Literatura",
    category: "cultura",
    icon: "L",
    accent: "#607880",
    desc: "Livros, escrita, poesia, PDFs esquecidos e clubes de leitura anonimos.",
    posts: "22k",
    members: "8k",
    tags: ["books", "writing", "pdf"],
  },
];

const categoryLabels = {
  all: "todos",
  cultura: "cultura",
  tech: "tech",
  games: "games",
  criacao: "criacao",
  underground: "underground",
  vida: "vida",
};

const anonymousUser = {
  name: "Anonymous",
  handle: "anon",
  bio: "sem perfil, so o post.",
  initials: "AN",
  avatarBg: "#121018",
};

let currentUser = null;

let posts = [
  {
    id: "p101",
    boardCode: "g",
    subject: "Software que ainda parece feito por humanos",
    author: {
      name: "Patch Kid",
      handle: "patchkid",
      initials: "PK",
      avatarBg: "#5fbf3b",
    },
    time: "12 min",
    text: "Qual foi o ultimo software que realmente te deu vontade de abrir todo dia? Estou cansado de apps que parecem sala de reuniao.",
    image: { type: "desktop", label: "desktop-2004.png" },
    stats: { likes: 128, comments: 12, reposts: 18, saves: 41 },
    liked: false,
    reposted: false,
    saved: false,
    commentsList: [
      {
        id: "c1",
        author: { name: "Old Web", handle: "oldweb", initials: "OW", avatarBg: "#7c5cff" },
        time: "8 min",
        text: "Um leitor RSS simples. Zero algoritmo, so feed.",
      },
      {
        id: "c2",
        author: { name: "Null User", handle: "nulluser", initials: "NU", avatarBg: "#8d3f4d" },
        time: "4 min",
        text: "Winamp ainda faz mais sentido visual que metade dos players atuais.",
      },
    ],
  },
  {
    id: "p102",
    boardCode: "v",
    subject: "Jogos melhores na memoria",
    author: {
      name: "Memory Card",
      handle: "savepoint",
      initials: "MC",
      avatarBg: "#a36f2f",
    },
    time: "28 min",
    text: "Thread de jogos que parecem melhores na sua memoria. Poste um titulo e uma defesa honesta.",
    image: { type: "game", label: "crt-corner.jpg" },
    stats: { likes: 302, comments: 44, reposts: 39, saves: 87 },
    liked: true,
    reposted: false,
    saved: false,
    commentsList: [
      {
        id: "c3",
        author: { name: "Boss Key", handle: "bosskey", initials: "BK", avatarBg: "#2e86de" },
        time: "21 min",
        text: "Tudo fica melhor quando a trilha sonora entra primeiro na lembranca.",
      },
    ],
  },
  {
    id: "p103",
    boardCode: "ic",
    subject: "Critica rapida: poste a arte quase deletada",
    author: {
      name: "Ink Crash",
      handle: "inkcrash",
      initials: "IC",
      avatarBg: "#8f4d70",
    },
    time: "43 min",
    text: "Poste a arte que voce quase apagou. Critica rapida, sem palestra, com uma dica util no final.",
    image: { type: "art", label: "scan-room.png" },
    stats: { likes: 87, comments: 19, reposts: 7, saves: 36 },
    liked: false,
    reposted: false,
    saved: true,
    commentsList: [],
  },
  {
    id: "p104",
    boardCode: "mu",
    subject: "Albuns para shopping vazio",
    author: {
      name: "Cassette Ghost",
      handle: "tapeghost",
      initials: "CG",
      avatarBg: "#7c5cff",
    },
    time: "1 h",
    text: "Albuns para andar por um shopping vazio as 23h. Quero capa feia, sintetizador triste e baixo comprimido.",
    image: null,
    stats: { likes: 211, comments: 33, reposts: 25, saves: 104 },
    liked: false,
    reposted: true,
    saved: false,
    commentsList: [],
  },
  {
    id: "p105",
    boardCode: "b",
    subject: "A internet feita por gente estranha",
    author: {
      name: "After School Anon",
      handle: "afterschool",
      initials: "AS",
      avatarBg: "#8d3f4d",
    },
    time: "2 h",
    text: "A internet era melhor quando cada pagina parecia feita por alguem com uma ideia ruim e muita vontade.",
    image: null,
    stats: { likes: 444, comments: 58, reposts: 64, saves: 132 },
    liked: false,
    reposted: false,
    saved: false,
    commentsList: [],
  },
];

const state = {
  category: "all",
  query: "",
  editingProfile: false,
  profileTab: "posts",
  profileAvatarDraft: null,
  profileGifDraft: null,
  composeBoard: "b",
  pendingCompose: null,
  composeAttachment: null,
};

const app = document.querySelector("#app");
const primaryNav = document.querySelector("#primaryNav");
const searchInput = document.querySelector("#globalSearch");
const authButton = document.querySelector("#authButton");
const newPostButton = document.querySelector("#newPostButton");
const themeToggle = document.querySelector("#themeToggle");
const themeToggleMobile = document.querySelector("#themeToggleMobile");
const mobileMenuToggle = document.querySelector("#mobileMenuToggle");
const loadingScreen = document.querySelector("#loadingScreen");
const modalBackdrop = document.querySelector("#modalBackdrop");
const loginModal = document.querySelector("#loginModal");
const composeModal = document.querySelector("#composeModal");
const loginForm = document.querySelector("#loginForm");
const composeForm = document.querySelector("#composeForm");
const composeBoard = document.querySelector("#composeBoard");
const composeSubject = document.querySelector("#composeSubject");
const composeText = document.querySelector("#composeText");
const composeFile = document.querySelector("#composeFile");
const composePreview = document.querySelector("#composePreview");
const gifTray = document.querySelector("#gifTray");

const normalize = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

function matchesSearchQuery(parts, query = state.query) {
  const normalizedQuery = normalize(query).trim();
  if (!normalizedQuery) return true;

  const haystack = normalize(parts.filter(Boolean).join(" "));
  if (haystack.includes(normalizedQuery)) return true;

  return normalizedQuery.split(/\s+/).every((token) => haystack.includes(token));
}

const postImageThemeKeywords = {
  tech: ["software", "app", "apps", "linux", "hardware", "codigo", "code", "internet", "computador", "script", "setup", "rss"],
  games: ["jogo", "jogos", "games", "game", "console", "pc", "mod", "mods", "nostalgia", "memoria", "titulo"],
  music: ["musica", "album", "albuns", "mix", "cassette", "banda", "sintetizador", "baixo", "winamp"],
  art: ["arte", "desenho", "critica", "pintura", "sketch", "sketchbook", "digital", "wip"],
  random: ["meme", "estranho", "estranha", "caos", "anon", "anonymous", "oldweb", "liminal", "arg", "misterio"],
};

const boardImageThemes = {
  b: "random",
  g: "tech",
  v: "games",
  mu: "music",
  ic: "art",
  diy: "tech",
  x: "random",
  lit: "art",
};

const postImageAssets = {
  tech: [
    {
      src: "/assets/posts/tech/software-window.svg",
      label: "software-window.svg",
      alt: "Janela de software retro com paineis de codigo",
    },
    {
      src: "/assets/posts/tech/hardware-desk.svg",
      label: "hardware-desk.svg",
      alt: "Mesa com computador antigo, cabos e placas",
    },
  ],
  games: [
    {
      src: "/assets/posts/games/memory-console.svg",
      label: "memory-console.svg",
      alt: "Console retro sob luz de CRT",
    },
    {
      src: "/assets/posts/games/crt-level.svg",
      label: "crt-level.svg",
      alt: "Tela CRT com fase de jogo em pixel art",
    },
  ],
  music: [
    {
      src: "/assets/posts/music/cassette-night.svg",
      label: "cassette-night.svg",
      alt: "Cassette retro em uma sala de musica noturna",
    },
    {
      src: "/assets/posts/music/album-grid.svg",
      label: "album-grid.svg",
      alt: "Grade de capas de albuns com forma de onda",
    },
  ],
  art: [
    {
      src: "/assets/posts/art/sketch-desk.svg",
      label: "sketch-desk.svg",
      alt: "Mesa de desenho com sketches e amostras de cor",
    },
    {
      src: "/assets/posts/art/pixel-gallery.svg",
      label: "pixel-gallery.svg",
      alt: "Galeria old web com quadros de pixel art",
    },
  ],
  random: [
    {
      src: "/assets/posts/random/oldweb-chaos.svg",
      label: "oldweb-chaos.svg",
      alt: "Colagem caotica de janelas e formas old web",
    },
    {
      src: "/assets/posts/random/meme-board.svg",
      label: "meme-board.svg",
      alt: "Mural anonimo com notas, memes e textura ruidosa",
    },
  ],
};

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });

const boardByCode = (code) => boards.find((board) => board.code === code) || boards[0];
const postById = (id) => posts.find((post) => post.id === id);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasKeyword(text, keyword) {
  const normalizedKeyword = normalize(keyword);
  const pattern = new RegExp(`(^|[^a-z0-9])${escapeRegExp(normalizedKeyword)}([^a-z0-9]|$)`);
  return pattern.test(text);
}

function getPostImageContent(post) {
  const board = boardByCode(post.boardCode);
  const commentText = (post.commentsList || []).map((comment) => comment.text).join(" ");
  return normalize(
    [
      post.subject,
      post.text,
      post.boardCode,
      ...(post.tags || []),
      board.code,
      board.title,
      board.category,
      board.desc,
      ...board.tags,
      commentText,
    ]
      .filter(Boolean)
      .join(" ")
  );
}

function getStableImageIndex(post, assetCount) {
  if (!assetCount) return -1;
  const seed = `${post.id}|${post.subject || ""}|${post.text || ""}`;
  let hash = 0;
  for (const char of seed) {
    hash = (hash * 31 + char.charCodeAt(0)) % 2147483647;
  }
  return Math.abs(hash) % assetCount;
}

function getImageByPostContent(post) {
  const content = getPostImageContent(post);
  const boardTheme = boardImageThemes[post.boardCode];
  const [theme, score] = Object.entries(postImageThemeKeywords)
    .map(([themeName, keywords]) => {
      const keywordScore = keywords.reduce((score, keyword) => score + (hasKeyword(content, keyword) ? 1 : 0), 0);
      const boardScore = boardTheme === themeName ? 1 : 0;
      return [themeName, keywordScore + boardScore];
    })
    .sort((a, b) => b[1] - a[1])[0] || ["random", 0];
  const selectedTheme = score > 0 && postImageAssets[theme]?.length ? theme : "random";
  const assets = postImageAssets[selectedTheme] || postImageAssets.random || [];
  const asset = assets[getStableImageIndex(post, assets.length)];

  if (!asset) return null;

  return {
    ...asset,
    type: "contextual",
    theme: selectedTheme,
    contextual: true,
  };
}

function getRenderablePostImage(post) {
  if (post.image?.url || post.image?.type === "gif") return post.image;
  return getImageByPostContent(post);
}

function getRoute() {
  const hash = location.hash.replace(/^#/, "") || "home";
  const [view, id] = hash.split("/");
  return { view: view || "home", id };
}

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function cleanHandle(value) {
  const handle = normalize(value).replace(/[^a-z0-9_]/g, "").slice(0, 18);
  return handle || "anon";
}

function closeMobileMenu() {
  const header = document.querySelector(".site-header");
  if (header) {
    header.classList.remove("menu-open");
  }
  if (mobileMenuToggle) {
    mobileMenuToggle.classList.remove("is-open");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
  }
}

function setHash(hash) {
  closeMobileMenu();
  location.hash = hash;
}

function openSearchResults() {
  if (getRoute().view === "search") render();
  else setHash("search");
}

function renderComposerPreview() {
  if (!state.composeAttachment) {
    composePreview.hidden = true;
    composePreview.innerHTML = "";
    return;
  }

  const attachment = state.composeAttachment;
  const preview =
    attachment.url
      ? `<img src="${attachment.url}" alt="Preview do anexo ${escapeHTML(attachment.label)}" />`
      : `<div class="compose-gif-preview gif-${escapeHTML(attachment.gifStyle)}"></div>`;

  composePreview.hidden = false;
  composePreview.innerHTML = `
    <div class="preview-frame">
      ${preview}
      <span>${escapeHTML(attachment.label)}</span>
    </div>
    <button class="tool-button" type="button" data-remove-attachment>Remover anexo</button>
  `;
}

function setComposerAttachment(attachment) {
  state.composeAttachment = attachment;
  renderComposerPreview();
}

function resetComposerAttachment() {
  state.composeAttachment = null;
  if (composeFile) composeFile.value = "";
  if (gifTray) gifTray.hidden = true;
  if (composePreview) {
    composePreview.hidden = true;
    composePreview.innerHTML = "";
  }
}

function insertEmoji(emoji) {
  const start = composeText.selectionStart ?? composeText.value.length;
  const end = composeText.selectionEnd ?? composeText.value.length;
  composeText.value = `${composeText.value.slice(0, start)}${emoji}${composeText.value.slice(end)}`;
  composeText.focus();
  const nextPosition = start + emoji.length;
  composeText.setSelectionRange(nextPosition, nextPosition);
}

function closeModals() {
  modalBackdrop.hidden = true;
  loginModal.hidden = true;
  composeModal.hidden = true;
  document.body.classList.remove("modal-open");
  resetComposerAttachment();
}

function openLogin() {
  modalBackdrop.hidden = false;
  loginModal.hidden = false;
  composeModal.hidden = true;
  document.body.classList.add("modal-open");
  document.querySelector("#loginName").focus();
}

function openCompose(boardCode) {
  if (!currentUser) {
    state.pendingCompose = boardCode || state.composeBoard;
    openLogin();
    return;
  }

  const route = getRoute();
  const preset = boardCode || (route.view === "board" ? route.id : state.composeBoard);
  state.composeBoard = boardByCode(preset).code;

  composeBoard.value = state.composeBoard;
  composeForm.reset();
  composeBoard.value = state.composeBoard;
  resetComposerAttachment();
  modalBackdrop.hidden = false;
  composeModal.hidden = false;
  loginModal.hidden = true;
  document.body.classList.add("modal-open");
  composeText.focus();
}

function updateHeader() {
  const { view } = getRoute();
  const activeView = view === "board" ? "boards" : view === "post" ? "feed" : view;

  document.querySelectorAll("[data-nav]").forEach((link) => {
    const active = link.dataset.nav === activeView;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  if (currentUser) {
    authButton.innerHTML = `
      ${renderMiniAvatar(currentUser)}
      <span>Perfil</span>
    `;
  } else {
    authButton.textContent = "Entrar";
  }
}

function filteredBoards() {
  return boards.filter((board) => {
    const categoryMatch = state.category === "all" || board.category === state.category;
    const searchableParts = [
      board.code,
      `/${board.code}/`,
      board.title,
      board.category,
      board.desc,
      ...board.tags,
      ...board.tags.map((tag) => `#${tag}`),
    ];
    return categoryMatch && matchesSearchQuery(searchableParts);
  });
}

function filteredPosts({ boardCode, handle } = {}) {
  return posts.filter((post) => {
    const board = boardByCode(post.boardCode);
    const boardMatch = !boardCode || post.boardCode === boardCode;
    const userMatch = !handle || post.author.handle === handle;
    const searchableParts = [
      post.subject,
      post.text,
      post.author.name,
      post.author.handle,
      board.code,
      `/${board.code}/`,
      board.title,
      board.category,
      board.desc,
      ...board.tags,
      ...board.tags.map((tag) => `#${tag}`),
    ];
    return boardMatch && userMatch && matchesSearchQuery(searchableParts);
  });
}

function getSearchResults() {
  const query = normalize(state.query).trim();

  if (!query) {
    return { boards: [], posts: [] };
  }

  const matchedBoards = boards.filter((board) => {
    return matchesSearchQuery([
      board.code,
      `/${board.code}/`,
      board.title,
      board.category,
      board.desc,
      ...board.tags,
      ...board.tags.map((tag) => `#${tag}`),
    ]);
  });

  const matchedPosts = posts.filter((post) => {
    const board = boardByCode(post.boardCode);
    const commentsText = (post.commentsList || []).map((comment) => comment.text).join(" ");
    return matchesSearchQuery([
      post.subject,
      post.text,
      post.author.name,
      post.author.handle,
      board.code,
      `/${board.code}/`,
      board.title,
      board.category,
      board.desc,
      ...board.tags,
      ...board.tags.map((tag) => `#${tag}`),
      commentsText,
    ]);
  });

  return { boards: matchedBoards, posts: matchedPosts };
}

function renderCategoryFilters() {
  const categories = ["all", ...new Set(boards.map((board) => board.category))];

  return `
    <div class="filter-row" aria-label="Filtros por categoria">
      ${categories
        .map(
          (category) => `
            <button
              class="filter-chip ${state.category === category ? "is-active" : ""}"
              type="button"
              data-category="${category}"
              aria-pressed="${state.category === category}"
            >
              ${escapeHTML(categoryLabels[category])}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderBoardCard(board, compact = false) {
  return `
    <article
      class="community-card ${compact ? "is-compact" : ""}"
      style="--accent:${board.accent}"
      data-board-card="${board.code}"
      tabindex="0"
    >
      <div class="community-topline">
        <span class="community-icon" aria-hidden="true">${escapeHTML(board.icon)}</span>
        <span class="board-code">/${escapeHTML(board.code)}/</span>
        <span class="category-badge">${escapeHTML(categoryLabels[board.category])}</span>
      </div>
      <h3>${escapeHTML(board.title)}</h3>
      <p>${escapeHTML(board.desc)}</p>
      <div class="tag-row">
        ${board.tags.map((tag) => `<span>#${escapeHTML(tag)}</span>`).join("")}
      </div>
      <div class="community-footer">
        <span><strong>${escapeHTML(board.posts)}</strong> posts</span>
        <span><strong>${escapeHTML(board.members)}</strong> ativos</span>
        <button class="enter-button" type="button" data-board="${board.code}">Entrar</button>
      </div>
    </article>
  `;
}

function renderPostMedia(image) {
  if (!image) return "";

  const source = image.url || image.src;
  const label = image.label || "post-image";

  if (source) {
    return `
      <figure
        class="post-media is-real-media ${image.contextual ? "is-contextual" : ""} media-${escapeHTML(image.type || "image")} ${image.theme ? `theme-${escapeHTML(image.theme)}` : ""}"
        ${image.contextual ? `data-contextual-theme="${escapeHTML(image.theme)}"` : ""}
      >
        <img src="${escapeHTML(source)}" alt="${escapeHTML(image.alt || `Anexo: ${label}`)}" loading="lazy" />
        <figcaption>${escapeHTML(label)}</figcaption>
      </figure>
    `;
  }

  if (image.type === "gif") {
    return `
      <div class="post-media media-gif gif-${escapeHTML(image.gifStyle)}">
        <span>${escapeHTML(image.label)}</span>
      </div>
    `;
  }

  return `
    <div class="post-media media-${escapeHTML(image.type)}">
      <span>${escapeHTML(image.label)}</span>
    </div>
  `;
}

function getUserAvatarMedia(user) {
  return user?.avatarMedia?.url ? user.avatarMedia : null;
}

function renderAvatar(user, extraClass = "") {
  const avatarMedia = getUserAvatarMedia(user);
  if (avatarMedia) {
    return `
      <span class="avatar ${extraClass} has-media" style="--avatar-bg:${user.avatarBg}">
        <img src="${escapeHTML(avatarMedia.url)}" alt="Avatar de ${escapeHTML(user.name)}" loading="lazy" />
      </span>
    `;
  }

  return `
    <span class="avatar ${extraClass}" style="--avatar-bg:${user.avatarBg}">
      ${escapeHTML(user.initials)}
    </span>
  `;
}

function renderMiniAvatar(user) {
  const avatarMedia = getUserAvatarMedia(user);
  if (avatarMedia) {
    return `
      <span class="mini-avatar has-media" style="--avatar-bg:${user.avatarBg}">
        <img src="${escapeHTML(avatarMedia.url)}" alt="" />
      </span>
    `;
  }

  return `
    <span class="mini-avatar" style="--avatar-bg:${user.avatarBg}">
      ${escapeHTML(user.initials)}
    </span>
  `;
}

function renderProfileGif(media) {
  if (!media?.url) return "";

  return `
    <figure class="profile-gif-frame">
      <img src="${escapeHTML(media.url)}" alt="GIF do perfil de ${escapeHTML(currentUser.name)}" loading="lazy" />
      <figcaption>${escapeHTML(media.label || "profile.gif")}</figcaption>
    </figure>
  `;
}

function renderProfileMediaPreview(media, emptyLabel, removeAttribute) {
  return `
    <div class="profile-media-preview ${media?.url ? "has-media" : ""}">
      ${
        media?.url
          ? `<img src="${escapeHTML(media.url)}" alt="Preview de ${escapeHTML(media.label || emptyLabel)}" />`
          : `<span>${escapeHTML(emptyLabel)}</span>`
      }
      ${
        media?.url
          ? `<button class="tool-button" type="button" ${removeAttribute}>Remover</button>`
          : ""
      }
    </div>
  `;
}

function isImageFile(file) {
  return Boolean(file?.type?.startsWith("image/") || /\.(gif|png|jpe?g|webp)$/i.test(file?.name || ""));
}

function isGifFile(file) {
  return Boolean(file?.type === "image/gif" || /\.gif$/i.test(file?.name || ""));
}

function readProfileMediaFile(file, callback) {
  if (!isImageFile(file)) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    callback({
      url: String(reader.result),
      label: file.name,
      mime: file.type,
      isGif: isGifFile(file),
    });
  });
  reader.readAsDataURL(file);
}

function syncUserSnapshots(previousHandle, user) {
  posts.forEach((post) => {
    if (post.author.handle === previousHandle) {
      post.author = { ...post.author, ...user };
    }

    post.commentsList.forEach((comment) => {
      if (comment.author.handle === previousHandle) {
        comment.author = { ...comment.author, ...user };
      }
    });
  });
}

function renderActionButton(post, action, label, count, active) {
  const icons = { like: "♡", comment: "💬", repost: "↗", save: "⚑" };
  const activeIcons = { like: "♥" };
  const icon = (active && activeIcons[action]) || icons[action] || label;
  return `
    <button
      class="action-button ${active ? "is-active" : ""}"
      type="button"
      data-action="${action}"
      data-post-id="${post.id}"
      aria-label="${label} ${count}"
    >
      <span class="action-icon" aria-hidden="true">${icon}</span>
      <b>${count}</b>
    </button>
  `;
}

function renderPostCard(post, options = {}) {
  const board = boardByCode(post.boardCode);
  const postImage = getRenderablePostImage(post);

  return `
    <article class="post-card ${options.full ? "is-full" : ""}" data-post-card="${post.id}">
      ${renderAvatar(post.author)}
      <div class="post-main">
        <header class="post-header">
          <div>
            <strong>${escapeHTML(post.author.name)}</strong>
            <span>@${escapeHTML(post.author.handle)}</span>
            <span>${escapeHTML(post.time)}</span>
          </div>
          <button class="board-pill" type="button" data-board="${board.code}">
            /${escapeHTML(board.code)}/
          </button>
        </header>
        <h3 class="post-subject">${escapeHTML(post.subject || "Thread")}</h3>
        <p class="post-text">${escapeHTML(post.text)}</p>
        ${renderPostMedia(postImage)}
        <div class="post-actions" aria-label="Acoes do post">
          ${renderActionButton(post, "like", "Curtir", post.stats.likes, post.liked)}
          ${renderActionButton(post, "comment", "Comentar", post.stats.comments, false)}
          ${renderActionButton(post, "repost", "Compartilhar", post.stats.reposts, post.reposted)}
          ${renderActionButton(post, "save", "Salvar", post.stats.saves, post.saved)}
        </div>
        ${
          options.full
            ? ""
            : `<button class="thread-link" type="button" data-post="${post.id}">Ler comentários</button>`
        }
      </div>
    </article>
  `;
}

function renderPostList(list) {
  if (!list.length) {
    return `
      <div class="empty-state">
        <strong>Nada por aqui ainda.</strong>
        <p>Tente outra busca, outro board ou publique o primeiro post.</p>
      </div>
    `;
  }

  return `<div class="feed-list">${list.map((post) => renderPostCard(post)).join("")}</div>`;
}

function getUserComments(handle) {
  return posts.flatMap((post) =>
    (post.commentsList || [])
      .filter((comment) => comment.author.handle === handle)
      .map((comment) => ({
        comment,
        post,
        board: boardByCode(post.boardCode),
      }))
  );
}

function renderProfileTabs({ userPosts, userComments, savedPosts, likedPosts }) {
  const tabs = [
    { id: "posts", label: "Posts", count: userPosts.length },
    { id: "comments", label: "Comentarios", count: userComments.length },
    { id: "saved", label: "Salvos", count: savedPosts.length },
    { id: "liked", label: "Curtidos", count: likedPosts.length },
  ];

  return `
    <div class="profile-tabs" role="tablist" aria-label="Conteudo do perfil">
      ${tabs
        .map(
          (tab) => `
            <button
              class="${state.profileTab === tab.id ? "is-active" : ""}"
              type="button"
              role="tab"
              aria-selected="${state.profileTab === tab.id}"
              data-profile-tab="${tab.id}"
            >
              <span>${escapeHTML(tab.label)}</span>
              <b>${tab.count}</b>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProfileComments(comments) {
  if (!comments.length) {
    return `
      <div class="empty-state">
        <strong>Nenhum comentario seu ainda.</strong>
        <p>Abra uma thread e responda para seu historico aparecer aqui.</p>
      </div>
    `;
  }

  return `
    <div class="comment-history-list">
      ${comments
        .map(
          ({ comment, post, board }) => `
            <article class="profile-comment-card">
              <div class="profile-comment-meta">
                <span>/${escapeHTML(board.code)}/</span>
                <span>${escapeHTML(comment.time)}</span>
              </div>
              <p>${escapeHTML(comment.text)}</p>
              <div class="profile-comment-thread">
                <strong>${escapeHTML(post.subject || "Thread")}</strong>
                <button class="thread-link" type="button" data-post="${post.id}">Abrir thread</button>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProfileTabPanel({ userPosts, userComments, savedPosts, likedPosts }) {
  if (state.profileTab === "comments") {
    return `
      <section class="timeline-column profile-posts">
        <div class="section-title-row">
          <div>
            <p class="eyebrow">comentarios do usuario</p>
            <h2>${userComments.length} comentarios</h2>
          </div>
        </div>
        ${renderProfileComments(userComments)}
      </section>
    `;
  }

  if (state.profileTab === "saved") {
    return `
      <section class="timeline-column profile-posts">
        <div class="section-title-row">
          <div>
            <p class="eyebrow">posts salvos</p>
            <h2>${savedPosts.length} salvos</h2>
          </div>
        </div>
        ${renderPostList(savedPosts)}
      </section>
    `;
  }

  if (state.profileTab === "liked") {
    return `
      <section class="timeline-column profile-posts">
        <div class="section-title-row">
          <div>
            <p class="eyebrow">posts curtidos</p>
            <h2>${likedPosts.length} curtidos</h2>
          </div>
        </div>
        ${renderPostList(likedPosts)}
      </section>
    `;
  }

  return `
    <section class="timeline-column profile-posts">
      <div class="section-title-row">
        <div>
          <p class="eyebrow">posts do usuario</p>
          <h2>${userPosts.length} publicacoes</h2>
        </div>
        <button class="small-button" type="button" data-open-compose>Novo post</button>
      </div>
      ${renderPostList(userPosts)}
    </section>
  `;
}

function getPostScore(post) {
  return post.stats.likes + post.stats.comments * 3 + post.stats.reposts * 2 + post.stats.saves;
}

function renderMiniThreadButton(post) {
  const board = boardByCode(post.boardCode);

  return `
    <button class="mini-thread-button" type="button" data-post="${post.id}">
      <span>/${escapeHTML(board.code)}/ · ${escapeHTML(post.time)}</span>
      <strong>${escapeHTML(post.subject || "Thread")}</strong>
      <em>${post.stats.comments} respostas</em>
    </button>
  `;
}

function renderHomePulse() {
  const activeBoards = ["b", "v", "g"].map(boardByCode);
  const recentThreads = posts.slice(0, 3);
  const hotThreads = [...posts].sort((a, b) => getPostScore(b) - getPostScore(a)).slice(0, 3);

  return `
    <section class="home-pulse-grid" aria-label="Atividade da comunidade">
      <article class="pulse-card">
        <p class="eyebrow">atividade recente</p>
        <div class="activity-list">
          ${recentThreads
            .map(
              (post) => `
                <button type="button" data-post="${post.id}">
                  <span>${escapeHTML(post.time)}</span>
                  <strong>${escapeHTML(post.author.name)}</strong>
                  <em>/${escapeHTML(post.boardCode)}/</em>
                </button>
              `
            )
            .join("")}
        </div>
      </article>
      <article class="pulse-card">
        <p class="eyebrow">boards em alta</p>
        <div class="compact-board-list">
          ${activeBoards
            .map(
              (board) => `
                <button type="button" data-board="${board.code}" style="--accent:${board.accent}">
                  <span>/${escapeHTML(board.code)}/</span>
                  <strong>${escapeHTML(board.title)}</strong>
                  <em>${escapeHTML(board.posts)} posts</em>
                </button>
              `
            )
            .join("")}
        </div>
      </article>
      <article class="pulse-card">
        <p class="eyebrow">threads populares</p>
        <div class="mini-thread-list">
          ${hotThreads.map((post) => renderMiniThreadButton(post)).join("")}
        </div>
      </article>
    </section>
  `;
}

function renderRightRail() {
  const hotBoards = boards.slice(0, 4);

  return `
    <aside class="right-rail" aria-label="Atalhos da comunidade">
      <section class="rail-card">
        <p class="eyebrow">subindo agora</p>
        <div class="trend-list">
          <button type="button" data-search-tag="old web">#oldweb</button>
          <button type="button" data-search-tag="mods">#mods</button>
          <button type="button" data-search-tag="critique">#critique</button>
          <button type="button" data-search-tag="liminal">#liminal</button>
        </div>
      </section>
      <section class="rail-card">
        <p class="eyebrow">boards vivos</p>
        <div class="rail-board-list">
          ${hotBoards
            .map(
              (board) => `
                <button type="button" data-board="${board.code}" style="--accent:${board.accent}">
                  <span>/${escapeHTML(board.code)}/</span>
                  <strong>${escapeHTML(board.title)}</strong>
                </button>
              `
            )
            .join("")}
        </div>
      </section>
    </aside>
  `;
}

function renderHome() {
  const feed = filteredPosts().slice(0, 6);
  const popular = ["b", "g", "v"].map(boardByCode);

  app.innerHTML = `
    <section class="hero-section">
      <div class="hero-copy-panel">
        <p class="eyebrow">imageboard renascida</p>
        <h1>O 4chan antigo, com uma casa nova.</h1>
        <p>
          Boards, threads e anonimato com textura de internet antiga,
          leitura clara, navegacao direta e o caos no volume certo.
        </p>
        <div class="hero-actions">
          <button class="primary-button" type="button" data-open-compose>Novo post</button>
          <a class="secondary-button" href="#boards">Explorar boards</a>
        </div>
        <div class="welcome-gif" aria-label="GIF de boas vindas">
          <div class="welcome-gif-window" aria-hidden="true">
            <span class="welcome-gif-title">bem-vindo.gif</span>
            <div class="welcome-gif-scene">
              <span class="welcome-gif-logo">4chan</span>
              <span class="welcome-gif-badge">BEM-VINDO</span>
              <span class="welcome-gif-orbit"></span>
              <span class="welcome-gif-cursor"></span>
              <span class="welcome-gif-star star-a"></span>
              <span class="welcome-gif-star star-b"></span>
              <span class="welcome-gif-star star-c"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-board-stack">
        <p class="eyebrow">foruns populares</p>
        ${popular.map((board) => renderBoardCard(board, true)).join("")}
      </div>
    </section>
    ${renderHomePulse()}

    <section class="content-layout">
      <div class="timeline-column">
        <div class="section-title-row">
          <div>
            <p class="eyebrow">catalogo recente</p>
            <h2>Posts recentes</h2>
          </div>
          <button class="small-button" type="button" data-open-compose>Publicar</button>
        </div>
        <button class="quick-composer" type="button" data-open-compose>
          <span>${currentUser ? `@${escapeHTML(currentUser.handle)}` : "entre para postar"}</span>
          <strong>Comece uma thread ou solte uma resposta curta.</strong>
        </button>
        ${renderPostList(feed)}
      </div>
      ${renderRightRail()}
    </section>
  `;
}

function renderProfileStats(userPosts, userComments, savedPosts) {
  const boardCount = new Set(userPosts.map((post) => post.boardCode)).size;
  const recentActivityPosts = userPosts.length
    ? userPosts.slice(0, 2)
    : savedPosts.length
      ? savedPosts.slice(0, 2)
      : userComments.map(({ post }) => post).slice(0, 2);

  return `
    <section class="profile-stats-grid" aria-label="Resumo do perfil">
      <article>
        <span>posts</span>
        <strong>${userPosts.length}</strong>
      </article>
      <article>
        <span>comentarios</span>
        <strong>${userComments.length}</strong>
      </article>
      <article>
        <span>salvos</span>
        <strong>${savedPosts.length}</strong>
      </article>
      <article>
        <span>boards</span>
        <strong>${boardCount}</strong>
      </article>
    </section>
    <section class="profile-activity-panel">
      <div>
        <p class="eyebrow">ultimas interacoes</p>
        <strong>${savedPosts.length} threads salvas</strong>
        <span>${userComments.length ? "Seus comentarios tambem ficam guardados aqui." : "Seu historico aparece aqui depois das primeiras interacoes."}</span>
      </div>
      <div class="mini-thread-list">
        ${
          recentActivityPosts.length
            ? recentActivityPosts.map((post) => renderMiniThreadButton(post)).join("")
            : `
              <button type="button" data-open-compose>
                <span>novo</span>
                <strong>Comece sua primeira thread</strong>
                <em>qualquer board serve</em>
              </button>
            `
        }
      </div>
    </section>
  `;
}

function renderFeed() {
  const feed = filteredPosts();

  app.innerHTML = `
    <section class="page-header">
      <p class="eyebrow">threads</p>
      <h1>Catalogo dos boards</h1>
      <p>Threads abertas agora, anexos perdidos, respostas rapidas e assunto de madrugada.</p>
    </section>
    <section class="content-layout">
      <div class="timeline-column">${renderPostList(feed)}</div>
      ${renderRightRail()}
    </section>
  `;
}

function renderSearchResults() {
  const query = state.query.trim();
  const results = getSearchResults();
  const total = results.boards.length + results.posts.length;

  app.innerHTML = `
    <section class="page-header search-results-header">
      <p class="eyebrow">busca global</p>
      <h1>${query ? `Resultados para "${escapeHTML(query)}"` : "Digite algo na busca"}</h1>
      <p>
        ${
          query
            ? `${total} resultado${total === 1 ? "" : "s"} encontrado${total === 1 ? "" : "s"} em boards, posts e comentarios.`
            : "Use a barra do topo para encontrar boards, posts, tags, usuarios e comentarios."
        }
      </p>
    </section>
    ${
      query
        ? `
          <section class="search-results-layout">
            <div class="timeline-column">
              <div class="section-title-row">
                <div>
                  <p class="eyebrow">posts encontrados</p>
                  <h2>${results.posts.length} posts</h2>
                </div>
              </div>
              ${renderPostList(results.posts)}
            </div>
            <aside class="right-rail">
              <section class="rail-card">
                <p class="eyebrow">boards encontrados</p>
                <div class="search-board-results">
                  ${
                    results.boards.length
                      ? results.boards.map((board) => renderBoardCard(board, true)).join("")
                      : `<p class="muted-copy">Nenhum board combina com essa busca.</p>`
                  }
                </div>
              </section>
            </aside>
          </section>
        `
        : ""
    }
  `;
}

function renderBoards() {
  const list = filteredBoards();

  app.innerHTML = `
    <section class="page-header">
      <p class="eyebrow">board index</p>
      <h1>Escolha uma comunidade</h1>
      <p>Encontre cultura, tecnologia, jogos, criacao e vida anonima em um indice simples.</p>
    </section>
    ${renderCategoryFilters()}
    <section class="community-grid">
      ${list.map((board) => renderBoardCard(board)).join("") || renderPostList([])}
    </section>
  `;
}

function renderBoard(code) {
  const board = boardByCode(code);
  const boardPosts = filteredPosts({ boardCode: board.code });

  app.innerHTML = `
    <section class="board-hero" style="--accent:${board.accent}">
      <div class="board-hero-main">
        <a class="back-link" href="#boards">Voltar para boards</a>
        <div class="board-title-line">
          <span class="community-icon is-large" aria-hidden="true">${escapeHTML(board.icon)}</span>
          <div>
            <p class="eyebrow">/${escapeHTML(board.code)}/</p>
            <h1>${escapeHTML(board.title)}</h1>
          </div>
        </div>
        <p>${escapeHTML(board.desc)}</p>
        <div class="hero-actions">
          <button class="primary-button" type="button" data-open-compose data-board-preset="${board.code}">
            Novo post em /${escapeHTML(board.code)}/
          </button>
          <a class="secondary-button" href="#feed">Ver feed geral</a>
        </div>
      </div>
      <div class="board-facts">
        <span><strong>${escapeHTML(board.posts)}</strong> posts</span>
        <span><strong>${escapeHTML(board.members)}</strong> ativos</span>
        <span>${board.tags.map((tag) => `#${escapeHTML(tag)}`).join(" ")}</span>
      </div>
    </section>
    <section class="content-layout">
      <div class="timeline-column">
        <div class="section-title-row">
          <div>
            <p class="eyebrow">catalogo /${escapeHTML(board.code)}/</p>
            <h2>Threads recentes</h2>
          </div>
        </div>
        ${renderPostList(boardPosts)}
      </div>
      <aside class="right-rail">
        <section class="rail-card">
          <p class="eyebrow">sobre o board</p>
          <p>${escapeHTML(board.desc)}</p>
          <div class="tag-row">
            ${board.tags.map((tag) => `<span>#${escapeHTML(tag)}</span>`).join("")}
          </div>
        </section>
        <section class="rail-card">
          <p class="eyebrow">atalhos</p>
          <button class="wide-button" type="button" data-open-compose data-board-preset="${board.code}">
            Publicar aqui
          </button>
          <button class="wide-button" type="button" data-search-tag="${board.tags[0]}">
            Buscar #${escapeHTML(board.tags[0])}
          </button>
        </section>
      </aside>
    </section>
  `;
}

function renderPostDetail(id) {
  const post = postById(id);

  if (!post) {
    app.innerHTML = `
      <section class="page-header">
        <p class="eyebrow">404</p>
        <h1>Post nao encontrado</h1>
        <a class="primary-button" href="#feed">Voltar ao feed</a>
      </section>
    `;
    return;
  }

  app.innerHTML = `
    <section class="thread-page">
      <a class="back-link" href="#feed">Voltar ao feed</a>
      ${renderPostCard(post, { full: true })}
      <section class="comments-panel">
        <div class="section-title-row">
          <div>
            <p class="eyebrow">comentarios</p>
            <h2>${post.commentsList.length} respostas</h2>
          </div>
        </div>
        <form class="comment-form" data-comment-form="${post.id}">
          <input
            name="comment"
            type="text"
            placeholder="${currentUser ? "Responder como @" + currentUser.handle : "Entre e responda"}"
            ${currentUser ? "" : "disabled"}
            required
          />
          <button class="small-button" type="submit" ${currentUser ? "" : "disabled"}>Comentar</button>
        </form>
        ${
          currentUser
            ? ""
            : `<button class="wide-button" type="button" data-open-login>Entrar para comentar</button>`
        }
        <div class="comment-list">
          ${
            post.commentsList.length
              ? post.commentsList
                  .map(
                    (comment) => `
                      <article class="comment-card">
                        ${renderAvatar(comment.author, "is-small")}
                        <div>
                          <header>
                            <strong>${escapeHTML(comment.author.name)}</strong>
                            <span>@${escapeHTML(comment.author.handle)}</span>
                            <span>${escapeHTML(comment.time)}</span>
                          </header>
                          <p>${escapeHTML(comment.text)}</p>
                        </div>
                      </article>
                    `
                  )
                  .join("")
              : `<p class="muted-copy">Ainda sem comentarios. A primeira resposta muda o tom da thread.</p>`
          }
        </div>
      </section>
    </section>
  `;
}

function renderProfile() {
  if (!currentUser) {
    app.innerHTML = `
      <section class="profile-empty">
        <p class="eyebrow">perfil local</p>
        <h1>Entre para criar sua identidade.</h1>
        <p>Escolha um apelido, um @ e uma bio curta para entrar na conversa.</p>
        <div class="profile-preview-grid">
          <article>
            <span>avatar</span>
            <strong>iniciais geradas</strong>
          </article>
          <article>
            <span>posts</span>
            <strong>salvos localmente</strong>
          </article>
          <article>
            <span>perfil</span>
            <strong>editavel</strong>
          </article>
        </div>
        <button class="primary-button" type="button" data-open-login>Entrar agora</button>
      </section>
    `;
    return;
  }

  const userPosts = filteredPosts({ handle: currentUser.handle });
  const userComments = getUserComments(currentUser.handle);
  const savedPosts = posts.filter((post) => post.saved);
  const likedPosts = posts.filter((post) => post.liked);
  const validProfileTabs = ["posts", "comments", "saved", "liked"];
  if (!validProfileTabs.includes(state.profileTab)) state.profileTab = "posts";
  const profileAvatarUser = state.editingProfile
    ? { ...currentUser, avatarMedia: state.profileAvatarDraft }
    : currentUser;

  app.innerHTML = `
    <section class="profile-page">
      <div class="profile-cover"></div>
      <div class="profile-card">
        ${renderAvatar(profileAvatarUser, "is-profile")}
        ${
          state.editingProfile
            ? `
              <form class="profile-edit-form" id="profileForm">
                <label>
                  Nome
                  <input name="name" value="${escapeHTML(currentUser.name)}" required />
                </label>
                <label>
                  Username
                  <input name="handle" value="${escapeHTML(currentUser.handle)}" required />
                </label>
                <label>
                  Bio
                  <textarea name="bio" rows="3">${escapeHTML(currentUser.bio)}</textarea>
                </label>
                <div class="profile-media-editor">
                  <label>
                    Foto de perfil
                    <input name="avatarFile" type="file" accept="image/*,.gif" data-profile-avatar />
                  </label>
                  ${renderProfileMediaPreview(state.profileAvatarDraft, "sem foto", "data-remove-profile-avatar")}
                </div>
                <div class="profile-media-editor">
                  <label>
                    GIF do perfil
                    <input name="profileGifFile" type="file" accept="image/gif,.gif" data-profile-gif />
                  </label>
                  ${renderProfileMediaPreview(state.profileGifDraft, "sem GIF", "data-remove-profile-gif")}
                </div>
                <div class="form-actions">
                  <button class="primary-button" type="submit">Salvar perfil</button>
                  <button class="secondary-button" type="button" data-cancel-edit>Cancelar</button>
                </div>
              </form>
            `
            : `
              <div class="profile-info">
                <p class="eyebrow">perfil</p>
                <h1>${escapeHTML(currentUser.name)}</h1>
                <span>@${escapeHTML(currentUser.handle)}</span>
                <p>${escapeHTML(currentUser.bio)}</p>
                ${renderProfileGif(currentUser.profileGif)}
                <button class="secondary-button" type="button" data-edit-profile>Editar perfil</button>
              </div>
            `
        }
      </div>
      ${renderProfileStats(userPosts, userComments, savedPosts)}
      ${renderProfileTabs({ userPosts, userComments, savedPosts, likedPosts })}
      ${renderProfileTabPanel({ userPosts, userComments, savedPosts, likedPosts })}
    </section>
  `;
}

function render() {
  const { view, id } = getRoute();
  updateHeader();

  if (view === "home") renderHome();
  else if (view === "boards") renderBoards();
  else if (view === "board") renderBoard(id);
  else if (view === "post") renderPostDetail(id);
  else if (view === "profile") renderProfile();
  else if (view === "feed") renderFeed();
  else if (view === "search") renderSearchResults();
  else renderHome();

  const activeEl = document.activeElement;
  const isInputActive = activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.tagName === "SELECT");
  const isHeaderActive = activeEl && activeEl.closest(".site-header");
  if (!isInputActive && !isHeaderActive) {
    app.focus({ preventScroll: true });
  }
}

function togglePostAction(action, postId) {
  const post = postById(postId);
  if (!post) return;

  if (action === "comment") {
    setHash(`post/${post.id}`);
    return;
  }

  const map = {
    like: ["liked", "likes"],
    repost: ["reposted", "reposts"],
    save: ["saved", "saves"],
  };
  const [flag, counter] = map[action] || [];
  if (!flag) return;

  post[flag] = !post[flag];
  post.stats[counter] += post[flag] ? 1 : -1;
  render();
}

function publishPost(formData) {
  const board = boardByCode(formData.get("board"));
  const subject = String(formData.get("subject") || "").trim();
  const text = String(formData.get("text") || "").trim();
  if (!text) return;

  const post = {
    id: `p${Date.now()}`,
    boardCode: board.code,
    subject: subject || "Thread sem assunto",
    author: currentUser || anonymousUser,
    time: "agora",
    text,
    image: state.composeAttachment ? { ...state.composeAttachment } : null,
    stats: { likes: 0, comments: 0, reposts: 0, saves: 0 },
    liked: false,
    reposted: false,
    saved: false,
    commentsList: [],
  };

  posts = [post, ...posts];
  closeModals();
  setHash(`post/${post.id}`);
}

function populateBoardSelect() {
  composeBoard.innerHTML = boards
    .map((board) => `<option value="${board.code}">/${board.code}/ ${escapeHTML(board.title)}</option>`)
    .join("");
}

app.addEventListener("click", (event) => {
  const boardButton = event.target.closest("[data-board]");
  const boardCard = event.target.closest("[data-board-card]");
  const postButton = event.target.closest("[data-post]");
  const actionButton = event.target.closest("[data-action]");
  const categoryButton = event.target.closest("[data-category]");
  const tagButton = event.target.closest("[data-search-tag]");
  const profileTabButton = event.target.closest("[data-profile-tab]");

  if (actionButton) {
    togglePostAction(actionButton.dataset.action, actionButton.dataset.postId);
    return;
  }

  if (boardButton) {
    setHash(`board/${boardButton.dataset.board}`);
    return;
  }

  if (boardCard) {
    setHash(`board/${boardCard.dataset.boardCard}`);
    return;
  }

  if (postButton) {
    setHash(`post/${postButton.dataset.post}`);
    return;
  }

  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    render();
    return;
  }

  if (profileTabButton) {
    state.profileTab = profileTabButton.dataset.profileTab;
    render();
    return;
  }

  if (tagButton) {
    state.query = tagButton.dataset.searchTag;
    searchInput.value = state.query;
    openSearchResults();
    return;
  }

  if (event.target.closest("[data-open-login]")) openLogin();

  const composeButton = event.target.closest("[data-open-compose]");
  if (composeButton) openCompose(composeButton.dataset.boardPreset);

  if (event.target.closest("[data-edit-profile]")) {
    state.editingProfile = true;
    state.profileAvatarDraft = currentUser.avatarMedia || null;
    state.profileGifDraft = currentUser.profileGif || null;
    render();
  }

  if (event.target.closest("[data-cancel-edit]")) {
    state.editingProfile = false;
    state.profileAvatarDraft = null;
    state.profileGifDraft = null;
    render();
  }

  if (event.target.closest("[data-remove-profile-avatar]")) {
    state.profileAvatarDraft = null;
    render();
  }

  if (event.target.closest("[data-remove-profile-gif]")) {
    state.profileGifDraft = null;
    render();
  }
});

app.addEventListener("change", (event) => {
  const avatarInput = event.target.closest("[data-profile-avatar]");
  const gifInput = event.target.closest("[data-profile-gif]");

  if (avatarInput) {
    const file = avatarInput.files?.[0];
    readProfileMediaFile(file, (media) => {
      state.profileAvatarDraft = { ...media, type: media.isGif ? "avatar-gif" : "avatar-image" };
      render();
    });
  }

  if (gifInput) {
    const file = gifInput.files?.[0];
    if (!isGifFile(file)) return;

    readProfileMediaFile(file, (media) => {
      state.profileGifDraft = { ...media, type: "profile-gif" };
      render();
    });
  }
});

app.addEventListener("keydown", (event) => {
  const boardCard = event.target.closest("[data-board-card]");
  if (!boardCard || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  setHash(`board/${boardCard.dataset.boardCard}`);
});

app.addEventListener("submit", (event) => {
  const commentForm = event.target.closest("[data-comment-form]");
  const profileForm = event.target.closest("#profileForm");

  if (commentForm) {
    event.preventDefault();
    if (!currentUser) return;

    const post = postById(commentForm.dataset.commentForm);
    const input = commentForm.elements.comment;
    const text = input.value.trim();
    if (!post || !text) return;

    post.commentsList.push({
      id: `c${Date.now()}`,
      author: currentUser,
      time: "agora",
      text,
    });
    post.stats.comments += 1;
    input.value = "";
    render();
  }

  if (profileForm) {
    event.preventDefault();
    const data = new FormData(profileForm);
    const previousHandle = currentUser.handle;
    const name = String(data.get("name") || currentUser.name).trim();
    const handle = cleanHandle(data.get("handle") || currentUser.handle);

    currentUser = {
      ...currentUser,
      name,
      handle,
      bio: String(data.get("bio") || "").trim(),
      initials: getInitials(name),
      avatarMedia: state.profileAvatarDraft,
      profileGif: state.profileGifDraft,
    };
    syncUserSnapshots(previousHandle, currentUser);
    state.editingProfile = false;
    state.profileAvatarDraft = null;
    state.profileGifDraft = null;
    updateHeader();
    render();
  }
});

primaryNav.addEventListener("click", closeMobileMenu);

searchInput.addEventListener("input", () => {
  state.query = searchInput.value.trim();
  const route = getRoute();

  if (state.query && route.view !== "search") {
    openSearchResults();
    return;
  }

  render();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  state.query = searchInput.value.trim();

  if (state.query) {
    openSearchResults();
  }
});

authButton.addEventListener("click", () => {
  if (currentUser) setHash("profile");
  else openLogin();
});

newPostButton.addEventListener("click", () => openCompose());

const handleThemeToggle = () => {
  const current = document.documentElement.dataset.theme || "light";
  const next = current === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = next;
  localStorage.setItem("neo-4chan-imageboard-theme", next);
};

if (themeToggle) themeToggle.addEventListener("click", handleThemeToggle);
if (themeToggleMobile) themeToggleMobile.addEventListener("click", handleThemeToggle);

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const header = document.querySelector(".site-header");
    const isOpen = header.classList.toggle("menu-open");
    mobileMenuToggle.classList.toggle("is-open", isOpen);
    mobileMenuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

modalBackdrop.addEventListener("click", closeModals);

document.addEventListener("click", (event) => {
  const header = document.querySelector(".site-header");
  if (header && header.classList.contains("menu-open")) {
    if (!event.target.closest(".site-header")) {
      closeMobileMenu();
    }
  }

  if (event.target.closest("[data-compose-file]")) {
    composeFile.click();
    return;
  }

  if (event.target.closest("[data-toggle-gif]")) {
    gifTray.hidden = !gifTray.hidden;
    return;
  }

  const emojiButton = event.target.closest("[data-emoji]");
  if (emojiButton) {
    insertEmoji(emojiButton.dataset.emoji);
    return;
  }

  const gifButton = event.target.closest("[data-gif-style]");
  if (gifButton) {
    setComposerAttachment({
      type: "gif",
      gifStyle: gifButton.dataset.gifStyle,
      label: gifButton.dataset.gifLabel,
    });
    gifTray.hidden = true;
    return;
  }

  if (event.target.closest("[data-remove-attachment]")) {
    resetComposerAttachment();
    composeText.focus();
    return;
  }

  if (event.target.closest("[data-close-modal]")) closeModals();
});

document.addEventListener(
  "error",
  (event) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    const media = event.target.closest(".post-media");
    if (media) media.remove();
  },
  true
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModals();
    closeMobileMenu();
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(loginForm);
  const name = String(data.get("name") || "Anon Moderno").trim();
  const handle = cleanHandle(data.get("handle") || "anon_moderno");

  currentUser = {
    name,
    handle,
    bio: String(data.get("bio") || "").trim(),
    initials: getInitials(name),
    avatarBg: "#5fbf3b",
    avatarMedia: null,
    profileGif: null,
  };

  closeModals();
  updateHeader();
  render();

  if (state.pendingCompose) {
    const preset = state.pendingCompose;
    state.pendingCompose = null;
    openCompose(preset);
  }
});

composeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  publishPost(new FormData(composeForm));
});

composeFile.addEventListener("change", () => {
  const file = composeFile.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    resetComposerAttachment();
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    setComposerAttachment({
      type: file.type === "image/gif" ? "uploaded-gif" : "uploaded-image",
      label: file.name,
      mime: file.type,
      url: String(reader.result),
    });
  });
  reader.readAsDataURL(file);
});

window.addEventListener("hashchange", render);

window.addEventListener("load", () => {
  setTimeout(() => {
    loadingScreen.classList.add("is-hidden");
  }, 280);
});

populateBoardSelect();
if (!location.hash) location.hash = "home";
render();
