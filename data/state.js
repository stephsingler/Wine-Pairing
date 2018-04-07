const state = {
  redWine: [
    {
      id: 0,
      name: "Pinot Noir",
      avatar: "https://i.imgur.com/87Evd5p.png",
      pairings: [
        {
          _id: 0,
          name: "Gouda",
          avatar: "https://i.imgur.com/SVkJ6ck.png"
        },
        {
          _id: 1,
          name: "Swiss",
          avatar: "https://i.imgur.com/zHbh9cG.png"
        },
        {
          _id: 2,
          name: "Gruyere",
          avatar: "https://i.imgur.com/WpJ5lKk.png"
        }
      ]
    },
    {
      id: 1,
      name: "Zinfandel",
      avatar: "https://i.imgur.com/98jfDp8.png",
      pairings: [
        {
          _id: 0,
          name: "Blue",
          avatar: "https://i.imgur.com/aKGTYhm.png"
        },
        {
          _id: 1,
          name: "Parmasean",
          avatar: "https://i.imgur.com/sRjK7xm.png"
        },
        {
          _id: 2,
          name: "Feta",
          avatar: "https://i.imgur.com/oAW3hQf.png"
        }
      ]
    },
    {
      id: 2,
      name: "Cabernet Sauvignon",
      avatar: "https://i.imgur.com/1R3bJ70.png",
      pairings: [
        {
          _id: 0,
          name: "Cheddar",
          avatar: "https://i.imgur.com/J4ce2mb.png"
        },
        {
          _id: 1,
          name: "Blue",
          avatar: "https://i.imgur.com/aKGTYhm.png"
        }
      ]
    },
    {
      id: 3,
      name: "Merlot",
      avatar: "https://i.imgur.com/mJCsV9D.png",
      pairings: [
        {
          _id: 0,
          name: "Gouda",
          avatar: "https://i.imgur.com/SVkJ6ck.png"
        },
        {
          _id: 1,
          name: "Brie/Camembert",
          avatar: "https://i.imgur.com/sE8mej4.png"
        },
        {
          _id: 2,
          name: "Provolone",
          avatar: "https://i.imgur.com/oiAv4Vh.png"
        }
      ]
    },
    {
      id: 4,
      name: "Syrah",
      avatar: "https://i.imgur.com/8ZrBYOI.png",
      pairings: [
        {
          _id: 0,
          name: "Blue (creamy)",
          avatar: "https://i.imgur.com/aKGTYhm.png"
        },
        {
          _id: 1,
          name: "Cheddar",
          avatar: "https://i.imgur.com/J4ce2mb.png"
        }
      ]
    },
    {
      id: 5,
      name: "Malbec",
      avatar: "https://i.imgur.com/SYqtR4D.png",
      pairings: [
        {
          _id: 0,
          name: "Brie/Camembert",
          avatar: "https://i.imgur.com/sE8mej4.png"
        },
        {
          _id: 1,
          name: "Blue",
          avatar: "https://i.imgur.com/aKGTYhm.png"
        },
        {
          _id: 2,
          name: "Cheddar",
          avatar: "https://i.imgur.com/J4ce2mb.png"
        }
      ]
    },
    {
      id: 6,
      name: "Chianti",
      avatar: "https://i.imgur.com/83LyI8N.png",
      pairings: [
        {
          _id: 0,
          name: "Parmasean",
          avatar: "https://i.imgur.com/sRjK7xm.png"
        },
        {
          _id: 1,
          name: "Cheddar",
          avatar: "https://i.imgur.com/J4ce2mb.png"
        }
      ]
    },
    {
      id: 7,
      name: "Sangiovese",
      avatar: "https://i.imgur.com/oUBdtoE.png",
      pairings: [
        {
          _id: 0,
          name: "Provolone",
          avatar: "https://i.imgur.com/oiAv4Vh.png"
        },
        {
          _id: 1,
          name: "Mozzarella",
          avatar: "https://i.imgur.com/9R8DkPU.png"
        },
        {
          _id: 2,
          name: "Goat",
          avatar: "https://i.imgur.com/HAJ9X56.png"
        }
      ]
    },
    {
      id: 8,
      name: "Tempranillo",
      avatar: "https://i.imgur.com/eYx7Ae6.png",
      pairings: [
        {
          _id: 0,
          name: "Cheddar (sharp)",
          avatar: "https://i.imgur.com/J4ce2mb.png"
        },
        {
          _id: 1,
          name: "Gouda",
          avatar: "https://i.imgur.com/SVkJ6ck.png"
        }
      ]
    },
  ],
  whiteWine: [
    {
      id: 9,
      name: "Chardonnay",
      avatar: "https://i.imgur.com/6laVacs.png",
      pairings: [
        {
          _id: 0,
          name: "Brie/Camembert",
          avatar: "https://i.imgur.com/sE8mej4.png"
        },
        {
          _id: 1,
          name: "Cheddar",
          avatar: "https://i.imgur.com/J4ce2mb.png"
        },
        {
          _id: 2,
          name: "Gruyere",
          avatar: "https://i.imgur.com/WpJ5lKk.png"
        }
      ]
    },
    {
      id: 10,
      name: "Pinot Grigio",
      avatar: "https://i.imgur.com/T2TiIeD.png",
      pairings: [
        {
          _id: 0,
          name: "Mozzarella",
          avatar: "https://i.imgur.com/9R8DkPU.png"
        },
        {
          _id: 1,
          name: "Feta",
          avatar: "https://i.imgur.com/oAW3hQf.png"
        }
      ]
    },
    {
      id: 11,
      name: "Riesling",
      avatar: "https://i.imgur.com/2bRgPa7.png",
      pairings: [
        {
          _id: 0,
          name: "Blue",
          avatar: "https://i.imgur.com/aKGTYhm.png"
        },
        {
          _id: 1,
          name: "Gouda",
          avatar: "https://i.imgur.com/SVkJ6ck.png"
        },
        {
          _id: 2,
          name: "Goat",
          avatar: "https://i.imgur.com/HAJ9X56.png"
        }
      ]
    },
    {
      id: 12,
      name: "Semillon",
      avatar: "https://i.imgur.com/kem78OD.png",
      pairings: [
        {
          _id: 0,
          name: "Gruyere",
          avatar: "https://i.imgur.com/WpJ5lKk.png"
        },
        {
          _id: 1,
          name: "Blue",
          avatar: "https://i.imgur.com/aKGTYhm.png"
        }
      ]
    },
    {
      id: 13,
      name: "Sauvignon Blanc",
      avatar: "https://i.imgur.com/NU8P5pg.png",
      pairings: [
        {
          _id: 0,
          name: "Goat",
          avatar: "https://i.imgur.com/HAJ9X56.png"
        },
        {
          _id: 1,
          name: "Mozzarella",
          avatar: "https://i.imgur.com/9R8DkPU.png"
        },
        {
          _id: 2,
          name: "Provolone",
          avatar: "https://i.imgur.com/oiAv4Vh.png"
        }
      ]
    },
    {
      id: 14,
      name: "Moscato",
      avatar: "https://i.imgur.com/l5xNHks.png",
      pairings: [
        {
          _id: 0,
          name: "Brie/Camembert",
          avatar: "https://i.imgur.com/sE8mej4.png"
        },
        {
          _id: 1,
          name: "Gouda",
          avatar: "https://i.imgur.com/SVkJ6ck.png"
        }
      ]
    },
    {
      id: 15,
      name: "Champagne",
      avatar: "https://i.imgur.com/6YHhTEm.png",
      pairings: [
        {
          _id: 0,
          name: "Brie/Camembert",
          avatar: "https://i.imgur.com/sE8mej4.png"
        },
        {
          _id: 1,
          name: "Parmasean",
          avatar: "https://i.imgur.com/sRjK7xm.png"
        },
        {
          _id: 2,
          name: "Gruyere",
          avatar: "https://i.imgur.com/WpJ5lKk.png"
        }
      ]
    },
  ],
  cheeseList: [
      {
        id: 16,
        name: 'Cheddar',
        avatar: "https://i.imgur.com/J4ce2mb.png",
        pairings: [
          {
            _id: 0,
            name: "Cabernet Sauvignon",
            avatar: "https://i.imgur.com/1R3bJ70.png"
          },
          {
            _id: 1,
            name: "Chianti",
            avatar: "https://i.imgur.com/83LyI8N.png"
          },
          {
            _id: 2,
            name: "Chardonnay",
            avatar: "https://i.imgur.com/6laVacs.png"
          }
        ]
      },
      {
        id: 17,
        name: "Blue",
        avatar: "https://i.imgur.com/aKGTYhm.png",
        pairings: [
          {
            _id: 0,
            name: "Riesling",
            avatar: "https://i.imgur.com/2bRgPa7.png"
          },
          {
            _id: 1,
            name: "Cabernet Sauvignon",
            avatar: "https://i.imgur.com/1R3bJ70.png"
          },
          {
            _id: 2,
            name: "Zinfandel",
            avatar: "https://i.imgur.com/98jfDp8.png"
          }
        ]
      },
      {
        id: 18,
        name: "Swiss",
        avatar: "https://i.imgur.com/zHbh9cG.png",
        pairings: [
          {
            _id: 0,
            name: "Pinot Noir",
            avatar: "https://i.imgur.com/87Evd5p.png"
          },
          {
            _id: 1,
            name: "Chardonnay",
            avatar: "https://i.imgur.com/6laVacs.png"
          }
        ]
      },
      {
        id: 19,
        name: "Parmasean",
        avatar: "https://i.imgur.com/sRjK7xm.png",
        pairings: [
          {
            _id: 0,
            name: "Chianti",
            avatar: "https://i.imgur.com/83LyI8N.png"
          },
          {
            _id: 1,
            name: "Champagne",
            avatar: "https://i.imgur.com/6YHhTEm.png"
          },
          {
            _id: 2,
            name: "Zinfandel",
            avatar: "https://i.imgur.com/98jfDp8.png"
          }
        ]
      },
      {
        id: 20,
        name: "Gouda",
        avatar: "https://i.imgur.com/SVkJ6ck.png",
        pairings: [
          {
            _id: 0,
            name: "Merlot",
            avatar: "https://i.imgur.com/mJCsV9D.png",
          },
          {
            _id: 1,
            name: "Pinot Noir",
            avatar: "https://i.imgur.com/87Evd5p.png"
          },
          {
            _id: 2,
            name: "Riesling",
            avatar: "https://i.imgur.com/2bRgPa7.png"
          }
        ]
      },
      {
        id: 21,
        name: "Brie/Camembert",
        avatar: "https://i.imgur.com/sE8mej4.png",
        pairings: [
          {
            _id: 0,
            name: "Champagne",
            avatar: "https://i.imgur.com/6YHhTEm.png"
          },
          {
            _id: 1,
            name: "Chardonnay",
            avatar: "https://i.imgur.com/6laVacs.png"
          },
          {
            _id: 2,
            name: "Merlot",
            avatar: "https://i.imgur.com/mJCsV9D.png"
          }
        ]
      },
      {
        id: 22,
        name: "Feta",
        avatar: "https://i.imgur.com/oAW3hQf.png",
        pairings: [
          {
            _id: 0,
            name: "Zinfandel",
            avatar: "https://i.imgur.com/98jfDp8.png"
          },
          {
            _id: 1,
            name: "Pinot Grigio",
            avatar: "https://i.imgur.com/T2TiIeD.png"
          }
        ]
      },
      {
        id: 23,
        name: "Mozzarella",
        avatar: "https://i.imgur.com/9R8DkPU.png",
        pairings: [
          {
            _id: 0,
            name: "Sauvignon Blanc",
            avatar: "https://i.imgur.com/NU8P5pg.png",
          },
          {
            _id: 1,
            name: "Pinot Grigio",
            avatar: "https://i.imgur.com/T2TiIeD.png"
          },
          {
            _id: 2,
            name: "Sangiovese",
            avatar: "https://i.imgur.com/oUBdtoE.png"
          }
        ]
      },
      {
        id: 24,
        name: "Goat",
        avatar: "https://i.imgur.com/HAJ9X56.png",
        pairings: [
          {
            _id: 0,
            name: "Sauvignon Blanc",
            avatar: "https://i.imgur.com/NU8P5pg.png"
          },
          {
            _id: 1,
            name: "Riesling",
            avatar: "https://i.imgur.com/2bRgPa7.png"
          },
          {
            _id: 2,
            name: "Sangiovese",
            avatar: "https://i.imgur.com/oUBdtoE.png"
          }
        ]
      },
      {
        id: 25,
        name: "Provolone",
        avatar: "https://i.imgur.com/oiAv4Vh.png",
        pairings: [
          {
            _id: 0,
            name: "Merlot",
            avatar: "https://i.imgur.com/mJCsV9D.png"
          },
          {
            _id: 1,
            name: "Sangiovese",
            avatar: "https://i.imgur.com/oUBdtoE.png"
          },
          {
            _id: 2,
            name: "Sauvignon Blanc",
            avatar: "https://i.imgur.com/NU8P5pg.png"
          }
        ]
      },
      {
        id: 26,
        name: "Gruyere",
        avatar: "https://i.imgur.com/WpJ5lKk.png",
        pairings: [
          {
            _id: 0,
            name: "Pinot Noir",
            avatar: "https://i.imgur.com/87Evd5p.png"
          },
          {
            _id: 1,
            name: "Chardonnay",
            avatar: "https://i.imgur.com/6laVacs.png"
          },
          {
            _id: 2,
            name: "Semillon",
            avatar: "https://i.imgur.com/kem78OD.png"
          }
        ]
      },
  ]
}
export default state;
