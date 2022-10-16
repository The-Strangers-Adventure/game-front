import React from 'react'
import styles from './combat.css';

export default function Combat() {
 
  return (
    <div className={styles.container}>
  <div className={styles.MainView}>
    <div className={styles.Player}></div>
    <div className={styles.Enemies}>
      <div className={styles.E1}></div>
      <div className={styles.E2}></div>
      <div className={styles.E3}></div>
      <div className={styles.E4}></div>
    </div>
    <div className={styles.Esc}></div>
  </div>
  <div className={styles.PStats}>
    <div className={styles.Hp}></div>
    <div className={styles.Speed}></div>
    <div className={styles.Atk}></div>
    <div className={styles.Def}></div>
    <div className={styles.MAtk}></div>
    <div className={styles.MDef}></div>
    <div className={styles.Acc}></div>
    <div className={styles.Evs}></div>
  </div>
  <div className={styles.EStats}>
    <div className={styles.E1Hp}></div>
    <div className={styles.E2Hp}></div>
    <div className={styles.E3Hp}></div>
    <div className={styles.E4Hp}></div>
  </div>
  <div className={styles.Log}>
    <div className={styles.CombatLog}></div>
    <div className={styles.AtkButton}></div>
    <div className={styles.DefButton}></div>
    <div className={styles.FleeButton}></div>
  </div>
</div>
  )
}
