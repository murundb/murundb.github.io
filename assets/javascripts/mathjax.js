window.MathJax = {
    loader: {load: ['[tex]/boldsymbol', 'ui/lazy', '[tex]/mathtools']},
    tex: {
      tags: 'all',
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
      packages: {'[+]': ['boldsymbol', 'mathtools']}
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