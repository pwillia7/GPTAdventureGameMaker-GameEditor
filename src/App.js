import React, { useState, Suspense } from "react";
import Form from '@rjsf/fluent-ui';
import { gameSchema } from "./schema.js"; // Import your schema
import styled from "styled-components"; // Import styled-components library
import { colors } from "./colors.js"; // Import colors from colors.js
import FileSaver from "file-saver"; // Import FileSaver library
import Ajv8Validator from '@rjsf/validator-ajv8'; // Import the validator
import './styles.css';


const AppContainer = styled.div`
  max-width: ${(props) => (props.collapsed ? "850px" : "1000px")};
  margin: ${(props) => (props.collapsed ? "20px auto" : "20px")};
  padding: ${(props) => (props.collapsed ? "20px" : "20px")};
`;

const FileInput = styled.input`
  display: block;
  margin-bottom: ${(props) => (props.collapsed ? "10px" : "20px")};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitButton = styled.input`
  margin-top: 20px;
`;
const uiSchema = {
  settings: {
    title: {
      "ui:widget": "textarea",
      "ui:options": { rows:2 },
      classNames:"form-control title-widget" // Assign a custom class name
    },
    author: { classNames:"form-control author-widget" },
    description: { classNames:"form-control description-widget" },
    font: { classNames:"form-control font-widget" },
    backgroundColor: { classNames:"form-control background-widget" },
    textColor: { classNames:"form-control text-widget" },
  },
  scenes:{
    "ui:options":{ addable:true, removable:true, orderable:false }, 
    items:{
      id:{ classNames:"form-control id-widget" },
      title:{ classNames:"form-control scene-title-widget" },
      content:{ classNames:"form-control content-widget" },
      choices:{
        "ui:options":{ addable:true, removable:true, orderable:false }, 
        items:{
          text:{ classNames:"form-control text-choice-widget" },
          nextSceneId:{ classNames:"form-control next-scene-widget" },
        }
      }
    }
  }
};


function App() {
  
   const [data, setData] = useState([]);
   const [errors, setErrors] = useState([]);

   const handleSubmit = ({ formData }) => {
     setData(formData); // Update data state with form data
     const jsonString = JSON.stringify(formData); // Convert form data to JSON string
     const blob = new Blob([jsonString], {type: "application/json"}); // Create a blob with the JSON string
     FileSaver.saveAs(blob, "game.json"); // Save and download the file as game.json
   };

   const handleError = ({ errorSchema }) => {
     setErrors(errorSchema); 
   };

   // Define a function to handle file change
   const handleFileChange = (e) => {
     const selectedFile = e.target.files[0];
     const reader = new FileReader();
     reader.onload = (event) => {
       const fileContent = event.target.result;
       const jsonContent = JSON.parse(fileContent);
       setData(jsonContent); // Update data state with file content
     };
     reader.readAsText(selectedFile);
   };

   return (
     <AppContainer>
       <h1>Game File Editor</h1>
       <p>This is a simple tool to create and edit game files for your text adventure game engine.</p>
       <FileInput type="file" onChange={(e) => handleFileChange(e)} />
       <FormContainer>
       <Form schema={gameSchema} uiSchema={uiSchema} onSubmit={handleSubmit} onError={handleError} formData={data} validator={Ajv8Validator} />
         <SubmitButton type="submit" value="Save" />
       </FormContainer>
       <Suspense fallback={<div>Loading...</div>}>

       </Suspense>
     </AppContainer>
   );
 }
 
 export default App;

