import React from 'react'
import styles from './combat.css';

export default function Combat() {
 
  return (
  <div className={styles.container}>
  <div className={styles.MainView}>
    <div className={styles.Player}>Player Comp</div>
    <div className={styles.Enemies}>
      <div className={styles.E1}>E1 Comp</div>
      <div className={styles.E2}>E2 Comp</div>
      <div className={styles.E3}>E3 Comp</div>
      <div className={styles.E4}>E4 Comp</div>
    </div>
    <div className={styles.Esc}></div>
  </div>
  <div className={styles.PStats}>
    <div className={styles.Hp}>Hp State</div>
    <div className={styles.Speed}>Speed State</div>
    <div className={styles.Atk}>Atk State</div>
    <div className={styles.Def}>Def State</div>
    <div className={styles.MAtk}>Matk State</div>
    <div className={styles.MDef}>Mdef State</div>
    <div className={styles.Acc}>Acc State</div>
    <div className={styles.Evs}>Evs State</div>
  </div>
  <div className={styles.EStats}>
    <div className={styles.E1Hp}>E1 Hp-Comp</div>
    <div className={styles.E2Hp}>E2 Hp-Comp</div>
    <div className={styles.E3Hp}>E3 Hp-Comp</div>
    <div className={styles.E4Hp}>E4 Hp-Comp</div>
  </div>
  <div className={styles.Log}>
    <div className={styles.CombatLog}>Log Comp</div>
    <div className={styles.AtkButton}>Atk Button</div>
    <div className={styles.DefButton}>Def Button</div>
    <div className={styles.FleeButton}>Flee Button</div>
  </div>
</div>
  )
}
