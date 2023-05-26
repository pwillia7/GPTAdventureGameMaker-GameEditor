// schema.js

// Export a constant that contains your schema
export const gameSchema = {
    // Use the $schema property to specify the JSON Schema version
    $schema: "http://json-schema.org/draft-07/schema#",
    // Use the title property to give a name to your schema
    title: "Text Adventure Game Editor",
    // Use the description property to provide some information about your schema
    description: "An Editor for GPTAdventureGameMaker games",
    // Use the type property to indicate the data type of your schema
    type: "object",
    // Use the properties property to define the properties of your schema
    properties: {
     // Define a settings property that contains the settings of the game
     settings: {
      // Provide a description for the settings property
      description: "The settings of the game.",
      // Specify the type of the settings property as an object
      type: "object",
      // Define the properties of the settings object
      properties: {
       // Define a title property that contains the title of the game
       title: {
        // Provide a description for the title property
        description: "The title of the game.",
        // Specify the type of the title property as a string
        type: "string",
       },
       // Define an author property that contains the author of the game
       author: {
        // Provide a description for the author property
        description: "The author of the game.",
        // Specify the type of the author property as a string
        type: "string",
       },
       // Define a description property that contains the description of the game
       description: {
        // Provide a description for the description property
        description: "The description of the game.",
        // Specify the type of the description property as a string
        type: "string",
       },
       // Define a font property that contains the font file to use for the text
       font: {
        // Provide a description for the font property
        description: "The font file to use for the text.",
        // Specify the type of the font property as a string
        type: "string",
       },
       // Define a backgroundColor property that contains the background color of the renderer
       backgroundColor: {
        // Provide a description for the backgroundColor property
        description: "The background color of the renderer.",
        // Specify the type of the backgroundColor property as a string
        type: "string",
       },
       // Define a textColor property that contains the text color of the text element
       textColor: {
        // Provide a description for the textColor property
        description: "The text color of the text element.",
        // Specify the type of the textColor property as a string
        type: "string",
       },
      },
      // Use the required property to indicate which properties are mandatory in your schema
      // required: ["title", "author", "description", "font", "backgroundColor", "textColor"],
     },
     // Define a scenes property that contains an array of scenes for the game
     scenes: {
      // Provide a description for the scenes property
      description: "The scenes of the game.",
      // Specify the type of scenes property as an array
      type: "array",
      // Use items to define what each element in an array should be like.
      items: {
       // Use $ref to reference another definition in your schema.
       $ref: "#/definitions/scene",
      },
     },
    },
    // Use required to indicate which properties are mandatory in your schema.
    // required: ["settings", "scenes"],
    // Use definitions to define reusable schemas within your schema.
    definitions: {
     // Define a scene schema that represents a scene in your game.
     scene: {
      // Provide a description for scene schema.
      description: "A scene of the game.",
      // Specify scene schema as an object.
      type: "object",
      // Define properties for scene schema.
      properties: {
       // Define an id property that contains unique identifier for each scene.
       id: {
        // Provide a description for id property.
        description: "The unique identifier of the scene.",
        // Specify id as string.
        type: "string",
       },
       // Define text property that contains text to display for each scene.
       text: {
        // Provide a description for text property.
        description: "The text to display for each scene.",
        // Specify text as string.
        type: "string",
       },
  
   // Continue defining choices, animationCode and choice schemas following same pattern as above.
   
   // Define choices property that contains an array of choices for each scene.
   choices:{
     // Provide a description for choices property.
     description:"The choices to display for each scene.",
     // Specify choices as array.
     type:"array",
     // Use items to define what each element in an array should be like.
     items:{
       // Use $ref to reference another definition in your schema.
       $ref:"#/definitions/choice"
     }
   },
   // Define animationCode property that contains animation code to run for each scene using Three.js.
   animationCode:{
     // Provide a description for animationCode property.
     description:"The animation code to run for each scene using Three.js.",
     // Specify animationCode as string.
     type:"string"
   }
   },
   // Use required to indicate which properties are mandatory in your schema.
  //  required:["id","text","choices","animationCode"]
   },
   // Define choice schema that represents choice for each scene.
   choice:{
     // Provide a description for choice schema.
     description:"A choice for each scene.",
     // Specify choice schema as an object.
     type:"object",
     properties: {
        text: {
         // Provide a description for text property.
         description: "The text to display for each choice.",
         // Specify text as string.
         type: "string",
        },
       },
       
   // Define text and nextScene properties following same pattern as above.
   
   // Define text property that contains text to display for each choice.
   text:{
     // Provide a description for text property.
     description:"The text to display for each choice.",
     // Specify text as string.
     type:"string"
   },
   // Define nextScene property that contains id of next scene to go after choosing this choice.
   nextScene:{
     // Provide a description for nextScene property.
     description:"The id of next scene to go after choosing this choice.",
     // Specify nextScene as string.
     type:"string"
   }
   },
   // Use required to indicate which properties are mandatory in your schema.
  //  required:["text","nextScene"]
   }
   }
  
   