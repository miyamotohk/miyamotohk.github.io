// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-etc",
          title: "Etc.",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/etc/";
          },
        },{id: "dropdown-árvore-feec",
              title: "Árvore FEEC",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/arvore-feec";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-have-successfully-defended-my-ph-d-thesis-universal-decoding-through-randomised-decoding-at-université-paris-saclay-the-committee-was-composed-of-prof-michèle-wigger-prof-amos-lapidoth-dr-hamdi-joudeh-and-prof-albert-guillén-i-fàbregas",
          title: 'I have successfully defended my Ph.D. thesis Universal decoding through randomised decoding at...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
