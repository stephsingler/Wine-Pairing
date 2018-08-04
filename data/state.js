const state = {
  redWine: [
    {
      id: 0,
      name: "Pinot Noir",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/pinot.png?alt=media&token=e7906a9e-8568-44e9-b719-41bc3a0a1a35",
      pairings: [
        {
          _id: 0,
          name: "Gouda",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/gouda.png?alt=media&token=6e268e02-663b-41fd-b03a-a19e03561d99"
        },
        {
          _id: 1,
          name: "Swiss",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/swiss.png?alt=media&token=225cdc2c-399c-4328-8926-a939a24b653f"
        },
        {
          _id: 2,
          name: "Gruyere",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/gruyere.png?alt=media&token=84338b0c-9443-44e0-9faa-6f54e448c65f"
        }
      ]
    },
    {
      id: 1,
      name: "Zinfandel",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/zin.png?alt=media&token=8d153b97-bb99-41d0-a033-12900b62971d",
      pairings: [
        {
          _id: 0,
          name: "Blue",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/blue-cheese.png?alt=media&token=75809a13-3512-44d1-bd14-89c3b47da0fd"
        },
        {
          _id: 1,
          name: "Parmasean",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/parmasean.png?alt=media&token=ab09a747-c08e-47fe-8b90-5e087b5e4a97"
        },
        {
          _id: 2,
          name: "Feta",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/feta.png?alt=media&token=a1ebdd0b-34c7-4aab-81a7-59e24e03d0f7"
        }
      ]
    },
    {
      id: 2,
      name: "Cabernet Sauvignon",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/cab.png?alt=media&token=476770e8-e19f-44f9-addd-f79f21d4fa7d",
      pairings: [
        {
          _id: 0,
          name: "Cheddar",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/cheddar.png?alt=media&token=769e6070-b351-4fe9-aed0-d49fe78f8387"
        },
        {
          _id: 1,
          name: "Blue",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/blue-cheese.png?alt=media&token=75809a13-3512-44d1-bd14-89c3b47da0fd"
        }
      ]
    },
    {
      id: 3,
      name: "Merlot",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/merlot.png?alt=media&token=076b3997-7511-46b2-930a-dcbf21280ead",
      pairings: [
        {
          _id: 0,
          name: "Gouda",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/gouda.png?alt=media&token=6e268e02-663b-41fd-b03a-a19e03561d99"
        },
        {
          _id: 1,
          name: "Brie/Camembert",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/brie.png?alt=media&token=ea1c716b-ccbc-4561-b16a-1a860c0b8425"
        },
        {
          _id: 2,
          name: "Provolone",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/jack.png?alt=media&token=43cfdc39-4ac9-4270-b21c-407fcafe6e61"
        }
      ]
    },
    {
      id: 4,
      name: "Syrah",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/syrah.png?alt=media&token=66bb80c3-87e8-44f6-a456-e8acf199ac3a",
      pairings: [
        {
          _id: 0,
          name: "Blue (creamy)",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/blue-cheese.png?alt=media&token=75809a13-3512-44d1-bd14-89c3b47da0fd"
        },
        {
          _id: 1,
          name: "Cheddar",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/cheddar.png?alt=media&token=769e6070-b351-4fe9-aed0-d49fe78f8387"
        }
      ]
    },
    {
      id: 5,
      name: "Malbec",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/malbec.png?alt=media&token=fdc27952-d96f-43db-8ab3-3dfe1dd7f31c",
      pairings: [
        {
          _id: 0,
          name: "Brie/Camembert",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/brie.png?alt=media&token=ea1c716b-ccbc-4561-b16a-1a860c0b8425"
        },
        {
          _id: 1,
          name: "Blue",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/blue-cheese.png?alt=media&token=75809a13-3512-44d1-bd14-89c3b47da0fd"
        },
        {
          _id: 2,
          name: "Cheddar",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/cheddar.png?alt=media&token=769e6070-b351-4fe9-aed0-d49fe78f8387"
        }
      ]
    },
    {
      id: 6,
      name: "Chianti",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/chianti.png?alt=media&token=d7467a80-cde2-4b2d-a8dd-85ecbf95d275",
      pairings: [
        {
          _id: 0,
          name: "Parmasean",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/parmasean.png?alt=media&token=ab09a747-c08e-47fe-8b90-5e087b5e4a97"
        },
        {
          _id: 1,
          name: "Cheddar",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/cheddar.png?alt=media&token=769e6070-b351-4fe9-aed0-d49fe78f8387"
        }
      ]
    },
    {
      id: 7,
      name: "Sangiovese",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/sangio.png?alt=media&token=769e1784-98ce-4b4b-a218-1db8acc00dd9",
      pairings: [
        {
          _id: 0,
          name: "Provolone",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/jack.png?alt=media&token=43cfdc39-4ac9-4270-b21c-407fcafe6e61"
        },
        {
          _id: 1,
          name: "Mozzarella",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/mozzarella.png?alt=media&token=70158c07-06df-41f7-b414-b881a0733872"
        },
        {
          _id: 2,
          name: "Goat",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/goat.png?alt=media&token=64806845-e6f2-4fc8-9b0d-67ce7b3e3d3c"
        }
      ]
    },
    {
      id: 8,
      name: "Tempranillo",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/tempranillo.png?alt=media&token=f5a253ed-beb5-4b32-86d0-2e7f38f15d3b",
      pairings: [
        {
          _id: 0,
          name: "Cheddar (sharp)",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/cheddar.png?alt=media&token=769e6070-b351-4fe9-aed0-d49fe78f8387"
        },
        {
          _id: 1,
          name: "Gouda",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/gouda.png?alt=media&token=6e268e02-663b-41fd-b03a-a19e03561d99"
        }
      ]
    },
  ],
  whiteWine: [
    {
      id: 9,
      name: "Chardonnay",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/chardonnay.png?alt=media&token=200bb1d4-9f77-4493-898c-147c55e9f0e7",
      pairings: [
        {
          _id: 0,
          name: "Brie/Camembert",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/brie.png?alt=media&token=ea1c716b-ccbc-4561-b16a-1a860c0b8425"
        },
        {
          _id: 1,
          name: "Cheddar",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/cheddar.png?alt=media&token=769e6070-b351-4fe9-aed0-d49fe78f8387"
        },
        {
          _id: 2,
          name: "Gruyere",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/gruyere.png?alt=media&token=84338b0c-9443-44e0-9faa-6f54e448c65f"
        }
      ]
    },
    {
      id: 10,
      name: "Pinot Grigio",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/pinot-grigio.png?alt=media&token=ea884980-76d3-48a1-b9d6-0a5eeb0786fa",
      pairings: [
        {
          _id: 0,
          name: "Mozzarella",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/mozzarella.png?alt=media&token=70158c07-06df-41f7-b414-b881a0733872"
        },
        {
          _id: 1,
          name: "Feta",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/feta.png?alt=media&token=a1ebdd0b-34c7-4aab-81a7-59e24e03d0f7"
        }
      ]
    },
    {
      id: 11,
      name: "Riesling",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/riesling.png?alt=media&token=534969e2-d724-4885-b5c0-dfac4e72d6ea",
      pairings: [
        {
          _id: 0,
          name: "Blue",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/blue-cheese.png?alt=media&token=75809a13-3512-44d1-bd14-89c3b47da0fd"
        },
        {
          _id: 1,
          name: "Gouda",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/gouda.png?alt=media&token=6e268e02-663b-41fd-b03a-a19e03561d99"
        },
        {
          _id: 2,
          name: "Goat",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/goat.png?alt=media&token=64806845-e6f2-4fc8-9b0d-67ce7b3e3d3c"
        }
      ]
    },
    {
      id: 12,
      name: "Semillon",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/semillon.png?alt=media&token=633997d3-ca42-41c9-a58a-fa05b9044691",
      pairings: [
        {
          _id: 0,
          name: "Gruyere",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/gruyere.png?alt=media&token=84338b0c-9443-44e0-9faa-6f54e448c65f"
        },
        {
          _id: 1,
          name: "Blue",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/blue-cheese.png?alt=media&token=75809a13-3512-44d1-bd14-89c3b47da0fd"
        }
      ]
    },
    {
      id: 13,
      name: "Sauvignon Blanc",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/blanc.png?alt=media&token=05e8b750-2fad-4eba-9676-58c0ddcb807a",
      pairings: [
        {
          _id: 0,
          name: "Goat",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/goat.png?alt=media&token=64806845-e6f2-4fc8-9b0d-67ce7b3e3d3c"
        },
        {
          _id: 1,
          name: "Mozzarella",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/mozzarella.png?alt=media&token=70158c07-06df-41f7-b414-b881a0733872"
        },
        {
          _id: 2,
          name: "Provolone",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/jack.png?alt=media&token=43cfdc39-4ac9-4270-b21c-407fcafe6e61"
        }
      ]
    },
    {
      id: 14,
      name: "Moscato",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/moscato.png?alt=media&token=735874bf-7a5e-46cc-9318-67c492f186d7",
      pairings: [
        {
          _id: 0,
          name: "Brie/Camembert",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/brie.png?alt=media&token=ea1c716b-ccbc-4561-b16a-1a860c0b8425"
        },
        {
          _id: 1,
          name: "Gouda",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/gouda.png?alt=media&token=6e268e02-663b-41fd-b03a-a19e03561d99"
        }
      ]
    },
    {
      id: 15,
      name: "Champagne",
      avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/champagne.png?alt=media&token=c688fe46-6b42-48c5-bd1e-559a7abda3ff",
      pairings: [
        {
          _id: 0,
          name: "Brie/Camembert",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/brie.png?alt=media&token=ea1c716b-ccbc-4561-b16a-1a860c0b8425"
        },
        {
          _id: 1,
          name: "Parmasean",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/parmasean.png?alt=media&token=ab09a747-c08e-47fe-8b90-5e087b5e4a97"
        },
        {
          _id: 2,
          name: "Gruyere",
          avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/gruyere.png?alt=media&token=84338b0c-9443-44e0-9faa-6f54e448c65f"
        }
      ]
    },
  ],
  cheeseList: [
      {
        id: 16,
        name: 'Cheddar',
        avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/cheddar.png?alt=media&token=769e6070-b351-4fe9-aed0-d49fe78f8387",
        pairings: [
          {
            _id: 0,
            name: "Cabernet Sauvignon",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/cab.png?alt=media&token=476770e8-e19f-44f9-addd-f79f21d4fa7d"
          },
          {
            _id: 1,
            name: "Chianti",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/chianti.png?alt=media&token=d7467a80-cde2-4b2d-a8dd-85ecbf95d275"
          },
          {
            _id: 2,
            name: "Chardonnay",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/chardonnay.png?alt=media&token=200bb1d4-9f77-4493-898c-147c55e9f0e7"
          }
        ]
      },
      {
        id: 17,
        name: "Blue",
        avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/blue-cheese.png?alt=media&token=75809a13-3512-44d1-bd14-89c3b47da0fd",
        pairings: [
          {
            _id: 0,
            name: "Riesling",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/riesling.png?alt=media&token=534969e2-d724-4885-b5c0-dfac4e72d6ea"
          },
          {
            _id: 1,
            name: "Cabernet Sauvignon",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/cab.png?alt=media&token=476770e8-e19f-44f9-addd-f79f21d4fa7d"
          },
          {
            _id: 2,
            name: "Zinfandel",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/zin.png?alt=media&token=8d153b97-bb99-41d0-a033-12900b62971d"
          }
        ]
      },
      {
        id: 18,
        name: "Swiss",
        avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/swiss.png?alt=media&token=225cdc2c-399c-4328-8926-a939a24b653f",
        pairings: [
          {
            _id: 0,
            name: "Pinot Noir",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/pinot.png?alt=media&token=e7906a9e-8568-44e9-b719-41bc3a0a1a35"
          },
          {
            _id: 1,
            name: "Chardonnay",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/chardonnay.png?alt=media&token=200bb1d4-9f77-4493-898c-147c55e9f0e7"
          }
        ]
      },
      {
        id: 19,
        name: "Parmasean",
        avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/parmasean.png?alt=media&token=ab09a747-c08e-47fe-8b90-5e087b5e4a97",
        pairings: [
          {
            _id: 0,
            name: "Chianti",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/chianti.png?alt=media&token=d7467a80-cde2-4b2d-a8dd-85ecbf95d275"
          },
          {
            _id: 1,
            name: "Champagne",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/champagne.png?alt=media&token=c688fe46-6b42-48c5-bd1e-559a7abda3ff"
          },
          {
            _id: 2,
            name: "Zinfandel",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/zin.png?alt=media&token=8d153b97-bb99-41d0-a033-12900b62971d"
          }
        ]
      },
      {
        id: 20,
        name: "Gouda",
        avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/gouda.png?alt=media&token=6e268e02-663b-41fd-b03a-a19e03561d99",
        pairings: [
          {
            _id: 0,
            name: "Merlot",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/merlot.png?alt=media&token=076b3997-7511-46b2-930a-dcbf21280ead",
          },
          {
            _id: 1,
            name: "Pinot Noir",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/pinot.png?alt=media&token=e7906a9e-8568-44e9-b719-41bc3a0a1a35"
          },
          {
            _id: 2,
            name: "Riesling",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/riesling.png?alt=media&token=534969e2-d724-4885-b5c0-dfac4e72d6ea"
          }
        ]
      },
      {
        id: 21,
        name: "Brie/Camembert",
        avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/brie.png?alt=media&token=ea1c716b-ccbc-4561-b16a-1a860c0b8425",
        pairings: [
          {
            _id: 0,
            name: "Champagne",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/champagne.png?alt=media&token=c688fe46-6b42-48c5-bd1e-559a7abda3ff"
          },
          {
            _id: 1,
            name: "Chardonnay",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/chardonnay.png?alt=media&token=200bb1d4-9f77-4493-898c-147c55e9f0e7"
          },
          {
            _id: 2,
            name: "Merlot",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/merlot.png?alt=media&token=076b3997-7511-46b2-930a-dcbf21280ead"
          }
        ]
      },
      {
        id: 22,
        name: "Feta",
        avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/feta.png?alt=media&token=a1ebdd0b-34c7-4aab-81a7-59e24e03d0f7",
        pairings: [
          {
            _id: 0,
            name: "Zinfandel",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/zin.png?alt=media&token=8d153b97-bb99-41d0-a033-12900b62971d"
          },
          {
            _id: 1,
            name: "Pinot Grigio",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/pinot-grigio.png?alt=media&token=ea884980-76d3-48a1-b9d6-0a5eeb0786fa"
          }
        ]
      },
      {
        id: 23,
        name: "Mozzarella",
        avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/mozzarella.png?alt=media&token=70158c07-06df-41f7-b414-b881a0733872",
        pairings: [
          {
            _id: 0,
            name: "Sauvignon Blanc",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/blanc.png?alt=media&token=05e8b750-2fad-4eba-9676-58c0ddcb807a",
          },
          {
            _id: 1,
            name: "Pinot Grigio",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/pinot-grigio.png?alt=media&token=ea884980-76d3-48a1-b9d6-0a5eeb0786fa"
          },
          {
            _id: 2,
            name: "Sangiovese",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/sangio.png?alt=media&token=769e1784-98ce-4b4b-a218-1db8acc00dd9"
          }
        ]
      },
      {
        id: 24,
        name: "Goat",
        avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/goat.png?alt=media&token=64806845-e6f2-4fc8-9b0d-67ce7b3e3d3c",
        pairings: [
          {
            _id: 0,
            name: "Sauvignon Blanc",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/blanc.png?alt=media&token=05e8b750-2fad-4eba-9676-58c0ddcb807a"
          },
          {
            _id: 1,
            name: "Riesling",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/riesling.png?alt=media&token=534969e2-d724-4885-b5c0-dfac4e72d6ea"
          },
          {
            _id: 2,
            name: "Sangiovese",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/sangio.png?alt=media&token=769e1784-98ce-4b4b-a218-1db8acc00dd9"
          }
        ]
      },
      {
        id: 25,
        name: "Provolone",
        avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/jack.png?alt=media&token=43cfdc39-4ac9-4270-b21c-407fcafe6e61",
        pairings: [
          {
            _id: 0,
            name: "Merlot",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/merlot.png?alt=media&token=076b3997-7511-46b2-930a-dcbf21280ead"
          },
          {
            _id: 1,
            name: "Sangiovese",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/sangio.png?alt=media&token=769e1784-98ce-4b4b-a218-1db8acc00dd9"
          },
          {
            _id: 2,
            name: "Sauvignon Blanc",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/blanc.png?alt=media&token=05e8b750-2fad-4eba-9676-58c0ddcb807a"
          }
        ]
      },
      {
        id: 26,
        name: "Gruyere",
        avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/gruyere.png?alt=media&token=84338b0c-9443-44e0-9faa-6f54e448c65f",
        pairings: [
          {
            _id: 0,
            name: "Pinot Noir",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/pinot.png?alt=media&token=e7906a9e-8568-44e9-b719-41bc3a0a1a35"
          },
          {
            _id: 1,
            name: "Chardonnay",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/chardonnay.png?alt=media&token=200bb1d4-9f77-4493-898c-147c55e9f0e7"
          },
          {
            _id: 2,
            name: "Semillon",
            avatar: "https://firebasestorage.googleapis.com/v0/b/wine-pairing-app.appspot.com/o/semillon.png?alt=media&token=633997d3-ca42-41c9-a58a-fa05b9044691"
          }
        ]
      },
  ]
}
export default state;
