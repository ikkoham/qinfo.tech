import React from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

const Nav = () => {
  const { link: linkParam } = useParams();
  const intl = useIntl();
  const { locale } = intl;

  const fa_icon = {
    'research.interest': 'fa-search',
    publication: 'fa-file-o',
    presentation: 'fa-bar-chart',
    cv: 'fa-graduation-cap',
    contact: 'fa-envelope-o',
  };

  const link = linkParam ? linkParam.replace('.', '_') : '';

  return (
    <nav>
      <ul className="flex-container">
        {['research.interest', 'publication', 'presentation', 'cv', 'contact']
          .filter((x) => x !== link)
          .map((x) => (
            <li key={x}>
              <NavLink to={`/${locale}/${x.replace('.', '_')}`}>
                <i className={`fa ${fa_icon[x]}`} />
                <FormattedMessage id={x} />
              </NavLink>
            </li>
          ))}
        <li>
          <Link to={`/${locale === 'en' ? 'ja' : 'en'}`}>
            <i className="fa fa-language" />
            {locale === 'en' ? 'Japanese' : 'English'}
          </Link>
        </li>
        <li>
          <img src="/img/ikkoham.jpg" alt="ホームページの中の人の画像" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
