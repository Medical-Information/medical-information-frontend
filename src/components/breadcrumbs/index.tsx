import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import styles from './style.module.scss';

const materialIdLength = 36;

type AdditionalData = {
  [key: string]: string;
};

const routeMapping = {
  home: 'Главная',
  news: 'Новости',
  articles: 'Статьи',
  about: 'O портале',
  authors: 'Авторам',
};

export const Breadcrumbs = (additionalData: AdditionalData) => {
  let currentLink = '';

  const routeData = [{ name: 'Главная', route: '/' }];

  const location = useLocation();
  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '');

  crumbs.map((crumb: string) => {
    currentLink += `/${crumb}`;
    const linkName =
      crumb.length >= materialIdLength
        ? additionalData?.materialName
        : routeMapping[crumb as keyof typeof routeMapping];

    routeData.push({ name: linkName, route: currentLink });
    return null;
  });

  return routeData.length > 1 ? (
    <div className={styles.crumbs}>
      <ul className={styles.crumbs__list}>
        {routeData.map((item) => (
          <React.Fragment key={nanoid()}>
            <li>
              <Link className={styles.crumbs__link} to={item.route}>
                {item.name}
              </Link>
            </li>
            <span className={styles.crumbs__arrow}>&#x3e;</span>
          </React.Fragment>
        ))}
      </ul>
    </div>
  ) : null;
};
