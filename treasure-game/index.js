import readline from 'readline';

const ROOMS = {
  "Entrance Hall": { item: "Map", exits: { east: "Dinning Room" } },
  "Dinning Room": { item: "Silver Key", exits: { west: "Entrance Hall", east: "Kitchen" } },
  "Kitchen": { item: "Potion", exits: { west: "Dinning Room", south: "Study Room" } },
  "Library": { exits: { east: "Living Room", south: "Garden" } },
  "Living Room": { item: "Torch", exits: { west: "Library", east: "Study Room" } },
  "Study Room": { exits: { north: "Kitchen", west: "Living Room" } },
  "Garden": { item: "Crystal", exits: { north: "Library", east: "Storage Room" } },
  "Storage Room": { exits: { west: "Garden", east: "Hallway" } },
  "Hallway": { 
    exits: { west: "Storage Room", east: "Treasure Room" },
    locked: true 
  },
  "Treasure Room": { exits: {}, isWin: true }
};


let state = {
  currentRoom: "Entrance Hall",
  backpack: []
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const showStatus = () => {
  const room = ROOMS[state.currentRoom];
  console.log("\n========================================");
  console.log(`LOCATION: ${state.currentRoom}`);
  console.log(`BACKPACK: [${state.backpack.join(", ") || "Empty"}]`);
  if (room.item) console.log(`ITEM HERE: A ${room.item}`);
  console.log(`EXITS: ${Object.keys(room.exits).join(", ")}`);
  
  if (room.isWin) {
    console.log("\nYOU FOUND THE TREASURE! YOU WIN!");
    process.exit();
  }
};

const handleInput = (input) => {
  const parts = input.toLowerCase().trim().split(" ");
  const command = parts[0];
  const target = parts[1]; 

  const currentRoomData = ROOMS[state.currentRoom];

  switch (command) {
    case "go":
    case "move":
      const nextRoom = currentRoomData.exits[target];
      if (!nextRoom) {
        console.log(`\nYou can't go "${target}".`);
      } else if (state.currentRoom === "Entrance Hall" && !state.backpack.includes("Map")) {
        console.log("\nYou need the Map to leave this room!");
      } else if (nextRoom === "Treasure Room" && (!state.backpack.includes("Torch") || !state.backpack.includes("Golden Key"))) {
        console.log("\nYou need a Torch and the Golden Key to enter the Treasure Room!");
      } else {
        state.currentRoom = nextRoom;
      }
      break;

    case "get":
    case "pickup":
      const item = currentRoomData.item;
      if (!item) {
        console.log("\nThere's nothing here to pick up.");
      } else if (state.backpack.length >= 5) {
        console.log("\nYour backpack is full!");
      } else {
        let itemToAdd = item;
        if (item === "Crystal" && state.backpack.includes("Silver Key")) {
          console.log("\nMAGIC! Your Silver Key turned into a Golden Key!");
          state.backpack = state.backpack.filter(i => i !== "Silver Key");
          itemToAdd = "Golden Key";
        }
        state.backpack.push(itemToAdd);
        currentRoomData.item = null; 
        console.log(`\nYou picked up: ${itemToAdd}`);
      }
      break;

    case "help":
      console.log("\nCOMMANDS: 'move [direction]', 'get', 'help', 'quit'");
      break;

    case "quit":
    case "exit":
      console.log("Thanks for playing!");
      process.exit();

    default:
      console.log("\nI don't understand that command. Try 'help'.");
  }

  showStatus();
  askCommand();
};

const askCommand = () => {
  rl.question("\n> What do you want to do? ", handleInput);
};

console.log("WELCOME TO THE TREASURE HUNT!");
showStatus();
askCommand();
