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
        ring: 0,
        label: "Jigsaw",
        active: true,
        link: "https://openjdk.org/projects/jigsaw/",
        moved: 1
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
        ring: 0,
        label: "Amber",
        active: true,
        link: "https://openjdk.org/projects/amber/",
        moved: 1
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Loom",
        active: true,
        link: "https://openjdk.org/projects/loom/",
        moved: 1
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Panama",
        active: true,
        link: "https://openjdk.org/projects/panama/",
        moved: 1
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
        ring: 0,
        label: "modularity",
        active: true,
        link: "https://openjdk.org/projects/jigsaw/",
        moved: 1
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
        ring: 0,
        label: "http",
        active: true,
        link: "https://openjdk.org/jeps/321",
        moved: 1
      },
      {
        quadrant: 2,
        ring: 1,
        label: "Vector API",
        active: true,
        link: "https://openjdk.org/jeps/529",
        moved: 1
      },
      {
        quadrant: 1,
        ring: 1,
        label: "Structured Concurrency",
        active: true,
        link: "https://openjdk.org/jeps/525",
        moved: 1
      },
      {
        quadrant: 2,
        ring: 2,
        label: "Babylon",
        active: true,
        link: "https://openjdk.org/projects/babylon/",
        moved: 0
      },
      {
        quadrant: 1,
        ring: 2,
        label: "HTTP/3",
        active: true,
        link: "https://openjdk.org/jeps/517",
        moved: 0
      },
      {
        quadrant: 0,
        ring: 3,
        label: "JNI",
        active: true,
        link: "https://docs.oracle.com/en/java/javase/23/docs/specs/jni/index.html",
        moved: -1
      },
  ]

});