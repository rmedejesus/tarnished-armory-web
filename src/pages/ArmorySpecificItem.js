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
        <p key="fullHexId">Full Hex Id: {post.fullHexId}</p>
        <p key="name">Name: {post.name}</p>
        <p key="summary">Summary: {post.summary}</p>
        {post.description?.map(d => (d !== '' ? <p key={d}>Description: {d}</p> : null))}
        <p key="isTradable">Can be traded: {post.isTradable?.toString()}</p>
        <p key="priceSold">Selling Price: {post.priceSold}</p>
        <p key="rarity">Rarity: {post.rarity}</p>
        <p key="icon">Icon No.: {post.icon}</p>
        <p key="maxHeld">Maximum number that can be held: {post.maxHeld}</p>
        <p key="maxStored">Maximum number that can be stored: {post.maxStored}</p>
        {post.locations?.map(location => (<p key={location.summary}>Location Summary: {location.summary}</p>))}
        {post.remarks?.map(remark => (<p key={remark}>Remarks: {remark}</p>))}
        {post.category != null ? <p key="category">Category: {post.category}</p> : null} 
        {post.effects?.map(effect => (
          <div>
            {effect.value != null ? <p key="attribute">Attribute: {effect.attribute}</p> : null}
            {effect.value != null ? <p key="value">Value: {effect.value}</p> : null}
            {effect.model != null ? <p key="model">Model: {effect.model}</p> : null}
            {effect.type != null ? <p key="type">Type: {effect.type}</p> : null}
            {effect.conditions?.map(c => (c !== '' ? <p key={c}>Conditions: {c}</p> : null))}
            {effect.valuePvp != null ? <p key="valuePvp">PvP Value: {effect.valuePvp}</p> : null}
            {effect.tickInterval != null ? <p key="tickInterval">Tick Interval: {effect.tickInterval}</p> : null}
          </div>
        ))}
        {Object.entries(post.statusEffects || {}).map(([key, subject], i) => (<p key={i}>{key}: {subject}</p>))}
        {Object.entries(post.damage || {}).map(([key, subject], i) => (<p key={i}>{key}: {subject}</p>))}
        {post.isBuffable != null ? <p key="isBuffable">Can be buffed: {post.isBuffable?.toString()}</p> : null}
        {post.isL1Guard != null ? <p key="isL1Guard">Is L1 Guardable: {post.isL1Guard?.toString()}</p> : null}
        {post.allowAshOfWar != null ? <p key="allowAshOfWar">Ash of War Allowed: {post.allowAshOfWar?.toString()}</p> : null}
        {post.defaultSkillId != null ? <p key="defaultSkillId">Default Skill Id: {post.defaultSkillId}</p> : null}
        {Object.entries(post.requirements || {}).map(([key, subject], i) => (<p key={i}>{key}: {subject}</p>))}
        {post.spConsumptionRate != null ? <p key="spConsumptionRate">SP Consumption Rate: {post.spConsumptionRate}</p> : null}
        {post.upgradeCosts?.map(d => (<p key={d}>Upgrade Costs: {d}</p>))}
        {post.upgradeMaterial != null ? <p key="upgradeMaterial">Upgrade material Needed: {post.upgradeMaterial}</p> : null}
        {post.weight != null ? <p key="weight">Weight: {post.weight}</p> : null}
        {Object.entries(post.absorptions || {}).map(([key, subject], i) => (<p key={i}>{key}: {subject}</p>))}
        {post.altered !== '' && post.altered != null ? <p key="altered">Altered: {post.altered}</p> : null}
        {post.iconFemale != null ? <p key="iconFemale">Female Icon: {post.iconFemale}</p> : null}
        {Object.entries(post.resistances || {}).map(([key, subject], i) => (<p key={i}>{key}: {subject}</p>))}
        {post.defaultAffinity != null ? <p key="defaultAffinity">Default Affinity: {post.defaultAffinity}</p> : null} 
        {post.possibleAffinities?.map(d => (<p key="possibleAffinities">Possible Affinities: {d}</p>))}
        {post.skillId != null ? <p key="skillId">Skill Id: {post.skillId}</p> : null}
        {post.hint != null ? <p key="hint">Hint: {post.hint}</p> : null}    
        {post.products?.map(d => (<p key={d}>Products: {d}</p>))}
        {post.slotsUsed != null ? <p key="slotsUsed">Slots Used: {post.slotsUsed}</p> : null}
        {post.holdAction != null ? <p key="holdAction">Hold Action: {post.holdAction}</p> : null}
        {post.isWeaponBuff != null ? <p key="isWeaponBuff">Is Weapon Buffable: {post.isWeaponBuff?.toString()}</p> : null}
        {post.isShieldBuff != null ? <p key="isShieldBuff">Is Shield Buffable: {post.isShieldBuff?.toString()}</p> : null}
        {post.isHorsebackCastable != null ? <p key="isHorsebackCastable">Can be cast on horseback: {post.isHorsebackCastable?.toString()}</p> : null}
        {post.summonQuantity != null ? <p key="summonQuantity">Summon Quantity: {post.summonQuantity}</p> : null}      
        {post.abilities?.map(d => (<p key={d}>Abilities: {d}</p>))}
        {post.summonName != null ? <p key="summonName">Summon Name: {post.summonName}</p> : null}
        {post.fpCost != null ? <p key="fpCost">FP Cost: {post.fpCost}</p> : null}
        {post.hpCost != null ? <p key="hpCost">HP Cost: {post.hpCost}</p> : null}
        {post.spCostExtra != null ? <p key="spCostExtra">Extra SP Cost: {post.spCostExtra}</p> : null}
        {post.conflicts?.map(d => (<p key={d}>Conflicts: {d}</p>))}
        {post.availability != null ? <p key="availability">Availability: {post.availability}</p> : null}
        {post.isConsumed != null ?  <p key="isConsumed">Is Consumed: {post.isConsumed?.toString()}</p> : null}
        {post.isLadderUsable != null ?  <p key="isLadderUsable">Can be used on ladder: {post.isLadderUsable?.toString()}</p> : null}
        {post.isHorsebackUsable != null ?  <p key="isHorsebackUsable">Can be used on horseback: {post.isHorsebackUsable?.toString()}</p> : null}
        
        {Object.entries(post.affinity || {}).map(([key, subject], i) => (
            <div>
              <p><strong>{key}</strong></p>
              {subject.correctionAttackId != null ? <p key={i}>Correction AttackId: {subject.correctionAttackId}</p> : null}
              {Object.entries(subject.correctionCalcId || {}).map(([k, s], j) => (<p key={j}>{k}: {s}</p>))}
              {Object.entries(subject.damage || {}).map(([k, s], j) => (<p key={j}>{k}: {s}</p>))}
              {subject.fullHexId != null ? <p key={i}>Full Hex Id: {subject.fullHexId}</p> : null}
              {subject.id != null ? <p key={i}>Affinity Id: {subject.id}</p> : null}
              {subject.reinforcementId != null ? <p key={i}>Reinforcement Id: {subject.reinforcementId}</p> : null}
              {Object.entries(subject.guard || {}).map(([k, s], j) => (<p key={j}>{k}: {s}</p>))}
              {Object.entries(subject.resistance || {}).map(([k, s], j) => (<p key={j}>{k}: {s}</p>))}
              {Object.entries(subject.scaling || {}).map(([k, s], j) => (<p key={j}>{k}: {s}</p>))}
              {Object.entries(subject.statusEffects || {}).map(([k, s], j) => (<p key={j}>{k}: {s}</p>))}
              {subject.statusEffectOverlay?.map(d => (
                <div>
                  {Object.entries(d || {}).map(([k, s], j) => (<p key={j}>{k}: {s}</p>))}
                </div>
              ))}
            </div>
          ))}
      </div>
    );
}