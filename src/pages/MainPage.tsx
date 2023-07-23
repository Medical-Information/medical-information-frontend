import Articles from 'components/articles/articles';
import { SubscribeBlock } from 'components/subscribe-block';
import AskDoctor from 'components/ask-doctor/ask-doctor';

export default function MainPage() {
  return (
    <>
      {/* Новости */}
      {/* Карусель */}
      <Articles />
      {/* Подкасты */}
      <SubscribeBlock />
      {/* Лекарства и БАД */}
      <AskDoctor />
    </>
  )
}
