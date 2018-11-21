const LEVELS = [
	{
		dialogue: DLG_INTRO,
		canvasVisible: false,
		notesVisible: false,
		notes: [],
		terms: [],
	},

	{
		dialogue: DLG_SETUP,
		canvasVisible: true,
		notesVisible: true,
		notes: [],
		terms: [],
	},

	{
		dialogue: DLG_LEVEL1,
		canvasVisible: true,
		notesVisible: true,
		notes: ['Setting up Haskell', 'Compiling Haskell', 'Haskell expressions', 'Terminology'],
		terms: ['Referencial transparency'],
		room: {
			map: "level1",
			spawn: {x: 5, y: 5},
		},
	},
];
