import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import { format } from 'react-string-format';

export default function ArmorySpecificList() {
  
  const [posts, setPosts] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    
    var url = "";
    if (state.includes('-')) {
      url = state.replaceAll('-', '_');
    } else {
      url = state;
    }

    var endPoint = format('http://localhost:8080/v1{0}?version=1.10.0', url);

    axios.get(endPoint)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [state]);

  return (
    <ul>
      { posts.map(post => (<li key={post.id}><Link to={'/specific-item'} state={{url: state, itemName: post.name}}>{post.name}</Link></li>)) }
    </ul>
  );
}