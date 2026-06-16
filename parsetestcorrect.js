function $f(e) {
  /* <sl:translate_json> */
  return {
    "sl_translate": "sl_all",
    "sl_variant":
      "sl-4e4814595720fdc456162ea666828e34:4e4814595720fdc456162ea666828e34,sl-69f9faa8b37f78d9a3c41020dc15238c:69f9faa8b37f78d9a3c41020dc15238c",
    "sl-4e4814595720fdc456162ea666828e34": "Back to collection",
    "sl-69f9faa8b37f78d9a3c41020dc15238c": "Template:",
  }[e];
  /* </sl:translate_json> */
}
$f("");

function Af({ item: e, onNavigate: n }) {
  return Y.jsxs("section", {
    className: "collection-page collection-page--detail",
    "aria-labelledby": "detail-title",
    children: [
      Y.jsx("button", {
        className: "back-button",
        type: "button",
        onClick: () => n("/"),
        "data-sl-variant": "4e4814595720fdc456162ea666828e34",
        children: Y.jsx(Vf, {
          children: $f("sl-4e4814595720fdc456162ea666828e34"),
        }),
      }),
      Y.jsx("p", {
        className: "eyebrow",
        children: e.categories.join(" / "),
      }),
      Y.jsx("h1", {
        id: "detail-title",
        children: e.title,
      }),
      Y.jsx("p", {
        className: "intro",
        children: e.intro,
      }),
      e.templateName &&
      Y.jsxs("p", {
        className: "template-link",
        "data-sl-variant": "69f9faa8b37f78d9a3c41020dc15238c",
        children: [
          Y.jsx(Vf, {
            children: $f("sl-69f9faa8b37f78d9a3c41020dc15238c"),
          }),
          " ",
          Y.jsx("a", {
            href: e.templatePath,
            children: e.templateName,
          }),
        ],
      }),
    ],
  });
}

const Bf = [
  {
    id: "john-doe",
    slug: "john-doe",
    year: 2026,
    templateName: "Heron",
    templatePath: "/heron-fluid-demo",
    title: "john-doe",
    categories: ["Artist", "Musician"],
    intro:
      "Intro description",
  },
];

function Hf(e) {
  return Bf.find((n) => n.slug === e);
}

function Wf(e) {
  /* <sl:translate_json> */
  return {
    "sl_translate": "sl_all",
    "sl_variant":
      "sl-527b2748f5c0b3a963d57258dc207c23:527b2748f5c0b3a963d57258dc207c23,sl-90c33e548793ae1dfe921dfb37731f07:90c33e548793ae1dfe921dfb37731f07,sl-cb9f76d56081e290043c1329ce6c8ec9:cb9f76d56081e290043c1329ce6c8ec9,sl-48678a09eb935c232547459a6daeae24:48678a09eb935c232547459a6daeae24,sl-ead7b9784d115cadae472cef5842d895:ead7b9784d115cadae472cef5842d895",
    "sl-527b2748f5c0b3a963d57258dc207c23": "Collection",
    "sl-90c33e548793ae1dfe921dfb37731f07": "Collection redesign prototype",
    "sl-cb9f76d56081e290043c1329ce6c8ec9":
      "This React app",
    "sl-48678a09eb935c232547459a6daeae24": "Collection items",
    "sl-ead7b9784d115cadae472cef5842d895": "View detail",
  }[e];
  /* </sl:translate_json> */
}

function stringVariants(e) {/* <sl:translate_json> */return { "sl_translate": "sl_all", "sl_variant": "sl-cd58ecf73e998d90133e51fa197019ca:cd58ecf73e998d90133e51fa197019ca", "sl-cd58ecf73e998d90133e51fa197019ca": "Get started" }[e];/* </sl:translate_json> */ }

function stringVariants(e){/* <sl:translate_json> */return{"sl_translate":"sl_all","sl_variant":"sl-cd58ecf73e998d90133e51fa197019ca:cd58ecf73e998d90133e51fa197019ca","sl-cd58ecf73e998d90133e51fa197019ca":"Get started"}[e];/* </sl:translate_json> */}