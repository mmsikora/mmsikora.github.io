(function(){
  var app = angular.module('board', [ ]);

  app.controller('BoardController', function(){
    this.bio = person;
    this.greet = greetings[Math.floor((Math.random() * 3))];
    this.hlinks = hyperlinks;
  });
  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });
  app.directive('aboutMe', function() {
    return {
      restrict: 'E',
      templateUrl: 'about-me.html'
    };
  });
  app.directive('codeListing', function() {
    return {
      restrict: 'E',
      templateUrl: 'code-listing.html'
    };
  });
  app.directive('currentResearch', function() {
    return {
      restrict: 'E',
      templateUrl: 'current-research.html'
    };
  });


  var person = {
    name: "Mark Sikora",
    school: "Indiana State University",
    major: "Computer Science",
    class: "graduated",
    age: 30,
    GPA: 3.95
  };
  var hyperlinks = {
    cs17004 : [
      {
        name: "Game of Life",
        address: "http://cs.indstate.edu/~mmsikora/gol.html"
      },
      {
        name: "Star Field",
        address: "http://cs.indstate.edu/~mmsikora/starfield.html"
      },
      {
        name: "Flame",
        address: "http://cs.indstate.edu/~mmsikora/flame.html"
      },
      {
        name: "Hangman",
        address: "http://cs.indstate.edu/~mmsikora/hangman.html"
      },
      {
        name: "Face",
        address: "http://cs.indstate.edu/~mmsikora/face.html"
      },
      {
        name: "Finding the closest pair of points",
        address: "http://cs.indstate.edu/~mmsikora/closestPair/index.html"
      },
      {
        name: "Finding a Peak in a 1d array",
        address: "http://cs.indstate.edu/~mmsikora/peakFinder1d//index.html"
      },
      {
        name: "Tic-Tac-Toe",
        address: "http://cs.indstate.edu/~mmsikora/ttt.html"
      },
      {
        name: "Calculator",
        address: "http://cs.indstate.edu/~mmsikora/calc2.html"
      },
      {
        name: "Counter",
        address: "http://cs.indstate.edu/~mmsikora/counter.html"
      },
      {
        name: "C Curve",
        address: "http://cs.indstate.edu/~mmsikora/ccurve.html"
      } 
    ],
    summer2014: [
      {
        name: "Clique Numbers",
        address: "http://cs.indstate.edu/~mmsikora/Summer/clique.html"
      },
      {
        name: "Chromatic Numbers",
        address: "http://cs.indstate.edu/~mmsikora/Summer/colors.html"
      },
      {
        name: "Greedy Coloring Simulator",
        address: "http://cs.indstate.edu/~mmsikora/Summer/graph.html"
      }
    ],
    linktab: [
      {
        name: "Indiana State University",
        address: "http://indstate.edu/"
      },
      {
        name: "Indiana State University Dept. Math and Computer Science",
        address: "http://cs.indstate.edu/"
      },
      {
        name: "Indiana State University Library",
        address: "http://library.indstate.edu/"
      }
    ]
  };
  var greetings = [
      "Welcome",
      "Hello",
      "Salutations"
  ];

})();
