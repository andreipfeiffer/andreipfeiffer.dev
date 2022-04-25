module.exports = {
  importOrder: [
    // by default, node_modules imports are first
    // then, include components from other folders
    "../components/(.*)$",
    // then, include other files from other folders
    "^../(.*)",
    // then, include local files, without styles
    "^./((?!scss).)*$",
    // at the end, include what's left (should be styles)
    "^./(.*)",
  ],
  importOrderSeparation: true,
};
