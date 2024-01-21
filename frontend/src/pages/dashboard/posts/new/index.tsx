import { Box, Stack } from "@chakra-ui/react";
import DashboardLayout from "../../layout";
import { useState } from "react";
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';
import "react-mde/lib/styles/css/react-mde-all.css";
import MarkdownRenderer from "@/components/MarkDownRenderer";
import axios from "axios";
import React from "react";

export default function NewPostPage(){
    const [value, setValue] = useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] =useState<"write" | "preview">("write");
  const handleCreatePost = async () => {
    try {
      const apiUrl = '/api/posts/new';

      const payload = {
        title: 'Your Post Title',
        content: value,
      };
      const response = await axios.post(apiUrl, payload);

      console.log('API Response:', response.data);

    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
return <DashboardLayout>
    <Stack>
  
    <Box px={4} py={6}>
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(<MarkdownRenderer markdown={markdown}  />)
        }
      />
    </Box>

    <button onClick={handleCreatePost}>Create Post</button>
    </Stack>
</DashboardLayout>
}