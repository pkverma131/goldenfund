// src/screens/js/Blogs.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import Axios from 'axios';

function Blogs() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to fetch recent blog posts
    Axios.get('http://localhost:8040/api/recent-posts')
      .then((response) => {
        setRecentPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recent posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blogs">
      <div className="blog-list">
        {loading ? (
          <Typography variant="body1">Loading recent posts...</Typography>
        ) : (
          <List>
            {recentPosts.map((post, index) => (
              <React.Fragment key={post.id}>
                <ListItem button component={Link} to={`/blogs/${post.id}`}>
                  <ListItemText primary={post.title} />
                </ListItem>
                {index < recentPosts.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        )}
      </div>

      <div className="blog-content">
        <Paper elevation={3} sx={{ padding: 2 }}>
          {/* Blog content goes here */}
          <Typography variant="h4">Welcome to Our Blog</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac purus elit. Vivamus
            non nunc nec sem tincidunt consectetur.
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

export default Blogs;
