'use client'

import React, { useState } from 'react';
import styles from './MainContent.module.scss';

interface Stream {
  title: string;
  game: string;
  viewers: string;
  duration: string;
  thumbnail: string;
  avatar: string;
}

const MainContent: React.FC = () => {
  const [fortniteBackground, setFortniteBackground] = useState('/fortnite.jpg');
  const [valorantBackground, setValorantBackground] = useState('/valorante.jpg');
  const [championshipBackground, setChampionshipBackground] = useState('/champion.jpg');
  const [galaxyBackground, setGalaxyBackground] = useState('/GALAXYCUP.jpg');

  const streams: Stream[] = [
    {
      title: 'STREAMERS CUP VALORANT',
      game: 'VALORANT',
      viewers: '200K',
      duration: '3:26:46',
      thumbnail: 'valorant',
      avatar: '/avatars/1.png'
    },
    {
      title: 'GALAXY CUP',
      game: 'PUBG',
      viewers: '3,231,302',
      duration: '4:20:46',
      thumbnail: 'galaxy',
      avatar: '/avatars/2.png'
    },
    {
      title: 'OFFICIAL STREAM OF THE ESPORTS CHAMPIONSHIP',
      game: 'CS:GO',
      viewers: '102,200',
      duration: '5:26:46',
      thumbnail: 'csgo',
      avatar: '/avatars/3.png'
    }
  ];

  return (
    <main className={styles['main-content']}>
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            CREATIVE COMPETITION WITH <span>THE<br/>PRINCESS CASTLE</span>
          </h1>
          <div className={styles.hero__countdown}>
            <div className={styles['countdown-item']}>
              <span className={styles['countdown-item__value']}>25</span>
              <span className={styles['countdown-item__label']}>DAYS</span>
            </div>
            <div className={styles['countdown-item']}>
              <span className={styles['countdown-item__value']}>25</span>
              <span className={styles['countdown-item__label']}>HOURS</span>
            </div>
            <div className={styles['countdown-item']}>
              <span className={styles['countdown-item__value']}>27</span>
              <span className={styles['countdown-item__label']}>MINUTES</span>
            </div>
            <div className={styles['countdown-item']}>
              <span className={styles['countdown-item__value']}>38</span>
              <span className={styles['countdown-item__label']}>SECONDS</span>
            </div>
          </div>
          <button className={styles.hero__button}>See More</button>
        </div>
        <div className={styles.hero__navigation}>
          <button className={`${styles['hero__nav-btn']} ${styles['hero__nav-btn--prev']}`}>←</button>
          <button className={`${styles['hero__nav-btn']} ${styles['hero__nav-btn--next']}`}>→</button>
        </div>
      </section>

      <section className={styles['channels-quick']}>
        <button className={styles['channel-quick-btn']}>Overwatch</button>
        <button className={styles['channel-quick-btn']}>World Of Warcraft</button>
        <button className={styles['channel-quick-btn']}>Fortnite</button>
        <button className={styles['channel-quick-btn']}>Hearthstone</button>
        <button className={styles['channel-quick-btn']}>Dota 2</button>
      </section>

      <section className={styles['watch-now']}>
        <h2 className={styles['section-title']}>Watch now</h2>
        <div className={styles['streams-grid']}>
          {streams.map((stream, index) => (
            <div key={index} className={styles['stream-card']}>
              <div 
                className={`${styles['stream-card__thumbnail']} ${styles[`stream-card__thumbnail--${stream.thumbnail}`]}`}
                style={{
                  backgroundImage: stream.thumbnail === 'valorant' 
                    ? `url(${valorantBackground})` 
                    : stream.thumbnail === 'csgo' 
                    ? `url(${championshipBackground})` 
                    : stream.thumbnail === 'galaxy'
                    ? `url(${galaxyBackground})`
                    : undefined
                }}
              >
                <span className={styles['stream-card__badge']}>🔴 LIVE</span>
                <span className={styles['stream-card__duration']}>⏱ {stream.duration}</span>
              </div>
              <div className={styles['stream-card__info']}>
                <div 
                  className={styles['stream-card__avatar']}
                  style={{ backgroundImage: `url(${stream.avatar})` }}
                ></div>
                <div className={styles['stream-card__details']}>
                  <h3 className={styles['stream-card__title']}>{stream.title}</h3>
                  <p className={styles['stream-card__game']}>{stream.game}</p>
                  <div className={styles['stream-card__meta']}>
                    <span className={styles['stream-card__viewers']}>👁 {stream.viewers}</span>
                    <span className={styles['stream-card__views']}>👁 {stream.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.statistic}>

        <h2 className={styles['section-title']}>Statistic</h2>

        <div className={styles['statistic-grid']}>
          <div className={`${styles['stat-card']} ${styles['stat-card--fortnite']}`}>
            <div 
              className={styles['fortnite-image']}
              style={{ backgroundImage: `url(${fortniteBackground})` }}
            >
            </div>
            <div className={styles['fortnite-stats']}>
              <div className={styles['fortnite-header']}>
                <h3 className={styles['fortnite-title']}>FORTNITE</h3>
              </div>
              <div className={styles['stat-card__tabs']}>
                <button className={`${styles['stat-tab']} ${styles['stat-tab--active']}`}>Daily</button>
                <button className={styles['stat-tab']}>Month</button>
                <button className={styles['stat-tab']}>Year</button>
              </div>
              <div className={styles['wave-chart']}></div>
            </div>
          </div>


          <div className={`${styles['stat-card']} ${styles['stat-card--player']}`}>
            <div className={styles['stat-card__player']}>
              <div 
                className={styles['player-avatar']}
                style={{ backgroundImage: 'url(/avatars/9.png)' }}
              ></div>
              <div className={styles['player-info']}>
                <span className={styles['player-name']}>William_Prince</span>
                <span className={styles['player-score']}>2139.9</span>
              </div>
            </div>
            <div className={styles['stat-card__ranking']}>
              <div className={styles['rank-item']}>
                <span className={styles['rank-position']}>2</span>
                <span className={styles['rank-score']}>-56.0</span>
              </div>
            </div>
            <div className={styles['stat-tabs']}>
              <button className={`${styles['stat-tab']} ${styles['stat-tab--active']}`}>Daily</button>
              <button className={styles['stat-tab']}>Month</button>
              <button className={styles['stat-tab']}>Year</button>
            </div>
            <div className={styles['stat-chart-line']}></div>
          </div>
        </div>

      </section>
    </main>
  );
};

export default MainContent;
