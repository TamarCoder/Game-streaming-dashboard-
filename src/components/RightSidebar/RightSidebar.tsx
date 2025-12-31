'use client'

import React from 'react';
import styles from './RightSidebar.module.scss';

interface Friend {
  name: string;
  game: string;
  status: string;
  avatar: string;
}

const RightSidebar: React.FC = () => {
  const stats = [
    { value: '70$', trend: 'up' },
    { value: '$1452.4', trend: 'up' },
    { value: '43%', trend: 'down' }
  ];

  const friends: Friend[] = [
    { name: 'Tyler Nix', game: 'CS:GO', status: 'JUG 8', avatar: '/avatars/4.png' },
    { name: 'Sasha Moris', game: 'DOTA 2', status: 'GUY 5', avatar: '/avatars/5.png' },
    { name: 'Jesica Wong', game: 'CS:GO', status: 'JUG 8', avatar: '/avatars/6.png' },
    { name: 'Patric Brown', game: 'DOTA 2', status: 'GUY 5', avatar: '/avatars/8.png' },
  ];

  return (
    <aside className={styles['right-sidebar']}>
      <div className={styles['right-sidebar__stats']}>
        {stats.map((stat, index) => (
          <div key={index} className={styles['stat-box']}>
            <div className={styles['stat-box__value']}>{stat.value}</div>
            <div className={`${styles['stat-box__chart']} ${styles[`stat-box__chart--${stat.trend}`]}`}>
              <div className={styles['mini-chart']}></div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['right-sidebar__friends']}>
        <h3 className={styles['right-sidebar__title']}>Updating friends</h3>
        <div className={styles['friends-list']}>
          {friends.map((friend, index) => (
            <div key={index} className={styles['friend-item']}>
              <div 
                className={styles['friend-item__avatar']}
                style={{ backgroundImage: `url(${friend.avatar})` }}
              ></div>
              <div className={styles['friend-item__info']}>
                <div className={styles['friend-item__name']}>{friend.name}</div>
                <div className={styles['friend-item__game']}>{friend.game}</div>
              </div>
              <div className={styles['friend-item__status']}>{friend.status}</div>
              <button className={styles['friend-item__icon']}>🔍</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['right-sidebar__betting']}>
        <div className={styles['betting-header']}>
          <h3 className={styles['right-sidebar__title']}>Make a bet</h3>
          <button className={styles['betting-header__more']}>•••</button>
        </div>
        <div className={styles['betting-chart']}>
          <div className={styles['bar-chart']}>
            {[30, 50, 40, 70, 45, 80, 60, 90, 55, 75, 50, 85].map((height, index) => (
              <div 
                key={index} 
                className={styles['bar-chart__bar']}
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>
        <button className={styles['betting-button']}>⚡</button>
      </div>
    </aside>
  );
};

export default RightSidebar;
