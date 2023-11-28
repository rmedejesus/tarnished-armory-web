import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BolsteringMaterials() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/v1/bolstering_materials?version=1.10.0')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}><a href="/item">{post.name}</a></li>
        ))}
      </ul>
    );
  }