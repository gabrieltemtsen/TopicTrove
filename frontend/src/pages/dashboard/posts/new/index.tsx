import { Box, Stack } from "@chakra-ui/react";
import DashboardLayout from "../../layout";
import { useState } from "react";
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';
import "react-mde/lib/styles/css/react-mde-all.css";
import MarkdownRenderer from "@/components/MarkDownRenderer";

export default function NewPostPage(){
    const [value, setValue] = useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] =useState<"write" | "preview">("write");
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
    </Stack>
</DashboardLayout>
}