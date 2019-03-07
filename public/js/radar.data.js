radar_visualization({
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "",
  quadrants: [
    { name: "Tools" },
    { name: "APIs & Libraries" },
    { name: "Projects" },
    { name: "Concepts" }
  ],
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" }
  ],
  print_layout: true,
  // zoomed_quadrant: 0,
  //ENTRIES
  entries: [
      //Projects
      {
        quadrant: 2,
        ring: 0,
        label: "Kulla",
        active: true,
        link: "/public/js/data_processing/kulla.html",
        moved: 0
      },
      {
        quadrant: 2,
        ring: 1,
        label: "Jigsaw",
        active: true,
        link: "/public/js/data_processing/jigsaw.html",
        moved: 0
      },
      {
        quadrant: 2,
        ring: 2,
        label: "Valhalla",
        active: true,
        link: "/public/js/data_processing/valhalla.html",
        moved: 0
      },
      {
        quadrant: 2,
        ring: 2,
        label: "Amber",
        active: true,
        link: "/public/js/data_processing/amber.html",
        moved: 0
      },
      {
        quadrant: 2,
        ring: 2,
        label: "Loom",
        active: true,
        link: "/public/js/data_processing/loom.html",
        moved: 0
      },
      {
        quadrant: 2,
        ring: 3,
        label: "Panama",
        active: true,
        link: "/public/js/data_processing/panama.html",
        moved: 0
      },
      {
        quadrant: 2,
        ring: 3,
        label: "Metropolis",
        active: true,
        link: "/public/js/data_processing/metropolis.html",
        moved: 0
      },
      //Tools
      {
        quadrant: 0,
        ring: 0,
        label: "jShell",
        active: true,
        link: "/public/js/data_processing/jshell.html",
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "jdeps",
        active: true,
        link: "/public/js/data_processing/jdeps.html",
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "jdeprescan",
        active: true,
        link: "/public/js/data_processing/jdeprescan.html",
        moved: 0
      },
      //Concepts
      {
        quadrant: 3,
        ring: 1,
        label: "modularity",
        active: true,
        link: "/public/js/data_processing/modularity.html",
        moved: 0
      },
      {
        quadrant: 3,
        ring: 0,
        label: "FP",
        active: true,
        link: "/public/js/data_processing/FP.html",
        moved: 0
      },
      {
        quadrant: 3,
        ring: 2,
        label: "ddd",
        active: true,
        link: "/public/js/data_processing/ddd.html",
        moved: 0
      },
      //APIs & Libraries
      {
        quadrant: 1,
        ring: 0,
        label: "streams",
        active: true,
        link: "/public/js/data_processing/streams.html",
        moved: 0
      },
      {
        quadrant: 1,
        ring: 1,
        label: "vavr",
        active: true,
        link: "/public/js/data_processing/vavr.html",
        moved: 0
      },
      {
        quadrant: 1,
        ring: 2,
        label: "http",
        active: true,
        link: "/public/js/data_processing/http.html",
        moved: 0
      },
  ]

});