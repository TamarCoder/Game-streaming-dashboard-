'use client'

import React from 'react';
import styles from './LeftSidebar.module.scss';

interface Channel {
  name: string;
  avatar: string;
  isOnline: boolean;
  viewers?: number;
}

const LeftSidebar: React.FC = () => {
  const channels: Channel[] = [
    { name: 'Buster', avatar: '🦊', isOnline: true, viewers: 3 },
    { name: 'Shruy', avatar: '🎮', isOnline: true, viewers: 2 },
    { name: 'Channel Fx', avatar: '⚡', isOnline: true, viewers: 5 },
    { name: 'Archon', avatar: '👾', isOnline: true, viewers: 1 },
    { name: 'SoundOfMe', avatar: '🎵', isOnline: true, viewers: 8 },
  ];

  return (
    <aside className={styles['left-sidebar']}>
      <div className={styles['left-sidebar__profile']}>
        <div 
          className={styles['left-sidebar__profile-avatar']}
          style={{ backgroundImage: 'url(/avatars/9.png)' }}
        ></div>
        <div className={styles['left-sidebar__profile-info']}>
          <h3 className={styles['left-sidebar__profile-name']}>William_Prince</h3>
          <p className={styles['left-sidebar__profile-email']}>william_prince</p>
        </div>
      </div>

      <div className={styles['left-sidebar__activity']}>
        <div className={styles['activity-header']}>
          <h4 className={styles['activity-title']}>Recent</h4>
          <span className={styles['activity-stats']}>436 / 10 000</span>
        </div>
        <div className={styles['activity-progress']}>
          <div className={styles['progress-bar']} style={{ width: '43.6%' }}></div>
        </div>
        
        <div className={styles['activity-header']} style={{ marginTop: '1rem' }}>
          <h4 className={styles['activity-title']}>Streak Activity</h4>
          <span className={styles['activity-stats']}>15%</span>
        </div>
        <div className={styles['activity-progress']}>
          <div className={`${styles['progress-bar']} ${styles['progress-bar--purple']}`} style={{ width: '15%' }}></div>
        </div>

        <div className={styles['activity-games']}>
          <div className={styles['game-icon']}>🌲</div>
          <div className={styles['game-icon']}>🏰</div>
          <div className={styles['game-icon']}>🌿</div>
          <div className={styles['game-icon']}>🏛️</div>
          <div className={styles['game-icon']}>➕</div>
        </div>

        <div className={styles['activity-actions']}>
          <button className={styles['activity-btn']}>📄 LIST</button>
          <button className={`${styles['activity-btn']} ${styles['activity-btn--primary']}`}>🎯 AIM MORE</button>
        </div>
      </div>

      <div className={styles['left-sidebar__channels']}>
        <div className={styles['left-sidebar__channels-header']}>
          <h4 className={styles['left-sidebar__section-title']}>Favorite channels</h4>
          <span className={styles['left-sidebar__count']}>Edit</span>
        </div>
        <div className={styles['left-sidebar__channels-list']}>
          {channels.map((channel, index) => (
            <div key={index} className={styles['channel-item']}>
              <div className={styles['channel-item__left']}>
                <div className={styles['channel-item__avatar']}>{channel.avatar}</div>
                <span className={styles['channel-item__name']}>{channel.name}</span>
              </div>
              <div className={styles['channel-item__right']}>
                <span className={styles['channel-item__viewers']}>{channel.viewers}</span>
                <span className={`${styles['channel-item__status']} ${channel.isOnline ? styles['channel-item__status--online'] : ''}`}></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['left-sidebar__chest']}>
        <div className={styles['chest-card']}>
          <div 
            className={styles['chest-card__image']}
            style={{ backgroundImage: 'url(/StarChests.jpg)' }}
          ></div>
          <h4 className={styles['chest-card__title']}>Chest of the day</h4>
          <button className={styles['chest-card__button']}>🔵</button>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
