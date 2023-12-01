import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { format } from 'react-string-format';

export default function ArmorySpecificItem() {
    const [post, setPosts] = useState({});
    const { state } = useLocation();

    useEffect(() => {
  
      var formattedItemName = "";
      var formattedUrl = "";

      if (state.url.includes('-')) {
        formattedUrl = state.url.replaceAll('-', '_');
      } else {
        formattedUrl = state.url;
      }
  
      if (state.itemName.includes(' ')) {
        formattedItemName = state.itemName.replaceAll(' ', '_');
      } else {
        formattedItemName = state.itemName;
      }
      var endPoint = format('http://localhost:8080/v1{0}/{1}?version=1.10.0', formattedUrl, formattedItemName);
  
      axios.get(endPoint)
        .then(response => {
          setPosts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [state]);
  
    return (
      <div key={post.id}>
        <p id="name">Name: {post.name}</p>
        <p id="summary">Summary: {post.summary}</p>
        {post.description?.map(d => (<p>Description: {d}</p>))}
        <p id="isTradable">Can be traded: {post.isTradable?.toString()}</p>
        <p id="priceSold">Selling Price: {post.priceSold}</p>
        <p id="rarity">Rarity: {post.rarity}</p>
        <p id="icon">Icon No.: {post.icon}</p>
        <p id="maxHeld">Maximum number that can be held: {post.maxHeld}</p>
        <p id="maxStored">Maximum number that can be stored: {post.maxStored}</p>
        {post.locations?.map(location => (<p id="locations">Location Summary: {location.summary}</p>))}
        {post.remarks?.map(remark => (<p id="remarks">Remarks: {remark}</p>))}
        <p id="category">Category: {post.category}</p>
        {/* {post.effects?.map(effect => (<p id="effect">Effect: {effect.attribute}</p>)(<p id="effect">Effect: {effect.value}</p>))} */}
        {Object.entries(post.statusEffects || {}).map(([key, subject], i) => (<p key={i}>{key}: {subject}</p>))}
      </div>
    );
}