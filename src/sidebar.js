import React, { useState } from "react";
import styled from "styled-components";
import { Scrollspy } from "@makotot/ghostui";
import { colors } from "./colors.js"; // Import colors from colors.js

// Define a styled component for the sidebar container
const SidebarContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: ${(props) => (props.collapsed ? "50px" : "200px")};
  background-color: ${colors[0]};
`;

// Define a styled component for the sidebar toggle button
const SidebarToggle = styled.button`
  position: absolute;
  left: ${(props) => (props.collapsed ? "0" : "-50px")};
  top: 0;
  height: 50px;
  width: 50px;
  border: none;
  background-color: ${colors[1]};
`;

// Define a styled component for the sidebar list
const SidebarList = styled.ul`
  list-style: none;
  margin: ${(props) => (props.collapsed ? "0" : "20px")};
`;

// Define a styled component for the sidebar list item
const SidebarListItem = styled.li`
  margin-bottom: ${(props) => (props.collapsed ? "0" : "10px")};
`;

// Define a styled component for the sidebar link
const SidebarLink = styled.a`
  display: ${(props) => (props.collapsed ? "none" : "block")};
  color: ${colors[7]};
  text-decoration: none;
`;

// Define a function to get the ids of the form sections
const getSectionIds = (schema) => {
  // Initialize an empty array for the ids
  const ids = [];
  // Loop through the schema properties
  for (let key in schema.properties) {
    // Push the key to the ids array
    ids.push(key);
    // If the property has subproperties, loop through them and push their keys to the ids array
    if (schema.properties[key].properties) {
      for (let subkey in schema.properties[key].properties) {
        ids.push(subkey);
      }
    }
    // If the property has items, loop through them and push their keys to the ids array
    if (schema.properties[key].items) {
      for (let itemkey in schema.properties[key].items.properties) {
        ids.push(itemkey);
      }
    }
  }
  // Return the ids array
  return ids;
};

// Define a function to get the labels of the form sections
const getSectionLabels = (schema) => {
  // Initialize an empty array for the labels
  const labels = [];
  // Loop through the schema properties
  for (let key in schema.properties) {
    // Push the title of the property to the labels array
    labels.push(schema.properties[key].title);
    // If the property has subproperties, loop through them and push their titles to the labels array
    if (schema.properties[key].properties) {
      for (let subkey in schema.properties[key].properties) {
        labels.push(schema.properties[key].properties[subkey].title);
      }
    }
    // If the property has items, loop through them and push their titles to the labels array
    if (schema.properties[key].items) {
      for (let itemkey in schema.properties[key].items.properties) {
        labels.push(schema.properties[key].items.properties[itemkey].title);
      }
    }
  }
  // Return the labels array
  return labels;
};

// Define a function to render the sidebar component
const Sidebar = ({ schema }) => {
  // Get the section ids and labels from the schema
  const sectionIds = getSectionIds(schema);
  const sectionLabels = getSectionLabels(schema);
  
   // Initialize collapsed state to false
   const [collapsed, setCollapsed] = useState(false);

   // Define a function to toggle collapsed state
   const handleToggle = () => {
     setCollapsed(!collapsed);
   };

   return (
     <SidebarContainer collapsed={collapsed}>
       <SidebarToggle collapsed={collapsed} onClick={handleToggle}>
         {collapsed ? ">" : "<"}
       </SidebarToggle>
       <SidebarList collapsed={collapsed}>
       <Scrollspy targets={sectionIds} activeClass="is-current">
  {(targets) =>
    targets.map((id, index) => (
      <SidebarListItem key={id} collapsed={collapsed}>
        <SidebarLink href={`#${id}`} collapsed={collapsed}>
          {sectionLabels[index]}
        </SidebarLink>
      </SidebarListItem>
    ))
  }
</Scrollspy>

       </SidebarList>
     </SidebarContainer>
   );
};

export default Sidebar;

