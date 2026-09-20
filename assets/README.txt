ASSETS — PUT YOUR OWN MEDIA HERE
================================

assets/
├── video/    -> drop your wedding video here (e.g. video/hero.mp4)
└── images/   -> drop your photos here (e.g. images/photo-01.jpg)

Then open js/config.js and point the URLs to your files:

  MEDIA.videos.wedding    = "../assets/video/hero.mp4";
  MEDIA.posters.wedding   = "../assets/images/hero-poster.jpg";
  GALLERY                 -> replace the Unsplash list with your own paths,
                             e.g. { src: "../assets/images/photo-01.jpg",
                                    thumb: "../assets/images/photo-01.jpg",
                                    alt: "Haldi morning" }

All text (English + Bengali), dates and map links also live in js/config.js.
