'use client';

import React, { useState } from 'react';
import {
  Tabs,
  TabsTab,
  TabsList,
  TabsPanel,
  Container,
  Box,
} from '@mantine/core';
import BlogSection from '../BlogSection/BlogSection';


export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string | null>('blog');

  return (
    <Box color="white" c={'white'}>
      <Tabs value={activeTab} onChange={setActiveTab}>
        <TabsList>
          <TabsTab value="blog">Blog</TabsTab>
        </TabsList>

        <TabsPanel value="blog">
          <Box mt={5}>
            <BlogSection />
          </Box>
        </TabsPanel>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
