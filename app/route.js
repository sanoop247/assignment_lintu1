app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/listing");
  $stateProvider
    .state('listing', {
      url: "/listing",
      templateUrl: "partials/listing.html"
    })
 
    .state('details', {
      url: "/details/:key",
      templateUrl: "partials/details.html",
      controller:function($scope,$stateParams){
        console.log($stateParams.key);
        $scope.details={
            'name':['Gibson Les Paul','Fender Stratocaster','Fender Telecaster','Cort CR200','Epiphone LP200','Martin Acoustic Guitars','Taylor Acoustic Guitars','Gibson SG','Gibson Customs','Gibson ES'],
            'img':['/assets/images/gibson_les_paul.jpg','/assets/images/fender_stratocaster.jpg','/assets/images/fender_telecaster.jpg','/assets/images/cort_cr200.jpg','/assets/images/epiphone_lp200.jpg','/assets/images/martin_acoustic.jpg','/assets/images/taylor_acoustic.jpg','/assets/images/gibson_sg.jpg','/assets/images/gibson_customs.jpg','/assets/images/gibson_es.jpg'],
            'desc':['The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952.[1] The Les Paul was designed by Gibson president Ted McCarty, factory manager John Huis and their team, along with guitarist/inventor Les Paul. Considered by many as the best electric guitar of all time!!.',
            'The Fender Stratocaster is a model of electric guitar designed in 1954 by Leo Fender, Bill Carson, George Fullerton, and Freddie Tavares. The Fender Musical Instruments Corporation has continuously manufactured the Stratocaster from 1954 to the present. It is a double-cutaway guitar, with an extended top "horn" shape for balance. Along with the Gibson Les Paul, it is one of the most often emulated electric guitar shapes.[1][2] "Stratocaster" and "Strat" are trademark terms belonging to Fender.',
            'The Fender Telecaster, colloquially known as the Tele /ˈtɛli/, is the worlds first commercially successful solid-body electric guitar. Its simple yet effective design and revolutionary sound broke ground and set trends in electric guitar manufacturing and popular music. Introduced for national distribution as the Broadcaster in the autumn of 1950, it was the first guitar of its kind manufactured on a substantial scale and has been in continuous production in one form or another since its first incarnation.',
            'CR 200 is an intermediate model from the CR series. This is Cort`s line of vintage-styled Les Paul guitars with classic design and decoration features.The Classic Rock Series delivers the look, feel and performance of the much sought-after vintage instruments from the Golden Era of electric guitars.',
            'The Les Paul 100 is a superb instrument for players looking for an affordable but reliable electric guitar that has the classic look, sound and feel of a Les Paul.A genuine and affordable Les Paul.If you are a beginning to take your music more seriously, the Epiphone Les Paul 100 is the electric guitar you want. ... A mahogany body with open-coil humbuckers and genuine Les Paul tone. ... Loaded with 700T/650R open-coil humbucker pickups and chrome',
            'C.F. Martin & Company is a US guitar manufacturer established in 1833 by Christian Frederick Martin. Martin is highly regarded for its steel-string guitars and is a leading manufacturer of flat top guitars. Martin instruments can sell for thousands of dollars, and vintage instruments occasionally command six-figure prices. The company has also made mandolins as well as several models of electric guitars and electric basses, although none of these other instruments are currently in production',
            'Taylor Guitars is an American guitar manufacturer based in El Cajon, California and is the #1 manufacturer of acoustic guitars in the United States.[2] They specialize in acoustic guitars and semi-hollow electric guitars. The company was founded in 1974 by Bob Taylor and Kurt Listug.',
            'The Gibson SG is a solid-body electric guitar model that was introduced in 1961 (as the Gibson Les Paul) by Gibson, and remains in production today with many variations on the initial design available. The SG Standard is Gibsons best selling model of all time',
            'For over 20 years Gibson Custom has proudly been the torchbearer of, not only Gibson’s legacy, but also American craftsmanship and the value of human ingenuity. We believe today, as we did 20 years ago, that there remains a place in this world for the best of the best and that there is a value in what we do that extends far beyond the glossy sheen and gratifying weight of a finely crafted Les Paul.',
            'The Gibson ES series of semi-acoustic guitar (hollow body electric guitar) are manufactured by the Gibson Guitar Corporation. The letters ES stand for Electric Spanish, to distinguish them from Hawaiian-style guitars which were played flat on the lap.']
        }
        $scope.name=$scope.details.name[$stateParams.key];
        $scope.img=$scope.details.img[$stateParams.key];
        $scope.desc=$scope.details.desc[$stateParams.key];



      }
    })
    });