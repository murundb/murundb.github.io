window.MathJax = {
    loader: {load: ['[tex]/boldsymbol']},
    tex: {
      tags: 'all',
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
      packages: {'[+]': ['boldsymbol']}
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };
  
  document$.subscribe(() => { 
    MathJax.typesetPromise()
    MathJax.texReset([start])
  })