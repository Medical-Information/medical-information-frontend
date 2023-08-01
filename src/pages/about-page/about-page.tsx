import classNames from 'classnames';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import styles from './about-page.module.scss';
import creatorM from '../../assets/images/CreatorMale.png';
import creatorF from '../../assets/images/CreatorFemale.png';
import data from './test-data';

const team = data.map((item) => (
  <li
    key={item.id}
    className={classNames({
      [styles[`about--team--creators--designers`]]:
        item.department === 'Дизайнеры',
      [styles[`about--team--creators--other`]]: [
        'Тестировщики',
        'Бэкенд-разработчики',
        'Фронтенд-разработчики',
      ].includes(item.department),
    })}
  >
    <p className={classNames(styles[`about--team--creators--department`])}>
      {item.department}
    </p>
    {item.data.map((person) => (
      <div key={person.id} className={styles.creatorCard}>
        <img
          className={classNames(styles[`creatorCard--image`])}
          src={person.gender === 'male' ? creatorM : creatorF}
          alt="Разработчик"
        />
        <div className={classNames(styles[`creatorCard--info`])}>
          <a
            className={classNames(styles[`creatorCard--info--name`])}
            href={person.github}
            target="_blank"
            rel="noreferrer"
          >
            {person.name}
          </a>
          <a
            className={classNames(styles[`creatorCard--info--contacts`])}
            href={person.tg}
            target="_blank"
            rel="noreferrer"
          >
            {person.contacts}
          </a>
        </div>
      </div>
    ))}
  </li>
));

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.wrapper}>
          <h2 className={classNames(styles[`about--title`])}>О портале</h2>
          <div className={classNames(styles[`about--paragraphs`])}>
            <div>
              <h3 className={classNames(styles[`about--paragraphs--title`])}>
                Кто мы
              </h3>
              <p className={classNames(styles[`about--paragraphs--text`])}>
                Медицинский информационный портал «Стетоскоп» (МИП Стетоскоп)
                разработан по инициативе Акселератора Яндекс Практикума
                выпускниками курсов Яндекс Практикума. МИП Стетоскоп — это
                просветительский ресурс о здоровье и качестве жизни. Портал
                наполнен актуальными медицинскими новостями, статьями и советами
                экспертов с возможностью фильтрации контента по интересующим
                темам и подписки на рассылку. Пользователи МИП Стетоскоп могут
                получать полезную информацию о медицине и быть в курсе последних
                событий в области здравоохранения.
              </p>
            </div>
            <div>
              <h3 className={classNames(styles[`about--paragraphs--title`])}>
                Миссия
              </h3>
              <p className={classNames(styles[`about--paragraphs--text`])}>
                Наша миссия — распространять знания о медицине и помогать людям
                просвещаться в вопросах здоровья, так как не все знают, как
                вести здоровый образ жизни, как правильно жить с хроническим
                заболеванием, как ухаживать за больными и когда детям делать
                прививки. Именно поэтому мы стремимся предоставить нашим
                читателям доступную информацию, основываясь на принципах
                доказательной медицины и достоверных источниках.
              </p>
            </div>
            <div>
              <h3 className={classNames(styles[`about--paragraphs--title`])}>
                Для кого мы пишем
              </h3>
              <p className={classNames(styles[`about--paragraphs--text`])}>
                Наш портал Стетоскоп предоставляет удобный доступ к медицинской
                информации для различных категорий пользователей, включая тех,
                кто следит за своим здоровьем или имеет медицинские жалобы, но
                не знает, с чего начать путь к выздоровлению. Мы пишем для
                врачей разных специальностей, которые интересуются новостями в
                области медицины, стремятся повысить свою квалификацию,
                обмениваться мнениями или найти справочную информацию. Для
                родителей, чьи дети нуждаются в профилактике или лечении, а
                также для тех, кто заботится о больных и ищет советов и
                рекомендаций, у нас есть полезные ресурсы и информация.
                Подскажем, как вести здоровый образ жизни, как правильно
                ухаживать за больными и многое другое. Мы стараемся излагать
                информацию понятно и доступно для всех пользователей.
              </p>
            </div>
            <div>
              <h3 className={classNames(styles[`about--paragraphs--title`])}>
                Развитие
              </h3>
              <p className={classNames(styles[`about--paragraphs--text`])}>
                Уже в скором времени МИП Стетоскоп будет наполнен актуальными
                медицинскими новостями, статьями и подкастами. Будет
                предусмотрена фильтрация контента по интересующим темам и
                возможность подписаться на рассылку. На нашем портале Стетоскоп
                вы сможете задать вопрос врачу, квалифицрованные врачи в режиме
                реального времени смогут ответить на вопросы пользователей. В
                личном кабинете пользователи смогут собрать коллекцию своих
                избранных статей.
              </p>
            </div>
          </div>
          <div>
            <h3 className={classNames(styles[`about--team--title`])}>
              МИП Стетоскоп разработали:
            </h3>
          </div>
          <ul className={classNames(styles[`about--team--creators`])}>
            {team}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
